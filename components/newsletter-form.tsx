"use client";

import { useState } from "react";
import { toast } from "sonner";
import clsx from "clsx";

interface NewsletterFormProps {
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
  buttonText?: string;
}

export function NewsletterForm({
  className = "flex flex-col sm:flex-row gap-2",
  inputClassName = "rounded-md border border-neutral-300 px-4 py-2 min-w-[220px] focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:bg-black dark:text-white",
  buttonClassName = "rounded-md bg-blue-500 px-6 py-2 font-bold text-white transition-colors hover:bg-blue-600",
  buttonText = "Sign Up",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const subscribedEmails = JSON.parse(localStorage.getItem("pythogen_subscribers") || "[]");
    
    if (subscribedEmails.includes(email)) {
      toast.error("You are already subscribed!");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        subscribedEmails.push(email);
        localStorage.setItem("pythogen_subscribers", JSON.stringify(subscribedEmails));
        toast.success("Subscribed successfully! Thank you.");
        setEmail("");
      } else {
        toast.error(data.error || "Failed to subscribe");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email address"
        className={inputClassName}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={loading}
      />
      <button
        type="submit"
        className={clsx(buttonClassName, { "opacity-50 cursor-not-allowed": loading })}
        disabled={loading}
      >
        {loading ? "..." : buttonText}
      </button>
    </form>
  );
}
