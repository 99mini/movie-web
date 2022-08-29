import React from "react";
import styled from "styled-components";

const Hr = styled.hr`
  background-color: rgb(27, 28, 29);
  width: 100%;
  height: 1px;
  padding: 0px;
  border: none;
  margin: 0px 0px 18px;
`;

const Title = styled.div`
  margin: 54px 0px 0px;
`;

const H1 = styled.h1`
  color: rgb(255, 255, 255);
  margin: 0px 0px 12px;
  font-family: "Watcha Sans", Roboto, "Noto Sans KR", "Apple SD Gothic Neo",
    "Nanum Gothic", "Malgun Gothic", sans-serif;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 0px;
  line-height: 40px;
`;
function HomeTitle() {
  return (
    <Title>
      <H1>홈</H1>
      <Hr type="regular" />
    </Title>
  );
}

export default HomeTitle;
