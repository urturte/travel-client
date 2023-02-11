import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <Link href="/">Makalius</Link>
      </div>
    </div>
  );
};
export default Navbar;
