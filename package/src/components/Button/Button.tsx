import React, { ComponentProps } from 'react';
import './Button.scss'

const Button: React.FC<ComponentProps<'button'> & {variant: 'primary' | 'secondary'}> = (props) => {
  return <button {...props} className={props.variant} />;
};

export default Button;
