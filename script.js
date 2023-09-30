const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const formError = document.getElementsByClassName('formError');

const step1 = document.getElementById('stepNum1');
const step2 = document.getElementById('stepNum2');
const step3 = document.getElementById('stepNum3');
const step4 = document.getElementById('stepNum4');

const backStep2 = document.getElementById('back2Step');
const backStep3 = document.getElementById('back3Step');
const backStep4 = document.getElementById('back4Step');

const firstArticle = document.querySelector('.firstArticle');
const secondArticle = document.querySelector('.secondArticle');
const thirdArticle = document.querySelector('.thirdArticle');
const fourArticle = document.querySelector('.fourArticle');

const yearBtn = document.querySelector('.yearBtn');
const monthBtn = document.querySelector('.monthBtn');
const animBtn = document.querySelector('.animBtn');
const month = document.querySelectorAll('.month');
const year = document.querySelectorAll('.year');

const arcade = document.querySelector('.arcade');
const advanced = document.querySelector('.advanced');
const pro = document.querySelector('.pro');

const arcadeyear = document.querySelector('.arcadeyear');
const advancedyear = document.querySelector('.advancedyear');
const proyear = document.querySelector('.proyear');

const onlineService = document.getElementById('onlineService');
const largerStorage = document.getElementById('largerStorage');
const custom = document.getElementById('custom');
const onlineServiceY = document.getElementById('onlineServiceY');
const largerStorageY = document.getElementById('largerStorageY');
const customY = document.getElementById('customY');

const selectSum1 = document.getElementById('selectSum1');
const selectSum2 = document.getElementById('selectSum2');
const selectSum3 = document.getElementById('selectSum3');

const dataTypeSevice = document.querySelectorAll('.dataTypeSevice');
const dataTypePlan = document.querySelectorAll('.dataTypePlan');

const selectOns = document.getElementsByClassName('selectOns');
const selectPlan = document.getElementById('selectPlan');
const planSum = document.querySelector('.planSum span');
const totalSum = document.getElementById('totalSum');
const success = document.querySelector('.success');

const backStep_2 = document.getElementById('backStep2').style.opacity = '0';
const backStep_3 = document.getElementById('backStep3').style.opacity = '0';
const backStep_4 = document.getElementById('backStep4').style.opacity = '0';

step1.classList.add('activeStepNum');
let userData = [];
let isStep1 = false;
let isPlan = false;
let yearText = "year";
let monthText = "month";
function nextButton1() {
    
    if (nameInput.value.trim() === '') {
        formError[0].style.opacity = '1';
        isStep1 = false;
    } else { formError[0].style.opacity = '0'; isStep1 = true; }

    if (emailInput.value.trim() === '' || emailInput.length > 10) {
        formError[1].style.opacity = '1';
        isStep1 = false;
    } else { formError[1].style.opacity = '0'; isStep1 = true; }

    if (phoneInput.value.trim() === '' || emailInput.length > 10) {
        formError[2].style.opacity = '1';
        isStep1 = false;
    } else { formError[2].style.opacity = '0'; isStep1 = true; }

    if (isStep1) {
        userData.push({ name: nameInput.value.trim(), email: emailInput.value.trim(), phone: phoneInput.value.trim() });
        step1.classList.remove('activeStepNum');
        firstArticle.style.opacity = 0;
        firstArticle.style.display = 'none';
        step2.classList.add('activeStepNum');
        setTimeout(() => {
            secondArticle.style.opacity = 1;
        }, 500);
        secondArticle.style.display = 'block';
    }

    console.log(userData);
}

let isArcade = false, isAdvanced = false, isPro = false;

function nextButton2() {
    if (isAdvanced && !isPro && !isArcade) {
        if (isPlan) {
            userData.push({ planActivity: 'advanced', money: 120 });
        } else {
            userData.push({ planActivity: 'advanced', money: 12 });
        }
    } else if (isPro && !isAdvanced && !isArcade) {
        if (isPlan) {
            userData.push({ planActivity: 'pro', money: 150 });
        } else {
            userData.push({ planActivity: 'pro', money: 15 });
        }
    } else {
        if (isPlan) {
            userData.push({ planActivity: 'arcade', money: 90 });
        } else {
            userData.push({ planActivity: 'arcade', money: 9 });
        }
    }

    step2.classList.remove('activeStepNum');
    step3.classList.add('activeStepNum');
    secondArticle.style.opacity = 0;
    secondArticle.style.display = 'none';
    setTimeout(() => {
        thirdArticle.style.opacity = 1;
    }, 500);
    thirdArticle.style.display = 'block';

    console.log(userData);
}

function nextButton3() {
    let onser = false, larStor = false, cusm = false;
    if (isPlan) {
        if (onlineServiceY.checked) {
            onser = true;
        } else onser = false;
        if (largerStorageY.checked) {
            larStor = true;
        } else larStor = false;
        if (customY.checked) {
            cusm = true;
        } else cusm = false;
    
        if (onser && larStor && cusm) {
            selectOns[0].style.display = 'flex';
            selectOns[1].style.display = 'flex';
            selectOns[2].style.display = 'flex';
            userData.push({serviceMoney: 10, storageMoney: 20, profileMoney: 20});
        }
        else if (onser && larStor && !cusm) {
            selectOns[0].style.display = 'flex';
            selectOns[1].style.display = 'flex';
            userData.push({serviceMoney: 10, storageMoney: 20, profileMoney: 0});
        }else if (onser && cusm && !larStor) {
            selectOns[0].style.display = 'flex';
            selectOns[2].style.display = 'flex';
            userData.push({serviceMoney: 10, storageMoney: 0, profileMoney: 20,});
        }else if (larStor && cusm && !onser) {
            selectOns[1].style.display = 'flex';
            selectOns[2].style.display = 'flex';
            userData.push({serviceMoney: 0, storageMoney: 20, profileMoney: 20});
        }else if (onser && !larStor && !cusm) {
            selectOns[0].style.display = 'flex';
            userData.push({serviceMoney: 10, storageMoney: 0, profileMoney: 0});
        }
        else if (!onser && larStor && !cusm){
            selectOns[1].style.display = 'flex';
            userData.push({serviceMoney: 0, storageMoney: 20, profileMoney: 0});
        }
        else if (!onser && !larStor && cusm) {
            selectOns[2].style.display = 'flex';
            userData.push({serviceMoney: 0, storageMoney: 0, profileMoney: 20});
        }
        else {
            selectOns.forEach(e => {
                e.style.display = 'none';
            });
        }
    }else {
        if (onlineService.checked) {
            onser = true;
        } else onser = false;
        if (largerStorage.checked) {
            larStor = true;
        } else larStor = false;
        if (custom.checked) {
            cusm = true;
        } else cusm = false;
    
        if (onser && larStor && cusm) {
            selectOns[0].style.display = 'flex';
            selectOns[1].style.display = 'flex';
            selectOns[2].style.display = 'flex';
            userData.push({serviceMoney: 1, storageMoney: 2, profileMoney: 2});
        }
        else if (onser && larStor && !cusm) {
            selectOns[0].style.display = 'flex';
            selectOns[1].style.display = 'flex';
            userData.push({serviceMoney: 1, storageMoney: 2, profileMoney: 0});
        }else if (onser && cusm && !larStor) {
            selectOns[0].style.display = 'flex';
            selectOns[2].style.display = 'flex';
            userData.push({serviceMoney: 1, storageMoney: 0, profileMoney: 2,});
        }else if (larStor && cusm && !onser) {
            selectOns[1].style.display = 'flex';
            selectOns[2].style.display = 'flex';
            userData.push({serviceMoney: 0, storageMoney: 2, profileMoney: 2});
        }else if (onser && !larStor && !cusm) {
            selectOns[0].style.display = 'flex';
            userData.push({serviceMoney: 1, storageMoney: 0, profileMoney: 0});
        }
        else if (!onser && larStor && !cusm){
            selectOns[1].style.display = 'flex';
            userData.push({serviceMoney: 0, storageMoney: 2, profileMoney: 0});
        }
        else if (!onser && !larStor && cusm) {
            selectOns[2].style.display = 'flex';
            userData.push({serviceMoney: 0, storageMoney: 0, profileMoney: 2});
        }
        else {
            selectOns.forEach(e => {
                e.style.display = 'none';
            });
        }
    }

    let userMoney = userData[1].money, serviceMoney = userData[2].serviceMoney, storageMoney = userData[2].storageMoney, profileMoney = userData[2].profileMoney;
    userMoney = userMoney + serviceMoney + storageMoney + profileMoney;
    step3.classList.remove('activeStepNum');
    step4.classList.add('activeStepNum');
    thirdArticle.style.opacity = 0;
    thirdArticle.style.display = 'none';
    setTimeout(() => {
        fourArticle.style.opacity = 1;
    }, 500);
    fourArticle.style.display = 'block';
    selectPlan.innerHTML = userData[1].planActivity;
    planSum.innerHTML = userData[1].money;
    totalSum.innerHTML = userMoney;
    selectSum1.innerHTML = userData[2].serviceMoney;
    selectSum2.innerHTML = userData[2].storageMoney;
    selectSum3.innerHTML = userData[2].profileMoney;

    if (isPlan) {
        dataTypePlan.forEach(TypePlan => {
            TypePlan.innerHTML = "Yearly";
        });
        dataTypeSevice.forEach(dataType => {
            dataType.innerHTML = "/year";
        });
    }else {
        dataTypePlan.forEach(TypePlan => {
            TypePlan.innerHTML = "Monthly";
        });
        dataTypeSevice.forEach(dataType => {
            dataType.innerHTML = "/mo";
        });
    }

    console.log(userData);
    console.log(userMoney);
}

function subButton() {
    fourArticle.style.opacity = 0;
    fourArticle.style.display = 'none';
    setTimeout(() => {
        success.style.opacity = 1;
    }, 500);
    success.style.display = 'flex';
}

arcade.addEventListener('click', () => {
    isArcade = true;
    isAdvanced = false;
    isPro = false;
    arcade.classList.add('planactive');
    advanced.classList.remove('planactive');
    pro.classList.remove('planactive');
})

advanced.addEventListener('click', () => {
    isArcade = false;
    isAdvanced = true;
    isPro = false;
    arcade.classList.remove('planactive');
    advanced.classList.add('planactive');
    pro.classList.remove('planactive');
})

pro.addEventListener('click', () => {
    isArcade = false;
    isAdvanced = false;
    isPro = true;
    arcade.classList.remove('planactive');
    advanced.classList.remove('planactive');
    pro.classList.add('planactive');
})

// ? year
arcadeyear.addEventListener('click', () => {
    isArcade = true;
    isAdvanced = false;
    isPro = false;
    arcadeyear.classList.add('planactive');
    advancedyear.classList.remove('planactive');
    proyear.classList.remove('planactive');
})

advancedyear.addEventListener('click', () => {
    isArcade = false;
    isAdvanced = true;
    isPro = false;
    arcadeyear.classList.remove('planactive');
    advancedyear.classList.add('planactive');
    proyear.classList.remove('planactive');
})

proyear.addEventListener('click', () => {
    isArcade = false;
    isAdvanced = false;
    isPro = true;
    arcadeyear.classList.remove('planactive');
    advancedyear.classList.remove('planactive');
    proyear.classList.add('planactive');
})

monthBtn.addEventListener('click', () => {
    month.forEach(month => {
        month.style.display = 'flex';
    });
    year.forEach(year => {
        year.style.display = 'none';
    });
    animBtn.style.justifyContent = 'start';
    monthBtn.style.color = 'hsl(213, 96%, 18%)';
    yearBtn.style.color = 'hsl(231, 11%, 63%)';
    isPlan = false;
});

yearBtn.addEventListener('click', () => {
    month.forEach(month => {
        month.style.display = 'none';
    });
    year.forEach(year => {
        year.style.display = 'flex';
    });
    animBtn.style.justifyContent = 'end';
    monthBtn.style.color = 'hsl(231, 11%, 63%)';
    yearBtn.style.color = 'hsl(213, 96%, 18%)';
    isPlan = true;
});

backStep_2.addEventListener('click', () => {

});