export const convertDate = (date: number) => new Date(date * 1000).toISOString().split('T')[0];
