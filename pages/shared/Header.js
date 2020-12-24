import Link from "next/link";
import React from "react";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar w/ text
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link href="/about">
                <a className="nav-link">About</a>
              </Link>
            </li> */}
           
            <li className="nav-item">
              <Link href="/posts/posts">
                <a className="nav-link">Posts</a>
              </Link>
            </li>
          </ul>
          {/* <span className="navbar-text">Navbar text with an inline element</span> */}
        </div>
      </nav>
    </>
  );
}

export default Header;
