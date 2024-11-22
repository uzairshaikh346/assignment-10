import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-around flex-wrap gap-1">
      <div className="bg-slate-300 border-yellow-100 border-2 w-full md:w-4/12 lg:w-2/12 rounded-md">
        <Image src="/images/image.jpg" height={100} width={500} alt="image" />
        <p className="text-center my-1">Bulb</p>
        <p className="text-center my-1">1.00$</p>
        <div className="flex justify-center">
          <button className="bg-blue-400 rounded-sm px-4 mb-2">Buy Now</button>
        </div>
      </div>

      <div className="bg-slate-300 border-yellow-100 border-2 w-full md:w-4/12 lg:w-2/12 rounded-md">
        <Image src="/images/image.jpg" height={100} width={500} alt="image" />
        <p className="text-center my-1">Bulb</p>
        <p className="text-center my-1">1.00$</p>
        <div className="flex justify-center">
          <button className="bg-blue-400 rounded-sm px-4 mb-2">Buy Now</button>
        </div>
      </div>

      <div className="bg-slate-300 border-yellow-100 border-2 w-full md:w-4/12 lg:w-2/12 rounded-md">
        <Image src="/images/image.jpg" height={100} width={500} alt="image" />
        <p className="text-center my-1">Bulb</p>
        <p className="text-center my-1">1.00$</p>
        <div className="flex justify-center">
          <button className="bg-blue-400 rounded-sm px-4 mb-2">Buy Now</button>
        </div>
      </div>

      <div className="bg-slate-300 border-yellow-100 border-2 w-full md:w-4/12 lg:w-2/12 rounded-md">
        <Image src="/images/image.jpg" height={100} width={500} alt="image" />
        <p className="text-center my-1">Bulb</p>
        <p className="text-center my-1">1.00$</p>
        <div className="flex justify-center">
          <button className="bg-blue-400 rounded-sm px-4 mb-2">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
