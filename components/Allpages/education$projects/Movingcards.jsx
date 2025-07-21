"use client";

import React from "react";
import { InfiniteMovingCards } from "../../ui/moving-card";

export function InfiniteMovingCardsD() {
    return (
        <div
            className="h-[30rem] rounded-md w-[100%] flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <div className="absolute top-35 max-lg:right-20 lg:left-7/12 w-66 h-32 bg-white/50 rounded-full blur-3xl"></div>
            <div className="absolute top-70 lg:left-2/20 w-96 h-32 bg-white/40 rounded-full blur-3xl"></div>
            <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>
    );
}

const testimonials = [
    {
        quote:
            "When I started building my first web project, I was really excited — but also nervous. I had just learned the basics of HTML, CSS, and JavaScript, and I wanted to try putting everything together into a real project.At first, it felt very hard. Even though the idea seemed simple,",
        name: "Muhammed Sahal",
        title: "Own Thoughts",
    },
    {
        quote:
            "Clean code is easy to read, easy to change, and easy to debug. The book reminded me that I’m not just writing code for the computer, but also for people (including myself).",
        name: "Robert C. Martin",
        title: "Keep Your Code Clean, Not Just Working",
    },
    {
        quote: "Dan, a co-creator of React, writes deeply thoughtful posts about how React works under the hood. He explains why things are designed a certain way in React, and encourages developers to understand the “why” behind their code. Example: A Complete Guide to useEffect",
        name: "Dan Abramov",
        title: "overreacted.io",
    },
    {
        quote:
            "Josh makes fun, visual, and interactive tutorials about frontend development — especially CSS, JavaScript, and animations. His posts are beginner-friendly and full of cool illustrations. Great for learning how to build beautiful, interactive UIs.",
        name: " Josh W. Comeau",
        title: "joshwcomeau.com",
    },
    {
        quote:
            "Whether you win or lose, what matters is that you keep going. Persistence is more powerful than perfection.Things often feel too difficult — until you push through and prove yourself wrong.",
        name: "Winston Churchill & Nelson Mandela",
        title: "Moby-Dick",
    },
];
