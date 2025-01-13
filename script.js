

# JavaScript Code (in script.js file)
```
// Initialize balance and transaction history
let balance = 0;
let transactionHistory = [];

// Function to add money to the wallet
function addMoney(amount) {
    balance += amount;
    transactionHistory.push(`Added ₹${amount}`);
    updateBalance();
    updateTransactionHistory();
}

// Function to update the balance display
function updateBalance() {
    document.getElementById('balance').innerText = `₹${balance}.00`;
}

// Function to update the transaction history display
function updateTransactionHistory() {
    const transactionList = document.getElementById('transaction-list');
    transactionList.innerHTML = '';
    transactionHistory.forEach((transaction) => {
        const listItem = document.createElement('li');
        listItem.innerText = transaction;
        transactionList.appendChild(listItem);
    });
}

// Event listener for the "Add Money" button
document.getElementById('add-money-btn').addEventListener('click', () => {
    const amount = parseInt(document.getElementById('amount').value);
    if (amount > 0) {
        addMoney(amount);
        document.getElementById('amount').value = '';
    }
});

// Initialize the balance and transaction history displays
updateBalance();
updateTransactionHistory();
```
