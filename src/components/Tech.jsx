import React from "react";
import LazyLoad from "react-lazy-load";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <LazyLoad key={technology.name} height={200}>
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
        </LazyLoad>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
