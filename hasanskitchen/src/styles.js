import styled, { createGlobalStyle } from "styled-components";

export const Title = styled.h1`
  text-align: center;
`;

export const Container = styled.div`
  text-align: center;
  margin-top: 200px;
`;

export const CardWrapper = styled.div`
  margin-left: 200px;
  margin-right: 200px;
`;

export const CardTitleStyled = styled.h2`
  margin-bottom: 90px;
`;
export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;
