import Image from "next/image";
import styles from "../styles/ServiceCard.module.css";
import Link from "next/link";

const ServiceCard = ({ service }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${service._id}`} passHref>
        <Image src={service.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{service.title}</h1>
      <span className={styles.price}>₹{service.prices[0]}</span>
      <p className={styles.desc}>{service.desc}</p>
    </div>
  );
};

export default ServiceCard;
