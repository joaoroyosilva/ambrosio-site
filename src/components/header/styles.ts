import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 96px;

  header {
    margin: 10px;
    background: #fff;
    display: flex;
    align-items: center;
    border-radius: 10px;

    img {
      width: 340px;
    }

    nav {
      width: 100%;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-around;

      cursor: pointer;
      color: #1ba160;
      text-decoration: none;
      font-size: 25px;
      transition: opacity 0.2s;
    }
  }
`;
