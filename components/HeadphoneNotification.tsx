"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell } from "lucide-react";

export default function HeadphoneNotification() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show notification immediately when page loads
    setShow(true);

    // Auto-hide after 5 seconds
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-pink-500 text-white px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2"
        >
          <Bell size={18} />
          <span className="text-sm font-medium">
            For a better experience, please turn on the sound from the logo and use headphones 🎧
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
