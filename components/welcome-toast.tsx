"use client";

import { useEffect } from "react";
import { toast } from "sonner";

export function WelcomeToast() {
  useEffect(() => {
    // ignore if screen height is too small
    if (window.innerHeight < 650) return;
    if (!document.cookie.includes("welcome-toast=2")) {
      toast("Welcome to Pythogen", {
        id: "welcome-toast",
        duration: 8000,
        onDismiss: () => {
          document.cookie = "welcome-toast=2; max-age=31536000; path=/";
        },
        description: (
          <>
            Focused software for calmer screens.{" "}
            <a
              href="/canvas"
              className="text-blue-600 hover:underline"
            >
              Explore Canvas
            </a>
            .
          </>
        ),
      });
    }
  }, []);

  return null;
}
