import "./header.css";


function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <h2 className="logo">MY React App</h2>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}



export default Header;


