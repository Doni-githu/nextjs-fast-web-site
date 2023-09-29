const schema2 = {
    name: 'resourcePlaylist',
    title: 'Resource Playlist',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            require,
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'resources',
            title: 'Resources',
            type: 'array',
            of: [
                {type: 'reference', to: [{type: 'resource'}]}
            ],
        },
    ]
}

export default schema2