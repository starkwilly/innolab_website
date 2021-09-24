import React from "react";
import PropTypes from 'prop-types';

const LightbulbIcon = ({height, width, color, className}) =>{
  return(
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      height={height} 
      viewBox="0 0 24 24" 
      width={width} 
      fill={color}
      className={className}>
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
    </svg>
  );
}

LightbulbIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.any,
  className: PropTypes.string
};

LightbulbIcon.defaultProps = {
  width: 24,
  height: 24,
  color:"#FFFFFF",
  className:'',
};

export default LightbulbIcon;