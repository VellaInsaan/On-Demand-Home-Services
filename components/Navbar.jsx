import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.homeButton}>
          <Link href="/" passHref>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width={30}
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </Link>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Query? Call Now !</div>
          <div className={styles.text}>
            <a href="tel:+9189898xxx">+9189898xxx</a>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>Home</li>
          </Link>
          <Link href="/#listService" passHref>
            <li className={styles.listItem}>Services</li>
          </Link>
          <Link href="/" passHref>
            <Image
              className={styles.logo}
              src="/img/logo.png"
              alt="logo"
              height="120px"
              width="190px"
            />
          </Link>
          <Link href="#footer" passHref>
            <li className={styles.listItem}>Contact Us</li>
          </Link>
          <Link href="/#footer" passHref>
            <li className={styles.listItem}>About</li>
          </Link>
        </ul>
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="white"
              width="30px"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
