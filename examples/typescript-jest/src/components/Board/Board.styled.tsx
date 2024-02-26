import styled from "styled-components";
import { Board as BoardBase } from "./Board";

export const Board = styled(BoardBase)`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);
`;
