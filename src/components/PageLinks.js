import React from "react";
import { pageLinks } from "../data";
import PageLink from "./PageLink";

const PageLinks = (props) => {
  const { parentClass, itemClass } = props;
  return (
    <ul className={parentClass}>
      {pageLinks.map((pageLink) => {
        return (
          <PageLink key={pageLink.id} {...pageLink} itemClass={itemClass} />
        );
      })}
    </ul>
  );
};

export default PageLinks;
