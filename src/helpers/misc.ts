import {getColorPalette} from './color';
const colors = getColorPalette('default');

export function roundMQ(mq: number): number {
  return mq - 0.02;
}

export const customScrollbar = `
  &::-webkit-scrollbar {
    width: 0.6em;
    height: 6px;
    background-color: transparent;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.neutral300};
    border-radius: 10px;
  }
`;
