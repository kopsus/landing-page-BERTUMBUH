import React from "react"

import iconDonatur from "../../assets/Icon.png"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Pagination, Navigation } from "swiper"

function CarouselHome() {
  return (
    <React.Fragment>
      <div className="p-5 my-16 md:flex md:gap-5 lg:block lg:px-14">
        <div className="text-xl text-center flex flex-col gap-5 my-5 md:text-start lg:text-center lg:text-2xl">
          <p className="text-darkGreen font-bold">Menjadi Bagian Bertumbuh</p>
          <h1 className="text-2xl font-bold lg:text-5xl">
            Buat Hal Sederhana Jadi Bermakna
          </h1>
          <p>Ciptakan setiap kegiatan jadi lebih bermakna dan bermanfaat</p>
        </div>
        <div className="lg:hidden w-full md:w-1/2">
          <Swiper
            speed={600}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="my-swipper"
          >
            <SwiperSlide className="p-5 bg-[#EEE] shadow-navbar">
              <div className="text-xl">
                <div className="p-3 w-14 h-14 shadow-sm flex justify-center bg-darkGreen">
                  <img src={iconDonatur} alt="" />
                </div>
                <p className="my-5">
                  Anda dapat membantu dengan berdonasi untuk biaya penanaman,
                  perwatan, bibit dan biaya oprasional lainnya
                </p>
                <button className="text-darkGreen font-bold">
                  Menjadi Donatur →
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="p-5 bg-[#EEE] shadow-navbar">
              <div className="text-xl">
                <div className="p-3 w-14 h-14 shadow-sm flex justify-center bg-darkGreen">
                  <img src={iconDonatur} alt="" />
                </div>
                <p className="my-5">
                  Anda dapat membantu dengan berdonasi untuk biaya penanaman,
                  perwatan, bibit dan biaya oprasional lainnya
                </p>
                <button className="text-darkGreen font-bold">
                  Menjadi Donatur →
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="hidden lg:grid grid-cols-3 gap-5">
          <div className="p-5 bg-[#EEE] shadow-navbar">
            <div className="text-xl">
              <div className="p-3 w-14 h-14 shadow-sm flex justify-center bg-darkGreen">
                <img src={iconDonatur} alt="" />
              </div>
              <p className="my-5">
                Anda dapat membantu dengan berdonasi untuk biaya penanaman,
                perwatan, bibit dan biaya oprasional lainnya
              </p>
              <button className="text-darkGreen font-bold">
                Menjadi Donatur →
              </button>
            </div>
          </div>
          <div className="p-5 bg-[#EEE] shadow-navbar ">
            <div className="text-xl">
              <div className="p-3 w-14 h-14 shadow-sm flex justify-center bg-darkGreen">
                <img src={iconDonatur} alt="" />
              </div>
              <p className="my-5">
                Anda dapat membantu dengan berdonasi untuk biaya penanaman,
                perwatan, bibit dan biaya oprasional lainnya
              </p>
              <button className="text-darkGreen font-bold">
                Menjadi Donatur →
              </button>
            </div>
          </div>
          <div className="p-5 bg-[#EEE] shadow-navbar">
            <div className="text-xl">
              <div className="p-3 w-14 h-14 shadow-sm flex justify-center bg-darkGreen">
                <img src={iconDonatur} alt="" />
              </div>
              <p className="my-5">
                Anda dapat membantu dengan berdonasi untuk biaya penanaman,
                perwatan, bibit dan biaya oprasional lainnya
              </p>
              <button className="text-darkGreen font-bold">
                Menjadi Donatur →
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CarouselHome
