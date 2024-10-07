import { Iconify } from '@/components/Iconify/Iconify';

interface Props {
  label: string;
  icon: string;
  action: () => void;
}

export const BackButton = ({ label, icon, action }: Props) => {
  return (
    <button
      onClick={action}
      className="mb-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition duration-300 ease-in-out flex items-center"
    >
      <Iconify icon={icon} className="mr-2" />
      {label}
    </button>
  );
};

