"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <Card className="max-w-3xl mx-auto bg-card/95 backdrop-blur-sm border-primary/20 shadow-2xl">
        <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/80 text-center sm:text-left">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies. 
            <Link href="/privacy-policy" className="underline hover:text-primary ml-1">
              Learn more
            </Link>.
          </p>
          <Button 
            onClick={handleAccept} 
            className="flex-shrink-0 bg-accent hover:bg-accent/90 text-white"
            size="sm"
          >
            Accept
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieBanner;
