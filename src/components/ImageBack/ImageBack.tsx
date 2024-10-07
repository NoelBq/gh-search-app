import Image from 'next/image';
import { BackButton } from '@/components/BackButton';

interface Props {
  imageUrl: string;
  altText: string;
  message: string;
  buttonLabel: string;
  buttonAction: () => void;
}

export function ImageBack({ imageUrl, altText, message, buttonLabel, buttonAction }: Props) {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 space-y-3 p-3">
      <Image
        src={imageUrl}
        alt={altText}
        width={200}
        height={200}
        className="mb-2"
      />
      <h1 className="text-3xl font-bold">{message}</h1>
      <BackButton label={buttonLabel} icon="mdi:arrow-left" action={buttonAction} />
    </div>
  );
};

