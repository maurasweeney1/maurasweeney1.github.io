import React, { useState } from 'react'
import './index.scss'
import {
  HomeIcon,
  UserIcon,
  MailIcon,
  GithubIcon,
  LinkedinIcon,
} from 'lucide-react'

const Sidebar = () => {
  const [activePath, setActivePath] = useState('/')
  const iconSize = 20

  const NavItem = ({ path, icon: Icon, label }) => {
    const isActive = activePath === path

    return (
      <a
        onClick={(e) => {
          e.preventDefault()
          setActivePath(path)
        }}
        href={path}
        className={isActive ? 'active' : ''}
        data-label={label}
      >
        <Icon size={iconSize} />
      </a>
    )
  }

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
          >
            <LinkedinIcon size={iconSize} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/maurasweeney1"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon size={iconSize} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
