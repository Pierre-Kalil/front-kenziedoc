import { useState } from "react";
import { Container } from "./styles";
import { IProps } from "./types";

export const Card = (props: IProps) => {
  const [buttonText, setButtonText] = useState("Marcar consulta");
  const person = props.person;
  return (
    <Container>
      <h2>{person.name}</h2>
      {person.specialty ? (
        <h3>{person.specialty}</h3>
      ) : (
        <h3>
          {person.sex} - {person.age}
        </h3>
      )}
      <h3>{person.health_plan || person.council_number}</h3>
      {person.specialty && <button>{buttonText}</button>}
    </Container>
  );
};
