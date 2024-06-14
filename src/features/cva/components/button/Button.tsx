import {ComponentProps} from "react";
import {cva, VariantProps} from "../../utils/cva.ts";
import './Button.css'

const buttonVariants = cva('btn', {
  variants: {
    size: {
      sm: 'small',
      md: 'medium',
      lg: 'large',
    },
    intent: {
      primary: 'primary',
      secondary: 'secondary',
      outlined: 'outlined',
      ghost: 'ghost',
    },
  },
  defaultVariants: {
    size: 'md',
    intent: 'primary',
  }
});

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonVariants>;

export const Button = ({children, size, intent, ...restProps}: ButtonProps) => {
  return (
    <button className={buttonVariants({size, intent})} {...restProps}>
      {children}
    </button>
  );
};
