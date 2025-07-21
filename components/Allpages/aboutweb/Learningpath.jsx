"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../../ui/utsideclick";
import html from '../../../public/image/learningpath/html2.jpg'
import css from '../../../public/image/learningpath/css.jpg'
import javascript from '../../../public/image/learningpath/javascript.jpg'
import bootstrap from '../../../public/image/learningpath/bootstrap.jpg'
import nodejs from '../../../public/image/learningpath/nodejs.jpg'
import react from '../../../public/image/learningpath/react.jpg'
import nextjs from '../../../public/image/learningpath/nextjs.png'
import tailwindcss from '../../../public/image/learningpath/tailwindcss.png'
import mongodb from '../../../public/image/learningpath/mongodb.png'
import Image from "next/image";

export function ExpandableCard() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10" />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}>
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base">
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base">
                      {active.description}
                    </motion.p>
                  </div>


                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ root : true }}
        className="pb-10 lg:pt-5 w-full flex items-center lg:justify-center justify-start gap-3 max-lg:overflow-x-scroll scrollbar-hide">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-2 flex mt-3 w-[120px] hover:bg-white/30 dark:hover:bg-neutral-800 cursor-pointer">
            <div className="flex gap-4 flex-col justify-center items-center w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-20 w-20 rounded-full object-cover" />
              </motion.div>
              <div className="flex">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-white/90 break-words w-20 lg:w-30 h-10 max-lg:text-[12px] dark:text-neutral-200 text-center text-base">
                  {card.title}
                </motion.h3>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "15 days",
    title: "HTML",
    src: html,
    content: () => {
      return (
        <p>HTML, or HyperText Markup Language, is the standard markup language used to structure content
          on the web. It provides a way to organize text, images, links, and other media on a webpage,
          telling browsers how to display the content. Essentially, HTML uses elements and tags to create
          the structure and layout of a webpage, making it understandable for web browsers.
        </p>
      );
    },
  },
  {
    description: "15 days",
    title: "CSS",
    src: css,
    content: () => {
      return (
        <p>Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a
          document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML).
          CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.
        </p>
      );
    },
  },

  {
    description: "1 month",
    title: "JAVASCRIPT",
    src: javascript,
    content: () => {
      return (
        <p>JavaScript, often abbreviated as JS, is a dynamic and versatile programming language primarily
          known for its role in web development. It enables the creation of interactive and dynamic features
          on web pages that cannot be achieved with only HTML and CSS.
          Key characteristics and uses of JavaScript include:
          Client-side scripting:
          Traditionally, JavaScript is executed directly within web browsers, allowing for interactive user interfaces, animations,
          form validation, and dynamic content updates without requiring full page reloads.
          Server-side development:
          With the advent of Node.js, JavaScript can also be used for server-side programming, building scalable network applications,
          and handling server-side logic. </p>
      );
    },
  },
  {
    description: "10 days",
    title: "BOOTSTRAP",
    src: bootstrap,
    content: () => {
      return (
        <p>Bootstrap is a free and open-source front-end framework for building responsive,
          mobile-first websites and web applications. It provides a collection of pre-designed HTML,
          CSS, and JavaScript components and a responsive grid system to streamline web development.
          Essentially, it's a toolkit that simplifies the process of creating websites that
          look good and function well on different devices (desktops, tablets, and phones).
        </p>
      );
    },
  },
  {
    description: "20 days",
    title: "NODE JS",
    src: nodejs,
    content: () => {
      return (
        <p>Node.js is a JavaScript runtime environment that allows you to execute JavaScript code
          outside of a web browser, primarily for server-side development. It's built on the V8 JavaScript
          engine, the same engine that powers Google Chrome, enabling fast and efficient execution of JavaScript
          code. Node.js is known for its event-driven, non-blocking I/O model,
          making it suitable for building scalable and real-time network applications.
        </p>
      );
    },
  },
  {
    description: "10 days",
    title: "MONGO DB",
    src: mongodb,
    content: () => {
      return (
        <p>MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents
          rather than traditional rows and columns. It's known for its scalability and ability to handle
          large volumes of diverse data. MongoDB uses a document model, where data is organized into collections of documents,
          making it well-suited for modern applications with evolving data structures.
        </p>
      );
    },
  },
  {
    description: "1 Month",
    title: "REACT",
    src: react,
    content: () => {
      return (
        <p>React is a JavaScript library for building user interfaces, specifically
          focusing on the view layer of web and mobile applications. It allows developers to create
          reusable UI components and manage the state of those components. React is known for being declarative
          and component-based, making it easier
          to develop interactive UIs and manage complex user interfaces.
        </p>
      );
    },
  },
  {
    description: "15 days",
    title: "NEXTJS",
    src: nextjs,
    content: () => {
      return (
        <p>Next.js is a React framework that simplifies building web applications by providing features
          like server-side rendering, static site generation, and optimized performance. It extends React's capabilities,
          making it easier to create fast, scalable, and SEO-friendly websites and applications.
        </p>
      );
    },
  },
  {
    description: "5 days",
    title: "TAILWIND CSS",
    src: tailwindcss,
    content: () => {
      return (
        <p>Tailwind CSS is a utility-first CSS framework that allows developers to style web pages directly
          within their HTML by applying predefined utility classes. It's a low-level framework,
          meaning it provides basic, reusable CSS classes rather than pre-designed components.
          This approach enables developers to build custom
          designs rapidly without writing custom CSS for most tasks.
        </p>
      );
    },
  },
];
