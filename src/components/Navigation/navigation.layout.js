import React, { useState } from "react"
import { Link } from "react-router-dom"

import { Turn as Hamburger } from "hamburger-react"

import brand from "../../assets/brand.png"

const Navigation = () => {
  const [isOpen, setOpen] = useState(true)

  return (
    <>
      {/* Box-Header-Mobile */}
      <header className="z-50 flex fixed justify-around py-1 bg-white shadow-navbar w-full items-center md:hidden">
        <div className="overflow-hidden">
          <Hamburger
            onToggle={(toggled) => {
              if (toggled) {
                setOpen(false)
              } else {
                setOpen(true)
              }
            }}
          />
        </div>
        <p className="text-xl font-bold">BERTUMBUH</p>
        <div className="w-10">
          <img src={brand} alt="brand" />
        </div>
      </header>
      {isOpen ? (
        <div className="hamburger-mobile -translate-x-[100%] md:mt-32">
          <Link to="/">pindah home</Link>
          <Link to="/about">pindah about</Link>
          <Link to="/blog">pindah blog</Link>
          <Link to="/registration">pindah registration</Link>
          <Link to="/donate">pindah donate</Link>
        </div>
      ) : (
        <div className="hamburger-mobile md:mt-32">
          <Link to="/">pindah home</Link>
          <Link to="/about">pindah about</Link>
          <Link to="/blog">pindah blog</Link>
          <Link to="/registration">pindah registration</Link>
          <Link to="/donate">pindah donate</Link>
        </div>
      )}
      {/* end box-header-mobile */}

      {/* Box Header Tablet */}
      <header className="hidden md:block fixed w-full bg-bgGlobal z-50">
        <div className="md:flex justify-between py-4 px-14 items-center border-b-[1px] border-black lg:py-2">
          <div className="flex items-center gap-5 lg:w-8 lg:gap-3">
            <img src={brand} alt="brand" />
            <p className="text-2xl font-bold lg:text-xl">BERTUMBUH</p>
          </div>
          <button className="bg-darkGreen text-white px-3 py-2 rounded-md shadow-navbar">
            Bergabung
          </button>
        </div>
        <div className="lg:hidden hamburger px-14 shadow-lg">
          <Hamburger
            onToggle={(toggled) => {
              if (toggled) {
                setOpen(false)
              } else {
                setOpen(true)
              }
            }}
          />
        </div>
        <div className="hidden lg:flex gap-24 hamburger p-3 px-14">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/donate">Donate</Link>
        </div>
      </header>
      {/* end box tablet */}
    </>
  )
}

export default Navigation
