import moment from "moment";
import React from "react";
import {Text, View} from "react-native";

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

function convertOversToBalls(overs: number) {
    const oversInt = Math.floor(overs); // Get the integer part of overs
    // Convert fractional overs to balls
    return oversInt * 6 + Math.round((overs - oversInt) * 10);
}

function getTimeSpan(time: string) {
    const dateObject = getRawDate(time);
    const today = new Date().getTime();
    const diff = today - dateObject;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));
    const seconds = Math.floor(diff / (1000));

    if (minutes < 60) {
        return `${minutes} minutes ago`
    }
    if (hours < 24) {
        if (hours === 1) return `${hours} hour ago`
        return `${hours} hours ago`
    }
    if (days < 7) {
        if (days === 1) return `Yesterday`
        return `${days} days ago`
    }

    return moment(getRawDate(time)).format('DD MMM YYYY')
}

function OverNumber(number: any) {
    // if number is less than 10

    const modResult = number % 10;
    const firstDigit = Math.floor(number / 10).toFixed(0);
    if (modResult === 1) {
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 5,
            }}>
                <Text style={{
                    color: 'black',
                }}>{Number(`${firstDigit}${modResult}`)}</Text>
                <Text style={{
                    lineHeight: 10,
                    color: 'black',
                    fontSize: 10,
                }}>st </Text>
                <Text style={{
                    color: 'black',

                }}>Over</Text>
            </View>
        );
    }
    ;
    if (modResult === 2) {
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 5,
            }}>
                <Text style={{
                    color: 'black',

                }}>{Number(`${firstDigit}${modResult}`)}</Text>
                <Text style={{
                    lineHeight: 10,
                    color: 'black',
                    fontSize: 10,
                }}>nd </Text>
                <Text style={{
                    color: 'black',

                }}>Over</Text>
            </View>
        );
    }
    ;
    if (modResult === 3) {
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 5,
                justifyContent: 'center',
             }}>
                <Text style={{
                    color: 'black',
                }}>{Number(`${firstDigit}${modResult}`)}</Text>
                <Text style={{
                    lineHeight: 10,
                    color: 'black',
                    fontSize: 10,
                }}>rd </Text>
                <Text style={{
                    color: 'black',

                }}>Over</Text>
            </View>
        );
    }
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 5,
            justifyContent: 'center',
        }}>
            <Text style={{
                color: 'black',
            }}>{Number(`${firstDigit}${modResult}`)}</Text>
            <Text style={{
                lineHeight: 10,
                color: 'black',
                fontSize: 10,
            }}>th </Text>
            <Text style={{
                color: 'black',

            }}>Over</Text>
        </View>
    );

}


export {
    getRawDate,
    convertTime,
    getNumOfCharacters,
    removeDuplicate,
    convertSecondToMinutes,
    convertOversToBalls,
    getTimeSpan,
    OverNumber
};
