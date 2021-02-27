import cx from "classnames";
import styled from "styled-components";

const Container = styled.div.attrs({
  className: cx(
    "text-gray-200",
    "container",
    "mx-auto",
    "font-body",
    "px-4",
    "md:px-6"
  ),
})``;

export default Container;
