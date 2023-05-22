import Link from "next/link";
import cn from "classnames";
import styles from "./nav-item.module.css";

const NavItem = ({ href, children, selected, ...props }: any) => {
  return (
    <>
      <Link
        href={href}
        as={href}
        className={cn(styles.navItem, selected && styles.navItemSelected)}
        {...props}
      >
        {children}
      </Link>
    </>
  );
};

export default NavItem;
