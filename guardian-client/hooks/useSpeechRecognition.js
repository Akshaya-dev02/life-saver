"use client";

import { useEffect, useRef, useState } from "react";

export default function useSpeechRecognition(triggerSOS) {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  const recognitionRef = useRef(null);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !("webkitSpeechRecognition" in window)
    ) {
      return;
    }

    const recognition = new window.webkitSpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.onresult = (event) => {
      let finalText = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        finalText += event.results[i][0].transcript + " ";
      }

      setTranscript(finalText);

      const text = finalText.toLowerCase();

      if (
        text.includes("help") ||
        text.includes("save me") ||
        text.includes("emergency") ||
        text.includes("danger")
      ) {
        triggerSOS(finalText);
      }
    };

    recognitionRef.current = recognition;
  }, []);

  const startListening = () => {
    recognitionRef.current?.start();
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
  };

  return {
    listening,
    transcript,
    startListening,
    stopListening,
  };
}