import { v2 as cloudinary } from 'cloudinary';

export class cloudinaryConfig {
  config = function () {
    cloudinary.config({
      cloud_name: 'mbbazar',
      api_key: '495694412421356',
      api_secret: 'tqGTt6Q46DMXmPt2OyUO74uiQXo',
    });
  };
}
