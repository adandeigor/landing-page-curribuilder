'use client'
import { forwardRef, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outline';
  color?: 'primary' | 'yellow' | 'dark' | 'light';
  size?: 'small' | 'medium' | 'large';
  icon?: ReactNode;
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'filled',
      color = 'primary',
      size = 'medium',
      icon,
      isLoading = false,
      children,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    // Base styles for buttons
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200';
    
    // Size styles (padding and font size)
    const sizeStyles = {
      small: 'px-3 py-1.5 text-sm', // font-size: 14px
      medium: 'px-4 py-2 text-base', // font-size: 16px
      large: 'px-6 py-3 text-lg', // font-size: 18px
    };

    // Variant styles
    const variantStyles = {
      filled: {
        primary: 'bg-[var(--color-primary)] text-white hover:bg-opacity-90',
        yellow: 'bg-[var(--color-yellow)] text-[var(--color-dark)] hover:bg-opacity-90',
        dark: 'bg-[var(--color-dark)] text-white hover:bg-opacity-90',
        light: 'bg-[var(--color-light)] text-[var(--color-dark)] hover:bg-opacity-90',
      },
      outline: {
        primary: 'border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white',
        yellow: 'border border-[var(--color-yellow)] text-[var(--color-yellow)] hover:bg-[var(--color-yellow)] hover:text-[var(--color-dark)]',
        dark: 'border border-[var(--color-dark)] text-[var(--color-dark)] hover:bg-[var(--color-dark)] hover:text-white',
        light: 'border border-[var(--color-light)] text-[var(--color-light)] hover:bg-[var(--color-light)] hover:text-[var(--color-dark)]',
      },
    };

    // Disabled styles
    const disabledStyles = 'opacity-50 cursor-not-allowed';

    // Loading animation variants
    const loaderVariants = {
      animate: {
        rotate: 360,
        transition: {
          repeat: Infinity,
          duration: 1,
          ease: 'linear',
        },
      },
    };

    // Adjust icon size based on button size
    const iconSize = {
      small: 'w-4 h-4',
      medium: 'w-5 h-5',
      large: 'w-6 h-6',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant][color]} ${
          disabled || isLoading ? disabledStyles : ''
        } ${className}`}
        disabled={disabled || isLoading}
        {...props}
      >
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loader"
              variants={loaderVariants as any}
              animate="animate"
              className="flex items-center justify-center"
            >
              <Loader2 className={iconSize[size]} />
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              {icon && <span className={iconSize[size]}>{icon}</span>}
              {children && <span>{children}</span>}
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };