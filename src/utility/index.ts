export const now = () => {
    return new Date()
}

// MonthName for quick map to month name
export const monthNames = [
    'December', // 0
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November', // 11
]

export const getFiscalMonthName = (index: number): string => {
    return monthNames[index]
}

export const daysInMonth = (month: number, year: number): number => {
    return new Date(year, month, 0).getDate()
}

/* Calculate fiscal quarter
   Use today if no date is provided */
export const getQuarter = (d: Date): number => {
    d = d || new Date()
    let q = [4, 1, 2, 3]
    return q[Math.floor(d.getMonth() / 3)]
}

export const getQuarterMonths = (d: Date): [number, number, number] => {
    const quarter = getQuarter(d)
    const month = new Date(d.getFullYear(), quarter * 3, 1).getMonth()
    return [month, month + 1, month + 2]
}

export const getMonthsByQuarterAndYear = (
    quarter: number,
    year: number
): [number, number, number] => {
    const month = new Date(year, quarter * 3, 1).getMonth()
    return [month, month + 1, month + 2]
}

/* Calculate days left in a fiscal quarter
   Use today if no date is provided 
   WIP
   */
// export const daysLeftInQuarter = (d: Date) => {
//   d = d || new Date();
//   let qEnd = new Date(d);
//   qEnd.setMonth(qEnd.getMonth() + 3 - (qEnd.getMonth() % 3), 0);
//   return Math.floor((qEnd. - d) / 8.64e7);
// };
