import React from "react";
import styled from "styled-components";
import cx from "classnames";

const sizeClasses = {
  "display-1": "text-5xl lg:text-3xl leading-20",
  "display-2": "text-4xl lg:text-2xl leading-15",
  "display-3": "text-3xl lg:text-xl leading-10",
  body: "text-body",
};

interface HeadingProps<T extends keyof JSX.IntrinsicElements>
  extends React.HTMLAttributes<T> {
  size: keyof typeof sizeClasses;
  as: T;
}

function Heading<T extends keyof JSX.IntrinsicElements = "div">({
  size = "body",
  as: El,
  ...rest
}: HeadingProps<T>): React.ReactNode {
  return <El />;
}

export default Heading;
