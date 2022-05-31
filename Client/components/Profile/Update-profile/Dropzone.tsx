import { useCallback, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { GoCloudUpload } from 'react-icons/go';

export default function Dropzone() {
    const image = useRef<HTMLImageElement>(null);

    const onDrop = useCallback((acceptedFiles) => {
        const size = Math.round(acceptedFiles[0].size / 1024);

        console.log(size);
        if (image.current) {
            image.current.src = URL.createObjectURL(acceptedFiles[0]);
            image.current.onload = () => {
                if (image.current) URL.revokeObjectURL(image.current.src); // free memory
            };
        }
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
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
                        <p style={{ textAlign: 'center' }}>
                            Drag and drop your image here, or click to select image
                        </p>
                    )}
                </div>
            </div>
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
