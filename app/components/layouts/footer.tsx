import Link from 'next/link';
import { GithubIcon } from './icons/github-icon';
import { InstagramIcon } from './icons/instagram-icon';
import { LinkedinIcon } from './icons/linkedin-icon';
import { XIcon } from './icons/x-icon';
import SectionContainer from './section-container';

export default function Footer() {
  return (
    <SectionContainer>
      <footer>
        <div className="mb-0 flex flex-col justify-start space-y-1.5 space-x-0 py-10 text-gray-500 dark:text-gray-400">
          <div className="flex flex-col items-center space-y-2 text-sm sm:flex-row sm:justify-between sm:text-base">
            <ul className="flex space-x-2">
              <li>{`© ${new Date().getFullYear()}`}</li>
              <li>{` • `}</li>
              <li>
                <Link href="/">Mustafa Pinjari</Link>
              </li>
            </ul>
            <ul className="flex cursor-pointer items-center">
              <li>
                <Link
                  href="https://www.linkedin.com/in/mustafa-pinjari/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="linkedin"
                >
                  <LinkedinIcon className="h-9 w-9" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/MustafaPinjari"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="github"
                >
                  <GithubIcon className="h-9 w-9" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://x.com/mustafapinjari"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="twitter"
                >
                  <XIcon className="h-9 w-9" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/mustafapinjari/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="instagram"
                >
                  <InstagramIcon className="h-9 w-9" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </SectionContainer>
  );
}
