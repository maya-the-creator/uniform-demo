import { cookieScoringStorage } from '@uniformdev/optimize-tracker';
export const createCookieStorage = (cookiesApi) => {    
  const cookieStorage = cookieScoringStorage({
    getCookie: (name) => {
      return cookiesApi.get(name, { parseJSON: false })
    },
    setCookie: (name, value) => {
      cookiesApi.set(name, value, {
        expires: 30 * 24 * 60 * 60,
        path: '/',
      });
    }
  });

  return cookieStorage;
}