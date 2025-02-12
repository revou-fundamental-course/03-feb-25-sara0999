function konversi() {
  let celsius = parseFloat(document.getElementById("celsius").value);

  if (isNaN(celsius)) {
    alert("Masukkan angka yang valid untuk Celsius!");
    return;
  }

  let fahrenheit = (celsius * 9) / 5 + 32;
  document.getElementById("fahrenheit").value = fahrenheit;
  document.getElementById(
    "calculation"
  ).value = `${celsius}°C * (9/5) + 32 = ${fahrenheit}°F`;
}

function reset() {
  document.getElementById("celsius").value = "";
  document.getElementById("fahrenheit").value = "";
  document.getElementById("calculation").value = "";
}

function reverse() {
  let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);

  if (isNaN(fahrenheit)) {
    alert("Masukkan angka yang valid untuk Fahrenheit!");
    return;
  }

  let celsius = ((fahrenheit - 32) * 5) / 9;
  document.getElementById("celsius").value = celsius.toFixed(2);
  document.getElementById(
    "calculation"
  ).value = `${fahrenheit}°F - 32 * (5/9) = ${celsius.toFixed(2)}°C`;
}
