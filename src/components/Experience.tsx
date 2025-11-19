import { useState } from "react";
import { ExperienceData, ContestData } from "../data/ExperienceData";
import ExperienceCard from "./ui/ExperienceCard";
import ContestCard from "./ui/ContestCard";
import styled from "styled-components";

const StyledWrapper = styled.div`
  .button {
    cursor: pointer;
    position: relative;
    padding: 5px 24px;
    font-size: 18px;
    color: #e0f2fe;
    border: 2px solid #075985;
    border-radius: 34px;
    background-color: transparent;
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    overflow: hidden;
  }

  .button::before {
    content: "";
    position: absolute;
    inset: 0;
    margin: auto;
    width: 50px;
    height: 50px;
    border-radius: inherit;
    scale: 0;
    z-index: -1;
    background-color: #155e75;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .button:hover::before {
    scale: 3;
  }

  .selected {
    background-color: #155e75;
  }

  .button:hover,
  .selected {
    color: #f5f5f5;
    scale: 1.1;
    box-shadow: 0 0px 20px rgba(193, 163, 98, 0.4);
  }

  .button:active {
    scale: 1;
  }
`;

const Experience = () => {
  const [isCompact, setCompact] = useState(false);
  const [isFull, setFull] = useState(true);

  return (
    <section
      id="experience"
      className="bg-linear-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="min-h-screen pt-8 md:pt-28 pb-12 md:pb-8 px-10 w-full md:px-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Experience
          </h2>
          <p className="text-md text-gray-400 italic">
            A glimpse into my professional journey and achievements.
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent mx-auto mt-6"></div>
        </div>

        <div className="mt-6 mb-12 flex flex-row justify-center items-center gap-4 sticky top-20 z-30 bg-transparent">
          <StyledWrapper>
            <button
              className={`button ${isCompact ? "selected" : ""}`}
              onClick={() => {
                setCompact(true);
                setFull(false);
              }}
            >
              Compact
            </button>
          </StyledWrapper>
          <StyledWrapper>
            <button
              className={`button ${isFull ? "selected" : ""}`}
              onClick={() => {
                setFull(true);
                setCompact(false);
              }}
            >
              Full
            </button>
          </StyledWrapper>
        </div>

        {/* Timeline Container */}
        <div className="max-w-5xl mx-auto">
          {/* Internship Experience Section */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/50">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Professional Experience & Training
              </h3>
            </div>

            {/* Timeline Line */}
            <div className="relative ml-6 border-l-2 border-gray-700 pl-8 md:pl-12">
              {ExperienceData.map((exp) => (
                <ExperienceCard
                  key={exp.id}
                  experience={exp}
                  isCompact={isCompact}
                />
              ))}
            </div>
          </div>

          {/* Contest Experience Section */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Contest Experience
              </h3>
            </div>

            {/* Timeline Line */}
            <div className="relative ml-6 border-l-2 border-gray-700 pl-8 md:pl-12">
              {ContestData.map((contest) => (
                <ContestCard
                  key={contest.id}
                  contest={contest}
                  isCompact={isCompact}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
