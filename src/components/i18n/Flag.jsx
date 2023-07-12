import React from 'react' 

const Flag = ({ image, isSelected, ...props }) => (
  <img 
    alt="flag" 
    src={image} 
    className={`cursor-pointer ${isSelected ? '' : 'grayscale w-8 h-8'}`} 
    {...props} 
  />
)

export default Flag
