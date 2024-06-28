import React from "react"
import { SectionWrapper } from "./section-wrapper"
import bootCamp from "@/constants/bootcamp"
import Image from "next/image"

console.log(bootCamp)

const BootCamps = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-center justify-center" id="features">
        <h2 className="mb-15 mt-5 w-full text-right text-3xl tracking-wide md:text-center">
          Our Partners
        </h2>
        <div className="grid grid-cols-1 justify-center gap-4 md:grid-cols-2 lg:grid-cols-4">
          {bootCamp.map((item) => (
            <div key={item.name}>
              <Image
                src={item.logo}
                alt={item.name}
                layout="responsive"
                width={300}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default BootCamps
