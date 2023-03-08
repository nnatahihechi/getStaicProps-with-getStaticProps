import { Wizard } from "@/interface";
import React from "react";

interface singlewizard {
  wizards: Wizard;
}
export default function wizardDetails({ wizards }: singlewizard) {
  const { id, firstName, lastName } = wizards;
  return (
    <div className="detail" key={id}>
      <h4>Details</h4>
      <h2> Last Name</h2>{lastName}
    </div>
  );
}

export async function getStaticPaths() {
  const response = await fetch(
    "https://wizard-world-api.herokuapp.com/Wizards"
  );
  const wizards = await response.json();

  const paths = wizards.map((wizard: Wizard) => ({
    params: { id: wizard.id },
  }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }: { params: { id: string } }) {
  const response = await fetch(
    `https://wizard-world-api.herokuapp.com/Wizards/${params.id}`
  );
  const wizards = await response.json();
  return {
    props: {
      wizards,
    },
  };
}
