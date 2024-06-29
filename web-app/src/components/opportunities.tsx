"use client"
import { SectionWrapper } from "./section-wrapper"
import Image, { StaticImageData } from "next/image"
import bg from "@/assets/bg.webp"
import { ChevronRight, CircleCheck } from "lucide-react"
import { opportunitiesArray } from "@/constants/opportunities"
import Link from "next/link"

export const Opportunities = () => {
  return (
    <SectionWrapper>
      <div
        className="relative flex flex-col flex-nowrap gap-4 lg:flex-row"
        id="opportunities"
      >
        <div className="mb-8 flex w-full flex-col gap-3 lg:w-[30%]">
          <h3 className="via-ping-200 inline-block bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
            Opportunities
          </h3>
          <div className="w-full text-3xl font-semibold">
            <span>Explore</span>
            <br />
            <span className="text-purple-400">Rewarding Career</span>
            <br />
            <span>Opportunities</span>
          </div>
          <p className="text-xs text-gray-200/90">
            Become part of dynamic and innovative team - Unlock your potential
            in a collaborative environment driven by excellence.
          </p>
          <button className="group mt-3 hidden w-fit cursor-pointer items-center justify-center gap-4 rounded-full bg-purple-400 px-6 py-2">
            <span>Explore </span>{" "}
            <ChevronRight className="inline-block text-white transition-all group-hover:translate-x-2" />
          </button>
        </div>
        <div className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2">
          {opportunitiesArray.map((item, index) => (
            <OpportunitiesCard
              key={index}
              company={item.company}
              logo={item.logo}
              position={item.position}
              payRange={item.payRange}
              features={item.features}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

type OpportunitiesCardProps = {
  company: string
  logo: StaticImageData
  position: string
  payRange: string
  features: {
    location: string
    date: string

    jobType: string
  }[]
}
const OpportunitiesCard: React.FC<OpportunitiesCardProps> = ({
  company,
  logo,
  position,
  payRange,
  features,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex min-h-[501px] w-[340px] flex-col justify-evenly gap-4 rounded-2xl p-4 md:min-w-[390px] lg:min-w-[390px] lg:max-w-[420px]"
    >
      <div className="flex items-center justify-start gap-2">
        <Image
          src={logo}
          alt="logo"
          loading="lazy"
          height={40}
          width={40}
          className="rounded-full bg-black/80"
        />
        <p className="text-lg text-black">{company}</p>
      </div>
      <div className="mb-6 flex flex-col items-center justify-center">
        <h3 className="mb-3 text-xl font-semibold text-[#02015A]">
          {position.toUpperCase()}
        </h3>
        <p className="font-lighter mt-2 w-[80%] text-center text-2xl font-bold leading-6 tracking-wider text-black/80 md:text-3xl">
          {payRange}
        </p>
      </div>
      <div>
        {features.map((item, index) => (
          <div className="flex flex-col items-start justify-center gap-4 px-4 py-6">
            <p className="flex w-full items-center justify-start gap-2 text-lg font-semibold text-black/70">
              <CircleCheck className="inline-block w-[10%]" />{" "}
              <span className="w-[90%]">{item.location}</span>
            </p>
            <p className="flex w-full items-center justify-start gap-2 text-lg font-semibold text-black/70">
              <CircleCheck className="inline-block w-[10%]" />{" "}
              <span className="w-[90%]">{item.date}</span>
            </p>

            <p className="flex w-full items-center justify-start gap-2 text-lg font-semibold text-black/70">
              <CircleCheck className="inline-block w-[10%]" />{" "}
              <span className="w-[90%]">{item.jobType}</span>
            </p>
          </div>
        ))}
      </div>
      <Link
        href="https://airtable.com/appX3kHVPitSufv76/shrqqOAXP51PPGcli"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="group flex w-fit items-center justify-center gap-4 self-center rounded-full bg-black px-5 py-3 text-2xl font-semibold text-white transition-all">
          <span>Apply Now</span>{" "}
          <ChevronRight className="inline-block transition-all group-hover:translate-x-2" />
        </button>
      </Link>
    </div>
  )
}
