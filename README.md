## Cmom Test
## Description
Using the Coin Gecko API, return the list of the coins markets and coin by ID

## Procedure
a. /coins/markets
Make a call to the following endpoint to return the coins ordered by ​market_cap_desc,
using the ​vs_currency ​as EUR. You can limit the ​per_page ​to show only ten results.
b. Render this list on the UI showing the following information
● Image
● Name
● Symbol
● Current Price
● High 24 hour Price
● Low 24 hour Price
c. /coins/{id}
Each item in this list should be clickable which will in return make another call to the API
to return the following information about this coin.
● Name ● Symbol
   
● Hashing algorithm
● Description
● Market cap in Euro
● Homepage
● Genesis Date

## Dependecies
npm instal 
or
yarn install