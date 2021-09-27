import React from "react";
import PropTypes from 'prop-types';

const LougoutIcon = ({height, width, color, className}) =>{
  return(
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      enableBackground="new 0 0 24 24" 
      height={height} 
      viewBox="0 0 24 24" 
      width={width} 
      fill={color}
      className={className}>
        <path d="M0,0h24v24H0V0z" fill="none"/>
        <path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z"/>
    </svg>
  );
}

LougoutIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.any,
  className: PropTypes.string
};

LougoutIcon.defaultProps = {
  width: 24,
  height: 24,
  color:"#FFFFFF",
  className:'',
};

export default LougoutIcon;