import React, { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import FuzzyText from "./components/FuzzyText";
import SplashCursor from "./components/SplashCursor";

const queryClient = new QueryClient();

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-4 bg-background">
      <FuzzyText 
        fontSize="3rem"
        baseIntensity={0.2} 
        hoverIntensity={0.5} 
        enableHover={true}
        color="#ffffff"
      >
        Loading...
      </FuzzyText>
    </div>
  );
};

const MainApp = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <>
      <SplashCursor />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        <Route path="*" element={
          <div className="flex items-center justify-center h-screen flex-col gap-4">
            <FuzzyText>404</FuzzyText>
            <FuzzyText fontSize="3rem" fontWeight={400}>not found</FuzzyText>
          </div>
        } />
      </Routes>
    </BrowserRouter>
    </>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <MainApp />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
