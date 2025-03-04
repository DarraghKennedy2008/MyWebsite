"use client"

export default function Home() {
return (
<main className="">

{/*ANIMATION IS CREATED IN THE TSX FILE BECAUSE I CANT FUCKING FIND THE TAILWIND CONFIG FILE!!!*/}
<style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out forwards;
        }
      `}</style>



<div id="#first-section" className="flex flex-col md:flex-row items-center justify-center pt-12  opacity-0 animate-fadeIn h-fit ">
  <div className="flex flex-col text-center md:text-left">
    <h1 className="text-8xl md:text-9xl text-slate-300 font-bold tracking-tighter mb-4 md:mr-32">
      Welcome
    </h1>
    <h1 className="text-2xl md:text-3xl text-slate-300 tracking-tighter mb-2 md:mr-32">
      My name is <span className="text-emerald-400 font-bold">Darragh Kennedy</span>, I am
    </h1>
    <h1 className="text-2xl md:text-3xl text-slate-300 tracking-tighter mb-2 md:mr-32">
      a <span className="text-emerald-400 font-bold">17</span> year old{" "}
      <span className="text-emerald-400 font-bold">student</span>. From{" "}
      <span className="text-emerald-400 font-bold">Ireland</span>.
    </h1>
    <h1 className="text-2xl md:text-3xl text-slate-300 tracking-tighter mb-4 md:mr-32">
      Interested in all things computers.
    </h1>
  </div>
  <img
    src="daisypic.jpg"
    className="rounded-full w-32 h-32 md:w-48 md:h-48 border-emerald-400 border-4 mt-4 md:mt-0"
    alt="Profile"
  />
</div>

<div id="#second-section" className="flex flex-col md:flex-row items-center justify-center p-16 ">

  <div className="flex flex-col text-center">
    <h1 className="text-7xl md:text-7xl text-slate-300 font-bold tracking-tighter mb-4 ">
    What I'm Learning
    </h1>
  </div>
</div>

<div className="flex items-center justify-center ">
<div className="border-3 size-64 border-zinc-100 bg-zinc-900 grid-cols-3 grid-rows-3">


<div className="w-32 h-32 align-top hover:scale-103 p-2">
<img src="/logos/ReactLogo.png" className="size-32"></img>
<h1 className="text-zinc-100 text-3xl">React</h1>
</div>




</div></div>
</main>
);
}
