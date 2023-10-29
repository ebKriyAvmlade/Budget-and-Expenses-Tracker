

const budgetInput = document.getElementById("budget-input-el")
const setBudget = document.getElementById("budget-btn")
const expenseTitleInput = document.getElementById("expense-title")
const expenseCostInput = document.getElementById("expense-cost")
const checkAmount = document.getElementById("check-btn")
const totalBudget = document.getElementById("total-budget-el")
const expenses = document.getElementById("expensesEls")
const balance = document.getElementById("balance")
const totalList = document.getElementById("totalBudgetList")
const deleteEl = document.getElementById("delete-el")

let image = "delete.png"
let maxBudget = 0
let expensesInput = 0
let balanceInput = 0
let productTitle = []
let other = 0

setBudget.addEventListener("click", function() {
     const newAmoutOf = parseFloat(budgetInput.value)
      maxBudget += newAmoutOf
     totalBudget.textContent = "₱" + maxBudget
     budgetInput.value = ""
     balanceInput = totalBudget.textContent
     balance.textContent = balanceInput
    
     
}) 

checkAmount.addEventListener("click", function(){
        productTitle.push(expenseTitleInput.value)
      calculate()})


function calculate() {
let newInputVal = parseFloat(expenseCostInput.value);
expensesInput += newInputVal
other += expensesInput
expenses.textContent = "₱" + other


    maxBudget -= expensesInput; 
    balance.textContent = "₱" + maxBudget; 
    displayTotalBudget();

}

function displayTotalBudget() {
    totalList.innerHTML += `<li class="innerPad"><span class="title-value">${expenseTitleInput.value}</span> <span class="value">${expenseCostInput.value}</span><img src="${image}" class="delete-btn" id="delete-el"></li>`
    expensesInput = 0
    expenseTitleInput.value = ""
        expenseCostInput.value = ""
}



