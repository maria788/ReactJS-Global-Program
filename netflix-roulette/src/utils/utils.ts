export const dateStringToDate = (dateString: string) => {
  const [yyyy, mm, dd] = dateString.split("-");
  return new Date(Number(yyyy), Number(mm) - 1, Number(dd));
};
