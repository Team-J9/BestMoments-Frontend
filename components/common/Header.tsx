import Link from 'next/link';
import ThemeSwitcher from '../Theme/Switcher';
import Image from 'next/image';
import Button from './Button';

const Header = () => {
  return (
    <header className="w-full sticky top-0 flex border-[#6E6E82] border-b-2 p-5 justify-between backdrop-blur-sm">
      <Link className="flex justify-center items-center" href="/">
        <Image src="/logo.png" width={30} height={30} alt="logo" priority className="w-10 h-10 sm:w-8 sm:h-8" />
        <h1 className="hidden sm:block text-xl sm:text-2xl ml-2">
          BEST
          <span className="bg-gradient-to-r from-[#5097fa] to-[#5363ff] bg-clip-text text-transparent">MOMENTS</span>
        </h1>
      </Link>
      <nav className="flex justify-center items-center gap-5">
        <ThemeSwitcher />
        <Button as="link" href="/login">
          로그인
        </Button>
        <Button as="link" href="/signup">
          회원가입
        </Button>
      </nav>
    </header>
  );
};

export default Header;
