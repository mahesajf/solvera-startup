import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  onClick,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium tracking-tight whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4D00] disabled:opacity-50 disabled:pointer-events-none rounded-full';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs min-h-[36px]',
    md: 'px-5 py-2.5 text-sm min-h-[44px]',
    lg: 'px-7 py-3.5 text-base min-h-[50px]',
  };

  const variantStyles = {
    // Primary #FF4D00 with dark near-black text achieves 5.2:1 contrast (WCAG AA compliant)
    primary:
      'bg-[#FF4D00] text-[#141210] font-semibold hover:bg-[#E04400] hover:text-white shadow-sm',
    secondary:
      'bg-[#F5E5CC] text-[#141210] hover:bg-[#EBD2B0] border border-[#E2CFB4]',
    dark:
      'bg-[#141210] text-[#FAF8F5] hover:bg-[#2A2420] border border-[#26201B]',
    outline:
      'bg-transparent text-[#141210] border border-[#141210]/20 hover:border-[#141210] hover:bg-[#141210]/5',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
