export function diff_years() {
  const today = new Date(Date.now())
  const dt1 = new Date("January 1, 2018 08:11:00")
  const dt2 = new Date(today.toDateString())
  let diff = (dt2.getTime() - dt1.getTime()) / 1000
  diff /= (60 * 60 * 24)
  return Math.abs(Math.round(diff / 365.25))
}