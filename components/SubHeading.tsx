import { Sections } from "@/lib/content";
import React from "react";
interface SubHeadingProps {
  page: string;
}
const SubHeading = ({ page }: SubHeadingProps) => {
  console.log(page);

  const content = Sections.find((section) => section.page === page);
  return (
    <div>
      <p className="font-medium lg:text-4xl text-center text-base">
        {content?.title}
      </p>
      <p className="text-center lg:text-lg lg:mt-4 mt-1 text-sm">
        {content?.description}
      </p>
    </div>
  );
};

export default SubHeading;
