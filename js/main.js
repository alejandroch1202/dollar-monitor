import { CORSSH_API_KEY } from "./config.js";

(async () => {
  await fetch("https://proxy.cors.sh/https://monitordolarvenezuela.com", {
    headers: { "x-cors-api-key": CORSSH_API_KEY },
  })
    .then((data) => data.text())
    .then((data) => {
      const index = data.search("/img/BCV.png");
      const bcv = data.substring(index + 137 + 8, index + 142 + 8);
      const bcvHour = data.substring(index + 168 + 12, index + 176 + 12);
      const bcvDate = data.substring(index + 182 + 11, index + 192 + 11);

      document.getElementById("bcv").innerHTML = `
        <h2>Banco Central de Venezuela</h2>
         <a target="_blank" href="https://www.bcv.org.ve/">
           <img src="./assets/bcv.png" alt="bcv" />
         </a>
         <h3>Bs ${bcv}</h3>
        <p><span>Hour:</span> ${bcvHour}</p>
        <p><span>Date:</span> ${bcvDate}</p>
        `;

      const index2 = data.search("@EnParaleloVzla3");
      const monitor = data.substring(index2 + 208 + 12, index2 + 213 + 12);
      const monitorHour = data.substring(index2 + 238 + 16, index2 + 246 + 16);
      const monitorDate = data.substring(index2 + 252 + 15, index2 + 262 + 15);

      document.getElementById("monitor").innerHTML = `
        <h2>Monitor Dólar</h2>
        <a target="_blank" href="https://monitordolarvenezuela.com/">
        <img src="./assets/monitor.webp" alt="monitor" />
        </a>
        <h3>Bs ${monitor}</h3>
        <p><span>Hour:</span> ${monitorHour}</p>
        <p><span>Date:</span> ${monitorDate}</p>
        `;
    });
})();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}
