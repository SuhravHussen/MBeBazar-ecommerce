import { signOut } from 'next-auth/react';

const logeOut = async (): Promise<boolean> => {
  try {
    const resData = await fetch(`${process.env.BASE_URL}/auth/logout`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }).then(res => res.json());
    if (resData.error) {
      return false;
    }
    localStorage.removeItem('user');
    localStorage.removeItem('session');
    const loggedOut = await signOut();
    if (loggedOut) {
      return true;
    }
    return false;
  } catch {
    return false;
  }
};

export default logeOut;
