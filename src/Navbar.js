import React from "react"
import {NavLink} from "react-router-dom"

function Navbar(){
    return(
        <div className="nav">
            <NavLink to = "/"> All </NavLink>
            <NavLink to = "breakfast"> Breakfast </NavLink>
            <NavLink to = "shakes"> Shakes </NavLink>
        </div>
    )
}

export default Navbar