"use client";
import React from "react";
import { SparklesCore } from "../../ui/sparkles";
import { motion } from 'framer-motion'

export function SparklesPreview() {
  return (
    <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
      className="h-auto w-full flex flex-col items-center pt-15 overflow-hidden rounded-md">
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF" />
  
  
        <div
          className="absolute inset-0 w-full h-full bg-gray-800  [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
       <div className="absolute top-15 max-lg:right-0 lg:left-4/6 w-50 h-32 bg-white/30 rounded-full blur-3xl"></div>
            <div className="absolute top-90 left-1/3 lg:left-1/6 w-66 h-22 bg-white/40 rounded-full blur-3xl"></div>
      </div>
      <div className="w-full text-center">
        <h1 className="text-[22px] font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">Bachelor's Degree in Business Administration (BBA-TTM)</h1>
        <p className="text-neutral-400 font-semibold">MALIK DEENAR COLLEGE OF GRADUATE STUDIES <br/>(2020-2023)</p>
        <p className="text-neutral-400 font-semibold">• Completed 2 projects (4&6 semester)</p>
        <p className="text-neutral-400 font-semibold">• Cover 10+ states in india for studies</p>
      </div>
      <div className="w-full text-center">
        <h1 className="text-[22px] font-bold bg-clip-text text-transparent bg-gradient-to-b pt-10 from-white to-white/80">Higher Secondary Education: <br/>Commerce (with political science)</h1>
        <p className="text-neutral-400 font-semibold">G.M.V.H.S.S THALANGARA <br/>(2018-2020)</p>
        <p className="text-neutral-400 font-semibold">• Nss Candidate</p>
      </div>
      <div className="w-full text-center">
        <h1 className="text-[22px] font-bold bg-clip-text text-transparent bg-gradient-to-b pt-10 from-white to-white/80">SSLC (Secondary School Leaving Certificate)</h1>
        <p className="text-neutral-400 font-semibold">T.I.H.S.S NAIMARMOOLA <br/>(2017)</p>
        <p className="text-neutral-400 font-semibold">• Percentage: 84%</p>
      </div>
    </motion.div>
  );
}
