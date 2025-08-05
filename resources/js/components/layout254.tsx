import React from "react";
import { Star, Palette, Sparkles, Heart } from "lucide-react";

export function Layout254() {
  return (
    <section id="preview" className="bg-[#222720] px-[5%] py-16 text-white md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">The Preview</p>
            <h2 className="heading-h2 mb-5 font-heading font-bold md:mb-6">
              What's Coming
            </h2>
            <p className="text-medium">
              Premium French terry. Thoughtful fits. Colors pulled from LA 
              sunsets. We're not showing everything yet—but what we're building 
              will move with you, breathe with you, rise with you.
            </p>
          </div>
        </div>
        <div className="grid place-items-center gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-x-12">
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#A59D94] md:mb-6">
                <Palette className="h-6 w-6 text-white" />
              </div>
              <h3 className="heading-h5 mb-3 font-heading font-bold md:mb-4">
                Texture Stories
              </h3>
              <p>
                French terry so soft it whispers. Details so precise they
                speak volumes. Feel the difference obsession makes.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#A59D94] md:mb-6">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="heading-h5 mb-3 font-heading font-bold md:mb-4">
                Shadow & Form
              </h3>
              <p>
                Silhouettes that move like water, structure that stands like
                mountains. European precision meets LA flow.
              </p>
            </div>
          </div>
          <div className="relative order-last w-full sm:col-span-2 lg:order-none lg:col-span-1">
            <img
              src="/images/2A919BE1-2553-4138-A59F-EEB8AEB66ABA_4_5005_c.jpeg"
              alt="With Us lifestyle preview"
              className="h-auto w-full rounded-image object-cover"
            />
          </div>
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#A59D94] md:mb-6">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h3 className="heading-h5 mb-3 font-heading font-bold md:mb-4">
                LA Sunset Palette
              </h3>
              <p>
                Colors caught between day and night. Hues that shift with
                your movement. The city's golden hour, captured.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#A59D94] md:mb-6">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="heading-h5 mb-3 font-heading font-bold md:mb-4">
                Built to Move
              </h3>
              <p>
                From morning runs to midnight sessions. Every stitch serves
                a purpose. Every piece tells your story.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20" />
      </div>
    </section>
  );
}