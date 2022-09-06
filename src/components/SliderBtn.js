import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SliderButton = styled.button`
  cursor: pointer;
  color: rgb(186, 186, 193);
  width: 40px;
  height: 100%;
  padding: 57px 0px 0px;
  border: 0px;
  outline: none;
  appearance: none;
  background: linear-gradient(90deg, rgb(0, 0, 0) 70%, rgba(0, 0, 0, 0) 100%);
  display: ${(props) => (props.isHover ? "block" : "none")};
  position: absolute;
  top: 0px;
  bottom: 0px;
  ${(props) => (props.direction === "prev" ? "left: -40px;" : "right: -40px;")}
  z-index: 2;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0px);
  }
`;

const SliderSpan = styled.span`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
`;

function SliderBtn({ direction, onClick, isHover = false }) {
  return (
    <SliderButton
      direction={direction}
      isHover={isHover}
      type="button"
      onClick={onClick}
    >
      <SliderSpan>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="40"
          fill="none"
          viewBox="0 0 10 40"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d={
              direction === "prev"
                ? "M9.476.09c.452.226.65.805.44 1.295L1.985 20l7.933 18.615c.208.49.011 1.07-.44 1.295-.452.226-.987.012-1.196-.477L0 20 8.281.567c.209-.49.744-.703 1.195-.477Z"
                : "M.524.09c-.452.226-.65.805-.44 1.295L8.015 20 .083 38.615c-.208.49-.011 1.07.44 1.295.452.226.987.012 1.196-.477L10 20 1.719.567C1.51.077.975-.136.524.09Z"
            }
            clipRule="evenodd"
          ></path>
        </svg>
      </SliderSpan>
    </SliderButton>
  );
}

SliderBtn.propTypes = {
  direction: PropTypes.string.isRequired,
  isHover: PropTypes.bool.isRequired,
};

export default SliderBtn;
