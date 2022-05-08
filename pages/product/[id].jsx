import styles from "../../styles/Service.module.css";
import Image from "next/image";
import { useState } from "react";

const Service = () => {
  const [size, setSize] = useState(0);
  const service = {
    id: 1,
    img: "/img/mechanic.png",
    name: "MECHANIC",
    price: [250, 350, 500],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={service.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{service.name}</h1>
        <span className={styles.price}>₹{service.price[size]}</span>
        <p className={styles.desc}>{service.desc}</p>
        <h3 className={styles.choose}>Choose priorty</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className={styles.number}>3 HRS</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className={styles.number}>1 HR</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="#d27e01"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"
              />
            </svg>
            <span className={styles.number}>URGENT</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additionals</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="Ncontact"
              name="Ncontact"
              className={styles.checkbox}
            />
            <label htmlFor="Ncontact">No contact</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="3mo"
              name="3mo"
            />
            <label htmlFor="3mo">3 months cover</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="fStar"
              name="fStar"
            />
            <label htmlFor="fStar">5 Star Proffesional</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="awClean"
              name="awClean"
            />
            <label htmlFor="awClean">After work cleaning</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
