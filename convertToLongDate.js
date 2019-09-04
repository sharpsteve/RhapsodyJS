// Convert a date in the format yyyymmdd to mm/dd/yyyy
function convertToLongDate(yyyyddmm) {
    return yyyyddmm.substring(4, 6) + "/" + yyyyddmm.substring(6, 8) +
        "/" + yyyyddmm.substring(0, 4);
}
