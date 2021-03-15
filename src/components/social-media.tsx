import React from "react";
import cx from "classnames";
import { linkClasses } from "../classes";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const id = function () {
  return Math.random().toString(36).substr(2, 9);
};

const SocialMedia: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...rest
}) => {
  const uid = id();
  return (
    <div
      className={cx("flex space-x-4 items-end mt-5 text-gray-50", className)}
      aria-label="social media"
      {...rest}
    >
      <a
        href="https://github.com/DavidAmmeraal"
        title="Go to my github page"
        className={cx(linkClasses)}
        tabIndex={0}
      >
        <FaGithub
          className="text-4xl"
          aria-labelledby={`socialGithub_${uid}`}
        />
        <span id={`socialGithub_${uid}`} className="hidden">
          Go to my github page
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/david-ammeraal-51b21a1a2/"
        title="Go to my linkedin page"
        className={cx(linkClasses)}
        tabIndex={0}
      >
        <FaLinkedin
          className="text-4xl"
          aria-labelledby={`socialLinkedIn_${uid}`}
        />
        <span id={`socialLinkedIn_${uid}`} className="hidden">
          Go to my linkedin page
        </span>
      </a>
    </div>
  );
};

export default SocialMedia;
