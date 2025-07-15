document.getElementById("calculateBtn").addEventListener("click", function() {
    const fx_rate = parseFloat(document.getElementById('fx_rate').value);
    const wallet_amount = parseFloat(document.getElementById('wallet_amount').value);
    const premiums = parseFloat(document.getElementById('premiums').value);
    const grant_price = parseFloat(document.getElementById('grant_price').value);

    const total_usd = (wallet_amount + premiums) * fx_rate;           
    const wallet_per_quarter = (wallet_amount + premiums) / 4;        
    const shares_quantity = Math.ceil((wallet_amount + premiums) / grant_price);   

    document.getElementById('total_usd').innerText = 'Total USD: ' + total_usd.toFixed(2);
    document.getElementById('wallet_per_quarter').innerText = 'Wallet Amount per Quarter: ' + wallet_per_quarter.toFixed(2);
    document.getElementById('shares_quantity').innerText = 'Shares Quantity: ' + shares_quantity;
    document.getElementById('result').style.display = 'block';
});
