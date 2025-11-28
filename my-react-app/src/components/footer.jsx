import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <h3 className="footer-logo">My React App</h3>

        <p className="footer-text">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
