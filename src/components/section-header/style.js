import styled from "styled-components";

export const SectionHeaderWrapper = styled.div`
  color: ${props => props.theme.text.secondaryColor};

  .title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .sub-title {
    font-size: 16px;
    margin-bottom: 20px;
  }
`