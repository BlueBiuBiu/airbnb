import styled from "styled-components";

export const PictureBrowserWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #333;

  .top {
    position: relative;
    height: 86px;

    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }

  .slider {
    position: relative;
    display: flex;
    flex: 1;

    .control {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 100%;

      .left,
      .right {
        display: flex;
        width: 83px;
        height: 100%;
        justify-content: center;
        align-items: center;
        z-index: 1;
        color: #fff;
        cursor: pointer;
      }
    }

    .picture {
      position: absolute;
      width: 100%;
      height: 100%;

      img {
        position: absolute;
        width: 100vh;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      /* 动画的样式 */
      .pic-enter {
        position: absolute;
        top: 50%;
        transform: translate(${(props) => (props.isNext ? "100%" : "-100%")}, -50%);
        opacity: 0;
      }

      .pic-enter-active {
        transform: translate(0);
        opacity: 1;
        transition: all 500ms ease;
      }

      .pic-exit {
        opacity: 1;
      }

      .pic-exit-active {
        opacity: 0;
        transition: all 500ms ease;
      }
    }
    }
  }

  .preview {
    display: flex;
    justify-content: center;
    height: 100px;
    margin-top: 10px;

    .info {
      width: 100vh;
      color: #fff;

      .desc {
        display: flex;
        justify-content: space-between;

        .toggle {
          cursor: pointer;
        }
      }

      .list {
        margin-top: 3px;
        transition: height 300ms ease;
        overflow: hidden;
        height: ${(props) => (props.showList ? "67px" : "0")};
        
        .item {
          margin-right: 13px;
          cursor: pointer;

          img {
            height: 67px;
            opacity: 0.5;
          }

          &.active {
              img {
                opacity: 1;
              }
            }
        }
      }
    }
  }
`;
