const dateFormat = (dateData) => {
    const myDate = new Date(dateData);
    console.log(myDate.getDate());
    const monthList = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    return `${myDate.getDate()} ${monthList[myDate.getMonth()]} ${myDate.getFullYear()}`
}

export default dateFormat;