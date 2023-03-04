import styled from "styled-components";

export const EntirePaginationWrapper = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 30px;

    .MuiPaginationItem-icon {
      font-size: 30px;
    }

    .Mui-selected {
      background-color: #222;
      color: #fff;
    }

    .MuiPaginationItem-page {
      margin-right: 9px;
    }
  }

  .desc {
    display: flex;
    justify-content: center;

    margin-top: 16px;
    color: #222;
  }
`;
