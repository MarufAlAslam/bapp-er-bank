

// -----------------------------------------------------------------------------
// deposit funds

document.getElementById('deposit-btn').addEventListener('click', function () {
    const deposit = getDeposittedAmount()
    if (isNaN(deposit)) {
        alert("enter a valid number")
    }
    else {
        const deposited = totalDeposited()
        const total = addDeposit(deposited, deposit)
        const available = addTotal(totalAvailable(), deposit)
        putTotalValue(available)
        putDeposittedValue(total)

    }
})

// -----------------------------------------------------------------------------
// declaring functions
// -----------------------------------------------------------------------------



// get depositted amount
function getDeposittedAmount() {
    const despositAmmountString = document.getElementById('deposit-field').value
    const despositAmmount = parseFloat(despositAmmountString)
    document.getElementById('deposit-field').value = ""
    return despositAmmount
}

// get total deposited amount
function totalDeposited() {
    const totalDepositedString = document.getElementById('total-deposit').innerText
    const depositedTotal = parseFloat(totalDepositedString)
    return depositedTotal
}

// get total available amount
function totalAvailable() {
    const totalAvailableString = document.getElementById('total-available').innerText
    const totalAvailable = parseFloat(totalAvailableString)
    return totalAvailable
}


// adding new deposit with old one
function addDeposit(oldDeposit, newDeposit) {
    let total = oldDeposit + newDeposit
    return total
}

// adding new deposit with old one
function addTotal(avail, newDeposit) {
    let total = avail + newDeposit
    return total
}

// put text into deposited amount
function putDeposittedValue(depositted) {
    document.getElementById('total-deposit').innerText = depositted
}
// put text into deposited amount
function putTotalValue(total) {
    document.getElementById('total-available').innerText = total
}