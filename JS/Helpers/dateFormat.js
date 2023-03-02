const dateFormat = (dateData) => {
    const myDate = new Date(dateData);
    const monthList = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    return `${myDate.getDay()} ${monthList[myDate.getMonth()]} ${myDate.getFullYear()}`
}

export default dateFormat;