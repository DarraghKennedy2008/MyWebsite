"use client"
import React, { useEffect, useState, useRef} from "react";
import WelcomeText from "@/components/welcome";
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
<main>

{/*This is the "Welcome blah blah blah"*/}
<WelcomeText />

{/*WHAT IM LEARNING SECTION!!!*/ }
<div id="LearningSection" ref={stackRef} className={`transition-opacity duration-800 ease-in-out ${stackVisible ? "opacity-100" : "opacity-0"}`}>
  <div id="#second-section" className="flex flex-col  items-center justify-center ">
  {/*TItle*/}
  <div className="flex flex-col text-center pb-16">
    <h1 className="text-7xl md:text-8xl text-slate-100 font-bold tracking-tighter mb-4 ">
    Projects 
    </h1>
  </div>
  
  <div className="p-4"><div className=" lg:w-148 lg:h-64 border-3 border-zinc-200 rounded-2xl flex p-2 bg-stone-900">
  
  {/*Paragraph and heaing i think*/}
  <div className=" flex flex-col w-2/3 pr-4">
  {/*Project tittle!!*/}
  <h1 className="text-5xl md:text-8xl text-slate-100 font-bold tracking-tighter mb-2">
    FracGen 
    </h1>
    <p className="text-xl text-slate-200">Simple website that generates a Fractal and previews it. User can choose to download or regenerate.</p>
  </div>
  {/*Image of project yuhh*/}
  <div className="flex justify-center items-center  size-auto  w-1/3">
  <img src="daisypic.jpg" className=" size-auto  rounded-2xl"></img>
    </div>

  </div></div>

  
</div>

  
  

</div>






</main>
);
}
