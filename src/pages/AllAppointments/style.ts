import styled from "styled-components";

export const ContainerAppointments = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */

  width: 95%;
  height: 95vh;
  background: rgba(248, 298, 241, 0.9);

  border-radius: 20px;
`;

export const BoxAppointments = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 70vh;
  margin-top: 20px;
`;

export const CardAppointments = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  margin: 5px;
`;

export const HeaderProfAdmin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 100%;
`;

export const Ul = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

export const Li = styled.li`
  list-style: none;
  margin: 5px;
`;
