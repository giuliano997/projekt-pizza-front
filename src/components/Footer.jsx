import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Kontakt</h4>
          <p>Magarita Madness</p>
          <p>Musterstraße 1</p>
          <p>12345 Musterstadt</p>
          <p>Tel: 01234/567890</p>
          <p>Email: info@mm.de</p>
        </div>
        <div className="footer-section">
          <h4>Rechtliches</h4>
          <p>
            <a href="#impressum">Impressum</a>
          </p>
          <p>
            <a href="#datenschutz">Datenschutz</a>
          </p>
          <p>
            <a href="#agb">AGB</a>
          </p>
        </div>
        <div className="footer-section">
          <h4>Folge uns</h4>
          <p>
            <a href="#facebook">Facebook</a>
          </p>
          <p>
            <a href="#twitter">Twitter</a>
          </p>
          <p>
            <a href="#instagram">Instagram</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Firma XYZ. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}

export default Footer;
