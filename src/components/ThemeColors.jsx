import React from 'react'
import styled from 'styled-components'

export const ThemeColors = ({ color, forwardedRef, colors, index }) => {
 // const colorIndex = Object.keys(colors).findIndex(colorName => colors[colorName] === color)
  // console.log(forwardedRef)

  return (
    <StyledThemeColor color={color} ref={forwardedRef}/>
  )
}
export const StyledThemeColor = styled.div.attrs({ className: 'load' })`
  &.load {
    opacity: 1;
  }
  transition: opacity 1s ease-in;
  
  cursor: pointer;
  position: relative;
  left: 40%;
  border-radius: 50%;
  margin-top: 15px;
  width: 15px;
  height: 15px;
  background-color: ${props => props.color};
  transition-delay: 5s;
  animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  @keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-100px);
            transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
  &:nth-child(3) {
    animation-delay: 0s;
  }
  &:nth-child(4) {
    animation-delay: .3s; 
  }
  &:nth-child(5) {
    animation-delay: .6s;
  }
  &:nth-child(6) {
    animation-delay: .9s;
  }
  &:nth-child(7) {
    animation-delay: 1.2s;
  }
`

//  &:nth-of-type(1) {
//     animation-delay: 6s; 
//   }
//   &:nth-child(2) {
//     animation-delay: 4s; 
//   }
//   &:nth-child(3) {
//     animation-delay: 2s; 
//   }
//   &:nth-child(4) {
//     animation-delay: 0s; 
//   }