import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

interface Item {
  image: { src: string; alt?: string };
  heading: string;
  description: string;
}

interface Props {
  tagline?: string;
  heading?: string;
  description?: string;
  stickyImageAlt?: string;
  items?: Item[];
}

export function Layout356({
  tagline = "The Process",
  heading = "How Obsession Becomes Reality",
  description = "Every thread has a story. Every stitch has intention. This is how rejection transforms into something you can wear.",
  stickyImageAlt = "With Us Journey",
  items = [
    {
      image: {
        src: "/images/98AC867E-F7C1-4AA1-8CB0-836F065707F3_4_5005_c.jpeg",
        alt: "The vision takes form",
      },
      heading: "Where It Starts",
      description:
        "In the quiet hours before dawn. In the space between 'no' and 'not yet.' This is where obsession begins—with a vision of what movement should feel like against your skin.",
    },
    {
      image: {
        src: "/images/47A177F1-2826-4D03-9FCA-105C50108165.jpeg",
        alt: "Crafting the details",
      },
      heading: "The Obsessive Details",
      description:
        "Every rejection taught us to look closer. To obsess over the curve of a seam, the weight of a thread. French terry that breathes. Colors that capture LA's golden hour. Nothing is accident.",
    },
    {
      image: {
        src: "/images/8E1CB754-4722-40B8-8F13-AC5B8A78E100_4_5005_c.jpeg",
        alt: "Living the movement",
      },
      heading: "Made to Flip Earth",
      description:
        "From sunrise runs to sunset sessions. From the studio to the street. This isn't about what you wear—it's about what you're building while you wear it. Your story, your movement, your leverage.",
    },
  ],
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const { top, bottom } = ref.getBoundingClientRect();
          const isInView = top < windowHeight / 2 && bottom > windowHeight / 2;
          if (isInView) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-[#A59D94] md:mb-4">{tagline}</p>
          <h2 className="heading-h2 mb-5 font-heading font-bold text-[#222720] md:mb-6">
            {heading}
          </h2>
          <p className="text-medium text-[#222720]">{description}</p>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-12 md:gap-18 lg:grid-cols-2 lg:gap-20">
          <div className="static top-0 lg:sticky lg:top-[25%]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative size-full"
              >
                <img
                  src={items[activeIndex].image.src}
                  alt={items[activeIndex].image.alt || stickyImageAlt}
                  className="aspect-square size-full rounded-lg object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="static grid grid-cols-1 gap-12 md:gap-y-24">
            {items.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={clsx(
                  "flex min-h-[60vh] flex-col justify-center lg:min-h-[70vh]",
                  {
                    "opacity-100": activeIndex === index,
                    "opacity-30": activeIndex !== index,
                  }
                )}
              >
                <h3 className="heading-h4 mb-5 font-heading font-bold text-[#222720] md:mb-6">
                  {item.heading}
                </h3>
                <p className="text-medium text-[#222720]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}