import { Bellefair } from "next/font/google";
import Image from "next/image";

import { Header } from "@/components/Header";

const bellefair = Bellefair({
  weight: '400',
  subsets: ['latin']
})

export default function Home() {
  return (
    <section className="h-screen">
      <Header />

      <div className="md:container px-2 pt-5 md:text-left text-center">
        <h1 className="text-white text-2xl"><span className="font-bold text-[#ffffff70] mr-2">01</span> PICK YOUR DESTINATION</h1>

        <div className="md:flex items-center md:justify-between pt-6">
          <Image src="/image-moon.png" alt="Image of the moon" width={500} height={500} className="md:w-[36%] w-[52%] md:py-0 py-4 md:mx-0 mx-auto" />

          <div className="md:w-1/2">
            <ul className="text-white pb-4">
              <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 border-b-2 md:ml-2">MOON</li>
              <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4">MARS</li>
              <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4">EUROPA</li>
              <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4">TITAN</li>
            </ul>

            <h2 className={`text-white w-full pb-2 text-7xl ${bellefair.className}`}>MOON</h2>
            <p className="text-[#d2d8f9] font-extralight md:w-2/3 md:pl-1 pb-10 leading-6 tracking-wide border-b-[0.5px] border-[#ffffff66]"> See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>

            <div className="flex md:justify-between justify-around lg:w-1/2 w-auto pt-10">
              <div>
                <span className="text-[#d2d8f9] text-base">Avg. distance</span>
                <span className="text-xl text-white block">384.400</span>
              </div>
              <div>
                <span className="text-[#d2d8f9] text-base">Est. travel time</span>
                <span className="text-xl text-white block">3 DAYS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
