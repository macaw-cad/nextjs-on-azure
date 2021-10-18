import React from "react"

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
  const renderMenu = (links: NavigationProps["links"]) => {
    return links && links.map((link: NavigationLink, key) => {
      if (link.children && link.children.length) {
        return <li key={key} className="has-menu" onClick={toggleSubmenuMobile}>
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
    return <ul className="navigation__menu" role="list">{links.children && links.children.map((listItem, key) => {
      return (listItem.url && listItem.text ? (
        <li key={key}>
          <a href={listItem.url} className="navigation__menuitem">{listItem.text}</a>
        </li>
      ) : (undefined));
    })}</ul>
  };

  const toggleSubmenuMobile = (event: any) => {
    let target = event.target;

    return target.classList.contains('is-active') ?
      target.classList.remove('is-active') :
      target.classList.add('is-active');
  };

  return (
    <nav className={`navigation ${classname ? classname : ''}`}>
      {links &&
        // eslint-disable-next-line jsx-a11y/no-redundant-roles
        <ul role="list">
          {renderMenu(links)}
        </ul>
      }
    </nav>
  )
}
