import React, { ComponentProps } from 'react';

const Button: React.FC<ComponentProps<'button'>> = (props) => {
  return <button {...props} />;
};

export default Button;
