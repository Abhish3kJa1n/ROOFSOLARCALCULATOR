import { useEffect, useState } from "react"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { formatMoney, formatMoneyCompact, type YearPoint } from "@/lib/estimate"

function useReducedMotion() {
  const [reduce, setReduce] = useState(false)
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReduce(media.matches)
    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [])
  return reduce
}

export function SavingsChart({ series }: { series: YearPoint[] }) {
  const [ready, setReady] = useState(false)
  const reduce = useReducedMotion()
  useEffect(() => setReady(true), [])

  return (
    <div className="h-64 w-full min-w-0">
      {ready ? (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={series} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="var(--color-line)" vertical={false} />
            <XAxis
              dataKey="year"
              tick={{ fill: "var(--color-muted)", fontSize: 12 }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tickFormatter={(value: number) => formatMoneyCompact(value)}
              tick={{ fill: "var(--color-muted)", fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              width={56}
            />
            <Tooltip
              formatter={(value) => {
                const amount = typeof value === "number" ? value : Number(value)
                return [formatMoney(Number.isFinite(amount) ? amount : 0), "Cumulative savings"]
              }}
              labelFormatter={(label) => `Year ${label}`}
              contentStyle={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-line)",
                borderRadius: "0.75rem",
                color: "var(--color-ink)",
              }}
            />
            <Area
              type="monotone"
              dataKey="cumulative"
              stroke="var(--color-primary)"
              fill="var(--color-primary)"
              fillOpacity={0.12}
              strokeWidth={2}
              isAnimationActive={!reduce}
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : null}
    </div>
  )
}
