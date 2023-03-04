import styled from "styled-components";

export const AppHeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background-color: #fff;

  .content {
    display: flex;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid #eee;
    z-index: 19;
  }
`;
