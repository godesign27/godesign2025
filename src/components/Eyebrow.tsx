import React from 'react';

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

const Eyebrow: React.FC<EyebrowProps> = ({ children, className = 'mb-4' }) => (
  <p className={`flex items-center gap-2 text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest ${className}`}>
    <span className="w-[7px] h-[7px] bg-current flex-shrink-0" aria-hidden="true" />
    {children}
  </p>
);

export default Eyebrow;
