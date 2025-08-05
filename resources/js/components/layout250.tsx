"use client";

import React from "react";

export function Layout250() {
  return (
    <section className="bg-[#222720] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="max-w-lg">
            <p className="mb-3 font-semibold text-[#A59D94] md:mb-4">Early Access</p>
            <h2 className="heading-h3 font-heading font-bold text-white mb-6">
              The First 500 Get Everything
            </h2>
            <p className="text-lg text-white/80">
              This isn't just early access. It's your permanent advantage. 
              Join before we close the doors.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src="/images/A343B41C-8307-4DCB-BC67-3383E46A78A1_4_5005_c.jpeg"
                alt="Join the movement - With Us member wearing taupe collection"
                className="rounded-image aspect-[4/3] w-full object-cover"
              />
            </div>
            <h3 className="heading-h5 mb-3 font-heading font-bold text-white md:mb-4">
              48-Hour Early Drop Access
            </h3>
            <p className="text-white">
              Every release. Every colorway. Every collaboration. You get 
              first pick—two full days before anyone else even knows 
              they exist.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src="/images/83277703-CB27-4596-9457-C83F25090604_4_5005_c.jpeg"
                alt="Exclusive perks - With Us apparel detail"
                className="rounded-image aspect-[4/3] w-full object-cover"
              />
            </div>
            <h3 className="heading-h5 mb-3 font-heading font-bold text-white md:mb-4">
              Founding Member Pricing Forever
            </h3>
            <p className="text-white">
              Lock in 25% off retail prices—for life. This rate never 
              expires, never changes. Your rejection of limits comes with 
              permanent rewards.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src="/images/2F2C74F4-B675-499E-9C59-77E6F0DC1648_4_5005_c.jpeg"
                alt="Limited spots - With Us lifestyle"
                className="rounded-image aspect-[4/3] w-full object-cover"
              />
            </div>
            <h3 className="heading-h5 mb-3 font-heading font-bold text-white md:mb-4">
              Private Events & Creative Sessions
            </h3>
            <p className="text-white">
              Rooftop runs at sunrise. Design workshops in our LA studio. 
              Exclusive launches where you meet the makers. This is your 
              all-access pass to the WITH US world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}