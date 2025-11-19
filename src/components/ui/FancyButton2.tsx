import styled from "styled-components";

const FancyButton2 = () => {
  return (
    <StyledWrapper>
      <button className="fancy-btn-2"> Button</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .fancy-btn-2 {
    width: 10dvw;
    height: 8dvh;
    background: black;
    color: white;
    border: none;
    border-radius: 0.625em;
    font-size: 1rem;
    cursor: pointer;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }

  .fancy-btn-2:hover {
    color: black;
  }

  .fancy-btn-2:after {
    content: "";
    background: white;
    position: absolute;
    z-index: -1;
    left: -20%;
    right: -20%;
    top: 0;
    bottom: 0;
    transform: skewX(-45deg) scale(0, 1);
    transition: all 0.5s;
  }

  .fancy-btn-2:hover:after {
    transform: skewX(-45deg) scale(1, 1);
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }
`;

export default FancyButton2;
