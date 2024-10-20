import {Book} from "@/api";

interface ImageInformation {
  height: number;
  width: number;
  url: string;
}

// TODO: Customize image fore various use types (thumbnail, cover, etc.)
export const getImageForBook = (book: Book): ImageInformation => {
  const cover = book.cover?.url;
  const width = book.cover?.width;
  const height = book.cover?.height;

  if (!cover || !width || !height) {
    const newWidth = 400;
    const newHeight = 600;
    return {
      height: newHeight,
      width: newWidth,
      url: `https://via.placeholder.com/${newWidth}x${newHeight}.png?text=No+Cover`,
    };
  }

  return {
    height,
    width,
    url: cover,
  };
};