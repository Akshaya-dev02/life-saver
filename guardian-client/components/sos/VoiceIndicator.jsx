"use client";

import useSpeechRecognition from "@/hooks/useSpeechRecognition";

export default function VoiceIndicator() {

  const triggerSOS = (text) => {
    alert("🚨 SOS Triggered!\n\nDetected: " + text);
  };

  const {
    listening,
    transcript,
    startListening,
    stopListening,
  } = useSpeechRecognition(triggerSOS);

  return (
    <div className="bg-white rounded-xl shadow-xl p-6">

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        🎤 AI Voice Assistant
      </h2>

      <div className="mb-4">
        <span className="font-semibold text-gray-700">
          Status :
        </span>

        <span
          className={`ml-2 font-bold ${
            listening ? "text-green-600" : "text-red-600"
          }`}
        >
          {listening ? "Listening..." : "Stopped"}
        </span>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={startListening}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
        >
          🎙 Start
        </button>

        <button
          onClick={stopListening}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg"
        >
          ⏹ Stop
        </button>
      </div>

      <div className="border rounded-xl bg-gray-50 p-4 min-h-[120px]">

        <h3 className="font-semibold text-lg text-gray-800 mb-2">
          Live Transcript
        </h3>

        <p className="text-gray-700 leading-7">
          {transcript || "Start speaking..."}
        </p>

      </div>

    </div>
  );
}