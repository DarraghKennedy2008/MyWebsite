"use client"
export default function WelcomeText() {
    return (
<main>
{/*ANIMATION IS HERE BECAUSE IM FUCKING STUPID AND CANT FIND TAILWIND.CONFIG.JS*/}
<style jsx>{`
        @keyframes fadeIn {
        from {opacity: 0;}
        to {opacity: 1;}}
        .animate-fadeIn {animation: fadeIn 1s ease-in-out forwards;}
    `}
    </style>


<div id="#welcome-section" className="flex flex-row items-center justify-center opacity-0 animate-fadeIn h-screen lg:pb-16" >
{/* This is a fucking mess holy shit*/}
<div>
<p className="text-2xl text-red-500 tracking-tighter text-center  cursor-default">Website still under construction🚧</p>
<h1 className="text-7xl md:text-9xl lg:text-[12rem] text-slate-100 font-extrabold tracking-tighter text-center pb-2">
    <span className="hover:text-red-500 cursor-default"><a href="https://www.youtube.com/watch?v=wyoMCQn0ZD0&list=PLweUFcMiKqgJsqxd4ohXNR6RgFO1fEIBZ&index=15" target="_blank">W</a></span>
    <span className="hover:text-orange-500 cursor-default"><a href="mygirlfriend.webp" target="_blank">E</a></span>
    <span className="hover:text-yellow-500 cursor-default"><a href="lily.webp" target="_blank">L</a></span>
    <span className="hover:text-green-500 cursor-pointer"><a href="http://thecatapi.com/api/images/get?format=src&type=gif" target="_blank">C</a></span>
    <span className="hover:text-blue-500 cursor-default"><a href="https://youtu.be/Sff7Kc77QAY?si=8lCZrSD8l0lscKiX&t=26" target="_blank">O</a></span>
    <span className="hover:text-indigo-500 cursor-default"><a href="https://static.thcdn.com/images/large/original//productimg/1600/1600/12657945-5785176576245951.jpg" target="_blank">M</a></span>
    <span className="hover:text-violet-500 cursor-default"><a href="https://www.youtube.com/watch?v=zfyQ8muKLdc" target="_blank">E</a></span>
    </h1>
<hr className="h-px my-0 bg-emerald-400 border-2 border-emerald-400" />
<p className="sm:text-xl md:text-2xl text-slate-200 tracking-tighter text-center pt-2 cursor-default">
My name is <span className="text-emerald-400 font-bold">Darragh Kennedy</span>, I am a <span className="text-emerald-400 font-bold">17</span> year old <span className="text-emerald-400 font-bold">student </span>
from <span className="text-emerald-400 font-bold opacity-100">Derry</span>, Ireland. </p>
<p className="sm:text-xl md:text-2xl text-slate-200 tracking-tighter text-center cursor-default">
I&apos;m passionate about Technology mostly <span className="text-emerald-400 font-bold">Software-Development</span>/<span className="text-emerald-400 font-bold">Cyber-Security</span>
</p>
<p className="sm:text-sm md:text-xl text-emerald-400 opacity-20 tracking-tighter text-center  cursor-default">*Click each letter of the WELCOME text*</p>
</div>
</div>
</main>
    );
}