import { Button } from "@/components/ui/button";
import React from "react";

export function Layout354() {
  const scrollToFooter = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative">
      <div
        className="sticky top-0 z-0 min-h-screen"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url("/images/02A67EFD-B0E2-42D7-BCBF-324CC2171E16_4_5005_c.jpg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="px-[5%]">
          <div className="container mx-auto">
            <div className="flex min-h-screen max-w-md flex-col justify-center text-white">
              <h2 className="heading-h2 mb-5 font-heading text-5xl font-bold md:mb-6 md:text-6xl">
                REJECTION CREATED OBSESSION
              </h2>
              <p className="text-medium mb-6 text-lg">
                European sportswear meets LA culture. Spring 2025.
              </p>
              <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                <Button 
                  onClick={scrollToFooter}
                  className="bg-[#A59D94] hover:bg-[#A59D94]/90 text-white border-0 px-8 py-3"
                >
                  BE FIRST
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div
        className="sticky top-0 z-0 min-h-screen"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url("/images/3DF167E1-85C1-4E8F-8555-C9533F75B6AF_4_5005_c.jpg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="px-[5%]">
          <div className="container mx-auto">
            <div className="flex min-h-screen max-w-md flex-col justify-center text-white">
              <h2 className="heading-h2 mb-5 font-heading text-5xl font-bold md:mb-6 md:text-6xl">
                Give Them Space. Give Them Leverage.
              </h2>
              <p className="text-medium mb-6 text-lg">
                Every rejection taught us to look closer. To obsess over details. 
                To create room for those ready to flip the earth.
              </p>
              <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                <Button 
                  onClick={scrollToFooter}
                  className="bg-[#A59D94] hover:bg-[#A59D94]/90 text-white border-0 px-8 py-3"
                >
                  JOIN THE FIRST 500
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div
        className="sticky top-0 z-0 min-h-screen"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url("/images/A4DF01BA-9459-432D-826A-40B96BA3B29B_4_5005_c.jpg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="px-[5%]">
          <div className="container mx-auto">
            <div className="flex min-h-screen max-w-md flex-col justify-center text-white">
              <h2 className="heading-h2 mb-5 font-heading text-5xl font-bold md:mb-6 md:text-6xl">
                Watch Them Flip The Earth
              </h2>
              <p className="text-medium mb-6 text-lg">
                Premium French terry. LA sunset colors. Thoughtful fits. 
                This is more than fashion—it's your leverage against limits.
              </p>
              <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                <Button 
                  onClick={scrollToFooter}
                  className="bg-[#A59D94] hover:bg-[#A59D94]/90 text-white border-0 px-8 py-3"
                >
                  CLAIM YOUR SPOT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}