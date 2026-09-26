"use client";

import { useState, useSyncExternalStore } from "react";

const PREFERENCES_KEY = "synapto.cookie-preferences";
const PREFERENCES_EVENT = "synapto-cookie-preferences";

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(PREFERENCES_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(PREFERENCES_EVENT, onChange);
  };
}

function getAnalyticsPreference() {
  try {
    const stored = window.localStorage.getItem(PREFERENCES_KEY);
    return stored ? JSON.parse(stored).analytics === true : false;
  } catch {
    return false;
  }
}

export default function CookiePreferences() {
  const analyticsEnabled = useSyncExternalStore(subscribe, getAnalyticsPreference, () => false);
  const [saved, setSaved] = useState(false);

  function savePreferences(enabled: boolean) {
    try {
      window.localStorage.setItem(
        PREFERENCES_KEY,
        JSON.stringify({ essential: true, analytics: enabled }),
      );
      window.dispatchEvent(new Event(PREFERENCES_EVENT));
      setSaved(true);
    } catch {
      setSaved(false);
    }
  }

  return (
    <section
      aria-labelledby="cookie-preferences-title"
      className="mt-8 border-y border-[var(--fm-border)] py-7"
    >
      <div className="mb-6">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--fm-lime)]">
          Your choices
        </p>
        <h2
          id="cookie-preferences-title"
          className="mt-2 font-display text-2xl font-bold text-[var(--fm-text-primary)]"
        >
          Cookie preferences
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--fm-text-secondary)]">
          Essential storage keeps core site features working. Optional analytics can be switched on
          or off at any time.
        </p>
      </div>

      <div className="divide-y divide-[var(--fm-border)]">
        <div className="flex items-center justify-between gap-5 py-5">
          <div>
            <h3 className="font-semibold text-[var(--fm-text-primary)]">Essential</h3>
            <p className="mt-1 text-sm leading-6 text-[var(--fm-text-secondary)]">
              Required for security, account sessions, and saved choices.
            </p>
          </div>
          <label className="flex shrink-0 items-center gap-2 text-sm font-semibold text-[var(--fm-text-secondary)]">
            <input type="checkbox" checked disabled className="size-4 accent-[var(--fm-lime)]" />
            Always on
          </label>
        </div>

        <div className="flex items-center justify-between gap-5 py-5">
          <div>
            <h3 className="font-semibold text-[var(--fm-text-primary)]">Analytics</h3>
            <p className="mt-1 text-sm leading-6 text-[var(--fm-text-secondary)]">
              Helps us understand site use and improve pages, where analytics is enabled.
            </p>
          </div>
          <label className="flex shrink-0 items-center gap-2 text-sm font-semibold text-[var(--fm-text-primary)]">
            <input
              type="checkbox"
              checked={analyticsEnabled}
              onChange={(event) => savePreferences(event.target.checked)}
              className="size-4 accent-[var(--fm-lime)]"
              aria-label="Allow analytics cookies"
            />
            Allow
          </label>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={() => savePreferences(analyticsEnabled)}
          className="inline-flex min-h-11 items-center justify-center rounded-[var(--fm-radius-pill)] bg-[var(--fm-lime)] px-5 text-sm font-bold text-[var(--fm-graphite-deep)] transition-colors hover:bg-[var(--fm-lime-bright)]"
        >
          Save preferences
        </button>
        <p aria-live="polite" className="text-sm text-[var(--fm-text-secondary)]">
          {saved ? "Preferences saved on this device." : "Your choice is stored in this browser."}
        </p>
      </div>
    </section>
  );
}