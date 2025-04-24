exports.computeAge = (year, month, date) => {
    const today = new Date();
    const birthDate = new Date(year, month - 1, date); // month is 0-indexed in JavaScript
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
}