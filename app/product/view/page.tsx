'use client';
import { usePathname } from "next/navigation";
import React from "react";

function View() {
    const pathname = usePathname()
    console.log("pathname", pathname)
  return (
    <>
      <h1>welcome to view page</h1>
    </>
  );
}

export default View;
