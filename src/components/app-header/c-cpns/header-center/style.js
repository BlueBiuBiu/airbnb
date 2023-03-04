import styled from "styled-components";

export const CenterWrapper = styled.div`
  .search-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 48px;
    cursor: pointer;
    border: 1px solid #ddd;
    padding: 0 8px;
    border-radius: 24px;
    ${props => props.theme.mixin.boxShadow}

    .text {
      padding: 0 16px;
      color: ${props => props.theme.text.secondaryColor};
      font-weight: 600;
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      color: #fff;
      background-color: ${props => props.theme.color.primaryColor}
    }
  }

  .tab {
    display: flex;

    .title {
      margin-right: 25px;
      padding-bottom: 5px;
      cursor: pointer;
      
      &.active {
        border-bottom: 2px solid #000;
      }
    }
  }

  .header-tab {
    position: absolute;
    display: flex;
    justify-content: center;
    top: 80px;
    left: 0;
    right: 0;
    height: 100px;
    background-color: #fff;
    z-index: 9;
  }

  .cover {
    position: absolute;
    top: 180px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    width: 100%;
    height: 100vh;
    background-color: rgba(255,255,255,.3);
  }
`