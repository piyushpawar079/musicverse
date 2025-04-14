import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Page() {
  return (
    <>
      <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
            Join the Waitlist
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Be the first to access our exclusive music courses taught by
            industry professionals. From beginner to advanced, we help you master
            your favorite instruments and musical styles — all from the comfort
            of your home.
          </p>
          <input
            type="email"
            placeholder="your@email.com"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700 px-4 py-2"
          />
        </div>
        <BackgroundBeams className="bg-slate-900 h-screen" />
      </div>
    </>
  );
}
