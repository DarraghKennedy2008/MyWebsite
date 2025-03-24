"use client"
import type { Metadata } from "next";
{/*Metadata for the page duhhh*/}
export const metadata: Metadata = {
  title: "Blog | darrkenn",
  description: "This is my blog featured on my website.",
  openGraph: {
    title: "Blog | darrkenn",
    description: "This is my blog featured on my website.",
    images: [
      {
        url: "/daisypic.webp",
        width: 866,
        height: 865
      }
    ]
  }
}

export default function Blog() {
  return (
    <main className="flex justify-center items-center flex-col">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-slate-100 font-bold tracking-tighter pt-24">Blog</h1>

      {/* Where ive been!! */}
      <div className="p-4 w-full max-w-6xl flex justify-center">
        <div className="w-full lg:w-148 lg:h-auto border-3 border-zinc-200 rounded-2xl flex flex-col lg:flex-row p-4 bg-stone-900">
          <div className="flex flex-col w-full pr-0 lg:pr-4 overflow-auto">
            <h1 className="text-xl md:text-xl lg:text-2xl text-emerald-400 font-bold tracking-tighter mb-2 flex justify-between items-center">
              Where I&apos;ve been
              <span className="text-right text-sm md:text-md lg:text-xl tracking-normal">
                Date posted:<span className="text-white text-[12px] md:text-xl lg:text-xl"> 24/03/2025</span>
              </span>
            </h1>
            <p className="text-lg sm:text-md text-slate-100 tracking-tighter">
              Yo, im back. I&apos;ve been busy doing stuff and completely forgot about coding this website and updating the blog. While I was gone I thought about the fact that I&apos;m learning NextJS and React but I haven&apos;t actually learned the basics of programming. I decided that I will learn C++ before I continue on with learning NextJS. I&apos;m following along with Codecademy&apos;s C++ course. I&apos;m using Obsidian to take down my notes and holy shit, its so useful. I instantly purchased Obsidian sync so I could take notes on my laptop and desktop easily. Also <span className="text-sky-500 hover:text-green-500"><a href="https://store.steampowered.com/app/1907590/Psycho_Patrol_R/" target="_blank">Psycho Patrol R</a></span> JUST RELEASED, instantly bought it, gonna get so distracted and forget about learning tbh. Yeah thats enough yapping.
            </p>
          </div>
        </div>
      </div>

      {/* Domain!! */}
      <div className="p-4 w-full max-w-6xl flex justify-center">
        <div className="w-full lg:w-148 lg:h-auto border-3 border-zinc-200 rounded-2xl flex flex-col lg:flex-row p-4 bg-stone-900">
          <div className="flex flex-col w-full pr-0 lg:pr-4 overflow-auto">
            <h1 className="text-xl md:text-xl lg:text-2xl text-emerald-400 font-bold tracking-tighter mb-2 flex justify-between items-center">
              Domain
              <span className="text-right text-sm md:text-md lg:text-xl tracking-normal">
                Date posted:<span className="text-white text-[12px] md:text-xl lg:text-xl"> 09/03/2025</span>
              </span>
            </h1>
            <p className="text-lg sm:text-md text-slate-100 tracking-tighter">
              I bought offical domain &quot;darrkenn.com&quot;, got it a good price too. Came up with an idea for another website, its called Teclassia and its a Terraria class guide. I created it because I hate having to go on youtube and decide which of the million class guides I want to follow. Setup up the project and was gonna use a JSON file for the classes/items/armour, but I realised that would just be unnecessary as its not that much data and could just be statically displayed. Got a good deal on a Intel Xeon and some more ram for my home-server probably gonna set it up with CasaOS or Ubuntu server. I&apos;ll be using: 
              <span className="text-sky-500 underline hover:text-green-500"><a href="https://jellyfin.org/" target="_blank">Jellyfin</a></span>,<span className="text-sky-500 underline hover:text-green-500"><a href="https://www.photoprism.app/" target="_blank">PhotoPrism</a></span>,<span className="text-sky-500 underline hover:text-green-500"><a href="https://craftycontrol.com/" target="_blank">Crafty</a></span> and <span className="text-sky-500 underline hover:text-green-500"><a href="https://www.portainer.io/" target="_blank">Portainer</a></span>. I gotta snooze... Diary Signing Off🤓☝️!    
            </p>
          </div>
        </div>
      </div>

      {/* Test!! */}
      <div className="p-4 w-full max-w-6xl flex justify-center">
        <div className="w-full lg:w-148 lg:h-auto border-3 border-zinc-200 rounded-2xl flex flex-col lg:flex-row p-4 bg-stone-900">
          <div className="flex flex-col w-full pr-0 lg:pr-4 overflow-auto">
            <h1 className="text-xl md:text-xl lg:text-2xl text-emerald-400 font-bold tracking-tighter mb-2 flex justify-between items-center">
              Test
              <span className="text-right text-sm md:text-md lg:text-xl tracking-normal">
                Date posted:<span className="text-white text-[12px] md:text-xl lg:text-xl"> 07/03/2025</span>
              </span>
            </h1>
            <p className="text-lg sm:text-md text-slate-100 tracking-tighter">
              This is a test. NGL though the website is looking kinda fire. What do I write here, IDK im gonna do the fade in on scroll animation next. Then probably work on the Ran-Util project.
              Thinking of what to add to it, probably like a calculator and a converter. Its 3am rn i gotta go eat something. Diary Signing Off🤓☝️! 
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
