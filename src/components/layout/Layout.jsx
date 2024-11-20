import React from "react";
import "./Layout.css"
import logo_img from "../../asset/logo/logotech.png"
function LayoutManage (){
    return(
        <div className="Main-Body">

            <div className="Logo-Header">

            <div className="BrandLogo">
                <img 
                src={logo_img}
                 alt="logoimg"     
                 style={{width:50}}
                 />
            </div>
            <div className="BrandName">
                NIT Technology
            </div>

            </div>

            <div className="Menu">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/product">Product</a></li>
                    <li><a href="/category">Category</a></li>   
                    <li><a href="/about">About</a></li>

                </ul>
            </div>
        </div>
    )
}
export default LayoutManage;