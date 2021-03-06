import styled from "styled-components";

export const Container = styled.div`
  align-self: center;
  align-items: center;
  display: flex;
  height: 450px;

  @media (max-width: 650px) {
    height: auto;
  }

  h1,
  p {
    color: white;
    margin: 10px 0px;
    font-weight: 600;
  }
  p {
    font-weight: 500;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: 0px 4rem;
  @media (max-width: 650px) {
    flex-direction: column;
    padding: 0px 0rem;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: 650px) {
    width: 100%;
    padding: 4rem 0rem;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  button {
    width: 200px;
    border: none;
    padding: 1rem;
    border-radius: 0.5rem;
    color: var(--blue-hard);
    background-color: white;
    font-weight: 600;
    font-size: 1.2rem;
    cursor: pointer;
  }

  button:hover {
    background: transparent;
    border: 1px solid white;
    color: white;
  }
`;

export const SmartPhone = styled.div`
  @media (max-width: 650px) {
    display: none;
  }
`;
