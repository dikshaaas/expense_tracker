const expenses = [];
function calculateTotal(expenses) {
    let total = 0;
    for (const expense of expenses) {
        total += expense.amount;
    }
    return total;
}
console.log("Total:", calculateTotal(expenses));
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseCategory = document.getElementById("expenseCategory");
const expenseList = document.getElementById("expenseList");
const totalElement = document.getElementById("total");
const addExpenseButton = document.getElementById("addExpense");
addExpenseButton?.addEventListener("click", () => {
    const name = expenseName.value;
    const amount = Number(expenseAmount.value);
    const category = expenseCategory.value;
    if (name === "" || amount <= 0) {
        alert("Please enter a valid expense name and amount.");
        return;
    }
    const newExpense = {
        name: name,
        amount: amount,
        category: category
    };
    expenses.push(newExpense);
    const listItem = document.createElement("li");
    listItem.textContent = `${name} - Rs. ${amount} - ${category}`;
    const deleteButton = document.createElement("button");
    deleteButton.id = "buttondelete";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        const index = expenses.indexOf(newExpense);
        if (index !== -1) {
            expenses.splice(index, 1);
        }
        listItem.remove();
        const total = calculateTotal(expenses);
        if (totalElement) {
            totalElement.textContent = total.toString();
        }
    });
    listItem.appendChild(deleteButton);
    expenseList?.appendChild(listItem);
    const total = calculateTotal(expenses);
    if (totalElement) {
        totalElement.textContent = total.toString();
    }
    expenseName.value = "";
    expenseAmount.value = "";
    expenseCategory.value = "Food";
});
export {};
//# sourceMappingURL=index.js.map