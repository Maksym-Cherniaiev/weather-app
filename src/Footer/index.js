import React from 'react';
import "./index.css";

function Footer() {
  return (
    <section className="about">
      <span className="about_author">ⒸLike-ran</span>
      <div className="about_links">
        <a className="links_icon" href="https://www.facebook.com/maksym.cherniaiev.9">
          <i className="fab fa-facebook-square"></i>
        </a>
        <a className="links_icon" href="https://www.linkedin.com/in/maksym-cherniaiev-382885174/">
          <i className="fab fa-linkedin"></i>
        </a>
        <a className="links_icon" href="https://github.com/Maksym-Cherniaiev">
          <i className="fab fa-github-square"></i>
        </a>
      </div>
    </section>
  );
}

export default Footer;