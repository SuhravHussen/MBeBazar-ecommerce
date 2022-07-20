import { HttpException } from '@exceptions/HttpException';
import { v2 as cloudinary } from 'cloudinary';

export const uploadFile = async (file, fileName) => {
  try {
    const res = await cloudinary.uploader.upload(file.files.filepath, {
      folder: 'users',
      use_filename: true,
      public_id: fileName,
    });
    return res;
  } catch (error) {
    throw new HttpException(400, error.message);
  }
};
