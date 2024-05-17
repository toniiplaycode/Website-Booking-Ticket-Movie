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
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}