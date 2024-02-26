import styled from "styled-components";
import { Tile as TileBase } from "./Tile";

export const Tile = styled(TileBase)`
  background: ${(props) => (!props.isActive ? "white" : "green")};
  aspect-ratio: 1/1;
  border: 1px solid #ccc;
`;
