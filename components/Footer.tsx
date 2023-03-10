import React from "react";
import Image from "next/image";

const Footer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <footer className="flex-1 justify-end flex flex-col flex-grow">
    <div className="flex-1 flex-grow-0 ml-auto pr-8">
      <Image
        src="/trees.svg"
        alt="Silhouette of four Joshua Trees"
        width="0"
        height="0"
        sizes="(max-width: 768px) 100vw,
				(max-width: 1200px) 50vw,
				33vw"
        className="w-[120px] md:w-[200px] h-auto ml-auto"
      />
    </div>
    <div className="flex-1 flex flex-grow ml-0 md:ml-[340px]">
      <div className="flex-1 flex-grow bg-[#F4F4F4] text-charcoal px-8 py-8">
        <div className="max-w-screen-lg mx-auto">{children}</div>
      </div>
    </div>
  </footer>
);

export default Footer;
