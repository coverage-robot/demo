import styled from "styled-components";

import { default as AppBase } from "./App";

export const App = styled(AppBase)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80%;
  margin: 0 auto;
  min-width: 300px;
`;
