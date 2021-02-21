import React from "react";

const Container = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={`container mx-auto font-body px-4 lg:px-8 ${props.className}`} />
};

export default Container;

