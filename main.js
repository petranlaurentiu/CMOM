(function fetchAPI() {
fetch(
"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
)
.then((response) => {
if (!response.ok) {
throw new Error("Something went wrong");
}
return response.json();
})
.then((data) => {
console.log(data);
const result = data
.map((obj) => {
return `
<tbody>
  <tr data-bs-toggle="collapse" href="#${obj.id}" role="button" aria-expanded="false" aria-controls="${obj.id}">
    <td>
      <p>
        <a class="coin--info">
          <img src="${obj.image}" alt="">
          <span>${obj.name}</span>
        </a>
      </p>
    </td>
    <td><span class="coin__current--price">${obj.current_price}</span></td>
    <td><span class="coin__high--price">${obj.high_24h} &#9650</span></td>
    <td><span class="coin__low--price">${obj.low_24h} &#9660;</span></td>
  <tr>
    <td class="collapse" id="${obj.id}">
      <div >
        <div class="card card-body">
          <div class="coin--title">
              <span>Name: ${obj.name}</span>
              <span>Symbol: ${obj.symbol}</span>
          </div>
        </div>
      </div>
    </td>
    <td class="collapse" id="${obj.id}" >2</td>
    <td class="collapse" id="${obj.id}" >3</td>
    <td class="collapse" id="${obj.id}" >4</td>

  </tr>
  </tr>
</tbody>



`;
})
.join("");
document.querySelector(".table").insertAdjacentHTML("afterbegin", result);
})
.catch((error) => {
console.log(error);
});
})();

/*
<tbody>
  <tr>
    <td>
    </td>
    </div>
    <td><span class="coin__current--price">${obj.current_price}</span></td>
    <td><span class="coin__high--price">${obj.high_24h} &#9650</span></td>
    <td><span class="coin__low--price">${obj.low_24h} &#9660;</span></td>
    <td class="more__info--innner"><button class="btn btn-sm btn-info" data-bs-toggle="modal"
        data-bs-target="#staticBackdrop">More Info</button></td>
  </tr>
</tbody>
*/