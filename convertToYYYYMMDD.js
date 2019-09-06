// Convert a date in the format yyyymmdd to mm/dd/yyyy
function convertToYYYYMMDD(mmsddsyyyy) {
    return mmsddsyyyy.substring(6, 10) + mmsddsyyyy.substring(0, 2) 
    + mmsddsyyyy.substring(3, 5);
}

//console.log(convertToLongDate("09/24/2013"));
