import styled from "styled-components";


export const HomeSectionV3Wrapper = styled.div`
  
  .longfor-list {
    margin: 0 -8px;
  }

  .inner {
    position: relative;
    width: 20%;
    flex-shrink: 0;
    padding: 0 8px;
    box-sizing: border-box;

    .cover {
      width: 100%;
    }

    .bg-cover {
      position: absolute;
      left: 8px;
      right: 8px;
      bottom: 0;
      height: 60%;
      background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%)
    }


    .desc {
      position: absolute;
      color: #fff;
      bottom: 50px;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;

      .city {
        font-size: 18px;
        font-weight: 600;
      }

      .price {
        font-size: 14px;
        margin-top: 5px;
      }
    }
  }
`