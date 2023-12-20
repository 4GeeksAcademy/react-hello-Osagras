import React from "react";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="#">Start Boostrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <form className="d-flex" collapse navbar-collapse role="search">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item active ">
                    <a className="nav-link text-white" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">Contact</a>
                  </li>
                </ul>
             </form>
          </div>
        </nav>
    )
}