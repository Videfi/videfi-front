export const dateToTimestamp = (date: Date) => {
  return new Date(date).getTime();
}

export const timestampToDate = (timestamp: number) => {
  return new Date(timestamp);
}