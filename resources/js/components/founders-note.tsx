import React from "react";

export function FoundersNote() {
  return (
    <section className="relative overflow-hidden bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl">
          {/* Section tagline */}
          <p className="mb-3 text-center font-semibold text-[#A59D94] md:mb-4">
            The Origin
          </p>
          
          {/* Heading */}
          <h2 className="heading-h2 mb-8 text-center font-heading font-bold text-[#222720] md:mb-12">
            A Note from Our Founders
          </h2>
          
          {/* Letter styling with subtle background */}
          <div className="relative">
            {/* Decorative quote marks */}
            <span className="absolute -left-4 -top-4 font-heading text-6xl text-[#A59D94]/20 md:-left-8 md:-top-8 md:text-8xl">
              "
            </span>
            
            <div className="space-y-6 text-[#222720]">
              <p className="text-lg leading-relaxed md:text-xl md:leading-relaxed">
                They said no. Again and again.
              </p>
              
              <p className="text-lg leading-relaxed md:text-xl md:leading-relaxed">
                Every rejection stung, but something strange happened. Each "no" 
                didn't push us down—it pushed us forward. The dismissals became 
                fuel. The closed doors became blueprints for new ones.
              </p>
              
              <p className="text-lg leading-relaxed md:text-xl md:leading-relaxed">
                That's when we understood: <span className="font-semibold text-[#A59D94]">rejection creates obsession</span>. 
                Not the unhealthy kind, but the type that transforms you. The kind 
                that makes you flip the earth to prove what's possible.
              </p>
              
              <p className="text-lg leading-relaxed md:text-xl md:leading-relaxed">
                WITH US was born from this truth. We're not just making clothes—we're 
                creating space for everyone who's been told they don't fit. We're 
                giving leverage to those ready to redefine their limits.
              </p>
              
              <p className="text-lg leading-relaxed md:text-xl md:leading-relaxed">
                This is for the rejected. The obsessed. The ones who turn obstacles 
                into opportunities.
              </p>
              
              <p className="text-lg font-semibold leading-relaxed md:text-xl md:leading-relaxed">
                Welcome to WITH US. Let's flip the earth together.
              </p>
            </div>
            
            {/* Signature */}
            <div className="mt-8 md:mt-12">
              <div className="font-heading text-2xl text-[#A59D94]">
                — D.R. & R.T.
              </div>
              <p className="mt-1 text-sm text-[#222720]/60">
                Founders, WITH US
              </p>
            </div>
          </div>
          
          {/* Subtle pattern overlay for texture */}
          <div 
            className="absolute right-0 top-0 h-full w-1/3 opacity-5"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                #A59D94,
                #A59D94 1px,
                transparent 1px,
                transparent 15px
              )`,
            }}
          />
        </div>
      </div>
    </section>
  );
}