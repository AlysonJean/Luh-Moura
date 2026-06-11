import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export default cloudinary;

export const uploadImage = async (fileUri: string, folder: string = "patient_records") => {
  try {
    const result = await cloudinary.uploader.upload(fileUri, {
      folder,
      resource_type: "image",
      transformation: [
        { width: 1200, crop: "limit" }, // Redimensiona se for maior que 1200px
        { quality: "auto", fetch_format: "auto" } // Otimização automática de tamanho e formato
      ]
    });
    return result.secure_url;
  } catch (error) {
    console.error("Cloudinary upload failed:", error);
    throw error;
  }
};
