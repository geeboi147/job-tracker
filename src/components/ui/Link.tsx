import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Link({ href, children, className = '' }: LinkProps) {
  return (
    <a
      href={href}
      className={`text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium ${className}`}
    >
      {children}
    </a>
  );
}