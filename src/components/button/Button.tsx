import React from 'react'
import Link from 'next/link'

type Props = {
    size: number,
    text: string,
    link: string
}

export default function Button(p: Props) {
    return (
        <Link className="rounded px-2 py-1 bg-green-400" href={p.link}>{p.text}</Link>
    )
}
