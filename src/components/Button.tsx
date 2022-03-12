import React from 'react';

interface StdButtonProps {
  customClasses: string,
  children: string
} 

const StdButton = (props: StdButtonProps) => {
  return (
    <button className={`rounded-full border border-solid uppercase text-4xl w-48 h-48 ${props.customClasses}`}>{ props.children }</button>
  )
}

function StartButton() {
  const customClasses = 'bg-white border-orange-300 text-orange-600';

  return (
    <StdButton customClasses={customClasses}>
      Start
    </StdButton>
  )
}

function StopButton() {
  const customClasses = 'bg-orange-600 border-white text-white';

  return (
    <StdButton customClasses={customClasses}>
      Stop
    </StdButton>
  )
}

function Button() {
  return (
    StartButton()
  );
}

export default Button;