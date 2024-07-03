import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  as?: 'button' | 'link';
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

const Button = ({
  as = 'button',
  href,
  children,
  onClick,
  disabled = false,
  className = '',
  ...props
}: ButtonProps) => {
  const baseClasses =
    'flex items-center disabled:opacity-50 disabled:hover:opacity-50 justify-center ring-none rounded-lg shadow-lg font-semibold py-2 px-4 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-400 border-blue-700 disabled:border-0 disabled:bg-blue-500 disabled:text-white ring-white text-white border-b-4 transition duration-300 ease-in-out hover:bg-blue-500 hover:border-blue-800 hover:shadow-none active:shadow-inner active:bg-blue-800 active:text-gray-300 focus-visible:outline-blue-500 text-sm sm:text-base dark:hover:bg-blue-800 dark:bg-blue-700 dark:border-blue-700 dark:border-b-blue-900';

  const combinedClasses = `${baseClasses} ${className}`;

  if (as === 'link' && href) {
    return (
      <Link className={combinedClasses} href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
