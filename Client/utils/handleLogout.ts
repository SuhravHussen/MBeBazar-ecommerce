import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
const logeOut = async (): Promise<boolean> => {
  try {
    const resData = await fetch(`${process.env.BASE_URL}/auth/logout`, {
      method: 'GET',
      credentials: 'include',
    }).then(res => res.json());
    if (resData.error) {
      return false;
    } else {
      localStorage.removeItem('user');
      localStorage.removeItem('session');
      signOut();
      return true;
    }
  } catch {
    return false;
  }
};

export default logeOut;
