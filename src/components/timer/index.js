function diff_years(start) {
  const today = new Date(Date.now())
  const dt1 = new Date(start)
  const dt2 = new Date(today.toDateString())
  let diff = (dt2.getTime() - dt1.getTime()) / 1000
  diff /= (60 * 60 * 24)
  return Math.abs(Math.round(diff / 365.25))
}

function agetostr(age) {
  let txt
  let count = age % 100;
  if (count >= 5 && count <= 20) {
    txt = "лет"
  } else {
    count = count % 10;
    if (count === 1) {
      txt = "год"
    } else if (count >= 2 && count <= 4) {
      txt = "года"
    } else {
      txt = "лет"
    }
  }
  return age + " " + txt
}

export function trainerExp() {
  const years = diff_years("August 20, 2018 00:00:00")
  return agetostr(years)
}
export function spmanExp() {
  const years = diff_years("August 20, 2006 00:00:00")
  return agetostr(years)
}