import React from "react";
import { FiCoffee } from "react-icons/fi";
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io";
import { GiSailboat } from "react-icons/gi";

export const Footer = () => {
  return (
    <div className="flex flex-col border-t-1 border w-full p-4 mt-4 items-center text-xs justify-center">
    <table>
      <tr>
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
      <p>   </p>
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
      </tr>
      </table>
    </div>
  );
};
