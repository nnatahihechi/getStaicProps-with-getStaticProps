import styles from "../../styles/styles.module.scss";
import Link from "next/link";
import { Wizard } from "../../interface";

interface wizProps {
  wizards: Array<Wizard>;
}

export default function index({ wizards }: wizProps) {
  return wizards.map(({ id, firstName, lastName }) => (
    <div className={styles.main}>
      <Link href={`/wizard/${id}`} className={styles.link} key={id}>
        {firstName} {lastName}
      </Link>
    </div>
  ));
}

export async function getStaticProps() {
  const response = await fetch(
    "https://wizard-world-api.herokuapp.com/Wizards"
  );
  const wizards = await response.json();

  return {
    props: {
      wizards,
    },
  };
}
