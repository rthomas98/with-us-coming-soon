import { Button } from "@/components/ui/button";
import React from "react";
import { Calendar, Users, Zap } from "lucide-react";

export function Layout271() {
  return (
    <section id="community" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container mx-auto">
        <div className="mb-12 max-w-lg text-start text-white md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Community</p>
          <h2 className="heading-h2 mb-5 font-heading font-bold md:mb-6">
            More Than Threads
          </h2>
          <p className="text-medium">
            We're building something bigger than fashion. A community where 
            rejection becomes fuel, where limits become starting points, where 
            every sunrise run and late-night session writes a new story.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="w-full">
            <div className="mb-5 h-12 md:mb-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#A59D94]">
                <Calendar className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="heading-h4 mb-5 font-heading font-bold text-white md:mb-6">
              Run Clubs & Dawn Sessions
            </h3>
            <p className="text-regular text-white">
              5AM runs through downtown LA. Sunset bootcamps on the beach. 
              Creative workshops in converted warehouses. This is where 
              obsession meets community.
            </p>
          </div>
          <div className="w-full">
            <div className="mb-5 h-12 md:mb-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#A59D94]">
                <Users className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="heading-h4 mb-5 font-heading font-bold text-white md:mb-6">
              The First 500
            </h3>
            <p className="text-regular text-white">
              Founding members don't just wear the brand—they shape it. 
              Exclusive events. Private launches. Direct access to the 
              creative process. This is your leverage.
            </p>
          </div>
          <div className="w-full">
            <div className="mb-5 h-12 md:mb-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#A59D94]">
                <Zap className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="heading-h4 mb-5 font-heading font-bold text-white md:mb-6">
              Flip The Earth Together
            </h3>
            <p className="text-regular text-white">
              Every obstacle is an opportunity. Every setback is a setup. 
              Join a community that turns rejection into rocket fuel and 
              transforms limits into launchpads.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap justify-start gap-4 md:mt-18 lg:mt-20">
          <Button className="bg-white text-[#222720] hover:bg-white/90 px-8 py-3">
            Join
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/images/89C51309-D5CD-42AC-AFA9-BE33A794E2E3.jpeg"
          className="absolute inset-0 size-full object-cover"
          alt="With Us apparel detail"
        />
        <div className="absolute inset-0 bg-[#222720]/70" />
      </div>
    </section>
  );
}