import { api } from './index';
import { setCookie } from 'cookies-next';
import CryptoJS from 'crypto-js';

export const OAuth = async (oAuthProvider: string, code: string) => {
  const url = `/api/auth/login/${oAuthProvider}?code=${code}`;
  return api.get(url);
};

export const fetchOAuthTokens = async (provider: string, code: string, state: string) => {
  const storedState = localStorage.getItem('oauth_state');
  if (!storedState) {
    throw new Error('요청값을 찾을수 없습니다. 다시시도해주세요.');
  }

  const [storedStateValue, storedStateHash] = storedState.split('.');
  const secret = process.env.NEXT_PUBLIC_STATE_SECRET;
  if (!secret) {
    throw new Error('요청값을 찾을수 없습니다. 다시시도해주세요.');
  }

  const expectedHash = CryptoJS.HmacSHA256(storedStateValue, secret).toString(CryptoJS.enc.Hex);

  if (storedState !== state || storedStateHash !== expectedHash) {
    throw new Error('요청값이 변조되었습니다. 다시시도해주세요.');
  }

  const response = await OAuth(provider, code);
  return response;
};

export const storeTokenInCookies = (data: any) => {
  setCookie('accessToken', data.accessToken, { secure: true, sameSite: 'strict' });
  setCookie('refreshToken', data.refreshToken, { secure: true, sameSite: 'strict' });
};

export const expireTokenInCookies = (data: any) => {
  setCookie('accessToken', data.accessToken, { maxAge: 0, secure: true, sameSite: 'strict' });
  setCookie('refreshToken', data.refreshToken, { maxAge: 0, secure: true, sameSite: 'strict' });
};
