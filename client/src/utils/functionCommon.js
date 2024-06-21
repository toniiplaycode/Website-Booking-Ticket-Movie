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

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDay = day < 10 ? "0" + day : day;
    const formattedMonth = month < 10 ? "0" + month : month;
    return `${formattedDay}/${formattedMonth}/${year}`;
}