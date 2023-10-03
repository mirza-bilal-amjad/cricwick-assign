import moment from "moment";

const getRawDate = (date) => {
    const parts = date.split(/[\s:\/]+/);

    const year = Number(parts[0]);
    const month = Number(parts[1]);
    const day = Number(parts[2]);
    const hours = Number(parts[3]);
    const minutes = Number(parts[4]);
    const seconds = Number(parts[5]);
    date = `${year}-${month}-${day} ${hours + 5}:${minutes}:${seconds}`;
    return new Date(date).getTime();
};

const convertTime = (time: any) => {
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
}
export {getRawDate, convertTime}
