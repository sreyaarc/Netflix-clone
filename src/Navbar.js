import { useState, useEffect } from "react";
import "./Navbar.css";

export default function NavBar() {
    const [scroll, setScroll] = useState(false);

    useEffect(()=> {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        })
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])
    
    return (
        <div className={scroll? "navBar navBar_scroll" : "navBar"}>
            <img className="netflixLogo" src="../Images/Netflix-main-logo.png" alt="netflix-main-logo" /> 

            <img className="netflixUserLogo" src="../Images/Netflix-avatar.png" alt="netflix-user" /> 
        </div>
    )
}