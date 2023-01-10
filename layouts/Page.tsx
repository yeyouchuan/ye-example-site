import React from "react";

import Container from "../components/Container";

const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto flex flex-col min-h-screen">
        {children}

        <div className="flex flex-col gap-8 relative flex-grow flex-1">
          <div className="flex-1 flex flex-grow w-3/4 items-end justify-start text-center text-sm text-gray opacity-80">
            <img src="/trees.svg" className="w-[200px] h-auto" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
