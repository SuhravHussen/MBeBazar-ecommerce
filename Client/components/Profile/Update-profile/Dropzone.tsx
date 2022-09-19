import { useCallback, useEffect, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { GoCloudUpload } from 'react-icons/go';

export default function Dropzone({ setAvatar }: { setAvatar: any }) {
  const image = useRef<HTMLImageElement>(null);
  const [errors, setErrors] = useState('');
  const sizeCheck = (file: any) => {
    if (file.size > 700000) {
      return {
        code: 'file-too-large',
        message: 'File is too large',
      };
    }
    return null;
  };
  useEffect(() => {
    if (image.current) {
      const userImage = JSON.parse(localStorage.getItem('user') || '')?.avatar;
      image.current.src = userImage || '/images/default/user.png';
    }
  }, []);

  const onDrop = useCallback(
    (acceptedFiles, fileRejections) => {
      if (fileRejections.length > 0) {
        fileRejections.forEach((file: any) => {
          file.errors.forEach((err: any) => {
            if (err.code === 'file-too-large') {
              setErrors(`Error: ${err.message}`);
            }

            if (err.code === 'file-invalid-type') {
              setErrors(`Error: ${err.message}`);
            }
          });
        });
      } else if (image.current) {
        setErrors('');
        setAvatar(acceptedFiles[0]);
        image.current.src = URL.createObjectURL(acceptedFiles[0]);
        image.current.onload = () => {
          if (image.current) URL.revokeObjectURL(image.current.src); // free memory
        };
      }
    },
    [setAvatar],
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'],
    maxFiles: 1,
    maxSize: 600000,
    validator: sizeCheck,
  });

  return (
    <>
      <div
        style={{
          border: '2px solid #e8e8e8',
          borderStyle: 'dashed',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '150px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            cursor: 'pointer',
          }}
          {...getRootProps({ className: 'dropzone' })}
        >
          <GoCloudUpload fontSize="40px" color="#3bb77e" />
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p style={{ textAlign: 'center' }}>Drag and drop your image here, or click to select image</p>
          )}
        </div>
      </div>
      <p style={{ color: 'red', padding: 5, margin: 0, fontSize: 14 }}>{errors}</p>
      <img
        style={{
          height: '60px',
          width: '60px',
          marginTop: '20px',
        }}
        src="/images/default/user.jpeg"
        ref={image}
        alt=""
        id="output"
      />
    </>
  );
}
