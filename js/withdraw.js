// withdraw funds

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawn = getWithdrawnAmount()
    if (isNaN(withdrawn)) {
        alert("enter a valid number")
    }
    else {
        if (compare(totalAvailable(), withdrawn)) {
            const totalWithdraw = totalWithdrawn(withdrawn)
            putWithdrawnValue(totalWithdraw)
            const newAvail = deductTotalAvailable(totalAvailable(), withdrawn)
            putTotalValue(newAvail)
        }
        else {
            alert("insufficient funds")
        }

    }
})

// -----------------------------------------------------------------------------
// declaring functions
// -----------------------------------------------------------------------------



// get depositted amount
function getWithdrawnAmount() {
    const wihdrawAmmountString = document.getElementById('withdraw-field').value
    const withdrawAmmount = parseFloat(wihdrawAmmountString)
    document.getElementById('withdraw-field').value = ""
    return withdrawAmmount
}

// get total deposited amount
function totalWithdrawn(newWithdraw) {
    const totalWithdrawnString = document.getElementById('total-withdraw').innerText
    const oldWithdraw = parseFloat(totalWithdrawnString)
    return oldWithdraw + newWithdraw
}


// get total available amount
function totalAvailable() {
    const totalAvailableString = document.getElementById('total-available').innerText
    const totalAvailable = parseFloat(totalAvailableString)
    return totalAvailable
}

// put withdrawn amount to withdraw field
function putWithdrawnValue(totalWithdraw) {
    document.getElementById('total-withdraw').innerText = totalWithdraw
}

// deduct withdrawn amount from total available amount
function deductTotalAvailable(totalAvailable, totalWithdraw) {
    if (totalWithdraw > totalAvailable) {
        alert("insufficient funds")
    }
    else {
        let total = totalAvailable - totalWithdraw
        return total
    }
}


// put text into deposited amount
function putTotalValue(total) {
    document.getElementById('total-available').innerText = total
}

// compare 2 values
function compare(avail, withdrawn) {
    if (avail > withdrawn) {
        return true
    }
    else {
        return false
    }
}