"use client"
import React, { useEffect, useState, useRef} from "react";
export default function Home() {
{/*Appear on scroll code*/}
  const [stackVisible, setStackVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const stackRef = useRef(null);
  const aboutRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === stackRef.current) setStackVisible(entry.isIntersecting);
          if (entry.target === aboutRef.current) setAboutVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );
    if (stackRef.current) observer.observe(stackRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
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
      `}</style>
{/*WELCOME SECTION*/}
<div id="#welcome-section" className="flex flex-col md:flex-row items-center pt-24 md:justify-center opacity-0 animate-fadeIn md:pr-32 h-screen">

<div className="flex flex-col text-center md:text-left">
    <h1 className="text-8xl md:text-9xl text-slate-100 font-bold tracking-tighter mb-4 md:mr-32">
    Welcome
    </h1>
    <h1 className="text-3xl md:text-3xl text-slate-300 tracking-tighter mb-2 md:mr-32">
    My name is <span className="text-emerald-400 font-bold">Darragh Kennedy</span>, I am
    </h1>
    <h1 className="text-3xl md:text-3xl text-slate-300 tracking-tighter mb-2 md:mr-32">
    a <span className="text-emerald-400 font-bold">17</span> year old{" "}
    <span className="text-emerald-400 font-bold">student</span>. From{" "}
    <span className="text-emerald-400 font-bold">Ireland</span>.
    </h1>
    <h1 className="text-3xl md:text-3xl text-slate-300 tracking-tighter mb-4 md:mr-32">
    Interested in all things computers.
    </h1>
</div>
<img
    src="daisypic.jpg"
    className="rounded-full w-64 h-64 md:w-64 md:h-64 border-emerald-400 border-6 mt-4 md:mt-0"
    alt="Profile"
/>


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
