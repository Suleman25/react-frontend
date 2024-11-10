import React from "react";

const Header = (props) =>{
    console.log(props.isSelected)

    return (
        <li>
             <a className={props.isSelected ? 'active' : null} href="#" onClick={props.select}>{props.children}</a>
             
        </li>         
         
    )
};

export default Header;