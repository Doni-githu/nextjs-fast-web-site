import Filters from '@/components/Filters'
import Header from '@/components/Header'
import ResourceCard from '@/components/ResourceCard'
import SearchForm from '@/components/SearchForm'
import { getResources, getResourcesPlaylist } from '@/sanity/actions'
import React from 'react'

const revalidate = "";

interface PageProps {
  searchParams: { [key: string]: string | undefined }
}

const Page = async ({ searchParams }: PageProps) => {
  const resources = await getResources({
    page: '1',
    query: searchParams['query'] || "",
    category: searchParams["category"] || "all",
  }) as Resource[]

  const resourcePlaylist = await getResourcesPlaylist() as ResourcePlaylist[]
  console.log(resourcePlaylist);


  return (
    <main className='flex-center sm:p-16 xs:p-8 px-6 py-12 mx-auto w-full max-w-screen-2xl flex-col'>
      <section className='nav-padding w-full'>
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center" style={{ backgroundImage: "url('/jsm_resources_banner.svg')" }}>
          <h1
            className='sm:heading1 heading2 mb-6 text-center text-white'
          >JavaScript Mastery Resources</h1>
        </div>
        <SearchForm />
      </section>

      <Filters />
      {(searchParams['query'] || searchParams['category']) && (
        <section className='flex justify-center items-center mt-6 w-full flex-col sm:mt-20'>
          <Header
            title="Resources"
            query={searchParams['query'] || ""}
            category={searchParams['category'] || ""}
          />


          <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
            {resources?.length > 0 ? (
              resources.map((resource) => (
                <ResourceCard
                  key={resource._id}
                  resource={resource}
                />
              ))
            ) : (
              <p className='text-[16px] font-normal leading-[20.8px]' style={{ color: '#A3B3BC' }}>
                No resources found
              </p>
            )}
          </div>
        </section>
      )}



      {resourcePlaylist.map((item) => (
        <section
          className='flex items-center justify-center mt-6 w-full flex-col sm:mt-20'
          key={item._id}>
          <h1 className='heading3 self-start' style={{ color: '#D0DFFF' }}>{item.title}</h1>

          <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
            {item.resources?.length > 0 ? (
              item.resources.map((resource) => (
                <ResourceCard
                  key={resource._id}
                  resource={resource}
                />
              ))
            ) : (
              <p className='text-[16px] font-normal leading-[20.8px]' style={{ color: '#A3B3BC' }}>
                No resources found
              </p>
            )}
          </div>
        </section>
      ))}
    </main>
  )
}

export default Page