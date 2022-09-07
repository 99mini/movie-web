import React, { useState } from "react";
import styled from "styled-components";

import Profile from "../assets/images/Profile01.jpg";
import { ReactComponent as NewProfile } from "../assets/svg/NewProfile.svg";

const Header = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  padding-left: 240px;
  z-index: 500;
  width: 100vw;
`;

const Nav = styled.nav`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 12px 40px;
  background: #141517;
  transition: background-color 300ms;
`;

const DivProfileMainWrapper = styled.div`
  display: block;
  position: fixed;
  right: 32px;
  width: 32px;
  height: 32px;
  padding: 0;
  border-radius: 100%;
  margin: 0;
  overflow: hidden;
`;

const DivProfileWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const BtnProfile = styled.button`
  vertical-align: top;
  cursor: pointer;
  border: 0px none transparent;
  outline: none 0px;
  background: none;
  appearance: initial;
  padding: 0px;
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const DivDropDown = styled.div`
  display: ${(props) => (props.isClicked ? "block" : "flex")};
  visibility: ${(props) => (props.isClicked ? "visible" : "hidden")};
  position: absolute;
  z-index: 0;
  -webkit-box-pack: center;
  justify-content: center;
  width: auto;
  height: auto;
  outline: none;
  top: 48px;
  right: 32px;
`;

const UlDropDown = styled.ul`
  display: flex;
  flex-direction: column;
  background: rgb(40, 41, 42);
  width: 200px;
  padding: 4px 0px;
  border-radius: 4px;
  outline: none;
  box-shadow: rgb(0 0 0 / 25%) 0px 8px 16px;
  margin: 4px 0px;
  overflow: hidden;
`;

const LiDropDown = styled.li``;

const DivDropDownItem = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  background: rgb(40, 41, 42);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0px;
  text-decoration: none;
  line-height: 20px;
  color: rgb(255, 255, 255);
  white-space: nowrap;
  height: 40px;
  padding: 0px 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  &:hover {
    background: rgb(51, 52, 54);
  }
  & > svg {
    margin-right: 8px;
  }
`;

const HrDivider = styled.hr`
  background-color: rgb(56, 57, 61);
  width: 100%;
  height: 1px;
  padding: 0px;
  margin: 4px 0px;
  border: none;
`;

const BtnDropDownItem = styled.button`
  display: block;
  width: 100%;
  cursor: pointer;
  border: 0px none transparent;
  outline: none 0px;
  background: none;
  appearance: initial;
  padding: 0px;
`;

const DivDropDownItemKid = styled.div`
  position: relative;
  background: url(https://an2-img.amz.wtchn.net/image/v2/a_I2azu7oYsReqd8nADEfg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1UQXdlREV3TUNKZExDSndJam9pTDNZeUwzTjBiM0psTDNWelpYSXZaR1ZtWVhWc2RGOXdjbTltYVd4bFgybHRZV2RsTDNCeWIyWnBiR1ZmYTJsa0xuQnVaeUo5LnduSXRNSjRVaW95TWw3aWpiVlkxc1p4NG9fRDRaR1Z4Wms1QnptazRaRVk)
    center center / cover no-repeat;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 0px 8px 0px 0px;
`;

const DivDropDownItemText = styled.div`
  flex: 1 1 0%;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ADropDownItem = styled.a`
  display: block;
  width: 100%;
`;

function KidImg() {
  return <DivDropDownItemKid />;
}

function BtnProfileListItem({ children = null, text }) {
  return (
    <LiDropDown>
      <BtnDropDownItem>
        <DivDropDownItem>
          {children}
          <DivDropDownItemText>{text}</DivDropDownItemText>
        </DivDropDownItem>
      </BtnDropDownItem>
    </LiDropDown>
  );
}

function AProfileListItem({ href, text }) {
  return (
    <LiDropDown>
      <ADropDownItem href={href}>
        <DivDropDownItem>{text}</DivDropDownItem>
      </ADropDownItem>
    </LiDropDown>
  );
}

function TopNav() {
  const [isClicked, setIsClicked] = useState(false);

  const onClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <Header>
      <Nav>
        <DivProfileMainWrapper>
          <DivProfileWrapper>
            <BtnProfile onClick={() => onClick()} type="button">
              <Img src={Profile} />
            </BtnProfile>
          </DivProfileWrapper>
        </DivProfileMainWrapper>
        <DivDropDown isClicked={isClicked}>
          <UlDropDown>
            <BtnProfileListItem text={"키즈"}>
              <KidImg />
            </BtnProfileListItem>
            <BtnProfileListItem text={"새 프로필"}>
              <NewProfile />
            </BtnProfileListItem>
            <HrDivider />
            <AProfileListItem herf="" text={"프로필 편집"} />
            <HrDivider />
            <AProfileListItem herf="" text={"설정"} />
            <AProfileListItem herf="" text={"공지사항"} />
            <AProfileListItem herf="" text={"평가하기"} />
            <AProfileListItem herf="" text={"초대하기"} />
            <AProfileListItem herf="" text={"고객센터"} />
            <AProfileListItem herf="" text={"로그아웃"} />
          </UlDropDown>
        </DivDropDown>
      </Nav>
    </Header>
  );
}

export default TopNav;
