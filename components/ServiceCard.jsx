import Image from "next/image";
import styles from "../styles/ServiceCard.module.css";

const ServiceCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/mechanic.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>Mechanic</h1>
      <span className={styles.price}>₹250</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default ServiceCard;
