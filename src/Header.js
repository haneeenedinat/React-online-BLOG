import React, { Component } from "react";

import "./Header.css"

class Header extends Component{
    render(){
        return(
    <div className="header">   


<img src="samosa.jpg" className="img_background" alt=""/>

<div class="food">
    <h1> Categories of recipes food</h1>
    <h3>fast food</h3>
    <img src="fast.jfif" width="400vw"/>
    <h3>popular food</h3>
    <img src="img.webp"  width="400vw"/>
</div>

</div>
        )
    }
}

export default Header;