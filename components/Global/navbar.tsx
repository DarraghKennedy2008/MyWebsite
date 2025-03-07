import Link from "next/link";
export default function Navbar() {
    return (
        
        <div className=" mx-auto fixed top-0 inset-x-0 z-50 border-b-2 border-r-2 border-l-2 border-white/10 text-emerald-400 px-8 py-4 flex justify-center items-center size-fit rounded-b-4xl bg-stone-950/50 backdrop-blur-lg gap-6">
        <Link href={{ pathname: '/' }}>
        {/*Its obviously a fucking link why am i making this comment*/}
        <h1 className="font-bold hover:scale-105  text-xl md:text-2xl hover:text-zinc-200 active:scale-120 tracking-tight transition-all duration-200">HOME</h1>
        </Link>
        <Link href={{ pathname: '/blog' }}>
        <h1 className="font-bold hover:scale-105  text-xl md:text-2xl hover:text-zinc-200 active:scale-120 tracking-tight transition-all duration-200">BLOG</h1>
        </Link>
        <a href="https://github.com/DarraghKennedy2008" target="_blank" className="size-8  md:size-14 lg:size-14"><img src="logos/github.svg"></img></a>
        <a href="https://www.linkedin.com/in/darragh-kennedy-6b6509326/" target="_blank" className="size-8  md:size-14 lg:size-14"><img src="logos/linkedIn.svg"></img></a>
    </div>
    );
    
}