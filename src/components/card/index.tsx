import { useState } from "react";
import { Container } from "./styles";
import { IProps } from "./types";

export const Card = (props: IProps) => {
  const person = props.person;
  const arrName = person.name?.split(" ");
  return (
    <Container>
      <h2>{person.name}</h2>
      {person.specialty ? (
        <h3>{person.specialty}</h3>
      ) : (
        <h3>
          {person.sex}
          <br /> {person.age}
        </h3>
      )}
      <h3>{person.health_plan || person.council_number}</h3>
      {person.specialty && (
        <button onClick={props.callback}>Marcar consulta</button>
      )}
    </Container>
  );
};
