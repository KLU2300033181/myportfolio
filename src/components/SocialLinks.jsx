import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      title: <FaLinkedin size={25} />,
      tooltip: "Akhil Panvi",
      href: "https://www.linkedin.com/in/akhil-panvi-1932aa198/",
    },
    {
      id: 2,
      title: <SiGmail size={25} />,
      tooltip: "akhilpanvi@gmail.com",
      href: "mailto:akhilpanvi@gmail.com",
    },
    {
      id: 3,
      title: <FaGithub size={25} />,
      tooltip: "AkhilPanvi",
      href: "https://github.com/KLU2300033181",
    },
    {
      id: 4,
      title: <RiContactsFill size={25} />,
      tooltip: "Download Resume",
      href: "/Akhil_resume.pdf",
      download: true,
    },
  ];
  return (
    <div className="flex flex-row">
      {links.map((link) => (
        <div>
          <ul>
            <li
              key={link.id}
              className="group w-fit px-1 py-1 m-2 flex items-center rounded-md bg-gradient-to-r from-[#fefae0] to-[#efede9] cursor-pointer shadow-md"
            >
              <span className="group-hover:scale-125 duration-300">
                <a
                  href={link.href}
                  download={link.download}
                  target="_blank"
                  rel="noreferrer"
                  title={link.tooltip}
                >
                  {link.title}
                </a>
              </span>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
