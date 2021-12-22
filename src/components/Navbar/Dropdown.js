
import { Link } from 'react-router-dom';
import MenuItem from './Menu-Item'
import React, { useState } from 'react';
import './dropdown.css'


function Dropdown(props) {
    const [click ,setClick]=useState(false);
    const handleClick =()=>setClick(!false);

    return (
        <>
           <ul className={click ? 'dropdown-menu clicked':'dropdown-menu'} onClick={handleClick}>
               {
                   MenuItem.map((item,index)=>{
                       return(
                           <li key={index} className="dr-sub">
                               <Link className={item.cName}
                                    to={item.path}
                                    onClick={()=>setClick(false)}
                               >
                                 {item.title}
                               </Link>
                           </li>
                       )
                   })

               }

           </ul>
            
        </>
    );
}

export default Dropdown;