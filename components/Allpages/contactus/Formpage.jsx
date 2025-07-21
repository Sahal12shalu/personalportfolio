"use client";
import React, { useRef, useState } from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { cn } from "@/app/lib/utils";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export function SubmitForm() {

  const [loading, Setloading] = useState(false)
  const form = useRef();

  const handleSubmit = (e) => {
    Setloading(true)
    e.preventDefault();
    emailjs
      .sendForm('service_6jnxu1m', 'template_8qc9kr8', form.current, {
        publicKey: 'gLCDknSK8FFhpba8u',
      })
      .then(
        () => {
          toast('success')
          Setloading(false)
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div
      className="shadow-input mx-auto w-full max-w-md lg:max-w-2xl mt-8 rounded-none p-4 md:rounded-2xl md:p-8">
      <ToastContainer theme="light" style={{marginTop:'3rem', }} />
      <h2 className="text-xl text-center w-full font-bold text-neutral-200">
        Contact Me
      </h2>
      <p className="mt-2 text-sm text-center w-full text-neutral-300">
        let&apos;s connect with me , share your thoughts and questions , conatact if you want portfolio, fullstack-web, etc.. i will send replay for you!
      </p>
      <form ref={form} className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label className="text-white/80">Email Address</Label>
          <Input id="email" name="email" placeholder="user1234@gmail.com" type="email" required />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label className="text-white/80">Name</Label>
          <Input id="name" name="name" placeholder="Enter Your Name" type="text" />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label className="text-white/80">Mobile Number</Label>
          <Input id="mobilenumber" name="mobilenumber" placeholder="999559990" type="number" className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" required />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label className="text-white/80">Comments/Questions</Label>
          <textarea id="comment" name="comment" placeholder="typearea" type="text" className="h-[160px] bg-white rounded-md p-2" required />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] bg-zinc-800 from-zinc-900 to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit">
          Send &rarr;
          <BottomGradient />
        </button>

      </form>
      {loading && (
        <div className='fixed inset-0 bg-black/20 bg-opacity-30 z-50 flex items-center justify-center'>
          <div className='w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin'></div>
        </div>
      )}
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span
        className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span
        className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
