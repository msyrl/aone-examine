import "../styles/globals.css";
import type { AppProps } from "next/app";
import AOneLogo from "../public/aone-logo.png";
import Image from "next/image";
import { useState } from "react";
import { classNames } from "../utils";

export default function App({ Component, pageProps }: AppProps) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div>
      <div
        className={classNames(
          "fixed inset-0 flex sm:hidden items-start justify-end w-full h-full bg-white opacity-90 z-10 sm:visible",
          !sidebarOpen && "invisible"
        )}
        onClick={toggleSidebar}
      ></div>
      <div
        className={classNames(
          "fixed top-0 left-0 bottom-0 w-[255px] bg-[#363740] h-full sm:visible z-20",
          !sidebarOpen && "invisible"
        )}
      >
        <div className="flex items-center py-4 px-6">
          <Image src={AOneLogo} alt="AOne Logo" />
          <p className="text-white font-bold text-2xl ml-3">AOne</p>
        </div>
        <ul>
          <li>
            <a
              href="/about"
              className="flex items-center px-8 py-4 text-[#A4A6B3]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              <p className="ml-6">About</p>
            </a>
          </li>
          <li>
            <a
              href="/users"
              className="flex items-center px-8 py-4 text-[#A4A6B3]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
              <p className="ml-6">Users</p>
            </a>
          </li>
        </ul>
      </div>
      <div className="sm:ml-[250px]">
        <button
          type="button"
          className="bg-[#363740] text-white p-3 rounded-full mr-4 mb-4 fixed bottom-0 right-0 sm:invisible z-20"
          onClick={toggleSidebar}
        >
          {sidebarOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          )}
        </button>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
