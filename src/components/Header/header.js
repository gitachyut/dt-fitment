import React from 'react';
import {
    Link
  } from "react-router-dom";

  
const styles = {
    ul: {
        listStyleType: "none",
        margin: 0,
        padding: "5px 5px",
        display: "flex",
        background: "#c3c1c1"
    },
    li: {
        padding: "5px"
    },
    link:{
        color: "black",
        textDecoration: "none"
    }
}


const Header = () => {
    return (
        <ul style={styles.ul}>
            <Link  style={styles.link} to={`/vehicle-tires/ford/mustang`}>
                <li style={styles.li} >Vehicle Tires</li> 
            </Link>  

            <Link  style={styles.link} to={`/vehicle-wheels/Audi/mustang/gtx`}>
                <li style={styles.li} >Vehicle Wheels</li> 
            </Link> 

            <Link  style={styles.link} to={`/vehicle-accessories/maruti-suzuki/mustang/gt`}>
                <li style={styles.li} >Vehicle Accessories</li> 
            </Link>  

            <Link  style={styles.link} to={`/vehicle-packages/ford/mustang/gt`}>
                <li style={styles.li} >Vehicle Packages</li> 
            </Link>  
        </ul>
    ) 
}

export default Header;