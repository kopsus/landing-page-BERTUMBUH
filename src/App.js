import React from "react"
import "./App.css"
import MainLayout from "./components/Navigation/main.layout"
import { Route, Routes } from "react-router-dom"
import MainAbout from "./components/About/main.about"
import MainHome from "./components/home/main.home"

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<MainHome />}></Route>
        <Route path="/about" element={<MainAbout />}></Route>
      </Routes>
    </MainLayout>
  )
}

export default App
