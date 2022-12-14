import Ducky from "./ducky.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="max-width">
        <div className="logo">
          <img src={Ducky} alt="icon" style={{ width: 30, height: 30 }} />
        </div>
        <ul className="navlist">
          <li className="nav-items">Home</li>
          <li className="nav-items">About</li>
          <li className="nav-items">Projects</li>
          <li className="nav-items">Wanna chat?</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
