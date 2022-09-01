import React, { useState } from "react";
import styled from "styled-components";

import Profile from "../assets/images/Profile01.jpg";

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
  top: 32px;
  right: 0px;
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

const LiDropDown = styled.li`
  &:button {
    cursor: pointer;
    border: 0px none transparent;
    outline: none 0px;
    background: none;
    appearance: initial;
    padding: 0px;
  }
`;

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

function TopNav() {
  const [isClicked, setIsClicked] = useState(false);

  const onClick = () => {
    console.log("onClick");
    setIsClicked((prev) => !prev);
    console.log(isClicked);
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
            <LiDropDown>
              <button>
                <DivDropDownItem>
                  <DivDropDownItemKid></DivDropDownItemKid>
                </DivDropDownItem>
              </button>
            </LiDropDown>
          </UlDropDown>
        </DivDropDown>
      </Nav>
    </Header>
  );
}

export default TopNav;
