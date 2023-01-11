import React from "react";
import * as ReactDOMServer from "react-dom/server";
import ReactMarkdown from "react-markdown";

const Img = ({ ...props }: any) => (
  <img className="rounded-lg max-w-screen-lg mx-auto w-full" {...props} />
);

const Text = ({ children, node }: any) => {
  if (node.children[0].tagName === "img") {
    const image: any = node.children[0];

    return <Img src={image.properties.src} />;
  }
  return (
    <p className="text-sm leading-7 max-w-screen-md mx-auto">{children}</p>
  );
};

export const renderMarkdownToHTML = (markup: string) => {
  return ReactDOMServer.renderToStaticMarkup(
    <ReactMarkdown
      components={{
        p: Text,
        img: Img,
      }}
    >
      {markup.trim()!}
    </ReactMarkdown>
  );
};
