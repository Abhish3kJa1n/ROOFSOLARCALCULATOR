import { Link } from "@tanstack/react-router"
import type { ReactNode } from "react"
import { cities } from "@/data/cities"

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2 focus:text-sm focus:text-ink"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-30 border-b border-line bg-surface/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 lg:px-6">
          <Link to="/" className="flex min-w-0 items-center gap-2">
            <span className="grid size-8 shrink-0 place-items-center rounded-md bg-primary text-sm font-semibold text-on-primary">
              M
            </span>
            <span className="truncate text-base font-semibold tracking-tight">Meridian Estimate</span>
          </Link>
          <nav className="flex items-center gap-1 text-sm font-medium">
            <Link
              to="/"
              activeOptions={{ exact: true }}
              className="rounded-md px-3 py-2 text-muted hover:text-ink data-[status=active]:text-primary"
            >
              Estimator
            </Link>
            <Link
              to="/cities"
              className="rounded-md px-3 py-2 text-muted hover:text-ink data-[status=active]:text-primary"
            >
              Cities
            </Link>
          </nav>
        </div>
      </header>
      <div id="content">{children}</div>
      <footer className="mt-16 border-t border-line bg-surface">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-12 lg:px-6">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold">Meridian Estimate</p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              Planning figures for a U.S. roof replacement and a home solar array. Not a bid, not a
              utility tariff, and not tax advice. Confirm scope with a licensed contractor and the
              credit rules with a tax preparer before you sign anything.
            </p>
          </div>
          <div className="text-sm lg:col-span-5 lg:text-right">
            <p className="font-medium">{cities.length} city pages from one template</p>
            <p className="mt-2 text-muted">
              <Link to="/cities" className="text-primary underline-offset-2 hover:underline">
                Browse cities
              </Link>
              <span className="px-2 text-muted">/</span>
              <a href="/sitemap.xml" className="text-primary underline-offset-2 hover:underline">
                Sitemap
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
