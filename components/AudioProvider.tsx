"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";

type AudioContextType = {
  isPlaying: boolean;
  toggleSound: () => void;
  showSoundPrompt: boolean;
  handleEnableSound: () => void;
  handleDismissPrompt: () => void;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSoundPrompt, setShowSoundPrompt] = useState(true); // Start as true by default
  const [showPageNotification, setShowPageNotification] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioInitializedRef = useRef(false);
  const pathname = usePathname();

  // Initial setup
  useEffect(() => {
    // Safely run in browser context
    if (typeof window !== "undefined") {
      // Check if user has seen the prompt before
      const hasSeenPrompt =
        localStorage.getItem("spaceX_promptShown") === "true";
      const storedAudioState = localStorage.getItem("spaceX_audioPlaying");
      const shouldPlay = storedAudioState === "true";

      // Set correct initial states based on localStorage
      setShowSoundPrompt(!hasSeenPrompt);
      setIsPlaying(shouldPlay);

      // Create audio element only once
      if (!audioRef.current) {
        audioRef.current = new Audio("/sounds/space-ambient.mp3");
        audioRef.current.loop = true;
        audioInitializedRef.current = true;

        // If it should be playing and there was previous interaction, try to play it
        if (shouldPlay && hasSeenPrompt) {
          audioRef.current.play().catch((error) => {
            console.error("Audio playback failed:", error);
            setIsPlaying(false);
            localStorage.setItem("spaceX_audioPlaying", "false");
          });
        }
      }
    }
  }, []);

  // Handle audio sync if another instance changes it
  useEffect(() => {
    const syncAudioState = () => {
      if (!audioRef.current) return;

      const currentStoredState =
        localStorage.getItem("spaceX_audioPlaying") === "true";

      // Handle the paused state correctly
      if (currentStoredState && audioRef.current.paused) {
        audioRef.current
          .play()
          .catch((e) => console.error("Failed to sync audio state", e));
      } else if (!currentStoredState && !audioRef.current.paused) {
        audioRef.current.pause();
      }
      setIsPlaying(currentStoredState);
    };

    // Listen for storage events from other tabs/windows
    window.addEventListener("storage", syncAudioState);
    return () => {
      window.removeEventListener("storage", syncAudioState);
    };
  }, []);

  // Track page navigation and show notification
  useEffect(() => {
    // If audio is playing and we navigate to a new page
    if (isPlaying && audioInitializedRef.current && pathname) {
      setShowPageNotification(true);

      // Hide notification after 4 seconds
      const timer = setTimeout(() => {
        setShowPageNotification(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [pathname, isPlaying]);

  const handleEnableSound = () => {
    if (!audioRef.current) return;

    audioRef.current.play().catch((error) => {
      console.error("Audio playback failed:", error);
    });
    setIsPlaying(true);
    setShowSoundPrompt(false);
    localStorage.setItem("spaceX_audioPlaying", "true");
    localStorage.setItem("spaceX_promptShown", "true");
  };

  const handleDismissPrompt = () => {
    setShowSoundPrompt(false);
    localStorage.setItem("spaceX_promptShown", "true");
  };

  const toggleSound = () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        // Ensure audio is definitely paused
        audioRef.current.pause();
        audioRef.current.currentTime = 0; // Reset playback position
        setIsPlaying(false);
        localStorage.setItem("spaceX_audioPlaying", "false");
      } else {
        // Make sure it plays
        const playPromise = audioRef.current.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              localStorage.setItem("spaceX_audioPlaying", "true");
            })
            .catch((error) => {
              console.error("Audio playback failed:", error);
              setIsPlaying(false);
              localStorage.setItem("spaceX_audioPlaying", "false");
            });
        }
      }
      localStorage.setItem("spaceX_promptShown", "true");
    } catch (error) {
      console.error("Error toggling sound:", error);
    }
  };

  return (
    <>
      <AudioContext.Provider
        value={{
          isPlaying,
          toggleSound,
          showSoundPrompt,
          handleEnableSound,
          handleDismissPrompt,
        }}>
        {children}
      </AudioContext.Provider>

      {/* Immersive Sound Experience Prompt */}
      {showSoundPrompt && (
        <div className="fixed inset-0 flex items-center justify-center z-[100] bg-black/80">
          <div className="bg-[#0B0D17]/90 border border-white/20 rounded-lg p-8 max-w-md mx-4 shadow-2xl animate-fadeIn">
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24 mb-6">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping"></div>
                <div className="relative flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-white text-2xl font-bold mb-3 text-center">
                Enhanced Space Experience
              </h3>
              <p className="text-gray-300 text-center mb-8 leading-relaxed">
                For the most immersive journey through space, we recommend using
                headphones and enabling our ambient soundtrack to accompany your
                exploration.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <button
                  onClick={handleEnableSound}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-md font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                    />
                  </svg>
                  Enable Sound
                </button>
                <button
                  onClick={handleDismissPrompt}
                  className="flex-1 bg-transparent border border-white/30 text-white py-4 px-6 rounded-md font-medium hover:bg-white/5 transition-colors shadow-lg">
                  Continue Without Sound
                </button>
              </div>

              <p className="text-gray-400 text-xs mt-6 text-center">
                You can toggle the sound anytime by clicking the SpaceX logo in
                the top left corner
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Page Change Notification */}
      {showPageNotification && (
        <div className="fixed bottom-8 right-8 bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-md p-4 rounded-lg shadow-lg z-50 animate-slideIn">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping"></div>
              <div className="relative w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <p className="text-white font-medium">Sound continues playing</p>
              <p className="text-gray-300 text-sm">Click logo to pause</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const useAudio = () => {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error("useAudio must be used inside AudioProvider");
  return ctx;
};
