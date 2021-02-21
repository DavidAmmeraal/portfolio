import React from "react";
import cx from "classnames";
import styled from "styled-components";
import tw from "twin.macro";

const StyledButton = styled.button.attrs({
  className: "relative",
})`
  :hover:before {
    transform: scale(1.05);
  }

  :before {
    ${tw`rounded-3xl`}
    content: ' ';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #121519;
    transition: transform;
    transition-duration: 0.2s;
    top: 0;
    left: 0;
  }
`

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  const { className, children, ...rest } = props;
  return (
    <StyledButton {...rest}>
      <div
        className={cx(
          "relative",
          "transition",
          "duration-200",
          "ease-in-out",
          "rounded-3xl",
          "transform",
          "hover:scale-105",
          "hover:translate-x-2",
          "hover:translate-y-2",
          className
        )}
      >
        {children}
      </div>
    </StyledButton>
  )
}

export default Button;