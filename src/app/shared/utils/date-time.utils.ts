import * as moment from "moment-timezone";

export function convertData( date: number){

    return moment.unix(date).format('DD MMM - dddd').toUpperCase();
}

export function convertDataTitle( date: number){

    const response = {
        day: moment.unix(date).format('dddd').toUpperCase(),
        date: moment.unix(date).format('DD').toUpperCase(),
        month: moment.unix(date).format('MMMM').toUpperCase(),
    }

    return response;
}

export function convertTime( time: number, timeZone: string){

    return moment.unix(time).tz(timeZone).format('HH:mm');
}