import React from 'react'

export default function Info({info}) {
  return (
    <div>
      <p>Confirmed today: {info.today_new_confirmed}</p>
      <p>Today deaths: {info.today_new_deaths}</p>
      <p>Today recovered: {info.today_new_recovered}</p>
      <p>Total open cases: {info.today_open_cases}</p>
      <p>Total recovered: {info.today_recovered}</p>
      <p>Total death: {info.today_deaths}</p>
      <p>Total confirmed: {info.today_confirmed}</p>
    </div>
  )
}
