import styled from "styled-components";


export const SectionTabWrapper = styled.div`
  padding-bottom: 8px;

  .tab-item {
    flex-shrink: 0;
    flex-basis: 120px;
    text-align: center;
    padding: 14px 16px;
    margin-right: 16px;
    font-size: 17px;
    border: 0.5px solid #d8d8d8;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow};

    &.active {
      color: #fff;
      background-color: ${props => props.theme.color.secondaryColor};
    }
  }
`