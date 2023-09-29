"use client"
import { formUrlQuery } from '@/sanity/utils'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const links = ['all', 'Next 13', 'frontend', 'backend', 'fullstack']

const Filters = () => {
    const [selected, setSelected] = useState<string>("all")
    const searchParams = useSearchParams()
    const router = useRouter()
    
    
    const handleFilter = (link: string) => {
        let newUrl = "";
        if (selected === link) {
            setSelected('')
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: 'category',
                keysToRemove: ['category'],
            })
        } else {
            setSelected(link)
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: 'category',
                value: link.toLowerCase()
            })
        }

        router.push(newUrl, {scroll: false})        
    }

    return (
        <ul style={{ color: '#D0DFFF' }} className='text-[16px] leading-[22px] font-normal no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl'>
            {links.map((link) => (
                <button
                    key={link}
                    style={{ borderRadius: '0.25rem' }}
                    className={`whitespace-nowrap px-8 py-2.5 capitalize ${selected === link ? "gradient_blue-purple" : ""}`}
                    onClick={() => {
                        handleFilter(link)
                    }}
                >
                    {link}
                </button>
            ))}
        </ul>
    )
}

export default Filters