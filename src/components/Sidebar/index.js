import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  UserIcon,
  MailIcon,
  GithubIcon,
  LinkedinIcon,
} from "lucide-react";

const Sidebar = () => {
  const navBarWidth = 100;
  const iconSize = navBarWidth * 0.4;

  const NavItem = ({ path, icon: Icon, label }) => {
    return (
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? "active" : "")}
        data-label={label}
      >
        <Icon size={iconSize} />
      </NavLink>
    );
  };

  return (
    <div className="nav-bar">
      <nav>
        <NavItem path="/" icon={HomeIcon} label="HOME" />
        <NavItem path="/about" icon={UserIcon} label="ABOUT" />
        <NavItem path="/contact" icon={MailIcon} label="CONTACT" />
      </nav>

      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/mauraksweeney"
            target="_blank"
            rel="noreferrer"
            label="LINKEDIN"
          >
            <LinkedinIcon size={iconSize} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/maurasweeney1"
            target="_blank"
            rel="noreferrer"
            label="GITHUB"
          >
            <GithubIcon size={iconSize} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
