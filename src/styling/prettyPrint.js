export const prettyMonthYear = (storedDate) => {

    let monthList = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let year = storedDate.split("-", 2)[0];
    let month = storedDate.split("-", 2)[1];

    return `${monthList[parseInt(month) - 1]} ${year}`
};

export const prettyDistance = (storedDistance) => {
    return `${storedDistance.substring(1)}${storedDistance.substring(0, 1)}`
}