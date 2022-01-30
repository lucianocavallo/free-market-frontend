import styled from "styled-components";
import vars from "../../styles/vars";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 330px;
  width: 100%;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.09);
  background: ${vars.pr_white};
  & figure {
    display: grid;
    place-content: center;
    height: 60%;
  }
  & img {
    width: 100%;
    max-height: 180px;
    object-fit: contain;
  }
`;

const Info = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  & h2 {
    font-size: 50px;
    color: black;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 15px;
  }
  & p {
    font-size: 30px;
    line-height: 20px;
    color: ${vars.pr_gray};
    margin-bottom: 15px;
  }
  & button {
    position: absolute;
    top: -10px;
    right: 5px;
  }
  & button[disabled] {
    opacity: 0.5;
    cursor: auto;
  }
  & button img {
    width: 45px;
  }
`;

export { Container, Info };
