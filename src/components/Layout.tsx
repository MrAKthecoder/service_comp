import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { site } from "../data/site";
import { offerings as services } from "../data/offerings";
import { ButtonLink } from "./UI";

export function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menu = useRef<HTMLDivElement>(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);
  const dark = pathname === "/";
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
    const title = services.find((s) => pathname === `/services/${s.id}`)?.name;
    const titles: Record<string, string> = {
      "/": "Websites, marketing & business growth",
      "/about": "About us",
      "/audit": "Free digital audit",
      "/process": "How we work",
      "/services": "Our services",
      "/contact": "Let’s talk",
      "/blog": "Blog",
      "/privacy": "Privacy",
      "/terms": "Terms",
    };
    document.title = `${title || titles[pathname] || "Page not found"} — ${site.name}`;
  }, [pathname]);
  useEffect(() => {
    if (!hash) return;
    const frame = requestAnimationFrame(() => {
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ behavior: "smooth" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 45);
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };
    const outside = (event: MouseEvent) => {
      if (menu.current && !menu.current.contains(event.target as Node))
        setServicesOpen(false);
    };
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    document.addEventListener("keydown", key);
    document.addEventListener("click", outside);
    return () => {
      window.removeEventListener("scroll", scroll);
      document.removeEventListener("keydown", key);
      document.removeEventListener("click", outside);
    };
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header
        className={`header ${dark && !scrolled ? "header-dark" : "header-light"} ${mobileOpen ? "mobile-open" : ""}`}
      >
        <Link className="logo" to="/" aria-label="Forma home">
          forma<span>✳</span>
        </Link>
        <nav
          aria-label="Main navigation"
          className={mobileOpen ? "is-open" : ""}
        >
          <div
            ref={menu}
            className="services-menu services-hover"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget))
                setServicesOpen(false);
            }}
          >
            <div className="services-trigger">
              <NavLink to="/services">Services</NavLink>
              <button
                type="button"
                aria-label="Show service menu"
                aria-expanded={servicesOpen}
                aria-controls="service-dropdown"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <ChevronDown size={14} />
              </button>
            </div>
            <div
              className="mega-menu"
              id="service-dropdown"
              hidden={!servicesOpen}
            >
              <div className="menu-intro">
                <span className="eyebrow">Connected by design</span>
                <h3>
                  What’s your
                  <br />
                  next move?
                </h3>
                <Link to="/services">
                  Explore all services <ArrowUpRight size={17} />
                </Link>
              </div>
              <div className="menu-services">
                {services.map((s) => (
                  <Link to={`/services/${s.id}`} key={s.id}>
                    <strong>{s.name}</strong>
                    <ArrowUpRight size={17} />
                  </Link>
                ))}
              </div>
              <Link className="menu-view-all" to="/services">
                See all services <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
          <NavLink to="/process">How we work</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/audit">Free Audit</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
        <ButtonLink to="/contact" className="nav-contact">
          Contact us
        </ButtonLink>
        <button
          className="menu-toggle"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </header>
      <main id="main" tabIndex={-1}>
        <div key={pathname} className="page-enter">
          <Outlet />
        </div>
      </main>
      <footer>
        <div className="container footer-top">
          <div>
            <Link to="/" className="logo">
              forma<span>✳</span>
            </Link>
            <p>
              Good work. Clear thinking.
              <br />
              Everything connected.
            </p>
            <small>Websites, marketing and a little forward thinking.</small>
          </div>
          <div>
            <h3>Explore</h3>
            {[
              ["/services", "Services"],
              ["/process", "How we work"],
              ["/blog", "Blog"],
              ["/about", "About"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <Link to={to} key={to}>
                {label}
              </Link>
            ))}
          </div>
          <div>
            <h3>What we do</h3>
            {services.map((s) => (
              <Link key={s.id} to={`/services/${s.id}`}>
                {s.name}
              </Link>
            ))}
          </div>
          <div>
            <h3>A good place to start</h3>
            <Link className="footer-audit" to="/audit">
              Free growth audit <ArrowUpRight size={16} />
            </Link>
            <Link to="/blog">Blog</Link>
            {site.email ? (
              <a href={`mailto:${site.email}`}>{site.email}</a>
            ) : (
              <Link to="/contact">Tell us about your business ↗</Link>
            )}
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} FORMA</span>
          <span>Independent thinking. Connected growth.</span>
          <div>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
