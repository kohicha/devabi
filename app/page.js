import Image from "next/image";
import Video from "@/components/common/video.jsx"
import React from 'react'
import {Typewriter} from 'nextjs-simple-typewriter'
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
  initial: {
    opacity:0,
    y: 100,
  },
  animate: {
    opacity:1,
    y: 0 
  },
}

export default function Home() {
  return (
    <>
   <main 
        className="grid grid-cols-2 min-h-[90vh] flex-col w-full mx-auto justify-center items-center">
      <span className="text-text-50 text-7xl font-medium">
        <span className="block">
        <Typewriter
        words={['Formulating', 'Crafting', 'Developing', 'Securing']}
          loop={0}
          cursor
          cursorStyle='|'
          typeSpeed={100}
          deleteSpeed={70}
          delaySpeed={2000}
          startFrom="full"
        /></span>    
        <span className="bg-gradient-to-r bg-clip-text text-transparent from-primary-500 to-secondary-500"> Digital Dreams</span>, One Compile At             A Time.

      </span>
      <div>
        <div className="bg-text-50 rounded-2xl shadow-lg shadow-secondary-500">
          <Video src="/display.webm" height="auto" width="full"/>
        </div>
      </div>
    </main>
      <section className="min-h-screen">
        sheesh
      </section>
    </>
  );
}
