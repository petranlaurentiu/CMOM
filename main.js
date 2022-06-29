// Fetching CoinGecko API data and rendering it on the DOM using template literals

function fetchAPI() {
  let url1 =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

  const coinList = fetch(url1)
    .then((response) => response.json())
    .then((data) => {
      return Promise.all(
        data.map((coin) => {
          return fetch("https://api.coingecko.com/api/v3/coins/" + coin.id)
            .then((response) => response.json())
            .then((data) => {
              return {
                ...coin,
                ...data,
              };
            });
        })
      );
    })
    .then((data) => {
      let coinList = data
        .map((coin) => {
          return `
<tbody>
  <tr data-bs-toggle="collapse" href="#${coin.id}" role="button" aria-expanded="false" aria-controls="${coin.id}">
    <td>
      <p>
        <a class="coin--info">
          <img src="${coin.image.thumb}" alt="${coin.name}">
          <span>${coin.name}</span>
        </a>
      </p>
    </td>
    <td><span class="coin__current--price">${coin.current_price}</span></td>
    <td><span class="coin__high--price">${coin.high_24h} &#9650</span></td>
    <td><span class="coin__low--price">${coin.low_24h} &#9660;</span></td>
  <tr>
    <td class="collapse" id="${coin.id}">
      <div class="coin__title">
        <div>
          <p>Name</p>
          <p>${coin.name}</p>
        </div>
        <div>
          <p>Symbol </p>
          <p>${coin.symbol}</p>
        </div>
        <div>
          <p>hashing algorithm </p>
          <p>${coin.hashing_algorithm}</p>
        </div>

      </div>
    </td>
    <td class="collapse" id="${coin.id}">
      <p class="coin__description">description</p>
      <span class="coin__description--inner">${coin.description.en}</span>
    </td>
    <td class="collapse" id="${coin.id}">
      <p class="coin__market">cap EUR</p>
      <span>${coin.market_data.market_cap.eur}</span>
    </td>
    <td class="collapse" id="${coin.id}"><a href="${coin.links.homepage}" class="coin__homepage">Homepage</a>
      <p>Genesis Date</p>
      <span>${coin.genesis_date}</span>
    </td>

  </tr>
  </tr>
</tbody>
`;
        })
        .join(" ");
      document
        .querySelector(".table")
        .insertAdjacentHTML("beforeend", coinList);
    });

  return coinList;
}
fetchAPI();
