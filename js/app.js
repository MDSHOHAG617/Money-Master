// calculate Total Expenses 
document.getElementById('calculate-tbn').addEventListener('click', function () {
    // food cost
    const foodInput = document.getElementById('food');
    const foodCost = parseFloat(foodInput.value);
    // rent cost
    const rentInput = document.getElementById('rent');
    const rentCost = parseFloat(rentInput.value);
    // clothes cost
    const clothesInput = document.getElementById('clothes');
    const clothesCost = parseFloat(clothesInput.value);
    //Total Expenses 
    const expencess = (foodCost + rentCost + clothesCost)
    const totalExpenses = document.getElementById('total-expns');
    totalExpenses.innerText = expencess;
    //Income
    const incomeInput = document.getElementById('income');
    const incomeCost = parseFloat(incomeInput.value);
    //balance
    const balance = document.getElementById('balance');
    balance.innerText = incomeCost - expencess;
})

//savings with parsentage
document.getElementById('save-btn').addEventListener('click', function () {
    console.log(' clicked')
    //parcentage
    const parscentage = document.getElementById('savings-perscent');
    const parcentageNum = parseFloat(parscentage.value);
    //saving amount
    const incomeInput = document.getElementById('income');
    const incomeCost = parseFloat(incomeInput.value);
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = incomeCost * (parcentageNum / 100);
    /////////////////////////they are from above coz function nai :D ////////////////////////
    const foodInput = document.getElementById('food');
    const foodCost = parseFloat(foodInput.value);
    // rent cost
    const rentInput = document.getElementById('rent');
    const rentCost = parseFloat(rentInput.value);
    // clothes cost
    const clothesInput = document.getElementById('clothes');
    const clothesCost = parseFloat(clothesInput.value);
    //Total Expenses 
    const expencess = (foodCost + rentCost + clothesCost)
    const balance = document.getElementById('balance');
    balance.innerText = incomeCost - expencess;
    /////////////////////////they are from above coz function nai :D ////////////////////////

    const remainigAmount = document.getElementById('remaining-balance');
    remainigAmount.innerText = (incomeCost - expencess) - (incomeCost * (parcentageNum / 100));

})






