import { AvailabilityCalendar } from "./AvailabilityCalendar";
import { IAvailabilityCalendar } from "./types";

function create(): IAvailabilityCalendar {
    return new AvailabilityCalendar();
}

export default {
    create,
};

