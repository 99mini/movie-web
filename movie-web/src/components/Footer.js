import React from "react";
import styled, { css } from "styled-components";

const VerticalBar = css`
  content: "";
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  vertical-align: top;
  width: 1px;
  height: 10px;
  margin: 5px 6px 0;
`;

const FooterSt = styled.footer`
  position: relative;
  padding: 27px 40px 40px;
`;

const UlTerms = styled.ul`
  color: rgba(255, 255, 255, 0.2);
  font-size: 10px;
  font-weight: 400;
  letter-spacing: -0.5px;
`;

const LiTermsItem = styled.li`
  display: inline-block;
  position: relative;
  color: ${(props) => (props.highlight ? "#fff" : "rgba(255, 255, 255, 0.7)")};
  font-size: "12px";
  font-weight: ${(props) => (props.highlight ? "700" : "400")};
  letter-spacing: -0.5px;
  vertical-align: top;
  cursor: pointer;

  &:not(:last-child):after {
    ${VerticalBar}
  }
`;

const UlConnection = styled.ul`
  letter-spacing: -0.5px;
  margin: 24px 0 0;
`;

const LiConnectionItem = styled.li`
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  line-height: 20px;
`;

const SpanConnectionTitle = styled.span`
  display: inline-block;
  width: 139px;
`;

const SpanConnectionContent = styled.span`
  &:before {
    ${VerticalBar}
  }
`;

const DivComponyInfo = styled.div`
  margin: 46px 0 0;
`;

const UlComponyInfo = styled.ul`
  color: rgba(255, 255, 255, 0.3);
  font-size: 12px;
  letter-spacing: -0.5px;
  vertical-align: middle;
  line-height: 20px;
`;

const LiComponyInfo = styled.li`
  display: inline-block;
  &:not(:last-child):after {
    ${VerticalBar}
  }
`;

const DivConnection = styled.div`
  position: absolute;
  top: 181px;
  right: 50px;
`;

const AIcon = styled.a`
  display: inline-block;
  background: url(${(props) => props.backgroundUrl}) center no-repeat;
  background-size: 24px 24px;
  width: 36px;
  height: 36px;
  border: 1px solid #fff;
  border-radius: 50%;
  margin: 0 0 0 20px;
`;

const DivCopyright = styled.div`
  color: rgba(255, 255, 255, 0.3);
  font-family: "Helvetica Neue", Helvetica, serif;
  font-size: 12px;
  font-weight: 400;
  white-space: pre-line;
  margin: 3px 0 0;
`;

const ImgCopyrightLogo = styled.img`
  position: relative;
  top: 1px;
  margin-right: 3px;
  margin-left: 1px;
`;

const FooterIcon = ({ backgroundUrl, to }) => {
  return (
    <AIcon
      href={to}
      rel="noreferrer noopener"
      target="_blank"
      backgroundUrl={backgroundUrl}
    ></AIcon>
  );
};

const FooterLogo = () => {
  return (
    <a href="https://naver.com" rel="noreferrer noopener" target="_blank">
      <ImgCopyrightLogo
        alt="WATCHA"
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCA0MiAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNi43NTQ2IDIuNjE2NjRWNC4zMDYzSDE4LjQzODFWMTEuOTI4N0gyMC41MzU5VjQuMzA2M0gyMi4xMjMxVjIuNjE2NjRIMTYuNzU0NlpNMzIuOTM1OCA2LjIxNDQ0SDMxLjMzMDNWMi42MjkwOUgyOS4yMzg5VjExLjk0MTFIMzEuMzMwM1Y3LjkwNDA0SDMyLjkzNThWMTEuOTQxMUgzNS4wMjcyVjIuNjI5MDlIMzIuOTM1OFY2LjIxNDQ0Wk0yNS42NTExIDIuNTE2NDNIMjUuMjg2N0MyMy4zOTc4IDIuNTE2NDMgMjIuNjQyMyAzLjQ4MDE3IDIyLjY0MjMgNS4wNDQ3OVY5LjQ4NzkyQzIyLjY0MjMgMTEuMDUyNiAyMy4zOTc4IDEyLjA1MzggMjUuMzI3MyAxMi4wNTM4SDI1LjY5MTVDMjcuNjA3NCAxMi4wNTM4IDI4LjI4MiAxMC45MDIzIDI4LjI4MiA5LjYwMDdWOC4wMTExOEgyNi4yMzEyVjkuNDg3OTJDMjYuMjMxMiAxMC4wMzg4IDI2LjA0MjMgMTAuMzc2NyAyNS41MDI2IDEwLjM3NjdDMjQuOTc2NCAxMC4zNzY3IDI0LjgwMTEgMTAuMDYzOCAyNC44MDExIDkuNDc1NTNWNS4wMzIyMUMyNC44MDExIDQuNDQzOTEgMjQuOTc2NCA0LjE0MzYzIDI1LjUwMjYgNC4xNDM2M0MyNi4wNTU3IDQuMTQzNjMgMjYuMjMxMiA0LjQ2ODk1IDI2LjIzMTIgNS4wMzIyMVY2LjEwODZIMjguMjgyVjQuOTE5NTZDMjguMjgyIDMuMzY3NjUgMjcuNTUzNSAyLjUxNjQzIDI1LjY1MTEgMi41MTY0M1pNMTQuNzEyNSA4Ljc0OTkyTDE0LjEwNDMgNC44NTcyOUgxMy43NDQ2TDEzLjEzNjMgOC43NDk5MkgxNC43MTI1Wk0xNS40NzUyIDIuNjE2NjRMMTcuMTIxNCAxMS45Mjg3SDE1LjIwOTJMMTQuOTc2NSAxMC40Mzk3SDEyLjg3MjNMMTIuNjM5NiAxMS45Mjg3SDEwLjcyNzRMMTIuMzczNyAyLjYxNjY0SDE1LjQ3NTJaTTM5LjU5MSA4Ljc0OTkzTDM4Ljk4MjggNC44NTcyOUgzOC42MjMyTDM4LjAxNDggOC43NDk5M0gzOS41OTFaTTQwLjM1MzggMi42MTY2NEw0MiAxMS45Mjg3SDQwLjA4NzhMMzkuODU1MiAxMC40Mzk3SDM3Ljc1MDhMMzcuNTE4MiAxMS45Mjg3SDM1LjYwNkwzNy4yNTIyIDIuNjE2NjRINDAuMzUzOFoiIGZpbGw9IiM1QTVBNUEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjAwMjk0IDBMOC4zNzkyOSA4LjkxODdMOC4yMTE3IDguOTI3MjlMNi43Mjg0NiAyLjYxNzVINC44OTU2OUwzLjc4NjExIDkuMTU1NDhMMy41NDgyOSA5LjE2NzY5TDIuNTU0ODQgMi42MTc1SDBMMi4zMjQzNSAxMi4zNjg2TDQuOTIyNjEgMTIuMTk5OUw1Ljc2Nzk0IDYuMTQ3MjlMNi4wMTU4NyA2LjEzNDA0TDcuMTQ3ODMgMTIuMDUzNkw5LjYzNDYzIDExLjg5MTFMMTEuNjA5NSAwSDkuMDAyOTRaIiBmaWxsPSIjNUE1QTVBIi8+Cjwvc3ZnPgo="
        width="42"
      />
    </a>
  );
};
function Footer() {
  return (
    <FooterSt>
      <UlTerms>
        <LiTermsItem>왓챠피디아 서비스 이용약관</LiTermsItem>
        <LiTermsItem highlight={true}>개인정보 처리 방침</LiTermsItem>
        <LiTermsItem>왓챠 서비스 이용약관</LiTermsItem>
        <LiTermsItem>고객센터</LiTermsItem>
        <LiTermsItem>채용정보</LiTermsItem>
      </UlTerms>
      <UlConnection>
        <LiConnectionItem>
          <SpanConnectionTitle>고객센터(이용 및 결제 문의)</SpanConnectionTitle>
          <SpanConnectionContent>
            cs@watcha.co.kr /02-515-9985 (유료)
          </SpanConnectionContent>
        </LiConnectionItem>
        <LiConnectionItem>
          <SpanConnectionTitle>제휴 및 대외 협력</SpanConnectionTitle>
          <SpanConnectionContent>
            https://watcha.team/contact
          </SpanConnectionContent>
        </LiConnectionItem>
        <LiConnectionItem>
          <SpanConnectionTitle>B2B 이용권 구매 문의</SpanConnectionTitle>
          <SpanConnectionContent>
            쿠프마케팅 (ksm1459@coopnc.com / 070-4020-5289)
          </SpanConnectionContent>
        </LiConnectionItem>
      </UlConnection>
      <DivComponyInfo>
        <UlComponyInfo>
          <LiComponyInfo>99mini project</LiComponyInfo>
          <LiComponyInfo>김영민</LiComponyInfo>
          <LiComponyInfo>UOS Computer Science 18</LiComponyInfo>
        </UlComponyInfo>
        <UlComponyInfo>
          <LiComponyInfo>010-9226-4086</LiComponyInfo>
          <LiComponyInfo>min390@uos.ac.kr</LiComponyInfo>
        </UlComponyInfo>
      </DivComponyInfo>
      <DivConnection>
        <FooterIcon
          to="https://www.facebook.com"
          backgroundUrl="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDhweCIgaGVpZ2h0PSI0OHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU2LjMgKDgxNzE2KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5JY29uc19Gb290ZXJfRmFjZWJvb2s8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbnNfRm9vdGVyX0ZhY2Vib29rIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cmVjdCBpZD0iQm91bmQiIHg9IjAiIHk9IjAiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCI+PC9yZWN0PgogICAgICAgIDxwYXRoIGQ9Ik0zMi41MDQyMjMyLDEyLjQzODMxOTYgTDI4LjMyMzI5NDEsMTIuNDM4MzE5NiBDMjcuNTAzMTExOCwxMi40MzgzMTk0IDI1LjY2MjcwMjgsMTIuNTk3MzU1IDI1LjY2MjcwMjgsMTUuNzc4MDYxOCBMMjUuNjYyNzAyOCwxOS44NjA5NjkxIEwzMi41MDQyMjMyLDE5Ljg2MDk2OTEgTDMxLjM2Mzk2OTgsMjYuMTcwMzcxMiBMMjUuNjYyNzAyOCwyNi4xNzAzNzEyIEwyNS42NjI3MDI4LDQyLjUgTDE5LjIwMTI2Nyw0Mi41IEwxOS4yMDEyNjcsMjYuMTcwMzcxMiBMMTMuNSwyNi4xNzAzNzEyIEwxMy41LDE5Ljg2MDk2OTEgTDE5LjIwMTI2NywxOS44NjA5NjkxIEwxOS4yMDEyNjcsMTQuMjkzNzMxOSBDMTkuMjAxMjY3LDE0LjI5MzczMTkgMTguOTg0MjE4Nyw2LjUgMjcuMTgzMDQwNyw2LjUgTDMyLjUwNDIyMzIsNi41IEwzMi41MDQyMjMyLDEyLjQzODMxOTYgWiIgaWQ9ImljX2ZiIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+"
        />
        <FooterIcon
          to="https://www.twitter.com"
          backgroundUrl="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDhweCIgaGVpZ2h0PSI0OHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU2LjMgKDgxNzE2KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5JY29uc19Gb290ZXJfVHdpdHRlcjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJJY29uc19Gb290ZXJfVHdpdHRlciIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgaWQ9IkJvdW5kIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjwvcmVjdD4KICAgICAgICA8cGF0aCBkPSJNNDIuNDM5LDEyLjU1MyBDNDEuMTE1LDEzLjE1NSAzOS42OTEsMTMuNTYzIDM4LjE5NywxMy43NDUgQzM5LjcyMiwxMi44MDggNDAuODkzLDExLjMyNCA0MS40NDQsOS41NTYgQzQwLjAxNywxMC40MjQgMzguNDM3LDExLjA1NCAzNi43NTQsMTEuMzk0IEMzNS40MDcsOS45MjIgMzMuNDg4LDkuMDAyIDMxLjM2Myw5LjAwMiBDMjcuMjg0LDkuMDAyIDIzLjk3NywxMi4zOTMgMjMuOTc3LDE2LjU3NSBDMjMuOTc3LDE3LjE2OCAyNC4wNDMsMTcuNzQ2IDI0LjE2OSwxOC4zIEMxOC4wMywxNy45ODQgMTIuNTg4LDE0Ljk3IDguOTQ1LDEwLjM4OCBDOC4zMSwxMS41MDcgNy45NDUsMTIuODA3IDcuOTQ1LDE0LjE5NSBDNy45NDUsMTYuODIyIDkuMjQ5LDE5LjE0IDExLjIzMSwyMC40OTggQzEwLjAyLDIwLjQ1OSA4Ljg4MSwyMC4xMTggNy44ODYsMTkuNTUxIEM3Ljg4NSwxOS41ODMgNy44ODUsMTkuNjE0IDcuODg1LDE5LjY0NiBDNy44ODUsMjMuMzE1IDEwLjQzMSwyNi4zNzUgMTMuODEsMjcuMDcxIEMxMy4xOSwyNy4yNDQgMTIuNTM3LDI3LjMzNyAxMS44NjQsMjcuMzM3IEMxMS4zODgsMjcuMzM3IDEwLjkyNSwyNy4yODkgMTAuNDc0LDI3LjIwMSBDMTEuNDE0LDMwLjIwOSAxNC4xNDIsMzIuMzk5IDE3LjM3NCwzMi40NiBDMTQuODQ2LDM0LjQ5MSAxMS42NjEsMzUuNzAxIDguMjAxLDM1LjcwMSBDNy42MDUsMzUuNzAxIDcuMDE3LDM1LjY2NSA2LjQzOSwzNS41OTUgQzkuNzA4LDM3Ljc0NCAxMy41OSwzOC45OTggMTcuNzYxLDM4Ljk5OCBDMzEuMzQ2LDM4Ljk5OCAzOC43NzUsMjcuNDU5IDM4Ljc3NSwxNy40NTMgQzM4Ljc3NSwxNy4xMjQgMzguNzY4LDE2Ljc5OCAzOC43NTQsMTYuNDczIEM0MC4xOTcsMTUuNDA1IDQxLjQ0OSwxNC4wNzIgNDIuNDM5LDEyLjU1MyBMNDIuNDM5LDEyLjU1MyBaIiBpZD0iUGF0aCIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg=="
        />
        <FooterIcon
          to="https://www.instargram.com"
          backgroundUrl="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDhweCIgaGVpZ2h0PSI0OHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU2LjMgKDgxNzE2KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5JY29uc19Gb290ZXJfSW5zdGFncmFtPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ikljb25zX0Zvb3Rlcl9JbnN0YWdyYW0iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxyZWN0IGlkPSJCb3VuZCIgeD0iMCIgeT0iMCIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4Ij48L3JlY3Q+CiAgICAgICAgPHBhdGggZD0iTTM2LjE5MDIyMjIsNDAgTDExLjgwOTc3NzgsNDAgQzkuNzA1Nzc3NzgsNDAgOCwzOC4yOTQyMjIyIDgsMzYuMTkwMjIyMiBMOCwxMS44MDk3Nzc4IEM4LDkuNzA1Nzc3NzggOS43MDU3Nzc3OCw4IDExLjgwOTc3NzgsOCBMMzYuMTkwMjIyMiw4IEMzOC4yOTQyMjIyLDggNDAsOS43MDU3Nzc3OCA0MCwxMS44MDk3Nzc4IEw0MCwzNi4xOTAyMjIyIEM0MCwzOC4yOTQyMjIyIDM4LjI5NDIyMjIsNDAgMzYuMTkwMjIyMiw0MCBMMzYuMTkwMjIyMiw0MCBaIE0yNCwxNy43OTI4ODg5IEMyMC41NzYsMTcuNzkyODg4OSAxNy44MDA4ODg5LDIwLjU2OCAxNy44MDA4ODg5LDIzLjk5MiBDMTcuODAwODg4OSwyNy40MTYgMjAuNTc2LDMwLjE5MTExMTEgMjQsMzAuMTkxMTExMSBDMjcuNDI0LDMwLjE5MTExMTEgMzAuMTk5MTExMSwyNy40MTYgMzAuMTk5MTExMSwyMy45OTIgQzMwLjE5OTExMTEsMjAuNTY4IDI3LjQyNCwxNy43OTI4ODg5IDI0LDE3Ljc5Mjg4ODkgTDI0LDE3Ljc5Mjg4ODkgWiBNMzYuNDE5NTU1NiwxMy4xNjcxMTExIEMzNi40MTk1NTU2LDEyLjMyNTMzMzMgMzUuNjc0NjY2NywxMS41ODA0NDQ0IDM0LjgzMjg4ODksMTEuNTgwNDQ0NCBMMzEuODQwODg4OSwxMS41ODA0NDQ0IEMzMSwxMS41ODA0NDQ0IDMwLjIyNCwxMi4zMjUzMzMzIDMwLjIyNCwxMy4xNjcxMTExIEwzMC4yMjQsMTYuMTU5MTExMSBDMzAuMjI0LDE3IDMxLDE3Ljc3NiAzMS44NDA4ODg5LDE3Ljc3NiBMMzQuODMyODg4OSwxNy43NzYgQzM1LjY3NDY2NjcsMTcuNzc2IDM2LjQxOTU1NTYsMTcgMzYuNDE5NTU1NiwxNi4xNTkxMTExIEwzNi40MTk1NTU2LDEzLjE2NzExMTEgTDM2LjQxOTU1NTYsMTMuMTY3MTExMSBaIE0zNi40MTk1NTU2LDIxLjcyMDg4ODkgTDMzLjYxNjg4ODksMjEuNzIwODg4OSBDMzMuNzk4MjIyMiwyMi40NzExMTExIDMzLjkwNDg4ODksMjMuMTg2NjY2NyAzMy45MDQ4ODg5LDIzLjk5MiBDMzMuOTA0ODg4OSwyOS40NjIyMjIyIDI5LjQ3MDIyMjIsMzMuODk2ODg4OSAyNCwzMy44OTY4ODg5IEMxOC41Mjk3Nzc4LDMzLjg5Njg4ODkgMTQuMDk1MTExMSwyOS40NjIyMjIyIDE0LjA5NTExMTEsMjMuOTkyIEMxNC4wOTUxMTExLDIzLjE4NjY2NjcgMTQuMjAxNzc3OCwyMi40NzExMTExIDE0LjM4MzExMTEsMjEuNzIwODg4OSBMMTEuNTgwNDQ0NCwyMS43MjA4ODg5IEwxMS41ODA0NDQ0LDM0LjgzMjg4ODkgQzExLjU4MDQ0NDQsMzUuNjc0NjY2NyAxMi4zMjUzMzMzLDM2LjQxOTU1NTYgMTMuMTY2MjIyMiwzNi40MTk1NTU2IEwzNC44MzI4ODg5LDM2LjQxOTU1NTYgQzM1LjY3NDY2NjcsMzYuNDE5NTU1NiAzNi40MTk1NTU2LDM1LjY3NDY2NjcgMzYuNDE5NTU1NiwzNC44MzI4ODg5IEwzNi40MTk1NTU2LDIxLjcyMDg4ODkgTDM2LjQxOTU1NTYsMjEuNzIwODg4OSBaIiBpZD0iU2hhcGUiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4="
        />
        <FooterIcon
          to="https://www.naver.com"
          backgroundUrl="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDhweCIgaGVpZ2h0PSI0OHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU2LjMgKDgxNzE2KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5JY29uc19Gb290ZXJfQmxvZzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJJY29uc19Gb290ZXJfQmxvZyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgaWQ9IkJvdW5kIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjwvcmVjdD4KICAgICAgICA8cGF0aCBkPSJNMjQsNiBDMTQuMDU5LDYgNiwxNC4wNiA2LDI0IEM2LDMzLjk0MSAxNC4wNTksNDIgMjQsNDIgQzMzLjk0LDQyIDQyLDMzLjk0MSA0MiwyNCBDNDIsMTQuMDYgMzMuOTQsNiAyNCw2IFogTTI3LjUxMiwyMSBDMjcuNTEyLDE5LjkzNCAyNi43MzEsMTkgMjUuNDgzLDE5IEwyMSwxOSBMMjEsMjMgTDI1LjQ4MiwyMyBDMjYuNzMsMjMgMjcuNTEyLDIyLjExOCAyNy41MTIsMjEgWiBNMjUuNjM5LDI2IEwyMSwyNiBMMjEsMzAgTDI1LjYzOSwzMCBDMjcuMDE4LDMwIDI3Ljg1LDI5LjI0OCAyNy44NSwyOCBDMjcuODUsMjYuOTA4IDI3LjA2OCwyNiAyNS42MzksMjYgWiBNMjYuNTc0LDMzIEwxNywzMyBMMTcsMTYgTDI2LjI4OSwxNiBDMjkuNTkyLDE2IDMxLjI4MSwxNy45NjIgMzEuMjgxLDIwLjI3NiBDMzEuMjgxLDIyLjQzNCAyOS45MjksMjMuODQ0IDI4LjI5MSwyNC4xODIgQzMwLjE2MiwyNC40NjkgMzEuNjE5LDI2LjE5OCAzMS42MTksMjguMzU2IEMzMS42MTksMzAuOTgzIDI5LjkwMiwzMyAyNi41NzQsMzMgTDI2LjU3NCwzMyBMMjYuNTc0LDMzIFoiIGlkPSJTaGFwZSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg=="
        />
      </DivConnection>
      <DivCopyright>
        <FooterLogo />
        Copyright © <em>Watcha, Inc.</em>All rights reserved.
      </DivCopyright>
    </FooterSt>
  );
}

export default Footer;
