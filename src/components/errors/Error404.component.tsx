import React from "react";
import { TranslationContent as T } from "./../../context/multilingual.context";
import ErrorCard from "./Error404.styled";

const Error404: React.FC = () => {
  return (
    <ErrorCard>
      <div className="code">404</div>
      <p>
        <T contentId={"nocontent"} /> <br />
        <T contentId={"visitTopics"} />
      </p>
    </ErrorCard>
  );
};

export default Error404;
