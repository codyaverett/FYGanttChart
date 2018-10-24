import {
    getQuarterMonths,
    getFiscalMonthName,
    daysInMonth,
    getMonthsByQuarterAndYear,
} from './';

describe('getQuarterMonths', () => {
    it('should return the correct month array for Oct 2018', () => {
        const result = getQuarterMonths(new Date(2018, 11, 16));
        expect(result).toEqual([9, 10, 11]);
    });
    it('should return the correct month array for Dec 2018', () => {
        const result = getQuarterMonths(new Date(2018, 12, 16));
        expect(result).toEqual([0, 1, 2]);
    });
});

describe('getFiscalMonthName', () => {
    it('should return "December" when provided 0', () => {
        const result = getFiscalMonthName(0);
        expect(result).toEqual('December');
    });
    it('should return "June" when provided 6', () => {
        const result = getFiscalMonthName(6);
        expect(result).toEqual('June');
    });
});

describe('daysInMonth', () => {
    it('should calculate 28 days in Feb 2018', () => {
        const result = daysInMonth(2, 2018);
        expect(result).toEqual(28);
    });
    it('should calculate 30 days in Oct 2018', () => {
        const result = daysInMonth(10, 2018);
        expect(result).toEqual(31);
    });
    it('should calculate 29 days in Feb 2020', () => {
        const result = daysInMonth(2, 2020);
        expect(result).toEqual(29);
    });
});

describe('getMonthsByQuarterAndYear', () => {
    it('should return [0,1,2] for any q1 year', () => {
        const result = getMonthsByQuarterAndYear(1, 2018);
        expect(result).toEqual([0, 1, 2]);
    });
    it('should return [3,4,5] for any q2 year', () => {
        const result = getMonthsByQuarterAndYear(2, 2019);
        expect(result).toEqual([3, 4, 5]);
    });
});
