import React, { useState } from "react";
import styled from "styled-components";

import SliderBtn from "./SliderBtn";
import SlideArticleCell from "./SlideArticleCell";

const BrowseSection = styled.section`
  margin-bottom: 32px;
`;

const SliderDiv = styled.div`
  position: relative;

  &::before {
    left: -40px;
    background: linear-gradient(90deg, rgb(0, 0, 0) 70%, rgba(0, 0, 0, 0) 100%);
  }

  &::after {
    right: -40px;
    background: linear-gradient(
      270deg,
      rgb(0, 0, 0) 70%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0px;
    bottom: 0px;
    z-index: 1;
    width: 40px;
  }
`;

const UlArticle = styled.ul`
  position: relative;
  z-index: 0;
  white-space: nowrap;
  margin: 0px -8px;
`;

const Li = styled.li`
  display: inline-block;
  position: relative;
  padding: 0px 8px;
  cursor: pointer;
  width: 100%;
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.1, 1) 0s;
  vertical-align: bottom;

  @media screen and (min-width: 62em) {
    width: 50%;
  }
`;

function BrowseSectionComponent() {
  const [isHover, setHover] = useState(false);
  const onMouseEnter = () => {
    setHover(true);
  };
  const onMouseLeave = () => {
    setHover(false);
  };
  return (
    <BrowseSection>
      <SliderDiv onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <SliderBtn direction={"prev"} isHover={isHover} />
        <UlArticle>
          <Li>
            <SlideArticleCell
              subtitle="새로 올라왔어요"
              title="8월 4주 신작"
              explanation="보이스, 정부지간 - Plus &Minus 등"
              thumbnailSrc="https://an2-img.amz.wtchn.net/image/v2/W1L1HjeorMn5jMXz9F7kFw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZMk1USXpNVFV4TkRZNU5qTTVNRGcyTVNJc0luRWlPamd3ZlEuSHhReFl4aENsZmMwdTBPeU94bVBoVGlTTFhoMS1naUYwUW9BQmp3M1VaYw"
            />
          </Li>
          <Li>
            <SlideArticleCell
              subtitle="추천 리스트"
              title="숨 막히는 첩보 액션"
              explanation="스릴, 쾌감 터지는 액션! 오늘 끝장 보자 빵야~"
              thumbnailSrc="https://an2-img.amz.wtchn.net/image/v2/dUb5xLtCeaCQ_Sc9c7OYWA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZMk1USXlNakl5TWpNd016Z3dPVEkxT0NJc0luRWlPamd3ZlEucjBfSDh5RVZDVl81YmpFSExmWUhteXFvVF9zMF96OGRtWnREMFlkWjNpZw"
            />
          </Li>
          <Li>
            <SlideArticleCell
              subtitle="추천작"
              title="미드소마 감독판"
              explanation="집단 찐 광기의 현장, “이런 축제는 처음이야”"
              thumbnailSrc="https://an2-img.amz.wtchn.net/image/v2/cTeKR7IdfrD7dsxx9Mwj0w.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1KbklsMHNJbkFpT2lJdmRqSXZjM1J2Y21VdmFXMWhaMlV2TVRZMk1USXpOamM1TURNek1UazROakEzTkNJc0luRWlPamd3ZlEubnRTekNWV0R6cG5YbkNnbm93dDg2b2Iwb1BBOUR3ZFNNVnlyTWt1OUdIdw"
            />
          </Li>
        </UlArticle>
        <SliderBtn direction={"next"} isHover={isHover} />
      </SliderDiv>
    </BrowseSection>
  );
}

export default BrowseSectionComponent;
