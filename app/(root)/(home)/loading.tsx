import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const loading = () => {
  return (
    <main className='flex-center 
    sm:p-16 
    xs:p-8 
    px-6 
    py-12 
    mx-auto 
    max-w-screen-2xl
    flex-col'>
      <section className='nav-padding w-full'>
        <Skeleton className='h-[274px] w-full rounded-full bg-black/40' />
      </section>
      <section className='mt-6 flex w-full flex-col sm:mt-20'>
        <Skeleton className='h-10 w-56 bg-black/40 rounded-md' />
        <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
          <Skeleton className='h-[440px] w-full rounded-md sm:w-[356px] bg-black/40' />
          <Skeleton className='h-[440px] w-full rounded-md sm:w-[356px] bg-black/40' />
          <Skeleton className='h-[440px] w-full rounded-md sm:w-[356px] bg-black/40' />
        </div>
      </section>
    </main>
  )
}

export default loading