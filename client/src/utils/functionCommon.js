export const convertMinutesToHoursAndMinutes = (minutes) => {
    var hours = Math.floor(minutes / 60);
    var remainingMinutes = minutes % 60;
    if (remainingMinutes === 0) {
        return hours + "h";
    } else {
        return hours + "h " + remainingMinutes + "m";
    }
}

export const formatMoney = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
}
