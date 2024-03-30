'use client';
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation';

function Id() {
    const pathname = usePathname();
    const router = useRouter();
    console.log(router, pathname)
    const lastSegment = pathname.substring(pathname.lastIndexOf('/') + 1);

  return (
    <>
    <h1>welcome to view/card{lastSegment} page </h1>
    <Link href={`${pathname}/1`}>redirect to inner card 1</Link> <br/>
    <Link href={`${pathname}/2`}>redirect to inner card 2</Link>
    </>
  )
}

export default Id