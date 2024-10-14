import react from "react";

const TabButton=({children})=>{
function handleClick() {
    console.log("Stupid world")
}


    return(
        <>
        <li>
           <button onClick={handleClick}>{children}</button>
        </li>
        
        </>
    );
}
// const TabButton = (props)=>{
//     function handleClick(){
//         console.log ("Stupid World")
//     }
//     return (
//         <>
//         <li>
//              <button onClick={handleClick}>{props.children}</button>
//         </li>
//         </>
    
//     );
// }
export default TabButton;