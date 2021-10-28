import React from "react"
import { Image, ImageProps } from "../image/Image"
import { Navigation, NavigationProps } from "../navigation/Navigation"

export type HeaderProps = {
  image: ImageProps;
  homeUrl?: string;
  navigation: NavigationProps;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ homeUrl, image, navigation, className }) => {
  return (
    <header className={`header ${className ? className : ''}`}>
      <div className="container">
        <a href={homeUrl ? homeUrl : '/'} className="header__logo">
          <Image {...image} />
        </a>
        <Navigation {...navigation} className="header__menu" />
      </div>
    </header>
  )
}
