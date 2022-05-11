import styles from "../styles/ServiceList.module.css";
import ServiceCard from "./ServiceCard";

const ServiceList = ({ serviceList }) => {
  return (
    <div id="listService" className={styles.container}>
      <h1 className={styles.title}>Affordable services at your doorstep</h1>
      <p className={styles.desc}>
        Best place to solve you daily household problems @Low cost. High Quality
        . Best Hygiene
      </p>
      <div className={styles.wrapper}>
        {serviceList.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
