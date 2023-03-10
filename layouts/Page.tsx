import React from "react";
import Container from "@/components/Container";

const Page: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Container showHomeLink>
    <div className="max-w-screen-lg mx-auto flex flex-col">{children}</div>
  </Container>
);

export default Page;
