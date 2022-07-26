import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [mobileMenuShow, setMobileMenuShow] = useState(false);
  return (
    <header className={window.location.pathname.includes("play") ? "transparentHeader" : "header"}>
      <div
        className="menu-icon"
        onClick={() => {
          if (!mobileMenuShow) {
            document.getElementById("menu").style.left = "0%";
            setMobileMenuShow(true);
          } else {
            document.getElementById("menu").style.left = "-100%";
            setMobileMenuShow(false);
          }
        }}
      >
        {!mobileMenuShow ? (
          <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        )}
      </div>
      <Link to="/" style={{display:"block",margin:"0 auto"}}><img className="logo" src="/images/logo.svg" alt="Disney Plus" /></Link>
      <ul className="menu" id="menu">
        <li>
          <Link to="/">
            <div className="menu-item">
              <svg
                className="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
              </svg>
              <span>Home</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/search">
            <div className="menu-item">
              <svg
                className="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg>
              <span>Search</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div className="menu-item">
              <svg
                className="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
              </svg>
              <span>Watchlist</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div className="menu-item">
              <svg
                className="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
              <span>Originals</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div className="menu-item">
              <svg
                className="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"></path>
              </svg>
              <span>Movies</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div className="menu-item">
              <svg
                className="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"></path>
              </svg>
              <span>Series</span>
            </div>
          </Link>
        </li>
      </ul>
    </header>
  );
}
