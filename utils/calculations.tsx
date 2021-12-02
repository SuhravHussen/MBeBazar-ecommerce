// calculate percentage

// eslint-disable-next-line import/prefer-default-export
export function getPercentage(actualPrice: number, offerPrice: number): number {
    return Math.floor(((actualPrice - offerPrice) / actualPrice) * 100);
}
