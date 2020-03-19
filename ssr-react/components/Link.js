import cn from 'classnames';

import { Link } from 'root/routes';

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
    link = <Link route={route} params={params} passHref>{link}</Link>
  }

  return link
}
