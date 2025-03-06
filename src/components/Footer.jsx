import React from "react";

const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/jan-bihl-ab1ba330/",
  },
  {
    title: "GitHub",
    href: "https://github.com/J4NBI",
  },
  {
    title: "Editor Page",
    href: "https://shiny-mermaid-029f94.netlify.app/",
  },
];

const Footer = () => {
  return (
    <footer className="bg-prime text-back">
      <div className="border-t border-white/25 py-6 text-sm flex flex-col md:flex-row items-center gap-8 justify-center">
        <nav className="flex flex-col md:flex-row items-center gap-8">
          {footerLinks.map((footerLink) => {
            return (
              <a
                key={footerLink.title}
                className="inline-flex items-center gap-1.5"
                href={footerLink.href}
                target="_blank"
              >
                <span className="font-semibold">{footerLink.title}</span>
              </a>
            );
          })}
        </nav>
        <div className="flex gap-8 z-50">
          <a href="/impressum.pdf" target="_blank">
            Impressum
          </a>
          <a href="/datenschutz.pdf" target="_blank">
            Datenschutzerklärung
          </a>
        </div>
        <div className="text-baclk">
          &copy; JAN BIHL 2025. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
