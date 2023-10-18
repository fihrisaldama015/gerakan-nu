import { ID, storage } from "@/lib/appwrite";
import { AppwriteException } from "appwrite";

const uploadNewsImages = async (file: File): Promise<any> => {
  try {
    const response = await storage.createFile(
      process.env.NEXT_PUBLIC_APPWRITE_NEWS_IMAGE_BUCKET_ID!,
      ID.unique(),
      file
    );
    return response;
  } catch (error) {
    if (error instanceof AppwriteException) return error.response;
    else return error;
  }
};
const previewNewsImageURL = (fileId: string) => {
  const response = storage.getFileView(
    process.env.NEXT_PUBLIC_APPWRITE_NEWS_IMAGE_BUCKET_ID!,
    fileId
  );
  return response.href;
};

export { uploadNewsImages, previewNewsImageURL };
