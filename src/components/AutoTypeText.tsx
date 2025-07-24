// src/components/AutoTypeText.tsx

import React, { useState, useEffect } from 'react';

interface AutoTypeTextProps {
  staticPrefix?: string;
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenPhrases?: number;
  className?: string;
}

const AutoTypeText: React.FC<AutoTypeTextProps> = ({
  staticPrefix = '',
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenPhrases = 1500,
  className = '',
}) => {
  const [currentText, setCurrentText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullPhrase = phrases[phraseIndex];
      // const speed = isDeleting ? deletingSpeed : typingSpeed; // REMOVE this line

      setCurrentText(
        isDeleting
          ? fullPhrase.substring(0, currentText.length - 1)
          : fullPhrase.substring(0, currentText.length + 1)
      );

      if (!isDeleting && currentText === fullPhrase) {
        // Pause at the end of typing
        setTimeout(() => setIsDeleting(true), delayBetweenPhrases);
      } else if (isDeleting && currentText === '') {
        // Move to the next phrase after deleting
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    // Use typingSpeed or deletingSpeed directly here
    const currentSpeed = isDeleting ? deletingSpeed : typingSpeed;
    const typingTimer = setTimeout(handleTyping, currentSpeed); // USE currentSpeed here

    return () => clearTimeout(typingTimer);
  }, [currentText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, delayBetweenPhrases]);

  return (
    <span className={className}>
      {staticPrefix}
      {currentText}
      <span className="inline-block animate-blink">|</span> {/* Blinking cursor */}
    </span>
  );
};

export default AutoTypeText;