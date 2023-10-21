
const getRawDate = (date: any) => {
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

const getNumOfCharacters = (componentWidth: number) => {
    const avgCharWidth = 8;
    return Math.floor(componentWidth / avgCharWidth);
};
const removeDuplicate = (array: any[]) => {
    let dummy: any[] = []
    array.forEach((c) => {
        if (!dummy.includes(c)) {
            dummy.push(c)
        }
    })
    return dummy

}

const convertSecondToMinutes = (seconds: number) => {
    const minutes = Math.floor(seconds / (60));
    const newSeconds = Number(((seconds % 60)).toFixed(0))
    return `${minutes < 10 ? '0' : ''}${minutes}:${newSeconds < 10 ? '0' : ''}${newSeconds}`;
}
export {getRawDate, convertTime, getNumOfCharacters, removeDuplicate, convertSecondToMinutes}
