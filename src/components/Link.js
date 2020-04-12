import cn from 'classnames';
import React from "react";
import { BrowserRouter as Router,Link } from 'react-router-dom';

export default ({
  route = '#',
  params,
  children,
  className,
  active,
  style,
  onClick,
  target = '',
  prefetch
}) => {
  const isExternal = /^https?/.test(route);
  let link = (
    <a style={style} className={cn(className, { active })} target={isExternal ? '_blank' : ''} rel={isExternal ? 'noreferer': ''} onClick={onClick} href={route}>
      <span>{children}</span>
    </a>
  );

  if (!isExternal) {
    link = <Router><Link route={route} params={params} passHref>{link}</Link></Router>
    console.log("route:" + route);
    console.log("link:" + link);
  }

  return link
}
