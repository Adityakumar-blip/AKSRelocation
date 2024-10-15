import React from "react";
import tw from "twin.macro";
import { motion, useReducedMotion } from "framer-motion";

const StyledDiv = tw.div`font-display min-h-screen text-secondary-500 p-8 overflow-hidden`;

const AnimatedComponent = ({ children, index }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        duration: 0.6,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      {children}
    </motion.div>
  );
};

const AnimationReveal = ({ disabled, children }) => {
  const prefersReducedMotion = useReducedMotion();

  if (disabled || prefersReducedMotion) return <>{children}</>;

  const childArray = React.Children.toArray(children);

  return (
    <>
      {childArray.map((child, index) => (
        <AnimatedComponent key={index} index={index}>
          {child}
        </AnimatedComponent>
      ))}
    </>
  );
};

export default (props) => (
  <StyledDiv className="App">
    <AnimationReveal {...props} />
  </StyledDiv>
);
