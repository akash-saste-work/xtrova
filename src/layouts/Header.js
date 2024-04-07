import React from 'react'
import { links } from './Data'
import { Link } from "react-router-dom";
import './header.css';

const handleClick = (e) => {
  e.preventDefault()
  const target = e.target.getAttribute('href')
  const location = document.querySelector(target).offsetTop

  window.scrollTo({
    left: 0,
    top: location - 120,
  })
}

export default function Header() {
  return (
    <>
      <header>
        <section>
          <div className="naviagtion naviagtion-white fixed-top transition">
            <div style={{
              background: 'rgb(2, 31, 67)',
              color: "#fff",
              width: '100%',
              padding: '5px 25px'
            }}>
              <nav className="navbar navbar-expand-lg navbar-light p-0">
              <div className='xtrova-text'>
                Xtrova
              </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
                  aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse text-center" id="navigation">

                  <ul className="navbar-nav mx-auto">

                    {links.map((link) => {
                      return (
                        <li className="nav-item" key={link.id}>
                          <a className="nav-link text-capitalize" data-name={link.url} href={link.url} onClick={handleClick}>
                            {link.text}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                  <button onClick={() => {
                    var scrollDiv = document.getElementById("loan").offsetTop;
                    window.scrollTo({ top: scrollDiv - 50, behavior: 'smooth' });
                  }} className="btn btn-outline-primary text-white ml-3">Consult</button>

                  {/* <Link to="/privacy-policy">Policy</Link> */}
                </div>
              </nav>
            </div>
          </div>
        </section>
      </header>
    </>
  )
}
