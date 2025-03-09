"use client"
import React, { useEffect, useState, useRef} from "react";
export default function Projects() {
{/*Appear on scroll code*/}
const [stackVisible, setStackVisible] = useState(false);
const stackRef = useRef(null);
useEffect(() => {
    const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
        if (entry.target === stackRef.current) setStackVisible(entry.isIntersecting);
        });
    },
    { threshold: 0.2 }
    );
    if (stackRef.current) observer.observe(stackRef.current);
    return () => observer.disconnect();
}, [])
return (
    <main>
    
    <div id="LearningSection" ref={stackRef} className={`transition-opacity duration-800 ease-in-out ${stackVisible ? "opacity-100" : "opacity-0"}`}>
        <div className="flex flex-col items-center justify-center w-full">
          {/*TITTLE */}
        <div className="flex flex-col text-center pb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-slate-100 font-bold tracking-tighter mb-2">Projects</h1>
            <h1 className="text-xl sm:text-xl md:text-xl lg:text-2xl text-red-500 font-bold tracking-tighter opacity-40">These arent developed yet</h1>
        </div>
        {/*Project1 i think */}
        <div className="p-4 w-full max-w-6xl flex justify-center cursor-pointer" >
            <div className="w-full lg:w-148 lg:h-64 border-3 border-zinc-200 rounded-2xl flex flex-col lg:flex-row p-4 bg-stone-900 hover:scale-105 transition-transform duration-300">
              {/*name and description of project */}
            <div className="flex flex-col w-full lg:w-2/3 pr-0 lg:pr-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-emerald-400 font-bold tracking-tighter mb-2">RanUtil</h1>
                <p className="text-lg sm:text-xl text-slate-100 lg:pb-8">Simple website that provides random useful utilities all in one place.</p>
                {/*SVGS OF TECHNOLOGY USED */}
            </div>
              {/*Image of project */}
            <div className="flex justify-center items-center w-full lg:w-1/3 mt-4 lg:mt-0">
                <img src="daisypic.webp" className="w-full h-auto rounded-2xl" alt="Screenshot of RanUtil project" />
            </div>
            </div>
        </div>
        {/*Project2 i think */}
        <div className="p-4 w-full max-w-6xl flex justify-center cursor-pointer">
            <div className="w-full lg:w-148 lg:h-64 border-3 border-zinc-200 rounded-2xl flex flex-col lg:flex-row p-4 bg-stone-900 hover:scale-105 transition-transform duration-300">
              {/*name and description of project */}
            <div className="flex flex-col w-full lg:w-2/3 pr-0 lg:pr-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-emerald-400 font-bold tracking-tighter mb-2">Teclassia</h1>
                <p className="text-lg sm:text-xl text-slate-100 lg:pb-8">Simple Terraria class guide website built using Next.js</p>
                {/*SVGS OF TECHNOLOGY USED */}
            </div>
              {/*Image of project */}
            <div className="flex justify-center items-center w-full lg:w-1/3 mt-4 lg:mt-0">
                <img src="daisypic.webp" className="w-full h-auto rounded-2xl" alt="Screenshot of RanUtil project" />
            </div>
            </div>
        </div>
        {/*Project3 i think */}
        <div className="p-4 w-full max-w-6xl flex justify-center cursor-pointer">
            <div className="w-full lg:w-148 lg:h-64 border-3 border-zinc-200 rounded-2xl flex flex-col lg:flex-row p-4 bg-stone-900 hover:scale-105 transition-transform duration-300">
              {/*name and description of project */}
            <div className="flex flex-col w-full lg:w-2/3 pr-0 lg:pr-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-emerald-400 font-bold tracking-tighter mb-2">Example</h1>
                <p className="text-lg sm:text-xl text-slate-100 lg:pb-8">Blahblahblahblahblahblahblah</p>
                {/*SVGS OF TECHNOLOGY USED */}
            </div>
              {/*Image of project */}
            <div className="flex justify-center items-center w-full lg:w-1/3 mt-4 lg:mt-0">
                <img src="daisypic.webp" className="w-full h-auto rounded-2xl" alt="Screenshot of RanUtil project" />
            </div>
            </div>
        </div>
        </div>
    </div>

{/*
<div className="p-2 flex bg-black border-2 border-zinc-200 rounded-3xl w-fit gap-2">
                <svg width="32px" height="32px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Technology icon 1">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 10.087 13.6902 12.3681 11.6975 13.7163L4.90687 4.20942C4.78053 4.03255 4.5544 3.95756 4.34741 4.02389C4.14042 4.09022 4 4.28268 4 4.50004V12H5V6.06027L10.8299 14.2221C9.82661 14.7201 8.696 15 7.5 15C3.35786 15 0 11.6421 0 7.5ZM10 10V4H11V10H10Z" fill="#FFFFFF"/>
                </svg>
                <svg width="32px" height="32px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Technology icon 2">
                <path fillRule="evenodd" clipRule="evenodd" d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z" fill="#FFFFFF"/>
                </svg>
                </div>
*/}

    </main>
);
}
