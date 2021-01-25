const numberCommas = (value: number): string => {
  const withCommas: string = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return withCommas;
}

export default numberCommas;