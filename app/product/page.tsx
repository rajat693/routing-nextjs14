'use client';
import { usePathname } from "next/navigation";
import Link from 'next/link'
import React from 'react'

function Product() {
  const pathname = usePathname();
  return (
    <div>
    <Link href={`${pathname}/view`}>redirect to view page</Link><br/>
    <Link href={`${pathname}/view/1`}>redirect to view page card1 </Link><br/>
    <Link href={`${pathname}/view/2`}>redirect to view page card2 </Link>
    </div>
  )
}

export default Product