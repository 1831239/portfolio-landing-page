import React from 'react'
import './MobileNav.css'
import { Link } from 'react-scroll'

const MobileNav = ({ toggleMobilenavVisible, mobilenavVisible }) => {
  return (
    <div className="mobilenav-wrapper">
      <div className={'mobilenav ' + (mobilenavVisible ? 'on' : 'off')}>
        <div className="mobilenavlinks">
          <div className="mobilenavlink">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMobilenavVisible}
            >
              HOME
            </Link>
          </div>
          <div className="mobilenavlink">
            <Link
              activeClass="active"
              to="traits"
              spy={true}
              smooth={true}
              offset={1}
              duration={500}
              onClick={toggleMobilenavVisible}
            >
              TRAITS
            </Link>
          </div>
          <div className="mobilenavlink">
            <Link
              activeClass="active"
              to="technologies"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMobilenavVisible}
            >
              TECHNOLOGIES
            </Link>
          </div>
          <div className="mobilenavlink">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMobilenavVisible}
            >
              PROJECTS
            </Link>
          </div>
          <div className="mobilenavlink">
            <Link
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMobilenavVisible}
            >
              EDUCATION
            </Link>
          </div>
          <div className="mobilenavlink">
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMobilenavVisible}
            >
              EXPERIENCE
            </Link>
          </div>
          <div className="mobilenavlink">
            <Link
              activeClass="active"
              to="blog"
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMobilenavVisible}
            >
              BLOG
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNav
