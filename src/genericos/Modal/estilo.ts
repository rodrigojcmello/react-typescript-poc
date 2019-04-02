import { keyframes, styled } from '../../assets/estilo/styled-components';

const fadeOut = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const Estilo = {
  Modal: styled.div<{ encerrar: boolean }>`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    animation-name: ${({ encerrar }) => (encerrar ? fadeOut : fadeIn)};
    animation-duration: 0.3s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
  `,
  Caixa: styled.div`
    height: auto;
    width: 320px;
    background-color: white;
    border-radius: 6px;
    box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.1);
  `,
  Cabecalho: styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    position: relative;
  `,
  Titulo: styled.h1`
    font-size: 14px;
    margin: 0;
    line-height: 38px;
    text-align: center;
    color: ${({ theme }) => theme.preto1};
    font-weight: 400;
  `,
  Fechar: styled.button`
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    font-size: 0;
    border: 0;
    padding: 11px;
    outline: none;
    background: none;
    svg {
      height: 16px;
      width: 16px;
    }
  `,
  Conteudo: styled.div`
    padding: 16px 24px;
  `,
  Fundo: styled.div`
    background-color: hsla(0, 0%, 50%, 0.5);
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  `
};

export default Estilo;
