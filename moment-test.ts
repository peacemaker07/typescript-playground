// ファイル名：moment-test.ts

import * as moment from 'moment'
import { Moment } from 'moment'

const currentMoment: Moment = moment()

const currentHour: Number = currentMoment.hours()
const currentTime: String = currentMoment.format('HH:mm')

console.log(currentHour)
console.log(currentTime)

// iso format test
const isoFormatString = '2020-01-10T16:00:00+09:00';
// const isoFormatString = '2020-01-10T16:00:00Z';
console.log(getDate(isoFormatString));
console.log(getTime(isoFormatString));

function getDate(value: string): string {
    const momentValYMD = moment(value, 'YYYYMMDD');
    return momentValYMD.format('YYYY年M月D日');
}

function getTime(value: string): string {
    return moment(value).format('YYYY/MM/DD HH:mm');
}
