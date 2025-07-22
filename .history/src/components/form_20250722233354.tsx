"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";

export default function Form() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (step === 1) {
      if (!formData.email || !isValidEmail(formData.email)) {
        toast.error("Please enter a valid email address");
        return;
      }
      setStep(2);
      return;
    }

    if (step === 2) {
      if (!formData.name) {
        toast.error("Please enter your name");
        return;
      }

      setLoading(true);

      // ✅ Redirect to Gumroad
      const gumroadURL = `https://your-gumroad-link.com`; // Replace with your Gumroad link
      window.location.href = gumroadURL;
    }
  };

  return (
    <div className="w-full relative">
      <form onSubmit={handleSubmit} className="relative">
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="email-step"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex relative"
            >
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="flex-grow bg-background border border-border text-foreground px-4 py-3 rounded-[12] focus:outline-[#e5ff00] transition-all duration-300"
                disabled={loading}
                required
              />
              <button
                type="submit"
                className="absolute right-0 top-0 bottom-0 bg-[#e5ff00] text-black font-semibold px-5 py-2 m-2 rounded-[12] hover:bg-opacity-90 transition-all disabled:opacity-50"
                disabled={loading}
              >
                Continue
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="name-step"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex items-center relative"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="flex-grow bg-background border border-border text-foreground px-4 py-3 rounded-[12] focus:outline-[#e5ff00] transition-all duration-300"
                disabled={loading}
                required
              />
              <button
                type="submit"
                className="absolute right-0 top-0 bottom-0 bg-[#e5ff00] text-black font-semibold px-5 py-2 m-2 rounded-[12] hover:bg-opacity-90 transition-all disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Redirecting..." : "Join Waitlist"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
