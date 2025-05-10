'use client'

import { useState, useEffect, useRef } from "react";
import initialCharacters from "../data/starrailData.js";
import Image from "next/image.js";
import Link from "next/link.js";

const game_verstion = 3.4

export default function Home() {
  const [search, setSearch] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [randomCharacter, setRandomCharacter] = useState(null);
  const [isWon, setIsWon] = useState(false);
  const [isGiveUp, setIsGiveUp] = useState(false);
  const [guess, setGuess] = useState(0);
  const [cheat, setCheat] = useState(false);
  const [audio, setAudio] = useState(null);
  const domSearch = useRef(null);
  const searchIndex = useRef(-1); 
  const refGiveUp = useRef(false);
  const refWin = useRef(false);

  const getRandomCharacter = () => {
    const randomIndex = Math.floor(Math.random() * initialCharacters.length);
    setRandomCharacter(initialCharacters[randomIndex]);
  };

  const searchCharacter = (input) => {
    let data = [];
    if (input != "") {
      initialCharacters.filter((c) => {
        if (c.name.toLowerCase().includes(input.toLowerCase()) && c.select == false) {
          data.push(c);
        }
      });
    }
    // cheat code
    // give answer
    if (input.toLowerCase() == "hesoyam") {
      document.getElementById('search').value = '';
      initialCharacters.filter((c) => {
        if (c.name == randomCharacter.name) {
          data.push(c);
        }
      });
      setCheat(true);
      setTimeout(() => {
        setCheat(false);
      }, 3000);
      playAudio();
    }
    // reset guess
    if (input.toLowerCase() == "asnaeb") {
      document.getElementById('search').value = '';
      setCheat(true);
      setTimeout(() => {
        setCheat(false);
      }, 3000);
      setGuess(0);
      playAudio();
    }

    setSearch(data);
  };

  const changeSelectStage = (index, e) => {
    let data = [...search];
    data[index].select = true;
    if (!characters.some((c) => c.name === data[index].name)) {
      setCharacters([...characters, data[index]]);
      handleIsWon(data[index]);
    }
    document.getElementById('search').value = '';
    setSearch([]);
    setGuess(guess + 1);
  };

  const handleIsWon = (data) => {
    let score = 0;
    if (data.name == randomCharacter.name) score++;
    if (data.img == randomCharacter.img) score++;
    if (data.element == randomCharacter.element) score++;
    if (data.path == randomCharacter.path) score++;
    if (data.rarity == randomCharacter.rarity) score++;

    if (score == 5) {
      setIsWon(true)
      refWin.current = true;
    };
  }

  const playAgain = () => {
    setCharacters([]);
    getRandomCharacter();
    initialCharacters.map((e) => {
      e.select = false;
    });
    setSearch([]);
    setIsWon(false);
    setIsGiveUp(false);
    setGuess(0);
    refGiveUp.current = false;
    refWin.current = false;
  }

  const playAudio = () => {
    if (audio) audio.play();
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setAudio(new Audio("/cheatActivated.mp3"));
    }
    
    setCharacters([]);
    getRandomCharacter();
    initialCharacters.map((e) => {
      e.select = false;
    });
    setSearch([]);
    setIsWon(false);
    setIsGiveUp(false);
    setGuess(0);
  }, []);

  useEffect(() => {
    const handleKeyUp = (event) => {
      if (!domSearch.current) return;

      const items = domSearch.current.children;
      
      if (search.length > 0) {
        for (let e of items) {
          e.style.backgroundColor = "#eee";
        }
      }

      if (event.key === "ArrowUp" && search.length > 0) {
        searchIndex.current = searchIndex.current <= 0 ? search.length - 1 : searchIndex.current - 1;
      } else if (event.key === "ArrowDown" && search.length > 0) {
        // ถ้ายังไม่มีการเลือกใน search ให้ไม่ต้องแสดงสี
        searchIndex.current = searchIndex.current >= search.length - 1 ? 0 : searchIndex.current + 1;
      }

      if(searchIndex.current >= 0) {
        items[searchIndex.current].style.backgroundColor = "#dadada";
      }
    };

    const handleEnter = (event) => {
      if (event.key === "Enter") {
        if (refWin.current || refGiveUp.current) {
          playAgain();
          return;
        }
      
        if (search.length > 0 && searchIndex.current >= 0) {
          let data = [...search];
          data[searchIndex.current].select = true;
    
          setCharacters([...characters, data[searchIndex.current]]);
          handleIsWon(data[searchIndex.current]);
    
          document.getElementById("search").value = "";
          setSearch([]);
          setGuess((prev) => prev + 1);
          searchIndex.current = -1;
        }
      }
    };

    if (search.length > 0) {
      document.addEventListener("keyup", handleKeyUp);
    }
    document.addEventListener("keyup", handleEnter);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("keyup", handleEnter);
    };
  },[search]);

  return (
    <div className="relative flex flex-col items-center mx-auto px-2">
      <div className="w-full flex justify-between p-4">
        <Link href="/" className="hover:text-yellow-500 duration-150"> &larr; Back</Link>
        {cheat ? <div className="absolute mt-7 lg:mt-10 bg-black border text-xs lg:text-base px-8 py-2 z-20 cheatActivated">Cheat activated</div> : null}
        <div>
          <p>Guess: {guess}</p>
          <button onClick={(e) => {setIsGiveUp(true); refGiveUp.current = true}} className="mt-2 border border-[#eee] px-2 hover:bg-[#eee] hover:text-black duration-150">Give up</button>
        </div>
      </div>
      <h1 className="text-5xl lg:text-8xl font-extrabold text-center uppercase">Stardle</h1>
      <p>Honkai: Star Rail Update {game_verstion}</p>
      <div className="relative w-[340px]">
        <input type="text" list="characters" name="search" id="search" className="w-full h-10 mt-10 bg-transparent border border-[#555] focus:border-[#eee] focus:border-2 focus:outline-none rounded-[14px_0_0_0] pl-2" placeholder="Type character name . . . ." onChange={e => searchCharacter(e.target.value)} autoComplete="off"/>
        <div ref={domSearch} className="absolute max-h-[300px] bg-[#eee] text-black w-full border-x-2 border-[#eee] z-10 overflow-y-scroll">
          {search.map((data, index) => (
            <div className="flex items-center gap-4 p-2 border-b border-[#ccc] hover:bg-[#dadada] duration-150 cursor-pointer" key={index} onClick={(e) => changeSelectStage(index, e)}>
              <Image width={50} height={50} src={data.img}  alt="" className="w-10 h-10 object-cover"/>
              {data.name}
            </div>
          ))}
        </div>
      </div>

      {/* head */}
      <div className="w-[350px] lg:w-[800px] grid grid-cols-5 text-center mt-8 bg-[#eee] border-x-2 text-black rounded-[14px_0_0_0] h-10 gap-[1px]">
        <div className="px-2 text-[9px] lg:text-lg truncate my-auto">Character</div>
        <div className="px-2 text-[9px] lg:text-lg truncate my-auto">Gender</div>
        <div className="px-2 text-[9px] lg:text-lg truncate my-auto">Element</div>
        <div className="px-2 text-[9px] lg:text-lg truncate my-auto">Path</div>
        <div className="px-2 text-[9px] lg:text-lg truncate my-auto">Rarity</div>
      </div>

      {/* display character */}
      {characters.map((data, index) => (
        (data.select) ? (
          <div className="w-[350px] lg:w-[800px] grid grid-cols-5 text-center h-20 border-x-2 border-b-2 border-[#eee] gap-[1px] slide-in-bck-center scale-in-ver-top" key={index}>
            <div className="w-full h-full flex items-center justify-center relative px-2 my-auto mx-auto">
              <Image width={50} height={50} src={data.img} draggable={false}  alt="" className="w-12 h-12 object-cover"/>
              <div className="absolute w-full h-full opacity-70 z-[-1]" style={{backgroundColor: data.img == randomCharacter.img ? '#22c55e' : '#ef4444'}}></div>
            </div>
            <div className="max-w-[160px] h-full flex items-center justify-center relative px-2 my-auto text-sm lg:text-lg truncate">
              <p className="text-[9px] truncate lg:text-base">{data.gender}</p>
              <div className="absolute w-full h-full opacity-70 z-[-1]" style={{backgroundColor: data.gender == randomCharacter.gender ? '#22c55e' : '#ef4444'}}></div>
            </div>
            <div className="w-full h-full flex items-center justify-center relative px-2 my-auto mx-auto">
              <Image width={50} height={50} src={data.element} draggable={false}  alt="" className="w-12 h-12 object-cover"/>
              <div className="absolute w-full h-full opacity-70 z-[-1]" style={{backgroundColor: data.element == randomCharacter.element ? '#22c55e' : '#ef4444'}}></div>
            </div>
            <div className="w-full h-full flex items-center justify-center relative px-2 my-auto mx-auto">
              <Image width={50} height={50} src={data.path} draggable={false}  alt="" className="w-12 h-12 object-cover"/>
              <div className="absolute w-full h-full opacity-70 z-[-1]" style={{backgroundColor: data.path == randomCharacter.path ? '#22c55e' : '#ef4444'}}></div>
            </div>
            <div className="w-full h-full flex items-center justify-center relative px-2 my-auto">
              {data.rarity}
              <div className="absolute w-full h-full opacity-70 z-[-1]" style={{backgroundColor: data.rarity == randomCharacter.rarity ? '#22c55e' : '#ef4444'}}></div>
            </div>
          </div>
        ) : null
      ))}

      {/* if dont have character data */}
      {(characters.length == 0) ? (
        <div className="w-[350px] lg:w-[800px] flex justify-center items-center text-center h-20 border-x-2 border-b-2 border-[#eee] gap-[1px] slide-in-bck-center">
            Display Characters . . . .
        </div>
      ) : null }

      {/* footer */}
      <div className="w-full flex justify-center items-center mt-32"></div>

      {/* popup */}
      {(isWon || isGiveUp) ? (
        <div className="fixed w-full h-full top-0 bg-black bg-opacity-70 flex justify-center items-center">
          <div className="fixed w-[350px] lg:w-[500px] border border-[#eee] bg-[#171717] rounded-[14px_0_0_0] overflow-hidden scale-in-center">
            <div className="bg-[#eee] text-black w-full py-2">
              <p className="my-auto text-center">{isWon ? "YOU WON!" : "NAH BRO WHY YOU CAN'T ANSWER"}</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image width={100} height={100} src={randomCharacter.img} draggable={false} className="mt-8 w-20 h-20 object-cover border"/>
              <p className="mt-2 uppercase text-center">ANSWER IS {randomCharacter.name}</p>
              <p className="mt-2 uppercase">Guess: {guess}</p>
              <button onClick={playAgain} className="bg-[#eee] text-black mt-6 mb-4 p-2">PLAY AGAIN</button>
            </div>
          </div>
        </div>
      ) : null }      
    </div>
  );
}