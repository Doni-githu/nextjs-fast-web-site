import React from 'react'

interface HeaderProps {
    title: string;
    category: string;
    query: string;
}

const Header = ({
    title, category, query
}: HeaderProps) => {
    if (query && category) {
        return (
            <h1 className='heading3 self-start' style={{ color: '#D0DFFF' }}>
                Search results for "{query}" in <span className="capitalize">{category}</span>
            </h1>
        )
    }

    if (query) {
        return (
            <h1 className='heading3 self-start' style={{ color: '#D0DFFF' }}>
                Search results for "{query}"
            </h1>
        )
    }

    if (category) {
        return (
            <h1 className='heading3 self-start' style={{ color: '#D0DFFF' }}>
                <span className="capitalize">{category}</span>
            </h1>
        )
    }

    return (
        <h1 className='heading3 self-start' style={{ color: '#D0DFFF' }}></h1>
    )
}

export default Header