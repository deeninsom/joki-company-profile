import { useEffect, useState } from "react";
import logo from '../assets/cashcue 1.png'

const Navbar = () => {

  const [scrolling, setScrolling] = useState(false);
  const [activeMenu, setActiveMenu] = useState('/');


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
  };

  return (
    <nav
      className={`navbar fixed-top navbar-expand-lg navbar-light ${scrolling ? "nav-bg-primary" : "bg-transparent"}`}>
      <div className="content-nav container-fluid ps-5 pe-5 ">
        <a className="navbar-brand mt-2 mt-lg-0" href="/">
          <img
            src={logo}
            width={30}
            alt="DEEN Logo"
            loading="lazy"
          />
          <span className="nav-text">Cashcue</span>
        </a>
        <div className="list">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="/">HOME</a>
            </li>
            <li className="nav-item" onClick={() => handleMenuClick('features')}>
              <a className={`nav-link ${activeMenu === 'FEATURES' ? 'active' : ''}`}
                href="#features">FEATURES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">ABOUT US</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">TEAM</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#company">COMPANY</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={scrolling ? "button-up" : "hidden"} onClick={scrollToTop}>
        <i className={scrolling ? "fa fa-solid fa-circle-chevron-up" : "hidden"}></i>
      </div>
    </nav>
  )
}

export default Navbar