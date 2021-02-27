import cx from "classnames";

export const focusClasses = cx([
  "focus:outline-none",
  "focus:ring",
  "focus:ring-blue-700",
]);

export const focusWithinClasses = cx([
  "focus-within:outline-none",
  "focus-within:ring",
  "focus-within:ring-blue-700",
]);

export const invalidClasses = cx(["border-2", "border-red-700"]);

export const linkClasses = cx([
  focusClasses,
  "duration-200",
  "ease-in-out",
  "transform",
  "focus:scale-105",
  "hover:scale-105",
  "text-gray-200",
  "hover:text-gray-50",
]);

const displayClasses = cx(["font-bold", "font-display", "text-gray-50"]);

const headingClasses = cx(["font-bold", "tracking-wider", "text-gray-50"]);

export const textClasses = {
  "display-1": cx(displayClasses, "text-4xl lg:text-3xl leading-20"),
  "heading-1": cx(headingClasses, "text-2xl leading-15"),
  "heading-2": cx(headingClasses, "text-lg lg:text-lg leading-10"),
  "heading-3": cx(headingClasses, "text-md lg:text-md"),
  emphasis: cx("font-semibold", "text-gray-100"),
  subtitle: cx("font-mono", "tracking-wide", "text-sm", "text-orange-500"),
} as const;

export const inputClasses = cx(
  "relative",
  "invalidClasses",
  "bg-transparent",
  "focus:outline-none",
  "w-full"
);
