import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface props {
    children: React.ReactNode;
}

export default function Loader({ children }: props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            {loading ? (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                    }}
                >
                    <Image src="/images/loading.gif" width={100} height={100} />
                </div>
            ) : (
                children
            )}
        </>
    );
}
