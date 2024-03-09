// components/Footer.tsx

import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css"; // Import CSS module

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/portfolio", label: "Portfolio" },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Add your logo image here */}
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCbG9jay0=" // Inline placeholder SVG
          alt="Your company logo"
          className={`${styles.logo} ${styles.logoSize}`} // Apply logo styles
        />
        <nav style={{ display: "flex" }}>
          {" "}
          {/* Apply flexbox styles */}
          <ul className={styles.navList}>
            {" "}
            {/* Use existing navList class */}
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Add any additional content to your footer here */}
        <p>&copy; {new Date().getFullYear()} Your Company Name</p>
      </div>
    </footer>
  );
}

export default Footer;
