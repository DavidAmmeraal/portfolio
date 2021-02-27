import React from "react";
import Spinner from "../images/puff.inline.svg";
import { FormState, useForm } from "react-hook-form";
import { FaUser, FaRegPaperPlane, FaAt } from "react-icons/fa";
import cx from "classnames";
import styled from "styled-components";
import Button from "../components/button";
import { inputClasses, textClasses } from "../classes";
import InputGroup from "./input-group";

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const Label = styled.label.attrs({
  className: cx(textClasses["emphasis"], "leading-10", "block"),
})``;

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const validState = (
  input: keyof ContactFormData,
  formState: FormState<ContactFormData>
) => {
  if (!formState.touched[input] && !formState.isSubmitted) return "none";
  if (formState.errors[input]) return "invalid";
  return "valid";
};

const InputWarning = styled.div.attrs({
  className: "text-red-500 text-sm py-2",
  role: "alert",
})``;

export type ContactFormProps = Omit<
  React.HTMLAttributes<HTMLFormElement>,
  "onSubmit"
> & {
  onSubmit: (data: ContactFormData) => void;
  busy: boolean;
};

export const ContactForm: React.FC<ContactFormProps> = ({
  className,
  onSubmit,
  busy,
  ...rest
}) => {
  const { register, handleSubmit, formState } = useForm<ContactFormData>({
    mode: "onBlur",
  });

  return (
    <form
      {...rest}
      className={cx("flex flex-col h-full w-full xl:space-y-5", className)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col xl:flex-row xl:space-x-10 lg:space-y-0">
        <div className="flex-1">
          <Label htmlFor="contactName">Your name:</Label>
          <InputGroup
            validState={validState("name", formState)}
            disabled={formState.isSubmitting}
          >
            <FaUser className="text-gray-200" />
            <input
              id="contactName"
              name="name"
              className={cx(inputClasses, "flex-1")}
              placeholder="Your name"
              required
              aria-invalid={!!formState.errors["name"]}
              aria-describedby={formState.errors["name"] && "nameWarning"}
              ref={register({
                required: true,
              })}
            />
          </InputGroup>
          {formState.errors["name"] && (
            <InputWarning id="nameWarning">Name is required</InputWarning>
          )}
        </div>

        <div className="flex-1">
          <Label htmlFor="contactEmail">Your email:</Label>
          <InputGroup
            validState={validState("email", formState)}
            disabled={formState.isSubmitting}
          >
            <FaAt className="text-gray-200" />
            <input
              id="contactEmail"
              className={cx(inputClasses, "flex-1")}
              name="email"
              aria-invalid={!!formState.errors["email"]}
              aria-describedby={formState.errors["email"] && "emailWarning"}
              placeholder="Your email address"
              disabled={formState.isSubmitting}
              required
              ref={register({
                required: true,
                pattern: emailRegex,
              })}
            />
          </InputGroup>
          {formState.errors["email"] && (
            <InputWarning id="emailWarning">
              Email address is required
            </InputWarning>
          )}
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <Label htmlFor="contactMessage">Your message/enquiry:</Label>
        <InputGroup
          className="flex-1"
          validState={validState("message", formState)}
          disabled={formState.isSubmitting}
        >
          <textarea
            id="contactMessage"
            className={cx(inputClasses, "h-full", "py-2", "leading-normal")}
            name="message"
            rows={4}
            disabled={formState.isSubmitting}
            placeholder="Your message"
            aria-invalid={!!formState.errors["message"]}
            aria-describedby={formState.errors["message"] && "messageWarning"}
            ref={register({
              required: true,
            })}
          />
        </InputGroup>
        {formState.errors["message"] && (
          <InputWarning id="messageWarning">A message is required</InputWarning>
        )}
      </div>
      <Button
        title="Send message"
        color="orange"
        className="self-start mt-5"
        busy={busy}
      >
        {!busy ? (
          <>
            <FaRegPaperPlane className="inline mr-2 align-baseline" />
            Send message
          </>
        ) : (
          <>
            <Spinner className="inline mr-2" />
            <span>Submitting</span>
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
