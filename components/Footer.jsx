import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/backG.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>FIX EVERYTHING AT NTHING</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>OUR OFFICE</h1>
          <p className={styles.text}>
            South Tukoganj
            <br /> Indore, 452001
            <br /> 8198XXXXXX
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 A.M. – 11:00 P.M.
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 10:00 A.M. – 11:00 P.M.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
