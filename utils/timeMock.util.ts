export function generateRandomTimeAgoString(): string {
  const unitOptions = [
    { unit: "minute", max: 60 },
    { unit: "hour", max: 24 },
    { unit: "day", max: 7 },
  ];

  const randomUnitIndex = Math.floor(Math.random() * unitOptions.length);
  const { unit, max } = unitOptions[randomUnitIndex];

  const randomTimeAgoValue = Math.floor(Math.random() * max) + 1;
  const pluralSuffix = randomTimeAgoValue > 1 ? "s" : "";

  return `${randomTimeAgoValue} ${unit}${pluralSuffix} ago`;
}
