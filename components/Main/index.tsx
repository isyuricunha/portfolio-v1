import { FC } from "react";
import { Popup } from "@components/Popup";

export const Main: FC = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-20">
        <div className="md:w-7/12 w-10/12 mt-5">
          <div className="md:flex md:items-center">
            <div className="mb-3 md:mb-0 md:mr-5">
              <img
                src="/icon.png"
                className="rounded-full border-4 border-gray-800 md:h-auto md:w-auto w-5/12 h-5/12"
                alt=""
              />
            </div>
            <div className="">
              <p className="flex text-5xl font-bold text-gray-100">
                Yuri Cunha
              </p>
              <p className="flex ml-2 text-fuchsia-400 text-opacity-65 text-xl font-medium">
                Database Administrator
              </p>
              <br></br>
              <div className="ml-2 text-lg text-gray-500 font-normal">
                <p className="">
                  Sou um Administrador de Banco de Dados e Programador Backend
                  com {new Date().getFullYear() - 2019} anos de experiência. E
                  um simples estudante que gasta todo o seu tempo livre fazendo
                  projetos{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Open_source"
                    className="text-fuchsia-500"
                  >
                    Open-Source
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
          <div className="flex md:pt-10 pt-4 text-gray-300">
            <a
              href="mailto:isyuricunha@icloud.com"
              className="px-8 p-3 rounded-full hover:bg-[#292929] transition bg-[#1f1f1f]"
            >
              Contato
            </a>
            <a
              href="https://github.com/isyuricunha"
              className="ml-2 flex items-center hover:opacity-70 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
                viewBox="0 0 256 250"
                version="1.1"
                preserveAspectRatio="xMidYMid"
              >
                <g>
                  <path
                    d="M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z"
                    fill="#a6a6a7"
                  />
                </g>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/isyuricunha/"
              className="ml-2 flex items-center hover:opacity-70 transition"
            >
              <img src="https://img.icons8.com/glyph-neue/39/a6a6a7/linkedin-circled.png" />
            </a>
            <a
              href="https://twitter.com/isyuricunha"
              className="ml-2 flex items-center hover:opacity-70 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#a6a6a7"
                viewBox="0 0 50 50"
                width="30px"
                height="30px"
              >
                <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z" />
              </svg>
            </a>
            <a
              href="https://t.me/isyuricunha"
              className="ml-1 flex items-center hover:opacity-70 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#a6a6a7"
                viewBox="0 0 24 24"
                width="30px"
                height="30px"
              >
                {" "}
                <path d="M 20.572266 3.0117188 C 20.239891 2.9764687 19.878625 3.028375 19.515625 3.171875 C 19.065625 3.348875 12.014406 6.3150313 5.4414062 9.0820312 L 3.2695312 9.9960938 C 2.4285313 10.337094 2.0039062 10.891672 2.0039062 11.638672 C 2.0039062 12.161672 2.22525 12.871063 3.28125 13.289062 L 6.9472656 14.757812 C 7.2642656 15.708813 8.0005469 17.916906 8.1855469 18.503906 C 8.2955469 18.851906 8.5733906 19.728594 9.2753906 19.933594 C 9.4193906 19.982594 9.5696563 20.007813 9.7226562 20.007812 C 10.165656 20.007812 10.484625 19.801641 10.640625 19.681641 L 12.970703 17.710938 L 15.800781 20.328125 C 15.909781 20.439125 16.486719 21 17.261719 21 C 18.228719 21 18.962234 20.195016 19.115234 19.416016 C 19.198234 18.989016 21.927734 5.2870625 21.927734 5.2890625 C 22.172734 4.1900625 21.732219 3.6199531 21.449219 3.3769531 C 21.206719 3.1694531 20.904641 3.0469688 20.572266 3.0117188 z M 19.910156 5.171875 C 19.533156 7.061875 17.478016 17.378234 17.166016 18.865234 L 13.029297 15.039062 L 10.222656 17.416016 L 11 14.375 C 11 14.375 16.362547 8.9468594 16.685547 8.6308594 C 16.945547 8.3778594 17 8.2891719 17 8.2011719 C 17 8.0841719 16.939781 8 16.800781 8 C 16.675781 8 16.506016 8.1197812 16.416016 8.1757812 C 15.272669 8.8885973 10.404094 11.662239 8.0078125 13.025391 L 4.53125 11.636719 L 6.21875 10.927734 C 10.51775 9.1177344 18.174156 5.893875 19.910156 5.171875 z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-screen mt-20 bg-[#1f1f1f] py-20">
        <div className="md:flex md:w-7/12 w-10/12 justify-between items-center">
          <div className="md:w-2/3  text-gray-200">
            <p className="text-3xl font-semibold">Sobre mim</p>
            <p className="mt-4 md:w-11/12">
              Eu programo desde 2017 ({new Date().getFullYear() - 2017} anos), e
              mesmo sendo um programador, eu gosto muito mais de banco de dados.
            </p>
            <p className="mt-4 md:w-11/12">
              Uso principalmente tecnologias baseadas em SQL Server/MySQL.
              <br />
              <br />
              À direita, você pode ver algumas das minhas tecnologias
              favoritas, que também são as que uso na maioria dos meus projetos.
            </p>
          </div>
          <div className="justify-center md:w-1/2 grid grid-cols-2 gap-4 text-gray-200 font-medium md:mt-0 mt-5">
            <div className="flex justify-center">
              <div className="w-full">
                <div className="p-4 rounded-xl bg-[#252525]">
                  <div className="w-1/1 rounded-xl bg-white-500 p-4 bg-opacity-20">
                    <img
                      src="https://img.icons8.com/clouds/100/000000/react.png"
                      style={{ height: "48px", width: "48px", margin: "-10px" }}
                    />
                  </div>
                  <p className="mt-2">ReactJS</p>
                  <p>Desde 2022</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full">
                <div className="p-4 rounded-xl bg-[#252525]">
                  <div className="w-1/1 rounded-xl bg-white-500 p-4 bg-opacity-20">
                    <img
                      src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-php-code-computer-programming-icons-flaticons-lineal-color-flat-icons-2.png"
                      style={{ height: "48px", width: "48px", margin: "-10px" }}
                    />
                  </div>
                  <p className="mt-2">PHP</p>
                  <p>Desde 2021</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center h-full">
              <div className="w-full">
                <div className="p-4 rounded-xl bg-[#252525]">
                  <div className="w-1/1 rounded-xl bg-white-500 p-4 bg-opacity-20">
                    <img
                      src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-python-computer-programming-icons-flaticons-lineal-color-flat-icons-2.png"
                      style={{ height: "48px", width: "48px", margin: "-10px" }}
                    />
                  </div>
                  <p className="mt-2">Python</p>
                  <p>Desde 2020</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full">
                <div className="p-4 rounded-xl bg-[#252525]">
                  <div className="w-1/1 rounded-xl bg-white-500 p-4 bg-opacity-20">
                    <img
                      src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/128/000000/external-sql-mobile-app-development-flaticons-lineal-color-flat-icons.png"
                      style={{ height: "48px", width: "48px", margin: "-10px" }}
                    />
                  </div>
                  <p className="mt-2">SQL</p>
                  <p>Desde 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/*

You can use this site for svgs. (use 32px)
  https://icons8.com/

*/
