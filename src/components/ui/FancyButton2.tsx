import styled from "styled-components";

type FancyBtn2Props = {
  label: string;
  sectionTarget: string;
};

const FancyButton2 = ({ label, sectionTarget }: FancyBtn2Props) => {
  return (
    <StyledWrapper>
      <button
        className="fancy-btn-2 px-4 py-2 md:w-[10dvw] md:h-[8dvh]"
        onClick={() => {
          document
            .getElementById(`${sectionTarget}`)
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {label}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .fancy-btn-2 {
    background: linear-gradient(
      to bottom right,
      oklch(50% 0.134 242.749),
      oklch(25.7% 0.09 281.288),
      oklch(58.8% 0.158 241.966)
    );
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
