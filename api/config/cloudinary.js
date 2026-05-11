import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import dotenv from 'dotenv';
import slugify from '../utils/slugify.js';

dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Creates a storage engine for a specific folder
 * @param {string} folderName - The folder in Cloudinary (e.g., 'games', 'avatars')
 */
export const createStorage = (folderName) => {
  return new CloudinaryStorage({
    cloudinary,
    params: {
      folder: `gamevault/${folderName}`,
      allowed_formats: ['jpg', 'png', 'webp', 'jpeg'],
      public_id: (req, file) => {
        // Use the title from the body if available, otherwise use original name
        const name = req.body.title || req.body.name || file.originalname.split('.')[0];
        return slugify(name);
      },
      transformation: [{ quality: 'auto', fetch_format: 'auto' }]
    },
  });
};

export default cloudinary;
