export function truncateWalletAddress(
  address: string,
  maxLength: number
): string {
  if (address.length <= maxLength) {
    return address;
  }

  const prefixLength = Math.floor((maxLength - 3) / 2);
  const suffixLength = maxLength - prefixLength - 3;

  const prefix = address.slice(0, prefixLength);
  const suffix = address.slice(-suffixLength);

  return `${prefix}...${suffix}`;
}
