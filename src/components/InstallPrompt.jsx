import { useState, useEffect } from "react";

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      const wasDismissed = localStorage.getItem("pwa-install-dismissed");
      if (!wasDismissed) setShowPrompt(true);
    };

    const onInstalled = () => {
      setShowPrompt(false);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", onInstalled);

    // Don't show if already running as installed PWA
    if (
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone
    ) {
      setShowPrompt(false);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") setShowPrompt(false);
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    setDismissed(true);
    localStorage.setItem("pwa-install-dismissed", "true");
  };

  if (!showPrompt || dismissed) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 z-50 md:bottom-6 md:left-auto md:right-6 md:max-w-sm">
      <div className="rounded-xl bg-slate-800 text-white shadow-lg ring-1 ring-slate-700 p-4">
        <div className="flex items-start gap-3">
          <img
            src="/assets/rojgar.png"
            alt="Rojgar Setu"
            className="h-12 w-12 rounded-lg flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm">Install Rojgar Setu</p>
            <p className="text-slate-300 text-xs mt-0.5">
              Add to your home screen for quick access and a better experience.
            </p>
            <div className="flex gap-2 mt-3">
              <button
                type="button"
                onClick={handleInstall}
                className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-900 text-sm font-medium hover:bg-amber-400"
              >
                Install
              </button>
              <button
                type="button"
                onClick={handleDismiss}
                className="px-3 py-1.5 rounded-lg text-slate-400 text-sm hover:text-white"
              >
                Not now
              </button>
            </div>
          </div>
          <button
            type="button"
            onClick={handleDismiss}
            className="text-slate-500 hover:text-slate-300 p-1 -m-1"
            aria-label="Close"
          >
            <span className="text-lg leading-none">×</span>
          </button>
        </div>
      </div>
    </div>
  );
}
