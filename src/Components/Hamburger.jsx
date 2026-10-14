
import { useState } from "react";
import Hamburger from 'hamburger-react';
import MobileMenu from "./MobileMenu";


export default function HamburgerComponent({open, setOpen}) {
    return <div>
        <Hamburger size={22} toggled={open} toggle={setOpen} color={open ? "#111" : "#fff"}/> 
        <MobileMenu open={open}/>
        </div>
}