import React from "react";
import { FiCoffee } from "react-icons/fi";
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io";
import { GiSailboat } from "react-icons/gi";
import { SiDiscord } from "react-icons/si";
import { RiAliensFill } from "react-icons/ri";
import { GoEye } from "react-icons/go";

export const Footer = () => {
  return (
    <div className="flex flex-col border-t-1 border w-full p-4 mt-4 items-center text-xs justify-center">
    <table>
      <tr>
      <td>
      <a
        className="flex items-center mb-4 text-[#202520] hover:text-[#575b57]"
        href="https://galacticaliensocialclub.com"
        target="_blank"
      >
        <span className="text-lg mr-1">
          <RiAliensFill />
        </span>
        Website
      </a>
      </td>
      <td>
      <p>&nbsp; &nbsp; &nbsp;</p>
      </td>
      <td>
      <a
        className="flex items-center mb-4 text-[#202520] hover:text-[#575b57]"
        href="https://twitter.com/GalacticAlienSC"
        target="_blank"
      >
        <span className="text-lg mr-1">
          <IoLogoTwitter />
        </span>
        Twitter
      </a>
      </td>
      <td>
      <p>&nbsp; &nbsp; &nbsp;</p>
      </td>
      <td>
      <a
        className="flex items-center mb-4 text-[#202520] hover:text-[#575b57]"
        href="https://discord.gg/KHY2MguWNY"
        target="_blank"
      >
        <span className="text-lg mr-1">
          <SiDiscord />
        </span>
        Discord
      </a>
      </td>
      <td>
      <p>&nbsp; &nbsp; &nbsp;</p>
      </td>
      <td>
      <a
        className="flex items-center mb-4 text-[#202520] hover:text-[#575b57]"
        href="https://opensea.io/collection/galacticaliensocialclub"
        target="_blank"
      >
        <span className="text-lg mr-1">
          <GiSailboat />
        </span>
        OpenSea
      </a>
      </td>
      <td>
      <p>&nbsp; &nbsp; &nbsp;</p>
      </td>
      <td>
      <a
        className="flex items-center mb-4 text-[#202520] hover:text-[#575b57]"
        href="https://looksrare.org/collections/0x33Fd4167E51a10d19c89c3A606389d0fdDc3E676"
        target="_blank"
      >
        <span className="text-lg mr-1">
          <GoEye />
        </span>
        LooksRare
      </a>
      </td>

      </tr>
      </table>
    </div>
  );
};
