import cn from 'classnames';
import React from "react";
import { BrowserRouter as Router,Link } from 'react-router-dom';

export default ({
  route = '#',
  params,
  children,
  className
}) => {
  const isExternal = /^https?/.test(route);
  let link = (
    <span className={cn(className)}>
      <span>{children}</span>
    </span>
  );
  
  link = <Link to={route} params={params}>{link}</Link>

  return link
}
