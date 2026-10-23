function AdLabel() {
  return <p className="mb-2 text-xs font-medium tracking-wide text-muted">Advertisement</p>
}

export function AdRail() {
  return (
    <aside className="ml-auto hidden w-ad-rail lg:block" aria-label="Advertisement">
      <div className="sticky top-20">
        <AdLabel />
        <div
          data-ad-slot="rail-300x600"
          data-ad-format="half-page"
          className="flex h-ad-rail w-ad-rail shrink-0 flex-col overflow-hidden rounded-xl border border-dashed border-line bg-surface"
        >
          <div className="grid flex-1 place-items-center px-4 text-center">
            <p className="text-sm leading-relaxed text-muted">
              300 × 600
              <span className="mt-1 block">Half-page display unit</span>
            </p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export function AdInfeed() {
  return (
    <aside aria-label="Advertisement" className="my-8">
      <AdLabel />
      <div
        data-ad-slot="infeed-native"
        data-ad-format="in-feed"
        className="flex h-ad-feed w-full shrink-0 flex-col overflow-hidden rounded-xl border border-dashed border-line bg-surface"
      >
        <div className="grid flex-1 place-items-center px-4 text-center">
          <p className="text-sm leading-relaxed text-muted">
            In-feed native unit
            <span className="mt-1 block">Reserved height — does not shift the page</span>
          </p>
        </div>
      </div>
    </aside>
  )
}