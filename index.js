// Code your solution in this file!
function returnFirstTwoDrivers(driverArray) {
    const firstTwoDrivers =  driverArray.slice(0 , 2)
    return firstTwoDrivers
};

function returnLastTwoDrivers(driverArray) {
    const lastTwoDrivers = driverArray.slice(Math.max(driverArray.length - 2, 0))
    return lastTwoDrivers
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return function(fare) {
        return (fare*fare)
    }
};

function fareDoubler(fare) {
    return (fare*2);
};

function fareTripler(fare) {
    return (fare*3)
};

function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers)
};