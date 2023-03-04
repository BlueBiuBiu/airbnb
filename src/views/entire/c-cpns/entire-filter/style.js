import styled from "styled-components";


export const EntireFilterWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
  margin: 10px 20px;
  padding-bottom: 10px;

  .item {
    color: ${props => props.theme.text.primaryColor};
    border: 1px solid #eee;
    padding: 12px 16px;
    border-radius: 5px;
    margin-right: 10px;
    cursor: pointer;

    &.active {
      color: #fff;
      background-color: ${props => props.theme.color.secondaryColor};;
    }
  }
`