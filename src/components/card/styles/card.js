import styled from 'styled-components/macro';

export const Title = styled.p`
  font-size: 24px;
  color: #e5e5e5;
  font-weight: bold;
  margin-left: 4%;
  margin-right: 4%;
  margin-top: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => (flexDirection === 'row' ? 'row' : 'column')};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};
  
  @media (min-width: 1100px) {
    margin-top: -100px;
  }
  overflow: hidden;
  padding-bottom: 50px;
`;

export const SubTitle = styled.p`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: block;
  opacity: 0;
`;

export const Text = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: #fff;
  margin-bottom: 0;
  user-select: none;
  display: block;
  opacity: 0;
  line-height: normal;
  white-space: normal;
`;

export const Nav = styled.div`
  width: 4%;
  height: 172px;
  background: rgba(0,0,0,0.5);
  display: inline-block;
  flex-shrink:0;
  z-index: 101;
  position: relative;
  cursor: pointer;
`;

export const Track = styled.div`
  width: 92%;
  display: inline-block;
<<<<<<< HEAD
  transition: .2s ease-out;
  ${({ scroll }) => scroll && `transform: translateX(${scroll}px)`};
=======
  ${({ scroll }) => scroll && `transform: translateX(${scroll}px)`};

>>>>>>> 1d549661cbdb11887cee0cd97946856b76746a81
`;

export const Entities = styled.div`
  white-space:nowrap;
`;

export const Meta = styled.div`
  display: block;
  opacity: 0;
  transition-delay: 0s;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background-color: #0000008f;
  width: 100%;
  box-sizing: border-box;
`;

export const Image = styled.img`
  border: 0;
  max-width: 305px;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
  border-radius: 5px;
`;

export const Item = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-right: 5px;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;
  transition-delay: 0s;
  max-width: 305px;
  &:hover {
    transform: scale(1.3);
    transition-delay: 1s;
    z-index: 99;
  }
  @media (min-width: 1200px) {
    &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
      transition-delay: 1s;
      opacity: 1;
      z-index: 100;
    }
  }
`;

export const FeatureText = styled.p`
  font-size: 18px;
  color: white;
  font-weight: ${({ fontWeight }) => (fontWeight === 'bold' ? 'bold' : 'normal')};
  margin: 0;
  @media (max-width: 600px) {
    line-height: 22px;
  }
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: contain;
  position: relative;
  height: 360px;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: black;
  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;
    ${Title} {
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 10px;
    }
    ${FeatureText} {
      font-size: 14px;
    }
  }
`;

export const FeatureTitle = styled(Title)`
  margin-left: 0;
`;

export const FeatureClose = styled.button`
  color: white;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;

export const Content = styled.div`
  margin: 0 4%;
  max-width: 500px;
  line-height: normal;
  @media (max-width: 1000px) {
    margin: 30px;
    max-width: none;
  }
`;

export const Maturity = styled.div`
  background-color: ${({ rating }) => (rating >= 15 ? '#f44336' : '#2f9600')};
  border-radius: 15px;
  width: 28px;
  line-height: 28px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  font-size: 12px;
`;