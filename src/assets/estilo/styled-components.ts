import * as styledComponents from 'styled-components';
import { Tema } from './tema';

const {
  default: styled,
  createGlobalStyle,
  css,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Tema>;

export { styled, createGlobalStyle, keyframes, css, ThemeProvider };
