import { Day, AvailabilityOptions, IAvailabilityCalendar } from "./types";

export class AvailabilityCalendar implements IAvailabilityCalendar {

    dates:Record<string, Day> = {};

    getDay (options:AvailabilityOptions): Promise<Day> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    available: true,
                    date: options.date,
                    restrictions: []
                });
            }, 100);
        });
    }
}
