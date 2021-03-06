import { Field } from 'formik';
import styled from 'styled-components';
export const TextArea = styled(Field)` 
  font-family: Sofia;
  font-size: 20px;
  background-color: transparent;
  width: 160px;
  outline: none;
  border: none;
  resize: none;
  &::placeholder {
    font-style: oblique;
    font-family: Sofia;
  }
`
export const NoteContainer = styled.div`
  position: relative;
`
export const StyledNote = styled.div`
   position: relative;
   margin: 20px;
   float: left;
   background-color: ${props => props.color};
   height: 180px;
   width: 180px;
   border-radius: 20px;
   cursor: default;
   padding: 30px;
   animation: slide-in-elliptic-left-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
   @keyframes slide-in-elliptic-left-fwd {
    0% {
    -webkit-transform: translateX(-500px) rotateY(60deg) scale(0);
            transform: translateX(-500px) rotateY(60deg) scale(0);
    -webkit-transform-origin: -10% 50%;
            transform-origin: -10% 50%;
    opacity: 0;
   }
   100% {
    -webkit-transform: translateX(0) rotateY(0) scale(1);
            transform: translateX(0) rotateY(0) scale(1);
    -webkit-transform-origin: 100px 100%;
            transform-origin: 100px 100%;
    opacity: 1;
   }
}
`