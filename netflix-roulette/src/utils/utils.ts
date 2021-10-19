const MINUTES_IN_HOUR = 60;

const dateStringToDate = (dateString: string) => {
  const [yyyy, mm, dd] = dateString.split("-");
  return new Date(Number(yyyy), Number(mm) - 1, Number(dd));
};

export const getYearFromDateString = (dateString: string) =>
  new Date(dateStringToDate(dateString)).getFullYear();

export const formatDuration = (duration: number) => {
  const roundedDuration = Math.floor(duration);
  const hours =
    roundedDuration >= MINUTES_IN_HOUR
      ? `${Math.floor(roundedDuration / MINUTES_IN_HOUR)}h`
      : "";

  let minutes;
  if (Math.floor(roundedDuration % MINUTES_IN_HOUR) === 0) {
    minutes = "";
  } else if (roundedDuration > MINUTES_IN_HOUR) {
    minutes = `${Math.floor(roundedDuration % MINUTES_IN_HOUR)} min`;
  } else {
    minutes = `${roundedDuration} min`;
  }

  return roundedDuration && `${hours} ${minutes}`;
};
