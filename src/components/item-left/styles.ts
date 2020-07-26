import styled from 'styled-components';

interface ImageProps {
  img: string;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 650px;
  margin-top: 40px;
  padding: 0px 10px;
`;

export const Image = styled.div<ImageProps>`
  display: flex;
  height: 100%;
  width: 60%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => props.img});
  border-radius: 10px 0px 0px 10px;
`;

export const Text = styled.div`
  width: 40%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #1ba160;
  border-radius: 0px 10px 10px 0px;

  span {
    font-size: 30px;
  }

  p {
    margin-top: 40px;
    text-align: center;
  }
`;
