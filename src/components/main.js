import { Link } from "gatsby"
import React from "react"
import Toggler from "./toggler"

const Main = ({ title, children }) => {
  let header = (
      <h1>
        <Link to={`/`}>
          {title}
        </Link>
      </h1>
    )
  return (
    <div class="main">
      <Toggler/>
      <header>{header}</header>
      <main>{children}</main>
    </div>
  )
}

export default Main
