const billInput = document.getElementById('bill-input');
const tipPercentageButtons = document.querySelectorAll('.tip-percentage-button');
const customTipInput = document.getElementById('custom-tip-input')
const numberOfPeople = document.getElementById('number-of-people'); 
const tipOutput = document.getElementById('tip-output');
const totalOutput = document.getElementById('total-per-person-output');



tipPercentageButtons.forEach(tipBtn => {
    tipBtn.addEventListener('click', () => { 
        customTipInput.value = ''; 
        tipPercentageButtons.forEach(tipBtn => tipBtn.classList.remove('selected'))
        if(tipBtn.checked == true) { 
            tipBtn.classList.add('selected'); 
        } 
        output(); 
    })    
})

customTipInput.addEventListener('click', () => {  
    tipPercentageButtons.forEach(tipBtn => { 
        tipBtn.classList.remove('selected');  
        tipBtn.checked = false; 
    }) 
})
function cannotBeZero(e) {
    if(e.target.value == 0) {
        e.target.parentElement.classList.add('invalid-amount')
    }else { 
        e.target.parentElement.classList.remove('invalid-amount')
    }
}
 
function output() {
    const checkedBtn = document.querySelector('.selected'); 
    if(customTipInput.value != '' && billInput.value != '' && numberOfPeople.value != 0 && numberOfPeople.value != '' && numberOfPeople.validity.valid) {
        const bill = billInput.value / numberOfPeople.value;  
        const finalBill = bill.toFixed(2);
        const tip = ((customTipInput.value / 100) * billInput.value)/ numberOfPeople.value; 
        const finalTip = tip.toFixed(2);
        tipOutput.innerText = `$${finalTip}`;  
        totalOutput.innerText = `$${finalBill}`;   
    }else if(checkedBtn && billInput.value != '' && numberOfPeople.value != 0 && numberOfPeople.value != '' && numberOfPeople.validity.valid) {
        const bill = billInput.value / numberOfPeople.value;  
        const finalBill = bill.toFixed(2);
        const tip = ((checkedBtn.value / 100) * billInput.value)/ numberOfPeople.value; 
        const finalTip = tip.toFixed(2); 
        tipOutput.innerText = `$${finalTip}`;  
        totalOutput.innerText = `$${finalBill}`;    
    }
} 

customTipInput.addEventListener('input', output);   
billInput.addEventListener('input', output, cannotBeZero);    
numberOfPeople.addEventListener('input', output, cannotBeZero);  

// numberOfPeople.addEventListener('input', output);  
// numberOfPeople.addEventListener('input', () => {  
//     const checkedBtn = document.querySelector('.selected'); 
//     if(customTipInput.value != '' && billInput.value != '' && numberOfPeople.value != 0 && numberOfPeople.value != '' && numberOfPeople.validity.valid) {
//         const bill = billInput.value / numberOfPeople.value;  
//         const finalBill = bill.toFixed(2);
//         const tip = ((customTipInput.value / 100) * billInput.value)/ numberOfPeople.value; 
//         const finalTip = tip.toFixed(2);
//         tipOutput.innerText = `$${finalTip}`;  
//         totalOutput.innerText = `$${finalBill}`;   
//     }else if(checkedBtn && billInput.value != '' && numberOfPeople.value != 0 && numberOfPeople.value != '' && numberOfPeople.validity.valid) {
//         const bill = billInput.value / numberOfPeople.value;  
//         const finalBill = bill.toFixed(2);
//         const tip = ((checkedBtn.value / 100) * billInput.value)/ numberOfPeople.value; 
//         const finalTip = tip.toFixed(2); 
//         tipOutput.innerText = `$${finalTip}`;  
//         totalOutput.innerText = `$${finalBill}`;   
//     }
// }); 
   