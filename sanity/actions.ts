import { groq } from "next-sanity"
import { readClient } from "./lib/client";
import { buildQuery } from "./utils";


export const getResourcesPlaylist = async () => {
    try {
        const resourcesPlaylist = await readClient.fetch(
            groq`*[_type == "resourcePlaylist"]{
                _id,
                title,
                resources[0 ...6]->{
                    _id,
                    title,
                    downloadLink,
                    "image": poster.asset->url,
                    views,
                    category,
                }
            }`
        )
        return resourcesPlaylist
    } catch (error) {
        console.log(error)
    }
}



interface GetResourcesParams {
    query: string,
    category: string,
    page: string,
}


export const getResources = async (params: GetResourcesParams) => {
    const { query, category, page } = params;
    try {
        const resources = await readClient.fetch<Resource[]>(
            groq`${buildQuery({
                type: 'resource',
                query,
                category,
                page: parseInt(page)
            })}{
                title,
                _id,
                downloadLink,
                "image": poster.asset->url,
                views,
                slug,
                category
            }`
        )
        return resources
    } catch (error) {
        console.log(error)
    }
}   