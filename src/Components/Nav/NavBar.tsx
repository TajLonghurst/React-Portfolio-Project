import classes from "./NavBar.module.scss";
import { Fragment, useEffect } from "react";
import NavItems from "./NavItems";
import { navobjectlist } from "../../Data/NavObjectList";
import { NavItemModel } from "../../Models/NavItemModel";
import useWindowSize from "../../Hooks/use-windowSize";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../ReduxStore/Index";
import { uiActions } from "../../ReduxStore/ui-slice";

const NavBar = () => {
  const currentPageTitle = useSelector((state: RootState) => state.ui.mobileResumeTitle);
  const currentPageNavTitle = useSelector((state: RootState) => state.ui.mobileResumeNavTitle);
  const { isMobileView } = useWindowSize();
  const dispatch = useDispatch();

  const navClasses = !isMobileView ? classes.nav : classes.mobilenav;
  const pagelabel = currentPageTitle ? currentPageTitle : "Taj Longhurst";
  const resumePageisActive = currentPageTitle === "Resume" ? true : false;
  const resumeNavlabel = currentPageNavTitle ? currentPageNavTitle : "";

  useEffect(() => {
    if (currentPageTitle === "Resume") {
      dispatch(uiActions.mobileResumeNavTitle());
    }
  }, [dispatch, currentPageTitle]);

  return (
    <Fragment>
      {isMobileView && (
        <div className={classes.moblienavlogopostion}>
          <div className={classes.mobilenavbar}>
            <div className={classes.mobilenavpage}>{pagelabel}</div>
            {resumePageisActive && (
              <div className={classes.mobilennavtitle}>{" / " + resumeNavlabel}</div>
            )}
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
