import React from "react"

import Wrapper from "./wrapper.home"
import About from "./about.home"
import CarouselHome from "./carousel.home"
import ArticleHome from "./article.home"
import Footer from "./footer.home"

function mainWrapper() {
  return (
    <React.Fragment>
      <Wrapper />
      <About />
      <CarouselHome />
      <ArticleHome />
      <Footer />
    </React.Fragment>
  )
}

export default mainWrapper
