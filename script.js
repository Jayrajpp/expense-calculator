// ---------------- Expense Calculator ----------------
let totalExpense = 0;

function addExpense() {
    const name = document.getElementById("expenseName").value;
    const amount = Number(document.getElementById("expenseAmount").value);

    if (name === "" || amount <= 0) {
        alert("Please enter valid expense details");
        return;
    }

    const li = document.createElement("li");
    li.textContent = `${name} : ₹${amount}`;
    document.getElementById("expenseList").appendChild(li);

    totalExpense += amount;
    document.getElementById("totalExpense").textContent = totalExpense;

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
}

// ---------------- BMI Calculator ----------------
function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value / 100;

    if (weight <= 0 || height <= 0) {
        alert("Enter valid height and weight");
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";

    document.getElementById("bmiResult").textContent =
        `BMI: ${bmi} (${category})`;
}

// ---------------- Calories Calculator ----------------
function calculateCalories() {
    const age = document.getElementById("age").value;
    const weight = document.getElementById("calWeight").value;
    const height = document.getElementById("calHeight").value;
    const gender = document.getElementById("gender").value;

    if (age <= 0 || weight <= 0 || height <= 0) {
        alert("Enter all valid values");
        return;
    }

    let calories;

    if (gender === "male") {
        calories = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        calories = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    document.getElementById("calorieResult").textContent =
        `Daily Calories Needed: ${Math.round(calories)} kcal`;
}
