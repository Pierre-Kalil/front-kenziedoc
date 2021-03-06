import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
<<<<<<< HEAD
  flex-direction: column;
=======
  /* flex-direction: column; */
  flex-direction: row;
  justify-content: space-around;
>>>>>>> 62c21112207b8c8e5ab95ca0d6129d1bf911abfb
  align-items: center;
  width: 95%;
  height: 95vh;
  background: rgba(248, 298, 241, 0.9);
  border-radius: 20px;
  padding: 1rem;
  overflow-y: scroll hidden;
`;

export const Container = styled.div`
  background-color: rgb(68, 196, 249, 100%);
  width: 290px;
  height: 210px;
  padding: 10px 15px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  margin: 5px;

  h1 {
    color: rgba(248, 298, 241, 0.9);
  }

  p {
    color: rgba(248, 298, 241, 0.9);
    margin: 1rem;
  }

  button {
    border-radius: 20px;
    width: 100%;
    border: 1px solid transparent;
    padding: 5px 10px;
    margin-top: 5px;
    color: white;
    background-color: #4ebef2;
    transition: all 0.3s;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);

    :hover {
      cursor: pointer;
      color: #4ebef2;
      background-color: white;
      border: 1px solid #4ebef2;
    }
  }
`;
