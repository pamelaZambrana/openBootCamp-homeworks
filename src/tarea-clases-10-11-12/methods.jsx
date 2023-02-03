import React, { useState, useEffect, Ref} from 'react';
import { useRef } from 'react';


const Methods = () => {
    
    const initialColor={width:"255px", height: "255px", backgroundColor: "black"};
    const [colors, setColors] = useState(initialColor);
    const [state, setState] = useState("initial");
    const box=useRef();
    const BoxComponent=({boxStyle})=>{
        if((state!=="dobleClick")){
            return(<div ref={ box } style={ boxStyle } onMouseEnter = { mouseInBox } onMouseOut={ mouseOut} onDoubleClick ={dobleClick}> Hello world</div>);
        }else{
            return(<div ref={ box } style={ boxStyle }  onMouseOut={ mouseOut} onDoubleClick ={dobleClick}> Hello world</div>);
        }        
    };
    
    function mouseInBox (){
        setState("colors");
        console.log("estado previo:",state)
    };
    function mouseOut(){
        setState("outOfBox")
        console.log("estado previo:",state);
    };
    function dobleClick(){
        setState("dobleClick")
        console.log("estado previo:",state);
    };
    function aleatory(){
        const red = Math.floor(Math.random()*256);
        const green = Math.floor(Math.random()*256);
        const blue = Math.floor(Math.random()*256);
        
        let aleatoryColors=`rgb(${red}, ${green},${blue})`;
        let boxStyle={width:"255px", height: "255px", backgroundColor: `${aleatoryColors}`};
        setColors(boxStyle);
    };

    useEffect(() => {
        if(state==="colors"){
            const timerId=setInterval(
        ()=>aleatory(),1000
        );
        console.log("estado actual:",state);
        return () => {
            clearInterval(timerId);
        };
        };
    });

    return (
        <div>
            <BoxComponent  boxStyle ={ colors }></BoxComponent>
        </div>
    );
}

export default Methods;
