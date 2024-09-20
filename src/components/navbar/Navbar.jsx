import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <div>
          <img src="/bastaPaBOOK.png" alt="Logo" className="logo" />
          <span className="pabook">    PaBOOK!</span>
        </div>

        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
