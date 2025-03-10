"use client"
export default function Blog() {
return (
<main className="flex justify-center items-center flex-col ">
<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-slate-100 font-bold tracking-tighter pt-24 pb-8">Blog</h1>

{/*Domain!! */}
<div className="p-4 w-full max-w-6xl flex justify-center">
<div className="w-full lg:w-148 lg:h-64 border-3 border-zinc-200 rounded-2xl flex flex-col lg:flex-row p-4 bg-stone-900">
    {/*Title and date postedddd*/}
    <div className="flex flex-col w-full pr-0 lg:pr-4 overflow-auto">
    <h1 className="text-3xl  md:text-4xl lg:text-6xl text-emerald-400 font-bold tracking-tighter mb-2 flex justify-between items-center ">Domain 
        <span className="text-right text-sm lg:text-2xl tracking-normal">Date posted:<span className="text-white text-[12px] md:text-xl lg:text-xl"> 09/03/2025</span></span></h1>
    
    {/*Input whatever I wanna talk about*/}
    <p className="text-lg sm:text-xl text-slate-100 lg: break-words"> 
    I bought offical domain &quot;darrkenn.com&quot;, got it a good price too. Came up with an idea for another website, its called Teclassia and its a Terraria class guide. I created it because I hate having to go on youtube and decide which of the million class guides I want to follow. Setup up the project and was gonna use a JSON file for the classes/items/armour, but I realised that would just be unnecessary as its not that much data and could just be statically displayed. Got a good deal on a Intel Xeon and some more ram for my home-server probably gonna set it up with CasaOS or Ubuntu server. I&apos;ll be using: 
    <span className="text-sky-500 underline hover:text-green-500"><a href="https://jellyfin.org/" target="_blank"> Jellyfin</a></span>,<span className="text-sky-500 underline hover:text-green-500"><a href="https://www.photoprism.app/" target="_blank">PhotoPrism</a></span>,<span className="text-sky-500 underline hover:text-green-500"><a href="https://craftycontrol.com/" target="_blank">Crafty</a></span> and <span className="text-sky-500 underline hover:text-green-500"><a href="https://www.portainer.io/" target="_blank">Portainer</a></span>. I gotta snooze... Diary Signing Off🤓☝️!    
    </p>
    </div>
</div>
</div>

{/*TEST POST!! */}
<div className="p-4 w-full max-w-6xl flex justify-center">
<div className="w-full lg:w-148 lg:h-64 border-3 border-zinc-200 rounded-2xl flex flex-col lg:flex-row p-4 bg-stone-900">
    {/*Title and date postedddd*/}
    <div className="flex flex-col w-full pr-0 lg:pr-4 overflow-auto">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-emerald-400 font-bold tracking-tighter mb-2 flex justify-between items-center">Test 
        <span className="text-right text-sm lg:text-2xl tracking-normal">Date posted:<span className="text-white text-[12px] md:text-xl lg:text-xl"> 07/03/2025</span></span></h1>
    
    {/*Input whatever I wanna talk about*/}
    <p className="text-lg sm:text-xl text-slate-100 lg: break-words"> 
    This is a test. NGL though the website is looking kinda fire. What do I write here, IDK im gonna do the fade in on scroll animation next. Then probably work on the Ran-Util project.
    Thinking of what to add to it, probably like a calculator and a converter. Its 3am rn i gotta go eat something. Diary Signing Off🤓☝️!
    </p>
    </div>
</div>
</div>


</main>
);
}
