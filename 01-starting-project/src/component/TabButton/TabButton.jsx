import react from "react";

const TabButton=(props)=>{
function handleClick() {
    console.log("Stupid world")
}
console.log(props.isSelect)


    return(
        <>
        {/* <li>  
           <button onClick={handleClick}>{children}</button>
        </li> */}
        <li>  
           <button className= {props.isSelect ? 'active' : null} onClick={props.select}>{props.children}</button>
        </li>
        
        </>
    );
// }
// const TabButton = (props)=>{
//     function handleClick(){
//         console.log ("Stupid World")
    }
//     return (
//         <>
//         <li>
//              <button onClick={handleClick}>{props.children}</button>
//         </li>
//         </>
    
//     );
// }
export default TabButton;