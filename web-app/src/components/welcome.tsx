"use client"
import { SectionWrapper } from "./section-wrapper"
import Image from "next/image"
import { StaticImageData } from "next/image"
import pfp from "@/assets/userpfp"

import { Link, animateScroll as scroll } from "react-scroll"
export const Welcome = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-8 flex items-center justify-center gap-2">
          <UserPfp pfp={pfp} />
          <p className="text-[#9CA3BD]">
            Trusted already by 1.5K+ professionals
          </p>
        </div>
        <div className="mb-12 flex flex-col items-center justify-center">
          <div className="mb-6 text-4xl font-semibold md:mb-12 md:text-[4.2rem]">
            <span>Ready.</span>
            <span>Set.</span>
            <span className="underline decoration-blue-500 decoration-wavy decoration-[2px] md:decoration-[3px]">
              Hire.
            </span>
          </div>
          <p className="w-full text-center text-lg leading-8 text-[#858694] md:w-[55%] md:text-xl md:leading-10">
            TechKareer is used by numerous businesses, institutions, and
            recruiters to significantly enhance their screening and recruitment
            procedures.
          </p>
        </div>
        <Link spy={true} smooth={true} duration={500} to={"features"}>
          <button className="rounded-full border-[1px] border-solid border-transparent bg-white px-8 py-4 text-xs font-bold tracking-wider text-black shadow-[0px_0px_10px_1px_#fed7e2] hover:border-gray-200 hover:bg-transparent hover:text-white hover:shadow-transparent hover:duration-150">
            KNOW MORE
          </button>
        </Link>

        {/* <motion.video
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    // transition={{ duration: 0.5  ,delay: 1.2}}
                    autoPlay loop muted className="rounded-2xl mt-12 md:mt-10 w-[80%]" >
                    <source src="./video.mp4" />
                </motion.video> */}
      </div>
    </SectionWrapper>
  )
}

type UserPfpProps = {
  pfp: StaticImageData[]
}
const UserPfp: React.FC<UserPfpProps> = ({ pfp }) => {
  return (
    <div className="flex">
      {pfp.map((pfp, index) => (
        <div
          className={`relative h-10 w-10 overflow-hidden rounded-full border-2 ${
            index > 0 ? "ml-[-10px]" : "ml-0"
          } transition duration-300 ease-in-out hover:-translate-y-2.5`}
          key={index}
        >
          <Image
            src={pfp}
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      ))}
    </div>
  )
}
