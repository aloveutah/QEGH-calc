
document.getElementById('calculate').addEventListener('click', function() {
    const walletAmount = parseFloat(document.getElementById('wallet-amount').value);
    const endDate = new Date(document.getElementById('end-date').value);
    const startDate = new Date(document.getElementById('start-date').value);
    const grantPrice = parseFloat(document.getElementById('grant-price').value);
    
    if (isNaN(walletAmount) || isNaN(grantPrice) || isNaN(endDate.getTime()) || isNaN(startDate.getTime())) {
        alert('Please enter valid inputs.');
        return;
    }

    // Per Day Value calculation
    const perDayValue = (walletAmount / 366).toFixed(8);

    // Days Worked calculation
    const daysWorked = Math.max(0, (endDate - startDate) / (1000 * 60 * 60 * 24));

    // Days Worked times Per Day Value
    const daysWorkedValue = (daysWorked * perDayValue).toFixed(6);

    // Total Shares calculation
    const totalShares = (daysWorkedValue / grantPrice).toFixed(8);

    // Shares Rounded Up
    const sharesRoundedUp = Math.ceil(totalShares);

    // Display results
    const results = `
        <p>Wallet Amount / 366 Days: ${walletAmount} / 366 = ${perDayValue}</p>
        <p>Days Worked: ${daysWorked}</p>
        <p>Days Worked * Per Day Value: ${daysWorked} * ${perDayValue} = ${daysWorkedValue}</p>
        <p>Total Shares: ${totalShares}</p>
        <p>Shares Rounded Up: ${sharesRoundedUp}</p>
    `;

    document.getElementById('results').innerHTML = results;
});
