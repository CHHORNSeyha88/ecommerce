import React from "react";
import "./Layout.css";
import logo_img from "../../asset/logo/logotech.png";
import { useNavigate } from "react-router-dom";

function LayoutManage() {
    const navigate = useNavigate();
    
    const onClickMenu = (routerName) => {
        navigate(routerName);
    }

    return (
        <div className="Main-Body">
            <div className="Logo-Header">
                <div className="BrandLogo">
                    <img 
                        src={logo_img} 
                        alt="logoimg" 
                        style={{ width: 50 }} 
                    />
                </div>
                <div className="BrandName">
                    NIT Technology
                </div>
            </div>

            <div className="Menu">
                <ul>
                    <li onClick={() => onClickMenu("/")}>Home</li>
                    <li onClick={() => onClickMenu("/product")}>Product</li>
                    <li onClick={() => onClickMenu("/category")}>Category</li>
                    <li onClick={() => onClickMenu("/about")}>About</li>
                    <li onClick={() => onClickMenu("/login")}>Login</li>
                </ul>
            </div>
        </div>
    );
}

export default LayoutManage;
