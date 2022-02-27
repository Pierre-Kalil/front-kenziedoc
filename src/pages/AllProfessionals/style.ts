import styled from "styled-components";

export const ContainerProfessionals = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  height: 95vh;
  background: rgba(248, 298, 241, 0.9);
  border-radius: 20px;
  overflow-y: scroll hidden;

  input {
    display: block;
    padding: 10px;
    margin: 10px auto;
    border: 1px solid rgb(68, 196, 249, 100%);
    border-radius: 5px;
  }
  input:hover {
    border: 2px solid rgb(68, 196, 249, 100%);
  }
`;

export const ListProfessionals = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  height: 85vh;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
