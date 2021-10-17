// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']
const returnFirstTwoDrivers = function() {
    return drivers.slice(0, 2)
}
const returnLastTwoDrivers = function() {
    return drivers.slice(2, 4)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(integer) {
    return function(fare) {
        return (fare * integer)
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
const selectDifferentDrivers = function(drivers, selectingDrivers) {
    if (selectingDrivers === returnFirstTwoDrivers)
        return returnFirstTwoDrivers(drivers)
    else if (selectingDrivers === returnLastTwoDrivers)
        return returnLastTwoDrivers(drivers)
}