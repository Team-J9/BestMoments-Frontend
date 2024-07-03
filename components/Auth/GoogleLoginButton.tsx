'use client';

import generateState from '@/utils/generateState';
import GoogleLogo from '@/public/assets/icon/google.svg';

const GoogleLoginButton = () => {
  const handleLogin = () => {
    const state = generateState();
    const googleAuthUrl = `${process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL}${encodeURIComponent(state)}`;
    window.location.href = googleAuthUrl;
  };

  return (
    <button
      onClick={handleLogin}
      className="font-roboto flex items-center bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
    >
      <GoogleLogo className="h-6 w-6 mr-2" />
      <span>Continue with Google</span>
    </button>
  );
};

export default GoogleLoginButton;
