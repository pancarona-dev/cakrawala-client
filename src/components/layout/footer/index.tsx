import Link from "next/link";
import { SiteConfig } from "@configs/site.config";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaDev } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="mt-16 flex flex-col items-center">
          <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <a
              href={SiteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>{SiteConfig.title}</div>
            </a>
            <div>{` • `}</div>
            <div>{`© ${new Date().getFullYear()}`}</div>
          </div>
        </div>
      </footer>
    </>
  );
}
