import { parse, differenceInYears, differenceInMonths, format } from 'date-fns';

export const calculateDateDifference = (startTime: string, endTime: string) => {
    const parsedStart = parse(startTime, 'MMM yyyy', new Date());
    const parsedEnd = endTime === 'Present' ? new Date() : parse(endTime, 'MMM yyyy', new Date());

    const years = differenceInYears(parsedEnd, parsedStart);
    const remainingMonths = differenceInMonths(parsedEnd, parsedStart) % 12;

    return years > 0
        ? `${years} year${years > 1 ? 's' : ''}${remainingMonths ? ` and ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}` : ''}`
        : `${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
};
