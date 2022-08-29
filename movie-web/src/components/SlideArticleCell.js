import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Link = styled.a`
  text-decoration: none;
`;
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SubTitleColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const Span = styled.span`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0px;
  text-decoration: none;
  line-height: 18px;
  color: rgb(255, 255, 255);
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const H4 = styled.h4`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 26px;
  color: rgb(255, 255, 255);
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const P = styled.p`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 24px;
  color: rgb(186, 186, 193);
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Figure = styled.figure`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  border-radius: 4px;
  margin: 0px;
  overflow: hidden;
`;

const Thumbnail = styled.img`
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;
function SlideArticleCell({ subtitle, title, explanation, thumbnailSrc }) {
  return (
    <Link>
      <Layout>
        <SubTitleColumn>
          <Span>{subtitle}</Span>
          <H4>{title}</H4>
          <P>{explanation}</P>
        </SubTitleColumn>
        <Figure>
          <Thumbnail src={thumbnailSrc} />
        </Figure>
      </Layout>
    </Link>
  );
}

SlideArticleCell.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
  thumbnailSrc: PropTypes.string.isRequired,
};

export default SlideArticleCell;
