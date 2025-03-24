import type { Metadata } from "next";
import WelcomeText from "@/components/Homepage/welcome";
{/*import Projects from "@/components/Homepage/projects";*/}

{/*Metadata for the page duhhh*/}
export const metadata: Metadata = {
  title: "Welcome | darrkenn",
  description: "Welcome to my website!! This page is just the laanding page.",
  openGraph: {
    title: "Welcome | darrkenn",
    description: "Welcome to my website!! This page is just the laanding page.",
    images: [
      {
        url: "/daisypic.webp",
        width: 866,
        height: 865
      }
    ]
  }
}


export default function Home() {
return (
<main>


{/*This is the "Welcome blah blah blah"*/}
<WelcomeText />
{/*Projects temporarily commented out due to me not having any:( 
<Projects /> */}
</main>
);
}
