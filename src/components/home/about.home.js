import React from "react"

import treeAbout from "../../assets/treeAbout.png"
import man from "../../assets/man.png"
import woman from "../../assets/woman.png"

const AboutHome = () => {
  return (
    <React.Fragment>
      <div className="my-16 px-5 lg:px-14">
        <div className="py-5 md:flex md:gap-5">
          <div className="flex justify-center md:flex-1">
            <img className="w-full" src={treeAbout} alt="tree about" />
          </div>
          <div className="my-5 text-xl flex flex-col gap-5 md:flex-1 lg:text-2xl lg:gap-10">
            <p className="text-darkGreen font-bold">Tentang Kami</p>
            <h1 className="font-bold text-2xl lg:text-5xl">
              BERTUMBUH - Save The World
            </h1>
            <p>
              BERTUMBUH - Adalah organisasi non-profit yang mempunyai tujuan
              untuk Melindungi, menjaga, merawat, dan melestarikan pohon-pohon
              yang ada di bumi ini
            </p>
            <button className="btn-lihat-selengkapnya">
              Lihat Selengkapnya
            </button>
          </div>
        </div>
        <div className="my-16 md:flex md:gap-5 md:my-20">
          <div className="relative md:flex-1 md:order-2">
            <div className="w-2/3">
              <img src={man} alt="man" />
            </div>
            <div className="w-2/3 absolute right-0 top-32">
              <img src={woman} alt="woman" />
            </div>
          </div>
          <div className="mb-5 mt-44 text-xl flex flex-col gap-5 md:flex-1 md:mt-0 md:order-1 lg:text-2xl lg:gap-10">
            <p className="text-darkGreen font-bold">Kami Butuh Kamu</p>
            <h1 className="text-2xl font-bold lg:text-5xl lg:leading-tight">
              Kenapa BERTUMBUH Butuh Kamu ?
            </h1>
            <div className="flex gap-4 lg:gap-10">
              <div className="">
                <p className="text-2xl font-bold">15,3 M</p>
                <p>Pohon ditebang</p>
              </div>
              <div className="">
                <p className="text-2xl font-bold">14,7 ha</p>
                <p>Hutan ditebang</p>
              </div>
            </div>
            <p>
              15,3 Milyar pohon setiap tahun ditebang di dunia serta hilangnya
              14,7 hektare lahan hutan hilang di indonesia. Hali ini menyebabkan
              bumi tidak stabil dan kami mengajak kamu untuk bergabung dan
              meraih tujuan bersama
            </p>
            <button className="btn-lihat-selengkapnya">
              Lihat Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AboutHome
