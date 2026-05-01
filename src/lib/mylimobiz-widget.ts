const WIDGET_LOADER_SRC =
  "https://book.mylimobiz.com/v4/widgets/widget-loader.js";

/**
 * MyLimoBiz widget-loader only scans the DOM once when each script tag executes.
 * Next.js client components often mount booking anchors after that run, so we load
 * the loader again (cache-busted) after hydration so new anchors get initialized.
 */
export function scanMylimobizWidgets(): void {
  if (typeof document === "undefined") return;

  const script = document.createElement("script");
  script.src = `${WIDGET_LOADER_SRC}?ores_scan=${Date.now()}`;
  script.async = true;
  document.body.appendChild(script);
}
