"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer17() {
  const formState = useForm();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#A59D94] px-[5%] py-12 text-white md:py-18 lg:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-start justify-between gap-x-[8vw] gap-y-12 pb-12 sm:gap-y-10 md:gap-y-14 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:pb-20">
          <div className="flex flex-col items-start">
            <a href="#" className="mb-8 flex items-center gap-3">
              <img
                src="/images/logo/darl-logo.png"
                alt="With Us Logo"
                className="h-12 w-auto"
              />
              <span className="font-heading text-3xl font-bold">WITH US</span>
            </a>
            <ul className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-start gap-y-4 md:grid-flow-col md:grid-cols-[max-content] md:justify-start md:justify-items-start md:gap-x-6">
              <li className="font-semibold">
                <a href="#" className="hover:opacity-80 transition-opacity">Instagram</a>
              </li>
              <li className="font-semibold">
                <a href="#" className="hover:opacity-80 transition-opacity">Facebook</a>
              </li>
              <li className="font-semibold">
                <a href="#" className="hover:opacity-80 transition-opacity">Twitter</a>
              </li>
              <li className="font-semibold">
                <a href="#" className="hover:opacity-80 transition-opacity">YouTube</a>
              </li>
              <li className="font-semibold">
                <a href="#" className="hover:opacity-80 transition-opacity">LinkedIn</a>
              </li>
            </ul>
          </div>
          <div className="max-w-md lg:min-w-[25rem]">
            <p className="mb-3 font-heading font-semibold md:mb-4">Join</p>
            <div>
              <form
                className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-y-4 md:gap-4"
                onSubmit={formState.handleSubmit}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email here"
                  value={formState.email}
                  onChange={formState.handleSetEmail}
                  className="bg-white text-[#222720] placeholder:text-[#222720]/60"
                />
                <Button 
                  type="submit" 
                  className="bg-white text-[#222720] hover:bg-white/90"
                  size="sm"
                >
                  Join
                </Button>
              </form>
              <p className="text-sm">
                By subscribing, you agree to receive updates from WITH US.
              </p>
            </div>
          </div>
        </div>
        <div className="pb-8 md:pb-10 lg:pb-12">
          <span className="font-heading text-6xl font-bold uppercase tracking-wider opacity-20">
            WITH US
          </span>
        </div>
        <div className="h-px w-full bg-white/20" />
        <div className="flex flex-col items-start justify-start pt-6 pb-4 text-sm md:flex-row md:items-center md:justify-center md:pt-8 md:pb-0 md:text-center">
          <p>© {currentYear} WITH US. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}