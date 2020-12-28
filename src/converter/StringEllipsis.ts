const stringEllipsis = (value: string, showLength: number): string => {
  return value.length > showLength ? value.substring(0, showLength).concat('...') : value;
}

export default stringEllipsis;