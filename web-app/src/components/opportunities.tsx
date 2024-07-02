"use client"
import { SectionWrapper } from "./section-wrapper"
import Image, { StaticImageData } from "next/image"
import bg from "@/assets/bg.webp"
import { ChevronRight, CircleCheck } from "lucide-react"
import Link from "next/link"

interface Opportunity {
  id: number;
  role: string;
  companyName: string;
  currency: string;
  minAnnualPay: number | null;
  maxAnnualPay: number | null;
  minMonthlyPay: number | null;
  maxMonthlyPay: number | null;
  companyLogo: string | null;
  location: string;
  jobId: string;
  durationInMonths: number | null;
  invertCompanyLogo: boolean;
  createdAt: string;
  updatedAt: string;
}

async function getOpportunities(): Promise<Opportunity[]> {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/opportunities`, { next: { revalidate: 3600 } });
  if (!res.ok) {
    throw new Error('Failed to fetch opportunities');
  }
  return res.json();
}

function getAnnualizedPay(opportunity: Opportunity): number {
  if (opportunity.maxAnnualPay) {
    return opportunity.maxAnnualPay;
  } else if (opportunity.maxMonthlyPay) {
    return opportunity.maxMonthlyPay * 12;
  } else if (opportunity.minAnnualPay) {
    return opportunity.minAnnualPay;
  } else if (opportunity.minMonthlyPay) {
    return opportunity.minMonthlyPay * 12;
  }
  return 0;
}

export async function Opportunities() {
  const allOpportunities = await getOpportunities();

  // Sort opportunities by annualized pay
  const topOpportunities = allOpportunities
    .sort((a, b) => getAnnualizedPay(b) - getAnnualizedPay(a))
    .slice(0, 4);
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
          {topOpportunities.map((item) => (
            <OpportunitiesCard
              key={item.id}
              opportunity={item}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

const OpportunitiesCard = ({ opportunity }: { opportunity: Opportunity }) => {
  const { companyName, companyLogo, role, minAnnualPay, maxAnnualPay, minMonthlyPay, maxMonthlyPay, currency, location, jobId, durationInMonths, invertCompanyLogo } = opportunity;

  const formatPay = () => {
    const formatToLakhs = (value: number) => {
      const inLakhs = value / 100000;
      return `${inLakhs % 1 === 0 ? inLakhs.toFixed(0) : inLakhs.toFixed(1)}L`;
    };

    if (currency === 'INR') {
      if (maxAnnualPay) {
        return `₹${formatToLakhs(minAnnualPay || 0)} - ₹${formatToLakhs(maxAnnualPay)} / yr`;
      } else if (maxMonthlyPay) {
        const minAnnual = (minMonthlyPay || 0) * 12;
        const maxAnnual = maxMonthlyPay * 12;
        return `₹${formatToLakhs(minAnnual)} - ₹${formatToLakhs(maxAnnual)} / yr`;
      } else if (minAnnualPay) {
        return `₹${formatToLakhs(minAnnualPay)} / yr`;
      } else if (minMonthlyPay) {
        return `₹${formatToLakhs(minMonthlyPay * 12)} / yr`;
      }
    } else {
      // For non-INR currencies, use the previous format
      if (maxAnnualPay) {
        return `${currency} ${minAnnualPay?.toLocaleString()} - ${maxAnnualPay.toLocaleString()} / year`;
      } else if (maxMonthlyPay) {
        return `${currency} ${minMonthlyPay?.toLocaleString()} - ${maxMonthlyPay.toLocaleString()} / month`;
      } else if (minAnnualPay) {
        return `${currency} ${minAnnualPay.toLocaleString()} / year`;
      } else if (minMonthlyPay) {
        return `${currency} ${minMonthlyPay.toLocaleString()} / month`;
      }
    }
    return 'Compensation details not available';
  };

  const formatDuration = () => {
    if (durationInMonths) {
      return `${durationInMonths} month${durationInMonths > 1 ? 's' : ''}`;
    }
    return 'Full-time';
  };

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
        {companyLogo ? (
          <Image
            src={companyLogo}
            alt={`${companyName} logo`}
            width={40}
            height={40}
            className={`rounded-full ${invertCompanyLogo ? 'bg-white' : 'bg-black/80'}`}
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
            {companyName.charAt(0)}
          </div>
        )}
        <p className="text-lg text-black">{companyName}</p>
      </div>
      <div className="mb-6 flex flex-col items-center justify-center">
        <h3 className="mb-3 text-xl font-semibold text-[#02015A]">
          {role.toUpperCase()}
        </h3>
        <p className="font-lighter mt-2 w-[80%] text-center text-2xl font-bold leading-6 tracking-wider text-black/80 md:text-3xl">
          {formatPay()}
        </p>
      </div>
      <div>
        <div className="flex flex-col items-start justify-center gap-4 px-4 py-6">
          <p className="flex w-full items-center justify-start gap-2 text-lg font-semibold text-black/70">
            <CircleCheck className="inline-block w-[10%]" />
            <span className="w-[90%]">{location}</span>
          </p>
          <p className="flex w-full items-center justify-start gap-2 text-lg font-semibold text-black/70">
            <CircleCheck className="inline-block w-[10%]" />
            <span className="w-[90%]">{formatDuration()}</span>
          </p>
          <p className="flex w-full items-center justify-start gap-2 text-lg font-semibold text-black/70">
            <CircleCheck className="inline-block w-[10%]" />
            <span className="w-[90%]">Job ID: {jobId}</span>
          </p>
        </div>
      </div>
      <Link
        href={`https://airtable.com/appX3kHVPitSufv76/shrqqOAXP51PPGcli?prefill_Job+ID=${jobId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="group flex w-fit items-center justify-center gap-4 self-center rounded-full bg-black px-5 py-3 text-2xl font-semibold text-white transition-all">
          <span>Apply Now</span>
          <ChevronRight className="inline-block transition-all group-hover:translate-x-2" />
        </button>
      </Link>
    </div>
  );
};

export default Opportunities;