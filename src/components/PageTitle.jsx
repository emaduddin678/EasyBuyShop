import React from "react";
// import { Helmet } from "react-helmet";
import { Helmet,HelmetProvider } from "react-helmet-async";

const PageTitle = (props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{props.title}</title>
        <meta name="description" content={props.message} />
      </Helmet>
    </HelmetProvider>
  );
};

export default PageTitle;
