import readingTime from "reading-time";

export default function getMinutes(body: string){
    interface minute {
        time: number
        minute: string
    }
    const minutes = Math.round(readingTime(body).minutes)
    let min:minute = {time: 0, minute: 'minutes'}
    if (minutes === 1){
        min = {time: minutes, minute: 'minute'}
        return min
    }
    if (minutes > 1 || minutes === 0){
        min = {time: minutes, minute: 'minutes'}
        return min
    }
    return min
}