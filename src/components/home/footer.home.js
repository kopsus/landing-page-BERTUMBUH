import React from "react"

import brand from "../../assets/brand.png"
import ig from "../../assets/ig.png"
import fb from "../../assets/fb.png"
import twitter from "../../assets/twitter.png"

function FooterHome() {
  return (
    <React.Fragment>
      <div className="p-5 bg-darkGreen text-white">
        <div className="md:flex md:gap-10">
          <div className="flex items-center gap-3 md:flex-col md:flex-1">
            <div className="w-12 h-12 rounded-full flex justify-center items-center bg-white">
              <img src={brand} alt="" />
            </div>
            <h1 className="text-xl font-bold">BERTUMBUH</h1>
          </div>
          <div className="flex justify-around text-lg text-black md:hidden">
            <div className="parent-option">
              <label className="label">POSTS</label>
              <select className="option">
                <option className="child-option">Berita</option>
                <option className="child-option">Event</option>
                <option className="child-option">Blog</option>
              </select>
            </div>
            <div className="parent-option">
              <label className="label">PROGRAM</label>
              <select className="option">
                <option className="child-option">Jelajah Bersama</option>
                <option className="child-option">Tanam Pohon</option>
                <option className="child-option">Sosialisasi Hutan</option>
              </select>
            </div>
          </div>
          <div className="hidden md:flex flex-1 gap-10 lg:gap-5">
            <div className="flex-1">
              <h1 className="text-xl font-bold mb-3">POSTS</h1>
              <p>Berita</p>
              <p>Event</p>
              <p>Blog</p>
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-bold mb-3">PROGRAM</h1>
              <p>Jelajah Bersama</p>
              <p>Tanam Pohon</p>
              <p>Sosialisasi Hutan</p>
            </div>
          </div>
          <div className=" text-lg flex flex-col gap-3 md:flex-2 lg:w-1/2">
            <h1 className="text-xl font-bold">ALAMAT</h1>
            <p>
              Jl. Kh. Wahid Hasyim No.76, Cipeujeuh Wetan, Kec. Lemahabang,
              Kabupaten Cirebon, Jawa Barat, 45183
            </p>
            <p>(0231) 635308</p>
            <p>emonsetio01@gmail.com</p>
          </div>
        </div>
        <div className="md:flex justify-between md:pr-10 md:mt-10 lg:px-20">
          <div className="flex gap-3 my-5 lg:gap-5">
            <div className="sosmed">
              <img className="icon-sosmed" src={ig} alt="" />
            </div>
            <div className="sosmed">
              <img className="icon-sosmed" src={fb} alt="" />
            </div>
            <div className="sosmed">
              <img className="icon-sosmed" src={twitter} alt="" />
            </div>
          </div>
          <div className="text-center font-bold text-xl my-3">
            <p className="">copy right ©kopsus 2023</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default FooterHome
