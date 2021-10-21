import React, { useState } from "react"

export type NavigationLink = {
  text?: string;
  url?: string;
  children?: NavigationLink[];
}

type NavigationProps = {
  links: NavigationLink[];
  classname?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ links, classname }) => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const submenuContainers = typeof window !== "undefined" ? document.querySelectorAll(".navigation .has-submenu") : [];
 
  const renderMenu = (links: NavigationProps["links"]) => {
    return links && links.map((link: NavigationLink, key) => {
      if (link.children && link.children.length) {
        return <li key={key} className="has-submenu" onClick={toggleSubmenu}>
          <a href={link.url} className="navigation__item">{link.text}</a>
          {renderSubMenu(link)}
        </li>
      } else {
        return <li key={key}>
          <a href={link.url} className="navigation__item">{link.text}</a>
        </li>
      }
    });
  };

  const renderSubMenu = (links: NavigationLink) => {
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    return <ul className="navigation__submenu">{links.children && links.children.map((listItem, key) => {
      return (listItem.url && listItem.text ? (
        <li key={key}>
          <a href={listItem.url} className="navigation__submenu-item">{listItem.text}</a>
        </li>
      ) : (undefined));
    })}</ul>
  };

  const toggleSubmenu = (e: any) => {
    const target = e.target as HTMLElement
    console.log("target.classList", target.classList);

    if (target.classList.contains("navigation__submenu-item")) {
      return;
    }
    e.preventDefault();
    let submenuContainer = e.target.parentElement;
   
    return submenuContainer.classList.contains('is-open') ?
      submenuContainer.classList.remove('is-open') :
      submenuContainer.classList.add('is-open');
  };

  const handleMobileMenuTrigger = () => {
    isOpenMenu ? setOpenMenu(false) : setOpenMenu(true);
    !isOpenMenu && submenuContainers.forEach((submenuContainer) => {
      submenuContainer.classList.remove('is-open');
    })
  };

  return (
    <div className={`navigation ${classname ? classname : ''}`}>
      <button className={`navigation__button${isOpenMenu ? ' is-active' : ''}`} onClick={handleMobileMenuTrigger}>
        <div className="navigation__button-icon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span className="navigation__button-text">menu</span>
      </button>
      <nav className={`navigation__container${isOpenMenu ? ' is-active' : ''}`}>
        {links &&
          // eslint-disable-next-line jsx-a11y/no-redundant-roles
          <ul className="navigation__menu">
            {renderMenu(links)}
          </ul>
        }
      </nav>
    </div>
  )
}
