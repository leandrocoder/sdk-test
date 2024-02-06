export type Day = {
    available: boolean;
    date: string;
    restrictions: string[]
}

export type AvailabilityOptions = {
    selectedCheckinDate?:string;
    date:string;
}

export interface IAvailabilityCalendar {
    getDay: (options:AvailabilityOptions) => Promise<Day>;
}

export type EntryPoint = {
    create: () => IAvailabilityCalendar;
}

export declare function create(): IAvailabilityCalendar;
