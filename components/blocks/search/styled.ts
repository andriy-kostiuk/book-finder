import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  margin-top: 100px;


  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    flex-direction: row;
    gap: 20px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 200px;
  width: 100%;

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    width: 50%-20px;
    height: 500px;
  }
`;

export const FormWrapper = styled.div`
  text-align: center;
  width: 100%;
  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    width: 50%-20px;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  margin: 0;
  color: ${({theme}) => theme.colors.baseWhite};

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    font-size: 60px;
    letter-spacing: 10px;
  }
`;

export const Form = styled.form`
  position: relative;
  width: 100%;
  border-radius: 25px;
  margin: 0 auto;

  @media (min-width: ${({theme}) => theme.viewports.tabletWidth}) {
    max-width: 460px;
  }
`;

export const Field = styled.input`
  width: 100%;
  border: none;
  padding: 15px 100px 15px 15px;
  border-radius: 20px;
  font-size: inherit;
  line-height: inherit;
`;

export const Submit = styled(motion.button)`
  position: absolute;
  right: 15px;
  top: 8px;
  background-color: ${({theme}) => theme.colors.primary};
  border: none;
  padding: 10px;
  border-radius: 5px;
  color: ${({theme}) => theme.colors.baseWhite};
  cursor: pointer;

  &:hover {
    background-color: ${({theme}) => theme.colors.hover};
  }

  &:active {
    background-color: ${({theme}) => theme.colors.active};
  }
`;
