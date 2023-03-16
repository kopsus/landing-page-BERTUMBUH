import React from "react"

import articleBig from "../../assets/articleBig.png"
import article1 from "../../assets/article1.png"
import article2 from "../../assets/article2.png"
import article3 from "../../assets/article3.png"
import article4 from "../../assets/article4.png"

function ArticleHome() {
  return (
    <React.Fragment>
      <div className="my-16 p-5 text-xl lg:px-14">
        <div className="lg:text-2xl">
          <p className="text-darkGreen font-bold">Baca Tulisan Kami</p>
          <h1 className="text-2xl font-bold mt-5 mb-2 lg:text-5xl">
            Artikel & Event Terbaru
          </h1>
          <p>Baca dan ikuti event Bertumbuh</p>
        </div>
        <div className="md:flex md:gap-5 md:my-5 lg:text-2xl lg:gap-10">
          <div className="mt-5 mb-10 md:flex-1 md:mt-0 w-full">
            <img src={articleBig} alt="" />
            <p className="font-bold mt-2 mb-5">
              Selamatkan Hutan Untuk Bumi yang Sehat dan Asri
            </p>
            <p>
              Hutan telah banyak memberi manfaat bagi kita semua. Namun melihat
              data sekarang hutan di dunia terutama di Indonesia mulai terancam.
            </p>
          </div>
          <div className="text-lg flex flex-col gap-7 md:flex-1 lg:text-xl">
            <div className="flex gap-5 items-center">
              <div className="md:order-2">
                <img src={article1} alt="" />
              </div>
              <div className="md:order-1">
                <p className="font-semibold mb-2">
                  Kenali Pengertian, Fungsi dan Jenis Hutan
                </p>
                <p>1 Januari 2022</p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div className="md:order-2">
                <img src={article2} alt="" />
              </div>
              <div className="md:order-1">
                <p className="font-semibold mb-2">
                  Kenali Pengertian, Fungsi dan Jenis Hutan
                </p>
                <p>1 Januari 2022</p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div className="md:order-2">
                <img src={article3} alt="" />
              </div>
              <div className="md:order-1">
                <p className="font-semibold mb-2">
                  Kenali Pengertian, Fungsi dan Jenis Hutan
                </p>
                <p>1 Januari 2022</p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div className="md:order-2">
                <img src={article4} alt="" />
              </div>
              <div className="md:order-1">
                <p className="font-semibold mb-2">
                  Kenali Pengertian, Fungsi dan Jenis Hutan
                </p>
                <p>1 Januari 2022</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:text-center md:mt-10">
          <button className="bg-darkGreen px-5 text-lg text-white py-2 rounded-md mt-5 md:mx-auto">
            Lihat Selengkapnya
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ArticleHome
