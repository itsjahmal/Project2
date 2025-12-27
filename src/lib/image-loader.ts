
interface MyImageLoaderProps {
    src: string;
    width: number;
    quality?: number;
}

export default function myImageLoader({ src }: MyImageLoaderProps): string {
  return src;
}
