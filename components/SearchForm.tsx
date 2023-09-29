"use client"
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { useState, useEffect, useMemo } from "react"
import { formUrlQuery } from '@/sanity/utils'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const SearchForm = () => {
  const [term, setTerm] = useState<string>("")
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  useEffect(() => {
    console.log(term);

    const delayDebounceFn = setTimeout(() => {
      let newUrl = '';

      if (term) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'query',
          value: term
        })
      } else {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ['query']
        })
      }

      router.push(newUrl, { scroll: false })
    }, 300)
    return () => clearTimeout(delayDebounceFn)
  }, [term])

  return (
    <form className='flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5'>
      <label className='flex-center relative w-full max-w-3xl'>
        <Image
          src={"/magnifying-glass.svg"}
          alt='Search Icon'
          className="absolute left-8"
          width={32}
          height={32}
        />
        <Input
          className="text-[24px] font-normal leading-[31.2px] rounded-xl h-fit border-0 py-6 pl-20 pr-8 !ring-0 !rign-offset-0 placeholder:text-white"
          type='text'
          value={term}
          onChange={({ target: { value } }) => setTerm(value)}
          placeholder='Search'
          style={{ backgroundColor: '#242C38', color: '#D0DFFF' }}
        />
      </label>
    </form>
  )
}

export default SearchForm