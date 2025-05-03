import React, { useState, useEffect, useCallback } from "react";

interface TypedTextProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  deleteSpeed?: number;
  delayBeforeDelete?: number;
  delayBeforeRestart?: number;
}

export const TypedText: React.FC<TypedTextProps> = ({
  text,
  className = "",
  typingSpeed = 100,
  deleteSpeed = 50,
  delayBeforeDelete = 2000,
  delayBeforeRestart = 200,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let delay: number;

    if (!isDeleting && index < text.length) {
      // Typing
      delay = Math.floor(Math.random() * (typingSpeed * 0.5)) + typingSpeed * 0.75;
      timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, index + 1));
        setIndex(index + 1);
      }, delay);
    } else if (!isDeleting && index === text.length) {
      // Wait before deleting
      delay = delayBeforeDelete;
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delay);
    } else if (isDeleting && index > 0) {
      // Deleting
      delay = deleteSpeed;
      timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, index - 1));
        setIndex(index - 1);
      }, delay);
    } else if (isDeleting && index === 0) {
      // Wait before restarting
      delay = delayBeforeRestart;
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, typingSpeed, deleteSpeed, delayBeforeDelete, delayBeforeRestart]);

  // Reset animation if text prop changes
  useEffect(() => {
    setDisplayedText("");
    setIndex(0);
    setIsDeleting(false);
  }, [text]);

  return (
    <span className={className}>
      {displayedText}
      <span className="inline-block w-[2px] h-6 bg-primary ml-1 animate-pulse">
        &nbsp;
      </span>
    </span>
  );
};