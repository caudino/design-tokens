function paddingCompose(padding: number[]): string {
  const [top = 0, right = 0, bottom = 0, left = 0] = padding;
  return `${top}px ${right}px ${bottom}px ${left}px`;
}

export default {
  paddingCompose
};
