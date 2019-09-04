// Compare two dates. Format expected is mm/dd/yyyy
function areDatesEqual(date1, date2) {
    var date1Converted = new Date(date1);
    var date2Converted = new Date(date2);

    return date1Converted.getTime() == date2Converted.getTime();
}
