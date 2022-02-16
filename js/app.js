// calculate Total Expenses 
document.getElementById('calculate-tbn').addEventListener('click', function () {
    // food cost
    const foodInput = document.getElementById('food');
    foodCost = parseFloat(foodInput.value);
    // rent cost
    const rentInput = document.getElementById('rent');
    rentCost = parseFloat(rentInput.value);
    // clothes cost
    const clothesInput = document.getElementById('clothes');
    clothesCost = parseFloat(clothesInput.value);
    //Total Expenses 
    const expencess = (foodCost + rentCost + clothesCost)
    const totalExpenses = document.getElementById('total-expns');
    totalExpenses.innerText = expencess;
    //Income
    const incomeInput = document.getElementById('income');
    incomeCost = parseFloat(incomeInput.value);
    //balance
    const balance = document.getElementById('balance');
    balance.innerText = incomeCost - expencess;



})



//savings
document.getElementById('save-btn').addEventListener('click', function () {
    //parcentage
    const savingInput = document.getElementById('savings-perscent');
    const savingParscentages = parseFloat(savingInput.value);

    //savings amount
    const savingsAmount = document.getElementById('saving-amount');
    savingsAmount.innerText = (incomeCost * (savingParscentages / 100));

    //Remaining balance
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = (incomeCost - expencess) - (incomeCost * (savingParscentages / 100));
    console.log(savingParscentages)

})