import { Icon, IconifyIcon } from '@iconify/react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  icon: IconifyIcon | string;
  className?: string;
  iconStyle?: React.CSSProperties;
}

export function Iconify({ icon, iconStyle, className = '', ...other }: Props) {
  return (
    <div {...other} className={`inline-block ${className}`}>
      <Icon icon={icon}
        style={iconStyle}
      />
    </div>
  );
}
