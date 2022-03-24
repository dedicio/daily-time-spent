import React from 'react';

type ButtonProps = {
  children?: React.ReactNode,
  props?: any,
  isStarted: boolean,
  clickAction?:
        | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
        | undefined,
}

const Button: React.FC<ButtonProps> = ({
  children,
  isStarted = false,
  clickAction = () => {},
  ...props
}) => {
  const whiteButtonClasses = 'bg-white border-orange-300 text-orange-600'
  const orangeButtonClasses = 'bg-orange-600 border-white text-white'
  const customClasses = isStarted ? orangeButtonClasses : whiteButtonClasses
  const label = isStarted ? 'Stop' :  'Start'

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {    
    clickAction(event);
  };
  return (
    <button
      onClick={handleOnClick}
      className={`rounded-full border border-solid uppercase text-4xl w-48 h-48 ${customClasses}`}>{ label }
    </button>
  );
}

export default Button;