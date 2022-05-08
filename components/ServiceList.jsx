import styles from "../styles/ServiceList.module.css";
import ServiceCard from "./ServiceCard";

const ServiceList = ({ serviceList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Affordable services at your doorstep</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
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
