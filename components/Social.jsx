import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from "react-icons/si";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Javeedm07" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/javeed-mahammad-a892b7234/",
  },
  { icon: <SiLeetcode />, path: "https://leetcode.com/u/javeedm_07/" },
  { icon: <SiCodechef />, path: "https://www.codechef.com/users/javeed_07" },
  {
    icon: <SiGeeksforgeeks />,
    path: "https://www.geeksforgeeks.org/user/javeed_m07/",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
