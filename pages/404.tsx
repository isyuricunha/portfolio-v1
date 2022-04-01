import { NextPage } from "next";
import { Navbar } from "@components/Navbar";
import { Header } from "@components/Header";
import type { FC } from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface ICustom404 {
  statusCode: number;
}

export const Custom404: FC<ICustom404> = function ({ statusCode = 404 }) {
  const [leftSecond, setLeftSecond] = useState<number>(5);

  useEffect(() => {
    setInterval(
      () => (leftSecond >= 0 ? setLeftSecond(leftSecond - 1) : null),
      900
    );
    setTimeout(() => {
      window.location.assign("/");
    }, 5000);
  });
  return (
    <div className="bg-Bgnavbar w-full h-full absolute flex items-center justify-center text-white">
      <div className="items-center flex flex-col space-y-7">
        <a className="text-xl text-purple-300 font-extrabold md:text-7xl text-center">
          <span className="text-7xl">
            {statusCode} - Página não encontrada.
          </span>
        </a>
        <p className="text-gray-400">
          Você será redirecionado para à página inicial em {leftSecond}
        </p>
      </div>
    </div>
  );
};

export default Custom404;
