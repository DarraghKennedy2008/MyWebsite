"use client"
import React, { useEffect, useState, useRef} from "react";
export default function Home() {
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
<main className="">
{/*ANIMATION IS CREATED IN THE TSX FILE BECAUSE I CANT FUCKING FIND THE TAILWIND CONFIG FILE!!!*/}
<style jsx>{`
        @keyframes fadeIn {
          from {opacity: 0;}
          to {opacity: 1;}}
        .animate-fadeIn {animation: fadeIn 1s ease-in-out forwards;}
      `}
    </style>

{/*WELCOME SECTION*/}
<div id="#welcome-section" className="flex flex-row items-center justify-center opacity-0 animate-fadeIn h-screen lg:pb-16">

{/* This is a fucking mess holy shit*/}
<div className="">
<h1 className="text-8xl md:text-9xl text-slate-100 font-extrabold tracking-tighter text-center pb-2"> Welcome </h1>
<hr className="h-px my-0 bg-emerald-400 border-2 border-emerald-400" />
<p className="text-2xl text-slate-200 tracking-tighter text-center md:text-left pt-2">
My name is <span className="text-emerald-400 font-bold">Darragh Kennedy</span>, I am a <span className="text-emerald-400 font-bold">17</span> year old <span className="text-emerald-400 font-bold">student </span>
from <span className="text-emerald-400 font-bold opacity-100">Ireland</span></p>
<p className="text-2xl text-slate-200 tracking-tighter text-center md:text-left ">
I'm passionate about Technology mostly <span className="text-emerald-400 font-bold">Software-Development</span>/<span className="text-emerald-400 font-bold">Cyber-Security</span>
</p>
</div>









</div>



{/*WHAT IM LEARNING SECTION!!!*/ }
<div id="LearningSection" ref={stackRef} className={`transition-opacity duration-800 ease-in-out ${stackVisible ? "opacity-100" : "opacity-0"}`}>
  <div id="#second-section" className="flex flex-col md:flex-row items-center justify-center ">
  <div className="flex flex-col text-center">
    <h1 className="text-7xl md:text-7xl text-slate-100 font-bold tracking-tighter mb-4 ">
    Projects
    </h1>
  </div>
</div>




</div>
</main>
);
}
