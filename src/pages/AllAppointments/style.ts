import styled from "styled-components";

export const ContainerAppointments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  height: 95vh;
  background: rgba(248, 298, 241, 0.9);
  border-radius: 20px;
  overflow-y: scroll hidden;
  position: relative;

  h1 {
    color: rgb(68, 196, 249, 100%);
  }

  svg {
    width: 20px;
    height: 20px;
    color: rgb(68, 196, 249, 100%);
    z-index: 5;
    margin: 10px 0px 0 10px;
    cursor: pointer;

    @media (min-width: 767px) {
      display: none;
    }
  }
  .close {
    color: rgba(248, 298, 241, 0.9);
  }
`;

export const BoxSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px 0;

  input {
    padding: 10px;
    border: 1px solid rgb(68, 196, 249, 100%);
    border-radius: 5px;
  }

  input:hover {
    border: 2px solid rgb(68, 196, 249, 100%);
  }

  button {
    margin: 0px 5px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background: rgb(68, 196, 249, 100%);
    color: rgba(248, 298, 241);

    cursor: pointer;
  }

  button:hover {
    color: rgb(68, 196, 249, 100%);
    font-weight: bold;
    background: rgba(248, 298, 241);
    border: 1px solid rgb(68, 196, 249, 100%);
    transition: 0.5s;
  }

  button:active {
    background: rgb(68, 196, 249, 100%);
    color: rgba(248, 298, 241);
    transition: 0.1s;
  }

  @media (max-width: 379px) {
    button {
      margin: 5px 0;
      width: 200px;
    }
  }
`;

export const BoxAppointments = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 75vh;
  margin-top: 20px;
  overflow-y: auto;
`;
