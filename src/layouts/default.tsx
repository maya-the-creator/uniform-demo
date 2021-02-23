import React from "react"
import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"

export const Layout = ({ children }) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="leading-normal tracking-normal text-white gradient">
        {children}
      </main>
      <Footer />
    </>
  )
}
