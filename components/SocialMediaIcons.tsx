// components/SocialMediaIcons.tsx

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const SocialMediaIcons: React.FC = () => {
  return (
    <div className="bottom-16 items-center max-w-max flex space-x-4">
      <Link href="https://www.linkedin.com/in/raunak-das-45a0b1158/" passHref legacyBehavior>
        <a target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} className="hover:text-blue-700 transition-colors duration-300" />
        </a>
      </Link>
      <Link href="https://github.com/RaunakDass" passHref legacyBehavior>
        <a target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} className="hover:text-green-400 transition-colors duration-300" />
        </a>
      </Link>
    </div>
  );
};

export default SocialMediaIcons;
