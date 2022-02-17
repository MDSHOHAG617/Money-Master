// // calculate Total Expenses 
// document.getElementById('calculate-tbn').addEventListener('click', function () {
//     // food cost
//     const foodInput = document.getElementById('food');
//     const foodCost = parseFloat(foodInput.value);
//     // rent cost
//     const rentInput = document.getElementById('rent');
//     const rentCost = parseFloat(rentInput.value);
//     // clothes cost
//     const clothesInput = document.getElementById('clothes');
//     const clothesCost = parseFloat(clothesInput.value);
//     //Total Expenses 
//     const expencess = (foodCost + rentCost + clothesCost)
//     const totalExpenses = document.getElementById('total-expns');
//     totalExpenses.innerText = expencess;
//     //Income
//     const incomeInput = document.getElementById('income');
//     const incomeCost = parseFloat(incomeInput.value);
//     //balance
//     const balance = document.getElementById('balance');
//     balance.innerText = incomeCost - expencess;
// })

// //savings with parsentage
// document.getElementById('save-btn').addEventListener('click', function () {
//     console.log(' clicked')
//     //parcentage
//     const parscentage = document.getElementById('savings-perscent');
//     const parcentageNum = parseFloat(parscentage.value);
//     //saving amount
//     const incomeInput = document.getElementById('income');
//     const incomeCost = parseFloat(incomeInput.value);
//     const savingAmount = document.getElementById('saving-amount');
//     savingAmount.innerText = incomeCost * (parcentageNum / 100);
//     /////////////////////////they are from above coz function nai :D ////////////////////////
//     const foodInput = document.getElementById('food');
//     const foodCost = parseFloat(foodInput.value);
//     // rent cost
//     const rentInput = document.getElementById('rent');
//     const rentCost = parseFloat(rentInput.value);
//     // clothes cost
//     const clothesInput = document.getElementById('clothes');
//     const clothesCost = parseFloat(clothesInput.value);
//     //Total Expenses 
//     const expencess = (foodCost + rentCost + clothesCost)
//     const balance = document.getElementById('balance');
//     balance.innerText = incomeCost - expencess;
//     /////////////////////////they are from above coz function nai :D ////////////////////////

//     const remainigAmount = document.getElementById('remaining-balance');
//     remainigAmount.innerText = (incomeCost - expencess) - (incomeCost * (parcentageNum / 100));

// })










// Mahim ///////////////////////////////////

function expencessCount() {
    // food cost
    const foodCost = parseFloat(document.getElementById('food').value);
    if (foodCost < 0) {
        alert("Enter a valid number")
    }
    // rent cost
    const rentCost = parseFloat(document.getElementById('rent').value);
    // clothes cost
    const clothesCost = parseFloat(document.getElementById('clothes').value);

    const expencess = (foodCost + rentCost + clothesCost);

    return expencess;
}


// calculate Total Expenses 
document.getElementById('calculate-tbn').addEventListener('click', function () {
    //Income
    const incomeCost = parseFloat(document.getElementById('income').value);
    //Total Expenses 
    const expencess = expencessCount();
    // Error
    const error = document.getElementById('error');

    if (expencess > incomeCost) {
        // Error
        error.innerText = "Expencess is bigger than Income.";
    }
    else if (expencess < 0) {
        // Error
        error.innerText = "Value cannot be minus.";
    }
    else if (incomeCost < 0) {
        // Error
        error.innerText = "Value cannot be minus.";
    }
    else if (incomeCost == 0) {
        // Error
        error.innerText = "Please Enter a value.";
    }
    else {
        const totalExpenses = document.getElementById('total-expns');
        totalExpenses.innerText = expencess;
        //balance
        const balance = document.getElementById('balance');
        balance.innerText = incomeCost - expencess;
        // Error
        error.innerText = "";
    }

})

//savings with parsentage
document.getElementById('save-btn').addEventListener('click', function () {
    //parcentage
    const parcentageNum = parseFloat(document.getElementById('savings-perscent').value);
    //saving amount
    const incomeCost = parseFloat(document.getElementById('income').value);
    // Error
    const errorSave = document.getElementById('error-save');


    if (parcentageNum < 0) {
        // Error
        errorSave.innerText = "Value cannot be minus.";
    }

    else if (parcentageNum == 0) {
        // Error
        errorSave.innerText = "Please input a Value.";
    }

    else {
        const savingAmount = document.getElementById('saving-amount');
        savingAmount.innerText = incomeCost * (parcentageNum / 100);

        //Total Expenses 
        const expencess = expencessCount();

        const balance = document.getElementById('balance');
        balance.innerText = incomeCost - expencess;

        const remainigAmount = document.getElementById('remaining-balance');
        remainigAmount.innerText = (incomeCost - expencess) - (incomeCost * (parcentageNum / 100));

        errorSave.innerText = "";

    }

})


