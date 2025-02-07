'use client'

import { useState, useEffect } from "react";
import initialCharacters from "../data/genshinData.js";
import Image from "next/image.js";
import Link from "next/link.js";

export default function Home() {
  const [search, setSearch] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [randomCharacter, setRandomCharacter] = useState(null);
  const [isWon, setIsWon] = useState(false);
  const [guess, setGuess] = useState(0);

  const getRandomCharacter = () => {
    const randomIndex = Math.floor(Math.random() * initialCharacters.length);
    setRandomCharacter(initialCharacters[randomIndex]);
  };

  const searchCharacter = (input) => {
    let data = [];
    if (input != "") {
      initialCharacters.filter((c) => {
        if (c.name.toLowerCase().includes(input.toLowerCase())) {
          data.push(c);
        }
      });
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
    if (data.image == randomCharacter.image) score++;
    if (data.weapon == randomCharacter.weapon) score++;
    if (data.vision == randomCharacter.vision) score++;
    if (data.nation == randomCharacter.nation) score++;
    if (data.gender == randomCharacter.gender) score++;
    if (data.rarity == randomCharacter.rarity) score++;

    if (score == 7) setIsWon(true);
  }

  const playAgain = () => {
    setCharacters([]);
    getRandomCharacter();
    initialCharacters.map((e) => {
      e.select = false;
    });
    setSearch([]);
    setIsWon(false);
    setGuess(0);
  }

  useEffect(() => {
    getRandomCharacter();
    window.onpopstate = () => {
      window.location.reload();
    };
  }, []);

  return (
    <div className="flex flex-col items-center mx-auto px-2">
      <p className="fixed top-0 right-0 m-6 mt-4">Guess: {guess}</p>
      <Link href="/" className="fixed top-0 left-0 m-6 mt-4"> &larr; Back</Link>
      <h1 className="text-3xl lg:text-8xl font-extrabold text-center uppercase mt-10">Genshindle</h1>
      <p>Genshin Impact Update 5.3</p>
      <div className="relative w-[340px]">
        <input type="text" list="characters" name="search" id="search" className="w-full h-10 mt-10 bg-transparent border border-[#555] focus:border-[#eee] focus:border-2 focus:outline-none rounded-[12px_0_0_0] pl-2" placeholder="Search Character. . . ." onChange={e => searchCharacter(e.target.value)}/>
        <div className="absolute max-h-[300px] bg-[#eee] text-black w-full border-x-2 border-[#eee] z-10 overflow-y-scroll">
          {search.map((data, index) => (
            <div className="flex items-center gap-4 p-2 border-b border-[#ccc] hover:bg-[#dadada] duration-150 cursor-pointer" key={index} onClick={(e) => changeSelectStage(index, e)}
              style={{ pointerEvents: data.select ? 'none' : 'auto', backgroundColor: data.select ? '#dadada' : '' }}
            >
              <Image width={50} height={50} src={data.image}  alt="" className="w-10 h-10 object-cover"/>
              {data.name}
            </div>
          ))}
        </div>
      </div>

      {/* head */}
      <div className="w-[350px] lg:w-[950px] grid grid-cols-7 text-center mt-8 bg-[#eee] border-x-2 text-black rounded-[12px_0_0_0] h-10 gap-[1px]">
        <div className="px-2 text-sm lg:text-lg truncate my-auto">Picture</div>
        <div className="px-2 text-sm lg:text-lg truncate my-auto">Name</div>
        <div className="px-2 text-sm lg:text-lg truncate my-auto">Gender</div>
        <div className="px-2 text-sm lg:text-lg truncate my-auto">Nation</div>
        <div className="px-2 text-sm lg:text-lg truncate my-auto">Vision</div>
        <div className="px-2 text-sm lg:text-lg truncate my-auto">Weapon</div>
        <div className="px-2 text-sm lg:text-lg truncate my-auto">Rarity</div>
      </div>

      {/* display character */}
      {characters.map((data, index) => (
        (data.select) ? (
          <div className="w-[350px] lg:w-[950px] grid grid-cols-7 text-center h-20 border-x-2 border-b-2 border-[#eee] gap-[1px] slide-in-bck-center scale-in-ver-top" key={index}>
            <div className="w-full h-full flex items-center justify-center relative px-2 my-auto mx-auto">
              <Image width={50} height={50} src={data.image}  alt="" className="w-9 lg:w-12 h-9 lg:h-12 object-cover"/>
              <div className="absolute w-full h-full opacity-70 z-[-1]" style={{backgroundColor: data.image == randomCharacter.image ? '#22c55e' : '#ef4444'}}></div>
            </div>
            <div className="w-full h-full flex items-center justify-center relative px-2 md:whitespace-normal overflow-hidden">
              {data.name}
              <div className="absolute w-full h-full opacity-70 z-[-1]" style={{backgroundColor: data.name == randomCharacter.name ? '#22c55e' : '#ef4444'}}></div>
            </div>
            <div className="w-full h-full flex items-center justify-center relative px-2 md:whitespace-normal overflow-hidden">
                {data.gender}
              <div className="absolute w-full h-full opacity-70 z-[-1]" style={{backgroundColor: data.gender == randomCharacter.gender ? '#22c55e' : '#ef4444'}}></div>
            </div>
            <div className="w-full h-full flex items-center justify-center relative px-2 md:whitespace-normal overflow-hidden">
                {data.nation}
              <div className="absolute w-full h-full opacity-70 z-[-1]" style={{backgroundColor: data.nation == randomCharacter.nation ? '#22c55e' : '#ef4444'}}></div>
            </div>
            <div className="w-full h-full flex items-center justify-center relative px-2 my-auto mx-auto">
              <Image width={50} height={50} src={data.vision}  alt="" className="w-8 lg:w-12 h-8 lg:h-12 object-cover"/>
              <div className="absolute w-full h-full opacity-70 z-[-1]" style={{backgroundColor: data.vision == randomCharacter.vision ? '#22c55e' : '#ef4444'}}></div>
            </div>
            <div className="w-full h-full flex items-center justify-center relative px-2 my-auto mx-auto">
              <Image width={50} height={50} src={data.weapon}  alt="" className="brightness-[1.7] w-9 lg:w-12 h-9 lg:h-12 object-cover"/>
              <div className="absolute w-full h-full opacity-70 z-[-1]" style={{backgroundColor: data.weapon == randomCharacter.weapon ? '#22c55e' : '#ef4444'}}></div>
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
        <div className="w-[350px] lg:w-[950px] flex justify-center items-center text-center h-20 border-x-2 border-b-2 border-[#eee] gap-[1px] slide-in-bck-center">
            Display Characters . . . .
        </div>
      ) : null }

      {/* footer */}
      <div className="w-full flex justify-center items-center mt-32"></div>

      {/* popup */}
      {(isWon) ? (
        <div className="relative flex justify-center items-center">
          <div className="fixed top-80 w-[350px] lg:w-[500px] border border-[#eee] bg-[#171717] rounded-[12px_0_0_0] overflow-hidden scale-in-center">
            <div className="bg-[#eee] text-black w-full py-2">
              <p className="my-auto text-center">YOU WON!</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image width={100} height={100} src={randomCharacter.image}  alt="" className="mt-8 w-20 h-20 object-cover"/>
              <p className="mt-2 uppercase">ANSWER IS {randomCharacter.name}</p>
              <p className="mt-2 uppercase">Guess: {guess}</p>
              <button onClick={playAgain} className="bg-[#eee] text-black mt-6 mb-4 p-2 rounded-[12px_0_0_0]">PLAY AGAIN</button>
            </div>
          </div>
        </div>
      ) : null }
    </div>
  );
}
