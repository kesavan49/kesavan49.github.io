import { facebook, insta, tweet } from "../../assets/images";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.quick}>
        <div>About us</div>
        <div>Privacy Policy</div>
        <div>Terms of use</div>
      </div>
      <div className={styles.social}>
        <img src={facebook} />
        <img src={insta} />
        <img src={tweet} />
      </div>
    </div>
  );
};

export default Footer;
