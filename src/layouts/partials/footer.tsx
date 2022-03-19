import React from "react";
import { Layout } from "antd";

const { Footer: FooterLayout } = Layout;

const Footer: React.FC = () => {
  return (
    <FooterLayout>
      <a
        href="https://www.conduktor.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://www.conduktor.io/
      </a>
      <a href="mailto:caroline.roy.dev@gmail.com">
        Send me a feedback on my test
      </a>
    </FooterLayout>
  );
};

export default Footer;
