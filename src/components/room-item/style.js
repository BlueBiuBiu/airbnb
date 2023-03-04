import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  width: ${(props) => props.itemwidth};
  padding: 8px;
  box-sizing: border-box;
  flex-shrink: 0;

  .cover {
    position: relative;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .indicator {
    position: absolute;
    width: 30%;
    z-index: 99;
    left: 0;
    right: 0;
    bottom: 10px;
    margin: 0 auto;

    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 14.29%;

      .dot {
        width: 6px;
        height: 6px;
        background-color: #fff;
        border-radius: 50%;

        &.active {
          width: 8px;
          height: 8px;
        }
      }
    }
  }

  .slider {
    position: relative;
    cursor: pointer;

    &:hover {
      .control {
        display: flex;
      }
    }
   
    .control {
      display: none;
      position: absolute;
      justify-content: space-between;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        z-index: 9;
        background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);

        &.right {
          background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
        }
      }
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${(props) => props.verifycolor};
  }

  .name {
    font-size: 16px;
    font-weight: 700;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }

  .rate {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${(props) => props.theme.text.primaryColor};

    .count {
      margin: 0 2px 0 4px;
    }
  }
`;
