import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #f7f5f5;
  width: 150px;
  height: 180px;
  padding: 5px 5px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  margin: 5px;

  h3 {
    margin: 10px 0;
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
    :active {
      background: rgb(68, 196, 249, 100%);
      color: #4ebef2;
      transition: 0.1s;
    }
  }
`;
