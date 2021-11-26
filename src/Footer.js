import React from "react";
import './Footer.css'


function Footer(){
return(
    <React.Fragment>
    {/* <!-- section footer --> */}
 <footer id="footer" >     
    
  <ul>
  <li><a href="https://www.facebook.com/profile.php?id=100005976946609" target="_black" rel="noopener" ><i class="fa-brands fa-facebook"></i></a></li>
  <li><a href="https://github.com/haneeenedinat" target="_black" rel="noopener"><i class="fab fa-git"></i></a></li>
  <li><a href="https://www.linkedin.com/in/haneen-edinat" target="_black" rel="noopener"><i class="fab fa-linkedin"></i></a></li>
  </ul>


  <p>&copy;2021 Haneen Edinat</p> 
   </footer>
{/* <!-- section footer --> */}

    </React.Fragment>
)
}

export default Footer;