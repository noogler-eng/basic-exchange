// Exchanges -> nse, bse, wazirx, binance ...
// Brokers -> zerodha, angel one, groww ...

// currentPrice
// time eries data
// orderbook
// marketmakers
// order placment ui

// buy order -> limit buy(qty is given and amount to be payed) || market buy(amount to be given and rec quty)
// market buy -> i want to buy eth of 2000
// limit buy -> i want to buy 2 ethereum of 1000/eth, putting limit

// markets -> eth/usdc, tata/inr
// eth-btc -> eth/usdc, btc/usdc
// base asset -> asset that being is traded like tata, eth, solana...
// quote asset -> assest that is used for trading like inr, usdc, eth...
// orderbook -> limit orderes by users list, more no of orders more liquid the exchange
// more liquid excahnge, less spread, good for market
// wazirx is less liquid market, more spread, less good

// in market order -> there in default limit price like some above then the best price with limit of qty of 1 acc to money



// 1. exchanges data changes must be fast
// 2. we can't use database, so using redis 
// 3. simple array also not work's here becuase if server stops then data lost
// 4. redis storing temporirly in redis cache


// 1. npm install express redis uuid zod
// 2. npm install typescript ts-node @types/express @types/node @types/redis @types/uuid
