const MINUTES_IN_HOUR = 60;

const dateStringToDate = (dateString: string) => {
  const [yyyy, mm, dd] = dateString.split("-");
  return new Date(Number(yyyy), Number(mm) - 1, Number(dd));
};

export const getYearFromDateString = (dateString: string) =>
  new Date(dateStringToDate(dateString)).getFullYear();

export const formatDuration = (duration: number) => {
  const hours =
    duration > MINUTES_IN_HOUR
      ? `${Math.floor(duration / MINUTES_IN_HOUR)}h`
      : "";
  const minutes =
    duration > MINUTES_IN_HOUR ? duration % MINUTES_IN_HOUR : Number(duration);
  return duration && `${hours} ${minutes} min`;
};
