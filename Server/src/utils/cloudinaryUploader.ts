import { v2 as cloudinary } from 'cloudinary';

export const uploadFile = async (file, fileName) => {
  console.log('comming');
  try {
    const res = await cloudinary.uploader.upload(file.files.filepath, {
      folder: 'users',
      use_filename: true,
      public_id: fileName,
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
