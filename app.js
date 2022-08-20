document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const phoneFieldNewValue = getTextElementValueById('phone-number-field', true);
    const phoneNewTotal = phoneFieldNewValue * 1219;
    setTextElementValueById('phone-total', phoneNewTotal);
    total();

});
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const phoneFieldNewValue = getTextElementValueById('phone-number-field', false);
    const phoneNewTotal = phoneFieldNewValue * 1219;
    setTextElementValueById('phone-total', phoneNewTotal);
    total();
});
// ===========================================================
document.getElementById('case-plus').addEventListener('click', function () {
    const caseFieldNewValue = getTextElementValueById('case-number-field', true);
    const caseNewTotal = caseFieldNewValue * 59;
    setTextElementValueById('case-total', caseNewTotal);
    total();
});
document.getElementById('case-minus').addEventListener('click', function () {
    const caseFieldNewValue = getTextElementValueById('case-number-field', false);
    const caseNewTotal = caseFieldNewValue * 59;
    setTextElementValueById('case-total', caseNewTotal);
    total();
})