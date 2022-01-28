import styled from "styled-components";
import vars from "../../styles/vars";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
  height: 330px;
  width: 224px;
  border-radius: 8px;
  padding: 10px;
  & figure {
    display: grid;
    place-content: center;
    height: 60%;
  }
  & img {
    margin-top: 20px;
    width: 100%;
    max-height: 180px;
    object-fit: contain;
  }
`;

const Info = styled.div`
  position: relative;
  & h2 {
    font-size: 50px;
    color: black;
    font-weight: 400;
    line-height: 30px;
  }
  & p {
    font-size: 30px;
    color: ${vars.pr_gray};
  }
  & img {
    position: absolute;
    top: -30px;
    right: 5px;
    width: 45px;
  }
`;

export { Container, Info };
