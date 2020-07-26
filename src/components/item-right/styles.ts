import styled from 'styled-components';

interface ImageProps {
  img: string;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 750px;
  padding: 25px 10px;
  background-color: #fff;
  margin-top: 40px;
`;

export const Image = styled.div<ImageProps>`
  display: flex;
  height: 100%;
  width: 60%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => props.img});
  border-radius: 0px 10px 10px 0px;
`;

export const Text = styled.div`
  width: 40%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1ba160;
  color: #fff;
  border-radius: 10px 0px 0px 10px;
  text-align: center;

  span {
    font-size: 30px;
  }

  @media screen and (max-width: 320px) {
    font-size: 20px;
  }

  p {
    margin-top: 40px;
  }
`;
