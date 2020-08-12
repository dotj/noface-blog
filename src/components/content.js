import { Link } from "gatsby"
import React from "react"

const Content = ({ title, children }) => {
  let header = (
      <h1>
        <Link to={`/`}>
          {title}
        </Link>
      </h1>
    )
  return (
    <div class="content">
      <header>{header}</header>
      <main>{children}</main>
    </div>
  )
}

export default Content
