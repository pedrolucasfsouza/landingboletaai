import styled from "styled-components";

export const Container = styled.div`
  background: red;
  display: flex;
  justify-content: space-around;
  padding: 1rem 5rem;
  width: 100%;
  height: 650px;
  align-items: flex-start;
  background: radial-gradient(
    50% 50% at 43.18% 54.97%,
    #578ee1 0%,
    #004e92 100%
  );
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
  list-style: none;
  color: white;

  ul li {
    display: inline-block;
  }
  li {
    margin: 0px 1.5rem 0px 0px;
    cursor: pointer;
  }
  li a {
    text-decoration: underline;
    color: white;
  }
  li:hover {
    text-decoration: underline;
  }
`;
