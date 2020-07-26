import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: auto;

  header {
    margin: 10px;
    padding: 10px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border-radius: 10px;

    img {
      width: 340px;
    }

    nav {
      min-width: calc(100% - 340px);
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;

      cursor: pointer;
      color: #1ba160;
      text-decoration: none;
      font-size: 25px;
      transition: opacity 0.2s;

      a {
        margin: 6px;
      }
    }
  }
`;
