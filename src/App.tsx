import React, { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import SplashCursor from "./components/SplashCursor";
import LoadingScreen from "./components/Loader"
import FuzzyText from "./components/FuzzyText";

const queryClient = new QueryClient();

const MainApp = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
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
