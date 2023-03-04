import styled from "styled-components";

export const HeaderTabWrapper = styled.div`

  .tab {
    width: 850px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 66px;
    border-radius: 32px;
    border: 1px solid #ddd;

    .item {
      flex: 1;
      margin-left: 30px;
      cursor: pointer;

      .title {
        font-size: 12px;
        font-weight: 800;
        color: #222;
      }

      .subtitle {
        font-size: 14px;
        color: #666;
      }
    }

    .divider {
      height: 32px;
      width: 1px;
      background-color: #ddd;
    }
  }
`