import React, { useState, useEffect } from "react";

interface MemberCounterProps {
  totalSpots?: number;
  startingCount?: number;
  className?: string;
}

export function MemberCounter({ 
  totalSpots = 500, 
  startingCount = 113,
  className = "" 
}: MemberCounterProps) {
  // Simulate a dynamic counter - in production, this would fetch from your backend
  const [spotsRemaining, setSpotsRemaining] = useState(totalSpots - startingCount);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // Simulate occasional decrements (someone joining)
    const interval = setInterval(() => {
      setSpotsRemaining(prev => {
        // Random chance of someone joining
        if (Math.random() > 0.95 && prev > 50) {
          return prev - 1;
        }
        return prev;
      });
    }, 30000); // Check every 30 seconds

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const spotsToken = totalSpots - spotsRemaining;
  const percentageFilled = (spotsToken / totalSpots) * 100;

  if (isLoading) {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="h-6 w-32 bg-white/20 rounded"></div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="flex items-center gap-3">
        {/* Live indicator */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 h-2 w-2 bg-green-400 rounded-full animate-ping"></div>
          </div>
          <span className="text-xs font-medium uppercase tracking-wider opacity-80">
            Live
          </span>
        </div>
        
        {/* Counter */}
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold font-heading">
            {spotsRemaining}
          </span>
          <span className="text-sm opacity-80">
            of {totalSpots} spots remaining
          </span>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="mt-3 w-full max-w-xs">
        <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#A59D94] transition-all duration-500 ease-out"
            style={{ width: `${percentageFilled}%` }}
          />
        </div>
        <p className="mt-2 text-xs opacity-60">
          {spotsToken} members already joined
        </p>
      </div>
    </div>
  );
}