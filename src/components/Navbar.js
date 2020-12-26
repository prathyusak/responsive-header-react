import './Navbar.css';
import Logo from './../img/logo.png';
const Navbar=({navbarClasses,headerRef,visibleSection}) => {
  return (
    <header className={navbarClasses.join(" ")}  ref={headerRef}>
        <div className="logon">
            <img src={Logo} alt="Logo" title="Logo" />
        </div>
        <nav className="navigation">
            <ul>
              <li><a className={`${visibleSection === "post1" ? "selected" : ""}`} href="#post1">Home</a></li>
              <li><a className={`${visibleSection === "post2" ? "selected" : ""}`} href="#post2">About</a></li>
              <li><a className={`${visibleSection === "post3" ? "selected" : ""}`} href="#post3">Works</a></li>
              <li><a className={`${visibleSection === "post4" ? "selected" : ""}`} href="#post4">Contact</a></li>
            </ul>
        </nav>
    </header>
  )
};
export default Navbar;