export function formatDate(date: string): string {
  const year = parseInt(date.slice(0, 4), 10);
  const month = parseInt(date.slice(4, 6), 10);
  const day = parseInt(date.slice(6, 8), 10);

  return `${year}-${month}-${day}`;
}