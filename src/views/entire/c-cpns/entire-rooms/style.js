import styled from "styled-components";


export const EntireRoomsWrapper = styled.div`
  position: relative;

  > h2 {
    margin-left: 20px;
  }

  .room-list {
    display: flex;
    flex-wrap: wrap;
    margin:  0 12px;
  }

  .load-cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 999;
    background-color: rgba(255,255,255,.5);
  }
  .MuiCircularProgress-indeterminate {
    position: absolute;
    top: 30px;
    left: 50%;
    color: ${props => props.theme.color.secondaryColor} !important;
    transform: translate(-50%);
  }
`