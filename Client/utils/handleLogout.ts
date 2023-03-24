import { signOut } from 'next-auth/react';

const logeOut = (): boolean => {
    try {
        signOut();
        localStorage.removeItem('user');
        localStorage.removeItem('session');
        localStorage.removeItem('jwt-token');
        localStorage.removeItem('refresh-token');
        return true;
    } catch {
        return false;
    }
};

export default logeOut;
