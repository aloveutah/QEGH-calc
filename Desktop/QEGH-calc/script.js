
document.getElementById('calculate').addEventListener('click', function() {
    const walletAmount = parseFloat(document.getElementById('wallet-amount').value);
    const endDate = new Date(document.getElementById('end-date').value);
    const startDate = new Date(document.getElementById('start-date').value);
    const grantPrice = parseFloat(document.getElementById('grant-price').value);

    if (isNaN(walletAmount) || isNaN(grantPrice) || isNaN(endDate.getTime()) || isNaN(startDate.getTime())) {
        alert('Please enter valid inputs.');
        return;
    }

    const perDayValue = (walletAmount / 365).toFixed(8);
    const daysWorked = Math.max(0, (endDate - startDate) / (1000 * 60 * 60 * 24));
    const totalShares = (daysWorked * perDayValue).toFixed(6);
    const shareRoundedUp = Math.ceil(totalShares);

    const results = `
        <p>Per Day Value: $${perDayValue}</p>
        <p>Days Worked: ${daysWorked}</p>
        <p>Total Shares: ${totalShares}</p>
        <p>Share Rounded Up: ${shareRoundedUp}</p>
    `;

    document.getElementById('results').innerHTML = results;
});
