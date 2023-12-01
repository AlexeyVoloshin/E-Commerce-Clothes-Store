import { client_utils } from '@/utils';
import Image, { ImageProps } from 'next/image';

type TheImageProps = ImageProps & {
  className: string;
};

const TheImage: React.FC<TheImageProps> = ({ className, ...props }) => {
  return (
    <Image
      className={className}
      placeholder="blur"
      blurDataURL={client_utils.rgbDataURL(204, 229, 255)}
      {...props}
    />
    // </div>
  );
};

export { TheImage };
// width={280}
// height={320}
