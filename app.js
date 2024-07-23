const express = require('express');
const http = require('http')
const path = require('path')
const IntaSend = require('intasend-node');

let intasend = new IntaSend(
    // 'ISPubKey_test_2f428677-b735-4d08-8649-9ec1e41af374',
    // 'ISSecretKey_test_561aeaa4-c2a6-43b7-ab49-746952a3d2f3',
    'ISPubKey_test_1dfc3eb3-96c1-4c4b-a200-992d30c43502',
    'ISSecretKey_test_4d769551-e9df-4eb0-99c0-87d9227ed033',
    true, // Test ? Set true for test environment
);

const app = express()

app.all('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static(__dirname))


// POST Method to Test different IntaSend methods
app.post('/clicked', (req, res) => {
    const click = { clickTime: new Date() };

    //Collecton Initiate
    let collection = intasend.collection();

    // Checkout
    // console.log('Testing Checkout');
    collection
        .charge({
            first_name: 'Joe',
            last_name: 'Doe',
            email: 'joe@doe.com',
            host: 'https://yourwebsite.com',
            amount: 10,
            currency: 'KES',
            api_ref: 'test',
        })
        .then((resp) => {
            // Redirect user to URL to complete payment
            console.log(`Charge Response:`, resp);
            url = resp['url']
            console.log(`Charge URL:`, url);
        })
        .catch((err) => {
            console.error(`Charge error:`, err);
        });

    //M-PESA STK Push
    // collection
    //     .mpesaStkPush({
    //         // first_name: 'Joe',
    //         // last_name: 'Doe',
    //         // email: 'joe@doe.com',
    //         // host: 'https://yourwebsite.com',
    //         amount: 10,
    //         phone_number: '254713546219',
    //         api_ref: 'test2',
    //     })
    //     .then((resp) => {
    //         // Redirect user to URL to complete payment
    //         console.log(`STK Push Resp:`, resp);
    //     })
    //     .catch((err) => {
    //         console.error(`STK Push Resp error:`, JSON.stringify(err));
    //     });

    // Payment Status
    // collection
    //     .status('9QJ2WGQ')
    //     .then((resp) => {
    //         // Redirect user to URL to complete payment
    //         console.log(`Status Resp:`,resp);
    //     })
    //     .catch((err) => {
    //         console.error(`Status Resp error:`,err);
    //     });


    //Send Money Initiate
    let payouts = intasend.payouts();


    //M-PESA B2C
    // payouts
    //     .mpesa({
    //         currency: 'KES',
    //         transactions: [{
    //             name: 'Joe Doe',
    //             account: '254708374149',
    //             amount: '10',
    //             narrative: 'Reason for payment'
    //         }]
    //     })
    //     .then((resp) => {
    //         console.log(`Payouts response:`, resp);
    //         // Approve payouts method can be called here if you would
    //         // like to auto-approve immediately
    //     })
    //     .catch((err) => {
    //         console.error(`Payouts error:`, err);
    //     });


    //M-PESA B2B
    // payouts
    //     .mpesaB2B({
    //         currency: 'KES',
    //         transactions: [{
    //             name: 'Business A',
    //             account: '21222',
    //             account_type: 'PayBill',
    //             account_reference: '5172627278',
    //             amount: 20,
    //             narrative: 'Purchase'
    //         }, {
    //             name: 'Business B',
    //             account: '45422',
    //             account_type: 'TillNumber',
    //             amount: 50,
    //             narrative: 'Purchase'
    //         }]
    //     })
    //     .then((resp) => {
    //         console.log(`Payouts response:`, resp);
    //         // Approve payouts method can be called here if you would
    //         // like to auto-approve immediately
    //     })
    //     .catch((err) => {
    //         console.error(`Payouts error:`, err);
    //     });


    //Send to Bank Accounts
    // payouts
    //     .bank({
    //         currency: 'KES',
    //         transactions: [{
    //             name: 'Joe Doe',
    //             account: '0129292920202',
    //             bank_code: '2',
    //             amount: 200,
    //             narrative: 'Purchase'
    //         }, {
    //             name: 'Mary Doe',
    //             account: '525623632321',
    //             bank_code: '11',
    //             amount: 500,
    //             narrative: 'Purchase'
    //         }]
    //     })
    //     .then((resp) => {
    //         console.log(`Payouts response:`, resp);
    //         // Approve payouts method can be called here if you would
    //         // like to auto-approve immediately
    //     })
    //     .catch((err) => {
    //         console.error(`Payouts error:`, err);
    //     });

    //IntaSend P2P
    // payouts
    //     .intasend({
    //         currency: 'KES',
    //         transactions: [{
    //             name: 'Joe Doe',
    //             account: '254713546219',
    //             amount: 1000,
    //             narrative: 'Wage Payment'
    //         }]
    //     })
    //     .then((resp) => {
    //         console.log(`Payouts response:`, resp);
    //         // Approve payouts method can be called here if you would
    //         // like to auto-approve immediately
    //     })
    //     .catch((err) => {
    //         console.error(`Payouts error:`, err);
    //     });


    //Wallets Initiate
    let wallets = intasend.wallets();

    //Retrieve Wallets
    // wallets
    //     .list()
    //     .then((resp) => {
    //         console.log(`Response: ${JSON.stringify(resp)}`);
    //     })
    //     .catch((err) => {
    //         console.error(`Error:`, err);
    //     });

    //Get Specific Wallet
    // wallets
    //     .get('LQP4LGR')
    //     .then((resp) => {
    //         console.log(`Response: ${JSON.stringify(resp)}`);
    //     })
    //     .catch((err) => {
    //         console.error(`Error:`, err);
    //     });

    //Create Wallets
    // wallets
    //     .create({
    //         label: 'NodeJS-SDK-TEST22',
    //         wallet_type: 'WORKING',
    //         currency: 'KES',
    //         can_disburse: true
    //     })
    //     .then((resp) => {
    //         console.log(`Response: ${JSON.stringify(resp)}`);
    //     })
    //     .catch((err) => {
    //         console.error(`Error: ${JSON.stringify(err)}`);
    //     });

    //Get Wallet Transactions
    // wallets
    //     .transactions('LQP4LGR')
    //     .then((resp) => {
    //         console.log(`Response: ${JSON.stringify(resp)}`);
    //     })
    //     .catch((err) => {
    //         console.error(`Error:`, err);
    //     });

    //Fund Wallet M-PESA STK Push
    // wallets
    //     .fundMPesa({
    //         first_name: 'Joe',
    //         last_name: 'Doe',
    //         email: 'joe@doe.com',
    //         host: 'https://yourwebsite.com',
    //         amount: 10,
    //         phone_number: '254713546219',
    //         api_ref: 'wallet_fund_2',
    //         wallet_id:'3R9364R',
    //     })
    //     .then((resp) => {
    //         console.log(`Response: ${JSON.stringify(resp)}`);
    //     })
    //     .catch((err) => {
    //         console.error(`Error:`, err);
    //     });

    //Fund Wallet Checkout Link
    // wallets
    //     .fundCheckout({
    //         first_name: 'Joe',
    //         last_name: 'Doe',
    //         email: 'joe@doe.com',
    //         host: 'https://yourwebsite.com',
    //         amount: 10,
    //         currency: 'KES',
    //         api_ref: 'test',
    //         wallet_id: '3R9364R',
    //     })
    //     .then((resp) => {
    //         // Redirect user to URL to complete payment
    //         console.log(`Charge Response:`, resp);
    //     })
    //     .catch((err) => {
    //         console.error(`Charge error:`, err);
    //     });

    //Internal Transfers
    // let amount = 10000;
    // let narrative = 'Payment';
    // wallets
    //     .intraTransfer("LQP4LGR", "EQ6055Q", amount, narrative)
    //     .then((resp) => {
    //         console.log(`Intra Transfer response:`, resp);
    //     })
    //     .catch((err) => {
    //         console.error(`Intra Transfer error:`, err);
    //     });

    //External Transfer
    // payouts
    //     .mpesa({
    //         currency: 'KES',
    //         transactions: [{
    //             name: 'Joe Doe',
    //             account: '254708374149',
    //             amount: '2000',
    //             narrative: 'Reason for payment'
    //         }],
    //         wallet_id: "EQ6055Q"
    //     })
    //     .then((resp) => {
    //         console.log(`Payouts response:`, resp);
    //         // Approve payouts method can be called here if you would
    //         // like to auto-approve immediately
    //         payouts
    //             .approve(resp)
    //             .then((resp) => {
    //                 console.log(`Payouts approve:`, resp);
    //             })
    //             .catch((err) => {
    //                 console.error(`Payouts approve error:`, err);
    //             });
    //     })
    //     .catch((err) => {
    //         console.error(`Payouts error:`, err);
    //     });


    res.sendStatus(201);

});


app.listen(3000, function () {
    console.log('App listening on port 3000!');
});