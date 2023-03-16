import React from "react"

import polygon from "../../assets/Polygon 1.png"
import tree from "../../assets/tree.png"
import treeAnimation from "../../assets/treeAnimation.png"

const WrapperHome = () => {
  return (
    <React.Fragment>
      <div className="pt-20 px-5 z-10">
        <div className="bg-lightMiddleGreen px-6 pt-6 md:pb-6 md:mt-20 md:flex md:relative lg:mt-12">
          <div className="md:w-[63%]">
            <h1 className="text-3xl font-bold lg:text-5xl">
              Bersama Lindungi Bumi Kita
            </h1>
            <h1 className="hidden md:block text-3xl font-bold lg:text-5xl mt-3">
              Untuk Masa Depan
            </h1>
            <p className="my-5 text-lg md:w-[80%] lg:text-xl">
              Kami bermimpi untuk menanam lebih dari 10 juta pohon dan
              menciptakan dunia yang lebih indah dan asri untuk kita, dia, dan
              semua.
            </p>
            <div className="flex flex-col w-[75%] md:w-full md:flex-row md:gap-5">
              <button className="bg-darkGreen py-3 text-white rounded-md md:px-3 md:my-5 lg:my-7">
                Eksplorasi Bertumbuh
              </button>
              <div className="border-solid border-darkGreen border-2 w-[170px] my-5 px-5 py-2 flex gap-3 justify-center lg:my-7">
                <img src={polygon} alt="polygon" />
                <button>Lihat Video</button>
              </div>
            </div>
          </div>
          <div className="md:absolute md:w-[45%] md:bottom-0 md:right-0 lg:w-[40%]">
            <img src={tree} alt="tree" />
          </div>
        </div>
        <div className="mt-10 mb-16 grid grid-cols-2 gap-y-5 place-items-center text-lg text-pudar font-bold md:grid-cols-4 lg:text-xl">
          <p>DITLANCE</p>
          <p>OWTHEST</p>
          <p>NEOVASI</p>
          <p>ONAGO</p>
        </div>
        <div className="flex items-center justify-center gap-5 my-10">
          <img className="w-20 lg:w-24" src={treeAnimation} alt="tree" />
          <div>
            <p className="text-3xl font-bold lg:text-4xl">1.351.003</p>
            <p className="text-darkGreen font-bold text-lg lg:text-xl">
              Pohon Tertanam
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default WrapperHome
