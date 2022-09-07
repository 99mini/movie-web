import React from "react";
import styled from "styled-components";
import PropsType from "prop-types";

const DivTitleBar = styled.div`
  display: flex;
  position: relative;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: flex-end;
  font-size: initial;
  margin-bottom: 5px;
`;

const DivTitle = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  min-width: 0px;
`;

const H2Title = styled.h2`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 26px;
`;

const DivShowMoreBtn = styled.div`
  flex-shrink: 0;
  padding-bottom: 3px;
  margin-left: 6px;
`;

const AShowMoreBtn = styled.a`
  color: rgb(132, 134, 141);
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 20px;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

function SectionTitleBar({ title, isShowMoreBtn = false }) {
  return (
    <DivTitleBar>
      <DivTitle>
        <H2Title>{title}</H2Title>
      </DivTitle>
      <DivShowMoreBtn>
        {isShowMoreBtn ? (
          <AShowMoreBtn role="button">더보기</AShowMoreBtn>
        ) : null}
      </DivShowMoreBtn>
    </DivTitleBar>
  );
}

SectionTitleBar.propsTypes = {
  title: PropsType.string.isRequired,
};

export default SectionTitleBar;
