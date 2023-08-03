import React from "react";
import { socialLinks } from "../data";
import SocialLink from "./SocialLink";

const SocialLinks = (props) => {
  const { parentClass, itemClass } = props;
  return (
    <ul className={parentClass}>
      {socialLinks.map((socialLink) => {
        return (
          <SocialLink
            key={socialLink.id}
            {...socialLink}
            itemClass={itemClass}
          />
        );
      })}
    </ul>
  );
};

export default SocialLinks;
