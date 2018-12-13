function paddingCompose(arr: number[]): string {
  if (arr.length >= 1 && arr.length <= 4) {
    const paddingVal = arr.map(val => `${val}px`);
    return paddingVal.join(' ');
  } else {
    return '0';
  }
}

export default {
  paddingCompose
};
