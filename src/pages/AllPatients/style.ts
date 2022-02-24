import styled from "styled-components";

export const ContainerPatient = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 95vh;
  background: rgba(248, 298, 241, 0.9);
  border-radius: 20px;
  overflow-y: scroll hidden;

  input {
    display: block;
    padding: 10px;
    border: 1px solid rgb(68, 196, 249, 100%);
    border-radius: 5px;
    margin: 10px auto;
  }

  input:hover {
    outline: 1px solid rgb(68, 196, 249, 100%);
  }
`;

export const PatientList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
