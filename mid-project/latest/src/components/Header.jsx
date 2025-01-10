import React from "react";
import { Link } from "react-router-dom";

const Header = (props) =>{
    console.log(props.isSelected)

    return (
        <li>
             <Link className={props.isSelected ? 'active' : null} href="#" to={props.to} onClick={props.select}>{props.children}</Link>
             
        </li>         
         
    )
};

export default Header;

