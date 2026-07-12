const LINKS = [
  { href: "#hero", label: "Overview" },
  { href: "#timeline", label: "Timeline" },
  { href: "#scaling", label: "Scaling" },
  { href: "#engineering", label: "Engineering" },
  { href: "#projects", label: "Projects" },
  { href: "#collaboration", label: "Collaboration" },
  { href: "#ai", label: "Tools" },
];

export default function Nav() {
  return (
    <nav className="nav">
      <span className="nav-logo">Sabrina Chua</span>
      <ul className="nav-links">
        {LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
