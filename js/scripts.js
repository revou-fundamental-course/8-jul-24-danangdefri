// const gender = document.getElementsByName("gender");
const outputGender = document.getElementById("output-gender");
const tinggiBadan = document.getElementById("input-tinggi-badan");
const usia = document.getElementById("input-usia");
const beratBadan = document.getElementById("input-berat-badan");
const kategori = document.getElementById("kategori");
const result = document.getElementById("toggle");
const infoKurus = document.getElementById("information-kurus");
const infoGemuk = document.getElementById("information-gemuk");

// function klik button
function hitung() {
  // menghitung BMI
  const tb = parseFloat(tinggiBadan.value) / 100;
  const bb = parseFloat(beratBadan.value);
  const hitungBmi = bb / (tb * tb);

  // menampikan hasil bmi ke html
  let bmi = document.getElementById("bmi");
  bmi.innerHTML = hitungBmi;

  // menentukan jenis kelamin
  const gender = document.querySelector('input[name="gender"]:checked');
  outputGender.textContent = gender.value;

  if (isNaN(tb) || isNaN(bb)) {
    alert("Harap diisi dengan benar ya");
    return;
  }

  // menentukan kategori bmi
  if (hitungBmi < 18.5) {
    kategori.innerHTML = "Kekurangan berat badan";

    //menampilkan form information
    infoKurus.style.display = "block";
  } else if (hitungBmi >= 18.5 && hitungBmi <= 24.9) {
    kategori.innerHTML = "berat badan normal (ideal)";
  } else if (hitungBmi <= 25 && hitungBmi <= 29.9) {
    kategori.innerHTML = "Kelebihan berat badan";

    //menampilkan form information
    infoGemuk.style.display = "block";
  } else {
    kategori.innerHTML = "Obesitas";
    //menampilkan form information
    infoGemuk.style.display = "block";
  }
  // menampilkan form result
  result.style.display = "block";
}

function reset() {
  document.getElementById("button-riset").reset();
}
