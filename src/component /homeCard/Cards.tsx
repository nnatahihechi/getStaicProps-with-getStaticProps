import Link from "next/link";
import styles from "./cards.module.scss";

export default function cards() {
  return (
    <div className={styles.main}>
      <h4 className={styles.text}>
        Learn how to fetch data using getstaticprops and getstaticpath <br />{" "}
        click on the wizard for more
      </h4>
      <Link href="wizard" className={styles.cards}>
        wizard
      </Link>

      <ul className={styles.list}>
        What you will learn
        <li>getstaticprops</li>
        <li>getstaicpath</li>
        <li>NextPage</li>
      </ul>
    </div>
  );
}
