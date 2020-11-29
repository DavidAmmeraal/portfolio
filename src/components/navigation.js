import React from "react"
import { Link } from "gatsby"
import { Nav, Anchor } from "grommet";

const Navigation = ({}) => (
  <Nav direction="row" justify="end">
    <Link to="/home">Home</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/contact">Contact</Link>
  </Nav>
)

export default Navigation
