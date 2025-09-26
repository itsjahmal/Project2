import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

const placeholderImagesList: ImagePlaceholder[] = data.placeholderImages;

export const PlaceHolderImages: { [key: string]: ImagePlaceholder } = 
  placeholderImagesList.reduce((acc, image) => {
    acc[image.id] = image;
    return acc;
  }, {} as { [key: string]: ImagePlaceholder });
