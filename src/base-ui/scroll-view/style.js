import styled from "styled-components";


export const ScrollViewWrapper = styled.div`
  position: relative;

  .scroll {
    overflow: hidden;

    .scroll-content {
      display: flex;
      transition: transform 250ms ease;
    }
  }

  .control {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background-color: #fff;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 0px 1px 1px 1px rgba(0,0,0,.14);
    cursor: pointer;
    top: 50%;
    z-index: 9;
    transform: translateY(-50%);
  }

  .left {
    left: -10px;
  }

  .right {
    right: -10px;
  }
`