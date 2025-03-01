import { BrowserRouter as Router, Routes, Route } from "react-router"
import { useState, useEffect } from "react"
import { Keyboard } from "./components/pages/Keyboard/Keyboard"
import { Settings } from "./components/pages/Keyboard/Settings/Settings"
import { Documentation } from "./components/pages/Docs/Documentation"
import { Home } from "./components/pages/Home/Home"
import { Score } from "./components/pages/Keyboard/Score/Score"
import { About } from "./components/pages/About/About"
import "./App.css"


function App(){
    return <div className="main-container">
        <Router>
            <Routes>
                <Route 
                    path="/" 
                    element={<Home/>}></Route>
                <Route 
                    path="/keyboard" 
                    element={<Keyboard />}></Route>
                <Route 
                    path="/keyboard/score" 
                    element={<Score />}></Route>
                <Route 
                    path="/keyboard/settings" 
                    element={<Settings />}></Route>
                <Route 
                    path="/documentation" 
                    element={<Documentation />}></Route>
                <Route
                    path="/about_us"
                    element={<About />}></Route>
            </Routes>
        </Router>
    </div>
}

export default App
