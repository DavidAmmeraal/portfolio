import React from "react";
import styled from "styled-components";
import cx from "classnames";
import { theme } from "twin.macro";
import { focusWithinClasses, invalidClasses } from "../classes";

export type ValidationState = "none" | "invalid" | "valid";

interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The current validation state of the field.
   *
   * Must be one of the following:
   * - **none**: when no validation has been applied yet
   * - **invalid**
   * - **valid**
   */
  validState?: ValidationState;
  disabled?: boolean;
}

/**
 * Wraps a form textual input (like input, textarea, select), giving them a uniform look.
 */
const StyledDiv = styled.div.attrs<InputGroupProps>(
  ({ validState, disabled }) => ({
    className: cx(
      "relative",
      "overflow-hidden",
      focusWithinClasses,
      "rounded-lg",
      "bg-gray-600",
      "text-white",
      "transition",
      "duration-200",
      "leading-10",
      "border-2",
      "relative",
      {
        "border-red-500": !disabled && validState === "invalid",
        "border-green-500": !disabled && validState === "valid",
        "border-transparent": validState === "none",
      }
    ),
  })
)<InputGroupProps>`
  position: relative;

  /* Change the white to any color ;) */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    box-shadow: 0 0 0 30px ${theme`colors.gray.600`} inset !important;
    -webkit-text-fill-color: ${theme`colors.gray.200`};
    background-color: ${theme`colors.gray.700`} !important;
    background-clip: content-box !important;
  }
`;

const InputGroup: React.FC<InputGroupProps> = (props) => {
  const { validState = "none", disabled = false, children, ...rest } = props;

  return (
    <StyledDiv {...rest} validState={validState} disabled={disabled}>
      <div className="flex space-x-2 items-center px-2 h-full">{children}</div>
      {disabled && (
        <div
          className={cx(
            "absolute",
            "top-0",
            "left-0",
            "w-full",
            "h-full",
            "bg-gray-700",
            "bg-opacity-80"
          )}
        />
      )}
    </StyledDiv>
  );
};

export default InputGroup;
