import classes from "./AboutMe.module.scss";
import AboutMeContent from "./AboutMeContent";
import { pageimgLoadAnimation } from "../../Animations/AboutMe";
import ProfliePic from "../../Assets/Images/Taj-Longhurst-AboutPage.png";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className={classes.container}>
      <div className={classes.row}>
        <div className={classes.col_8}>
          <AboutMeContent />
        </div>
        <div className={classes.col_4}>
          <motion.div
            variants={pageimgLoadAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={classes.imgcontent}
          >
            <div className={classes.imgcontainer}>
              <img
                className={classes.img}
                src={ProfliePic}
                alt="Img Failed to load"
              />
            </div>
            <div className={classes.colorbg}>
              <div className={classes.imgbackgroundfiller}></div>
              <div className={classes.imgbackground}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
