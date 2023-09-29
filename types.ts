interface Resource {
    title: string;
    _id: string;
    downloadLink: string;
    image: string;
    views: number;
    slug: {
        current: string;
        _type: string;
    },
    category: 'next 13' | 'frontend' | 'backend' | 'fullstack' | 'other';
}


interface ResourcePlaylist {
    _id: string;
    title: string;
    resources: Resource[]
}