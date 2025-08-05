import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

export function Layout354New() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call - replace with actual implementation
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="relative min-h-screen">
      {/* Optimized background with lazy loading */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(34, 39, 32, 0.4), rgba(34, 39, 32, 0.7)), url("/images/02A67EFD-B0E2-42D7-BCBF-324CC2171E16_4_5005_c.jpg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Performance: Add blur overlay for better text readability */}
        <div className="absolute inset-0 backdrop-blur-[1px]" />
      </div>
      
      <div className="relative z-10 flex min-h-screen items-center justify-center px-[5%]">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            {/* Brand Mark */}
            <h1 className="sr-only">WITH US</h1>
            <div className="mb-8 md:mb-12">
              <span className="font-heading text-6xl font-bold uppercase tracking-wider text-white md:text-7xl lg:text-8xl">
                WITH US
              </span>
            </div>
            
            {/* Manifesto */}
            <h2 className="mb-6 font-heading text-3xl font-bold uppercase tracking-wide text-white md:text-4xl lg:text-5xl">
              REJECTION CREATED OBSESSION
            </h2>
            
            {/* Minimal reveal */}
            <p className="mb-12 text-lg text-white/80 md:text-xl">
              European sportswear meets LA culture.<br />
              Spring 2025.
            </p>
            
            {/* Email capture form */}
            <form onSubmit={handleSubmit} className="mx-auto max-w-md">
              <div className="flex flex-col gap-4 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting || isSubmitted}
                  required
                  className="flex-1 bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/60 focus:border-[#A59D94] focus:ring-[#A59D94] h-12 px-6"
                  aria-label="Email address for early access"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`h-12 px-8 font-semibold transition-all ${
                    isSubmitted 
                      ? "bg-green-600 hover:bg-green-600" 
                      : "bg-[#A59D94] hover:bg-[#A59D94]/90"
                  } text-white border-0`}
                >
                  {isSubmitted ? "✓ You're In" : isSubmitting ? "..." : "BE FIRST"}
                </Button>
              </div>
              
              {/* Status message */}
              <p className="mt-4 text-sm text-white/60">
                {isSubmitted 
                  ? "Welcome to the movement. Check your inbox."
                  : "Join the first 500. Exclusive access awaits."}
              </p>
            </form>
            
            {/* Subtle scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <svg
                className="h-6 w-6 text-white/40"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}