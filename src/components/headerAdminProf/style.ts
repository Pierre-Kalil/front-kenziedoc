import styled, { keyframes } from "styled-components";

export const HeaderProfAdmin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 100%;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const Ul = styled.ul`
  @media only screen and (min-width: 767px) {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }
`;

export const Li = styled.li`
  @media only screen and (min-width: 768px) {
    list-style: none;

    button {
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
  }
`;

const appearFromRight = keyframes`
	from {
		opacity: 0;
		transform: translateX(100%)
	}
	to {
		opacity: 1;
		transform: translateX(0)
	}
`;

const appearFromLeft = keyframes`
	from {
		opacity: 1;
		transform: translateX(0)
	}
	to {
		opacity: 0;
		transform: translateX(100%)
	}
`;

export const Menuhamburguer = styled.ul`
  /* display: none; */
  /* @media only screen and (max-width: 768px) { */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 99%;
  height: 94.5vh;
  top: 1.5px;
  left: 1.2px;
  border-radius: 20px;
  background: rgb(68, 196, 249, 100%);
  animation: ${appearFromRight} 0.5s;

  .active {
  }
  .menu {
    animation: ${appearFromLeft} 0.5s;
  }

  li {
    z-index: 4;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 8px;

    button {
      width: 200px;
      padding: 10px;
      border: none;
      border-radius: 5px;
      background: rgb(68, 196, 249, 100%);
      color: rgba(248, 298, 241);
      border: 1px solid rgba(248, 298, 241);

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
  }

  @media only screen and (max-width: 768px) {
    top: 1.8px;
    left: 1.7px;
  }
  @media only screen and (max-width: 320px) {
    top: 1.8px;
    left: 1.2px;
  }
  /* } */
`;
