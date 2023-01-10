import React from "react";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-8 py-12 border-r flex flex-col gap-6 text-sm border-r border-gray-light w-[300px] xl:w-[375px] fixed top-0 left-0 bottom-0">
      {children}
      <div className="absolute bottom-12 left-8 right-8 flex flex-col gap-8 text-xs">
        <div className="bg-gray-light rounded-2xl p-6 w-full flex flex-col gap-6 ">
          Currently available for freelance.
          <button className="rounded-full w-full px-1 py-2 text-gray-dark bg-white transition-all hover:bg-green">
            Email me
          </button>
        </div>
        &copy; {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Sidebar;
