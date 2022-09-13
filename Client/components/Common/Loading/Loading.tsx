import React from 'react';
import ReactLoading, { LoadingType } from 'react-loading';

const Loading = ({ type, color }: { type: LoadingType; color: string }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <ReactLoading type={type} color={color} height={200} width={200} />
    </div>
  );
};

export default Loading;
