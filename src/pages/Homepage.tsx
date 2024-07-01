// src/pages/Homepage.tsx

import ThemeSwitcher from '../components/ThemeSwitcher';

interface HomepageProps {
  title: string;
}

const Homepage = ({ title }: HomepageProps) => {
  return (
    <div className="root-wrapper">
      <div>{title}</div>
      <ThemeSwitcher />
    </div>
  );
};

export default Homepage;
