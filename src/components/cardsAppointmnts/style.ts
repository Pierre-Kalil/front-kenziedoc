import styled from "styled-components";

export const CardAppointmentNew = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 270px;
  height: 160px;
  margin: 5px;
  border-radius: 10px;
  background: rgb(68, 196, 249, 100%);
  box-shadow: 10px 10px 10px -9px rgba(0, 0, 0, 0.2);

  span {
    margin: 1px 0;
  }
  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    width: 35%;
    height: 80%;
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 55%;
    height: 80%;
    color: rgba(248, 248, 249);
  }

  button {
    padding: 5px;
    color: rgb(68, 196, 249, 100%);
    font-weight: bold;
    background: rgba(248, 298, 241);
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background: rgb(68, 196, 249, 100%);
    color: rgba(248, 298, 241);
    border: 1px solid rgba(248, 298, 241);
    transition: 0.5s;
  }

  button:active {
    background: rgba(248, 298, 241);
    color: rgb(68, 196, 249, 100%);
    transition: 0.1s;
  }
`;
