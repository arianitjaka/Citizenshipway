import { React, useState } from 'react';
import Logo from './Logo/Logo';
import ContactButton from './Contact/ContactButton';
import MenuIcon from '@material-ui/icons/Menu';

import { menu, CitizenshipItems, ResidencyItems, CountriesItems1, CountriesItems2, CountriesItems3, RosourcesItems } from './Menu';
import { Link } from 'react-router-dom';
import './Navbar.scss';

// import { FormattedMessage } from 'react-intl';



const Navbar = () => {

  const [mynavbar, setMynavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setMynavbar(true);
    } else {
      setMynavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <div className={mynavbar ? 'nav-menu active' : 'nav-menu'}>

        <Logo />

        <ul>

          <Link to='/'>
            <li className="home-link">
              Home
              <div className="submenu submenu1">
                <ul>
                  {CitizenshipItems.map((list) => {
                    return (
                      <Link to={list.path}>

                        <li>
                          <div className="content">
                            <h5>{list.cityName}</h5>
                          </div>
                        </li>

                      </Link>
                    )
                  })}
                </ul>
              </div>
            </li>

          </Link>

          <Link to='/about'>
            <li className="about-link">
              About
              <div className="submenu submenu2">
                <ul>
                  {CitizenshipItems.map((list) => {
                    return (
                      <Link to={list.path}>

                        <li>
                          <div className="content">
                            <h5>{list.cityName}</h5>
                          </div>
                        </li>

                      </Link>
                    )
                  })}
                </ul>
              </div>
            </li>

          </Link>

          <Link to='/citizenship'>
            <li className="citizenship-link">
              Citizenship
              <div className="submenu submenu1">
                <ul>
                  {CitizenshipItems.map((list) => {
                    return (
                      <Link to={list.path}>

                        <li>
                          <div className="content">
                            <h5>{list.cityName}</h5>
                          </div>
                        </li>

                      </Link>
                    )
                  })}
                </ul>
              </div>
            </li>

          </Link>

          <Link to='/residency'>
            <li className="residency-link">
              Residency
              <div className="submenu submenu1">
                <ul>
                  {ResidencyItems.map((list) => {
                    return (
                      <Link to={list.path}>

                        <li>
                          <div className="content">
                            <h5>{list.cityName}</h5>
                          </div>
                        </li>

                      </Link>
                    )
                  })}
                </ul>
              </div>
            </li>

          </Link>

          <Link to='/countries'>
            <li className="countries-link">
              Countries
              {/* <div className="countries-submenu submenu1">
                <ul>
                  {CountriesItems1.map((list) => {
                    return (
                      <Link to={list.path}>

                        <li>
                          <div className="content">
                            <h5>{list.city}</h5>
                          </div>
                        </li>

                      </Link>
                    )
                  })}
                </ul>

                <ul>
                  {CountriesItems2.map((list) => {
                    return (
                      <Link to={list.path}>

                        <li>
                          <div className="content">
                            <h5>{list.city}</h5>
                          </div>
                        </li>

                      </Link>
                    )
                  })}
                </ul>

                <ul>
                  {CountriesItems3.map((list) => {
                    return (
                      <Link to={list.path}>

                        <li>
                          <div className="content">
                            <h5>{list.city}</h5>
                          </div>
                        </li>

                      </Link>
                    )
                  })}
                </ul>
              </div> */}
            </li>

          </Link>

          <Link to='/resources'>
            <li className="resources-link">
              Resources
              <div className="resources-submenu submenu1">
                <ul>
                  {RosourcesItems.map((list) => {
                    return (
                      <Link to={list.path}>

                        <li>
                          <div className="content">
                            <h5>{list.title}</h5>
                          </div>
                        </li>

                      </Link>
                    )
                  })}
                </ul>
              </div>
            </li>

          </Link>


        </ul>

        <ContactButton />

        <MenuIcon className="hamburger" />
      </div>


    </>
  )
};
export default Navbar;