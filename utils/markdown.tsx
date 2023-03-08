import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as ReactDOMServer from "react-dom/server";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import classnames from "classnames";

const Img = ({ alt, ...props }: any) => (
  <Image
    width="0"
    height="0"
    sizes="(max-width: 768px) 100vw,
    50vw"
    className="w-full h-auto rounded-md mx-auto"
    alt={alt}
    {...props}
  />
);

const Text = ({ children, node }: { children: React.ReactNode; node: any }) => {
  if (node.children[0].tagName === "img") {
    const image: any = node.children[0];

    return <Img src={image.properties.src} alt={image.properties.alt} />;
  }
  return (
    <p className="flex-1 flex-grow w-full text-sm leading-7 max-w-screen-md mx-auto">
      {children}
    </p>
  );
};

const List = ({
  ordered,
  children,
}: {
  ordered: boolean;
  children: React.ReactNode;
}) => {
  const TagName = ordered ? "ol" : "ul";

  return <TagName className="ml-0 md:ml-16">{children}</TagName>;
};

const ListItem = ({
  ordered,
  children,
  node,
}: {
  ordered: boolean;
  children: React.ReactNode;
  node: any;
}) => {
  if (node.children[0].tagName === "img") {
    const image: any = node.children[0];

    return <Img src={image.properties.src} />;
  }

  return (
    <li
      className={classnames(
        "flex-1 flex-grow w-full text-sm leading-7 max-w-screen-md mx-auto",
        {
          "list-disc": !ordered,
          "list-decimal": ordered,
        }
      )}
    >
      {children}
    </li>
  );
};

const Code = ({ node, inline, className, children, ...props }: any): any => {
  const match = /language-(\w+)/.exec(className || "");
  return !inline && match ? (
    <SyntaxHighlighter
      children={String(children).replace(/\n$/, "")}
      language={match[1]}
      PreTag="div"
      wrapLongLines
      {...props}
    />
  ) : (
    <code className={classnames(className, "bg-[#F4F2F0]")} {...props}>
      {children}
    </code>
  );
};

const Anchor = ({ children, href }: any) => (
  <Link href={href} className="inline underline">
    {children}
  </Link>
);

export const renderMarkdownToHTML = (markup: string) => {
  return ReactDOMServer.renderToStaticMarkup(
    <ReactMarkdown
      components={{
        p: Text,
        img: Img,
        a: Anchor,
        code: Code,
        li: ListItem,
        ol: List,
        ul: List,
      }}
    >
      {markup.trim()!}
    </ReactMarkdown>
  );
};
