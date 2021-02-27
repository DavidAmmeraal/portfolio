import React from "react";
import { Link } from "gatsby";
import cx from "classnames";
import styled from "styled-components";
import tw, { theme } from "twin.macro";
import { focusClasses } from "../classes";

const StyledButton = styled.button``;

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  color: "orange" | "indigo";
  href?: string;
  busy?: boolean;
}

const colorClasses = {
  indigo: "border-indigo-700 bg-indigo-700",
  orange: "border-orange-500 bg-orange-500",
} as const;

const idleClasses = [
  "hover:scale-110",
  "focus:scale-105",
  "hover:bg-opacity-70",
  "active:bg-opacity-100",
];

const busyClasses = ["bg-opacity-100"];

const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, color, href, busy, ...rest } = props;

  const linkProps = href ? { href } : {};

  return (
    <StyledButton
      as={href ? Link : "button"}
      {...linkProps}
      {...rest}
      className={cx(
        "relative",
        "focus:outline-none",
        "rounded-3xl",
        "text-gray-50",
        "transition",
        "duration-50",
        "bg-opacity-0",
        "ease-in-out",
        "transform",
        "active:scale-100",
        "font-medium",
        "border-2",
        "p-4",
        "tracking-wider",
        "whitespace-nowrap",
        busy ? busyClasses : idleClasses,
        colorClasses[color],
        focusClasses,
        className
      )}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
