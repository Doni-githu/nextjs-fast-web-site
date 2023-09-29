import {
  Card, CardContent, CardHeader, CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"


import React from 'react'

interface ResourceCardProps {
  resource: Resource
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  return (
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
      <Link href={`/resource/${resource._id}`}>
        <CardHeader>
          <div className="mb-3">
            <Image
              src={resource.image}
              className="h-full rounded-md object-cover"
              width={384}
              height={440}
              alt={resource.title}
            />
          </div>
          <CardTitle className="text-white text-[20px] font-semibold leading-[26px] line-clamp-1 w-full text-left">{resource.title}</CardTitle>
        </CardHeader>
      </Link>
      <CardContent className="flex justify-between items-center mt-4 p-0">
        <div className="flex justify-center items-center text-[16px] font-medium leading-[22.4px] gap-1.5 text-white">
          <Image
            src={"/downloads.svg"}
            width={20}
            height={20}
            alt="download"
          />
          {resource.views}
        </div>
        <Link
          className="text-gradient_purple-blue text-[16px] font-medium leading-[22.4px] gap-2 flex items-center justify-center"
          href={`/resource/${resource._id}`}>
          Download Now
          <Image
            src={"/arrow-blue.svg"}
            alt={"arrow"}
            width={13}
            height={0}
          />
        </Link>
      </CardContent>
    </Card>
  )
}

export default ResourceCard