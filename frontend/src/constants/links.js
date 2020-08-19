// Link generator
import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "Forside",
    url: "/",
  },
  {
    id: 2,
    text: "Hoteller og destinationer",
    url: "/countries/danmark/",
  },
  {
    id: 3,
    text: "Værelser",
    url: "/rooms/",
  },
  {
    id: 4,
    text: "Reservation",
    url: "/reservation/",
  },
  {
    id: 5,
    text: "Login",
    url: "/login/",
  },
  // {
  //   id: 6,
  //   text: "Fetch",
  //   url: "/fetch/",
  // },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
