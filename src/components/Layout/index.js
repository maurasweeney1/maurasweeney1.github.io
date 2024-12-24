import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../Sidebar";
import "./index.scss";
import { useEffect } from "react";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    const sections = document.querySelectorAll(".slide-in");
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => {
      section.classList.remove("visible");
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [location.pathname]); // re-run when route changes

  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags"></span>
        <Outlet />
        <span className="tags bottom-tags">
          <br />
          <span className="bottom-tag-html"></span>
        </span>
      </div>
    </div>
  );
};

export default Layout;
