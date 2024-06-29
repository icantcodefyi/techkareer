"use client"
import { SectionWrapper } from "./section-wrapper"
import feature from "@/constants/features"
import bg from "@/assets/bg.webp"
import React from "react"

export const Feature = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-center justify-center" id="features">
        <h3 className="via-ping-200 inline-block self-end bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent md:self-center">
          Included
        </h3>
        <h2 className="mb-16 mt-4 w-full text-right text-3xl tracking-wide md:text-center">
          Powerful features tailored to your needs
        </h2>
        <div className="grid grid-cols-1 justify-center gap-4 md:grid-cols-2 lg:grid-cols-3">
          {feature.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              name={item.name}
              description={item.description}
              duration={index * 0.1}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
type featureCardProps = {
  icon: React.ReactNode
  name: string
  description: string
  duration?: number
}
const FeatureCard: React.FC<featureCardProps> = ({
  icon,
  name,
  description,
  duration,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex max-h-[278px] max-w-[368px] cursor-pointer flex-col items-center justify-center rounded-2xl p-4"
    >
      <div className="rounded-full bg-[#5287FA] p-2">{icon}</div>
      <h3 className="mt-4 text-center text-xl font-bold text-[#02015A]">
        {name}
      </h3>
      <p className="font-lighter mt-2 w-[80%] text-center text-sm leading-6 tracking-wider text-gray-700">
        {description}
      </p>
    </div>
  )
}
