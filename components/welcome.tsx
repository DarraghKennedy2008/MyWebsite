
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
<h1 className="text-8xl md:text-9xl lg:text-[12rem] text-slate-100 font-extrabold tracking-tighter text-center pb-2"> Welcome</h1>
<hr className="h-px my-0 bg-emerald-400 border-2 border-emerald-400" />
<p className="text-2xl text-slate-200 tracking-tighter text-center md:text-left pt-2">
My name is <span className="text-emerald-400 font-bold">Darragh Kennedy</span>, I am a <span className="text-emerald-400 font-bold">17</span> year old <span className="text-emerald-400 font-bold">student </span>
from <span className="text-emerald-400 font-bold opacity-100">Derry</span>, Ireland. </p>
<p className="text-2xl text-slate-200 tracking-tighter text-center md:text-left ">
I&apos;m passionate about Technology mostly <span className="text-emerald-400 font-bold">Software-Development</span>/<span className="text-emerald-400 font-bold">Cyber-Security</span>
</p>
</div>
</div>
</main>
    );
}