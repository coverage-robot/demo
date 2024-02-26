import styled from "styled-components";
import { Row as RowBase } from "./Row";

export const Row = styled(RowBase)`
  display: grid;
  grid-gap: 6px;
  margin-bottom: 6px;
  grid-template-columns: repeat(${(props) => props.cols}, 1fr);
`;
