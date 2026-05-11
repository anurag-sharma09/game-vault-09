import multer from 'multer';
import { createStorage } from '../config/cloudinary.js';

// Specific uploaders for different use cases
export const gameUpload = multer({ storage: createStorage('games') });
export const bannerUpload = multer({ storage: createStorage('banners') });
export const avatarUpload = multer({ storage: createStorage('avatars') });
export const newsUpload = multer({ storage: createStorage('news') });
export const categoryUpload = multer({ storage: createStorage('categories') });

// Default generic uploader
const upload = multer({ storage: createStorage('uploads') });

export default upload;
