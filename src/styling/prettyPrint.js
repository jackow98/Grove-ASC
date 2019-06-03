export const prettyMonthYear = (storedDate) => {

    let monthList = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let year = storedDate.split("-", 2)[0];
    let month = storedDate.split("-", 2)[1];

    return `${monthList[parseInt(month) - 1]} ${year}`
};

export const prettyDistance = (storedDistance) => {
    return `${storedDistance.substring(1)}${storedDistance.substring(0, 1)}`
}

export const prettyStroke = (storedStroke) => {
    switch (storedStroke) {
        case "butterfly":
            return "Butterfly";
        case "backstroke":
            return "Backstroke";
        case "frontcrawl":
            return "Front Crawl";
        case "breaststroke":
            return "Breaststroke";
        case "im":
            return "IM";
        default:
            return storedStroke;

    }
};

export const prettyPhone = (storedPhone) => {
    if (storedPhone[0].substring(0, 1) !== "0") {
        return `0${storedPhone}`
    } else {
        return storedPhone.replace(/\s/g, '');
    }
};