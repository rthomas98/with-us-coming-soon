import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React, { useState } from "react";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  return {
    toggleMobileMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
  };
};

export function Navbar() {
  const useActive = useRelume();
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 72; // Height of fixed navbar (adjust as needed)
      const sectionTop = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToFooter = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="flex w-full items-center border-b border-[#A9A39A]/20 bg-[#222720] text-white lg:min-h-18 lg:px-[5%]">
      <div className="mx-auto size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between lg:gap-4">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <a href="#" className="flex items-center gap-3">
            <img 
              src="/images/logo/darl-logo.png" 
              alt="With Us Logo" 
              className="h-10 w-auto"
            />
            <span className="font-heading text-2xl font-bold">With Us</span>
          </a>
          <div className="flex items-center gap-4 lg:hidden">
            <div>
              <Button 
                onClick={scrollToFooter}
                className="w-full px-4 py-1 bg-[#A59D94] hover:bg-[#A59D94]/90 text-white border-0" 
                title="Sign Up" 
                size="sm"
              >
                Sign Up
              </Button>
            </div>
            <button
              className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
              onClick={useActive.toggleMobileMenu}
            >
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-white"
                animate={useActive.animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: 8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-white"
                animate={useActive.animateMobileMenu}
                variants={{
                  open: { width: 0, transition: { duration: 0.1 } },
                  closed: {
                    width: "1.5rem",
                    transition: { delay: 0.3, duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-white"
                animate={useActive.animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: -8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
            </button>
          </div>
        </div>
        <motion.div
          variants={{
            open: { height: "var(--height-open, 100dvh)" },
            close: { height: "var(--height-closed, 0)" },
          }}
          animate={useActive.animateMobileMenu}
          initial="close"
          exit="close"
          transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] text-center lg:flex lg:items-center lg:justify-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          <a
            href="#"
            onClick={scrollToTop}
            className="text-regular block py-3 first:pt-7 hover:text-[#A9A39A] transition-colors lg:px-4 lg:py-2 first:lg:pt-2"
          >
            About Us
          </a>
          <a
            href="#philosophy"
            onClick={(e) => scrollToSection(e, 'philosophy')}
            className="text-regular block py-3 first:pt-7 hover:text-[#A9A39A] transition-colors lg:px-4 lg:py-2 first:lg:pt-2"
          >
            Our Philosophy
          </a>
          <a
            href="#preview"
            onClick={(e) => scrollToSection(e, 'preview')}
            className="text-regular block py-3 first:pt-7 hover:text-[#A9A39A] transition-colors lg:px-4 lg:py-2 first:lg:pt-2"
          >
            The Preview
          </a>
          <a
            href="#community"
            onClick={(e) => scrollToSection(e, 'community')}
            className="text-regular block py-3 first:pt-7 hover:text-[#A9A39A] transition-colors lg:px-4 lg:py-2 first:lg:pt-2"
          >
            Community
          </a>
        </motion.div>
        <div className="hidden justify-self-end lg:block">
          <Button 
            onClick={scrollToFooter}
            className="px-6 py-2 bg-[#A59D94] hover:bg-[#A59D94]/90 text-white border-0" 
            title="Sign Up" 
            size="sm"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </section>
  );
}