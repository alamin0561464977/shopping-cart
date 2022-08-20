function getTextElementValueById(elementId, x) {
    const phoneNumberField = document.getElementById(elementId);
    const phoneFieldValue = phoneNumberField.value;
    const phoneFieldNum = parseInt(phoneFieldValue)
    let phoneFieldNewValue;
    if (x) {
        phoneFieldNewValue = phoneFieldNum + 1;
    }
    else {
        phoneFieldNewValue = phoneFieldNum - 1;
    }
    phoneNumberField.value = phoneFieldNewValue;
    return phoneFieldNewValue;
};
function getTextElementTextById(elementId) {
    const textField = document.getElementById(elementId);
    const textFieldValue = textField.innerText;
    const textFieldNum = parseInt(textFieldValue);
    return textFieldNum;
}
function setTextElementValueById(elementId, phoneNewTotal) {
    const phoneTotal = document.getElementById(elementId);
    phoneTotal.innerText = phoneNewTotal;
}
function total() {
    const phoneTotal = getTextElementTextById('phone-total');
    const caseTotal = getTextElementTextById('case-total');
    const newSubtotal = phoneTotal + caseTotal;
    const tax1 = newSubtotal * 0.1;
    const tax = tax1.toFixed(2);
    const total = newSubtotal - tax;
    setTextElementValueById('subtotal', newSubtotal);
    setTextElementValueById('tax', tax);
    setTextElementValueById('total', total);
}