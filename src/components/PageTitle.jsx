import React from "react";
import { Helmet } from "react-helmet";

const PageTitle = (props) => {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.message} />
    </Helmet>
  );
};

export default PageTitle;
