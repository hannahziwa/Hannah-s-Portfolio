import React from 'react'
import NavBar from './navBar'
import About from './about'
import Experiences from './experiences'
import Skills from './skills'
import Contact from './contact'

const landingPage = () => {
    return (
        <div>
            <NavBar/>
            <About/>
            <Experiences/>
            <Skills/>
            <Contact/>
        </div>
    )
}

export default landingPage
