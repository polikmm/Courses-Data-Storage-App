export const formatTime = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  const paddedHours = String(hours).padStart(2, "0");
  const paddedMinutes = String(mins).padStart(2, "0");

  return `${paddedHours}:${paddedMinutes} `;
};