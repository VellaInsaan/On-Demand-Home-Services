import styles from "../../styles/Order.module.css";
import Image from "next/image";

const Order = () => {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.trTitle}>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.tr}>
                <td>
                  <span className={styles.id}>129837819237</span>
                </td>
                <td>
                  <span className={styles.name}>John Doe</span>
                </td>
                <td>
                  <span className={styles.address}>Elton st. 212-33 LA</span>
                </td>
                <td>
                  <span className={styles.total}>$79.80</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="#d27e01"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={30}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/img/confirming.svg" width={40} height={55} alt="" />
            <span>Confirming order</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={30}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/img/delivery.svg" width={40} height={55} alt="" />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={30}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/img/tick.svg" width={40} height={55} alt="" />
            <span>Request completed</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={30}
                height={20}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
