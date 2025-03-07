"use client"
export default function Blog() {
return (
<main className="flex justify-center items-center flex-col ">

<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-slate-100 font-bold tracking-tighter pt-24 pb-8">Blog</h1>

        <div className="p-4 w-full max-w-6xl flex justify-center cursor-pointer">
<div className="w-full lg:w-148 lg:h-64 border-3 border-zinc-200 rounded-2xl flex flex-col lg:flex-row p-4 bg-stone-900 hover:scale-105 transition-transform duration-300">
    {/*Title and date postedddd*/}
    <div className="flex flex-col w-full pr-0 lg:pr-4 overflow-auto">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-emerald-400 font-bold tracking-tighter mb-2 flex justify-between items-center">Test 
        <span className="text-right text-sm lg:text-2xl tracking-normal">Date posted:<span className="text-white text-[12px] md:text-xl lg:text-xl"> 07/03/2025</span></span></h1>
    
    {/*Input whatever I wanna talk about*/}
    <p className="text-lg sm:text-xl text-slate-100 lg: break-words"> 
        This is a test. NGL though the website is looking kinda fire. What do I write here, IDK im gonna do the fade in on scroll animation next. Then probably work on the Ran-Util page.
        Thinking of what to add to that page, probably like a calculator and a converter. Its 3am rn i gotta go eat something. Diary Signing Off🤓☝️!
    </p>
    </div>
</div>
</div>
</main>
);
}
