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
  },
];

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <h1 className="text-4xl lg:text-8xl font-extrabold text-center uppercase mt-10">gawsdle</h1>
      <p className="mt-2 text-sm lg:text-md">Made with ❤️ by gawston skibidi skrttt.</p>
      <div className="w-[350px] md:w-[800px] grid grid-cols-1 md:grid-cols-2 gap-3 mt-10">
        {data.map((data, index) => (
          <Link href={data.link} className="relative border w-full h-32 rounded-[16px_0_0_0] overflow-hidden bg-black" key={index}>
            <p className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg truncate">{data.title}</p>
            <Image src={data.image} alt="" width={300} height={300} className="w-full h-full object-cover grayscale opacity-15"/>
          </Link>
        ))}
      </div>
    </div>
  );
}
