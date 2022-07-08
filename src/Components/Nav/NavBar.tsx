import classes from "./NavBar.module.scss";
import NavItems from "./NavItems";
import { navobjectlist } from "../../Data/NavObjectList";
import { NavItemModel } from "../../Models/NavItemModel";
import useWindowSize from "../../Hooks/use-windowSize";
import { Fragment } from "react";

const NavBar = () => {
  const { isMobileView } = useWindowSize();

  const navClasses = !isMobileView ? classes.nav : classes.mobilenav;

  return (
    <Fragment>
      {isMobileView && (
        <div className={classes.moblienavlogopostion}>
          <div className={classes.mobilenavbar}>
            <div className={classes.mobilenavlogo}>Taj Longhurst</div>
          </div>
        </div>
      )}
      <nav className={navClasses}>
        <div className={classes.navbar}>
          <div className={classes.navlogo}>Taj Longhurst</div>
          <ul className={classes.navlist}>
            {navobjectlist.map((items: NavItemModel) => {
              return (
                <NavItems
                  key={items.id}
                  id={items.id}
                  img={items.img}
                  label={items.label}
                  path={items.path}
                />
              );
            })}
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
