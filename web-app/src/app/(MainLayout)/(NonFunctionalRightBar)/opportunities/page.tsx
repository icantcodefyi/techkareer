import { Suspense } from 'react'
import { BottomBar, Navbar, PostedJobsList } from "@/components/components"

async function fetchJobs() {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/opportunities`, {
      next: { revalidate: 60 }
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch jobs: ${res.status} ${res.statusText}`)
    }

    const jobs = await res.json()
    return jobs
  } catch (error) {
    console.error("Error fetching jobs:", error)
    return [] // Return empty array in case of error
  }
}

export default async function PostedJobsListPage() {
  const jobs = await fetchJobs()

  return (
    <>
      <Navbar>
        <h1 className="px-4 text-2xl font-semibold sm:px-0">Opportunities</h1>
      </Navbar>
      <div className="scrollable-content-wrapper h-[90vh] w-full px-4 max-sm:h-[80vh] sm:px-0">
        <Suspense fallback={<div>Loading...</div>}>
          <PostedJobsList initialJobs={jobs} />
        </Suspense>
      </div>
      <BottomBar></BottomBar>
    </>
  )
}