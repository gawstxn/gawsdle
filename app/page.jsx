import Image from "next/image";
import Link from "next/link";

const data = [
  {
    title: "Honkai: Star Rail",
    image: "/img/starrail.webp",
    link: "/starrail",
  },
  {
    title: "Genshin Impact",
    image: "/img/genshin.webp",
    link: "/genshin",
  }
];

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full flex justify-between items-center p-4">
        <p>gawsdle</p>
        <div className="flex items-center gap-2">
          👉
          <Link href="https://github.com/gawston/gawsdle" target="_blank" className="underline">Source code</Link>
        </div>
      </div>
      <h1 className="text-4xl lg:text-8xl font-extrabold text-center uppercase mt-10">gawsdle</h1>
      <p className="mt-2 text-sm lg:text-md">Made with ❤️ by gawston.</p>
      <div className="w-[350px] md:w-[800px] grid grid-cols-1 md:grid-cols-2 gap-3 mt-10">
        {data.map((data, index) => (
          <Link href={data.link} className="relative border hover:border-yellow-500 duration-150 w-full h-32 overflow-hidden bg-black" key={index}>
            <p className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg truncate">{data.title}</p>
            <Image src={data.image} draggable={false} alt="" width={300} height={300} className="w-full h-full object-cover grayscale opacity-15"/>
          </Link>
        ))}
      </div>
    </div>
  );
}
