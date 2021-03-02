import React, { useState, useCallback, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import { Link } from "gatsby";
import { FcFeedback } from "react-icons/fc";
import { FaArrowLeft, FaHome, FaRedoAlt } from "react-icons/fa";
import cx from "classnames";
import Layout from "../components/layout";
import Button from "../components/button";
import { FcShipped, FcHighPriority } from "react-icons/fc";

import { linkClasses, textClasses } from "../classes";
import SocialMedia from "../components/social-media";
import ContactForm, { ContactFormData } from "../components/contact-form";
import SEO from "../components/seo";
import { submitContactForm } from "../api";

type ContactPageState = {
  showForm: boolean;
  showResult: boolean;
  formError: Error | undefined;
  formSuccess: boolean;
  formData: ContactFormData | undefined;
  formBusy: boolean;
};

const initialState = {
  showForm: true,
  showResult: false,
  formError: undefined,
  formSuccess: false,
  formData: undefined,
  formBusy: false,
};

const ContactPage: React.FC<unknown> = () => {
  const [state, setState] = useState<ContactPageState>(initialState);

  const handleFormSubmit = useCallback((formData) => {
    setState((s) => ({ ...s, formData }));
  }, []);

  const handleRetry = useCallback(() => {
    setState((s) => ({ ...s, showResult: false }));
  }, []);

  useEffect(() => {
    async function doSubmit() {
      if (state.formData) {
        setState((s) => ({ ...s, formBusy: true }));
        try {
          await submitContactForm(state.formData);
          setState((s) => ({
            ...s,
            formBusy: false,
            showForm: false,
            formSuccess: true,
          }));
        } catch (formError) {
          setState((s) => ({
            ...s,
            formBusy: false,
            showForm: false,
            formError,
          }));
        }
      }
    }
    doSubmit();
  }, [state.formData]);

  return (
    <Layout>
      <SEO title="Contact me" />
      <div className="flex flex-col lg:flex-row lg:space-x-10 w-full overflow-hidden">
        <section className="flex flex-col flex-1 items-start pt-8 lg:py-12 space-y-10">
          <Link
            to="/"
            title="Back to home page"
            className={cx(
              "flex",
              "justify-start",
              "space-x-1",
              "items-center",
              "rounded-3xl",
              "p-2",
              "text-3xl",
              "transform",
              linkClasses
            )}
          >
            <FaArrowLeft
              className="inline mr-1"
              aria-labelledby="backToHomePage"
            />
            <FaHome className="inline mr-1" aria-labelledby="backToHomePage" />
            <span className="hidden" id="backToHomePage">
              Back to home page
            </span>
          </Link>
          <FcFeedback className="h-20 md:h-40 w-auto my-10 self-center lg:self-start" />
          <h1 className={textClasses["display-1"]}>Get in touch</h1>
          <p className="max-w-prose">
            Want to collaborate, or ask me something? I'm always open for a
            chat, send me a message and I'll get back to you ASAP.
          </p>
          <SocialMedia />
        </section>
        <section className="pt-8 flex-1 pb-5 lg:py-12 lg:min-h-screen">
          <div className="bg-gray-800 p-5 lg:p-10 rounded-2xl h-full">
            <CSSTransition
              in={state.showForm}
              classNames={{
                enter: "opacity-0",
                enterActive: "opacity-100",
                exitActive: "opacity-0",
              }}
              onExited={() => setState((s) => ({ ...s, showResult: true }))}
              unmountOnExit
              timeout={300}
            >
              <div className="transition-opacity duration-200 flex flex-col h-full w-full divide-y-2 divide-gray-500">
                <header className="mb-5">
                  <p className={textClasses["subtitle"]}>contact form</p>
                  <h2 className={textClasses["heading-1"]}>
                    Send me a message
                  </h2>
                </header>
                <ContactForm
                  busy={state.formBusy}
                  className="flex-1"
                  onSubmit={handleFormSubmit}
                />
              </div>
            </CSSTransition>
            <CSSTransition
              in={!!state.formError && state.showResult}
              mountOnEnter
              classNames={{
                enter: "opacity-0",
                enterActive: "opacity-100",
                exitActive: "opacity-0",
              }}
              onExited={() => setState(initialState)}
              unmountOnExit
              timeout={300}
            >
              <div className="transition-opacity duration-200 flex flex-col h-full w-full divide-y-2 divide-gray-500">
                <header className="mb-5">
                  <h2 className={textClasses["heading-1"]}>
                    Something went wrong
                  </h2>
                </header>
                <div className="flex flex-col">
                  <FcHighPriority className="w-20 h-20 my-10 self-center" />
                  Something went wrong submitting your message, please try again
                  later.
                  <Button
                    title="Send message"
                    color="orange"
                    className="self-start mt-5"
                    onClick={handleRetry}
                  >
                    <FaRedoAlt className="inline mr-2 align-center" /> Try again
                  </Button>
                </div>
              </div>
            </CSSTransition>
            <CSSTransition
              in={state.showResult && state.formSuccess}
              timeout={300}
              classNames={{
                enter: "opacity-0",
                enterActive: "opacity-100",
                exitActive: "opacity-0",
              }}
              mountOnEnter
              unmountOnExit
            >
              <div className="transition-opacity duration-200 flex flex-col h-full w-full divide-y-2 divide-gray-500">
                <header className="mb-5">
                  <h2 className={textClasses["heading-1"]}>Message received</h2>
                </header>
                <div className="flex flex-col">
                  <FcShipped className="w-20 h-20 my-10 self-center" />
                  Thank you, I have received your message. I will contact you as
                  soon as possible.
                </div>
              </div>
            </CSSTransition>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ContactPage;
