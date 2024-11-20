import React from "react";
// import "./NotFoundPage.css"; // Link the CSS file
// import "./notfound/NotFoundPage.css";
import "./NotFoundPage.css"

function NotFoundPageError() {
    return (
        <div className="main-body">
        <div className="not-found-container">
            <h1 className="not-found-title">404</h1>
            <p className="not-found-message">Page Not Found</p>
            <p className="not-found-description">
                The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <a href="/" className="not-found-home-button">Go to Home</a>
        </div>
        </div>
    );
}

export default NotFoundPageError;
