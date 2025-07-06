// =================== Kritik & Saran ===================
const feedbackList = document.getElementById("daftar-feedback");
const feedbackForm = document.getElementById("feedback-form");

feedbackForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const pesan = document.getElementById("pesan").value;

  const item = document.createElement("li");
  item.className = "list-group-item";
  item.innerHTML = "<strong>" + nama + ":</strong> " + pesan;
  feedbackList.appendChild(item);

  feedbackForm.reset();
});

const feedbackDummy = [
  { nama: "Salsa", pesan: "Web ini sangat membantu! 👍" },
  { nama: "Raka", pesan: "Semoga tersedia fitur lokasi donor terdekat yaa!" }
];

feedbackDummy.forEach((data) => {
  const item = document.createElement("li");
  item.className = "list-group-item";
  item.innerHTML = "<strong>" + data.nama + ":</strong> " + data.pesan;
  feedbackList.appendChild(item);
});

// =================== Q&A ===================
const faqForm = document.getElementById("faq-form");
const daftarQA = document.getElementById("daftar-qa");

faqForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama-penanya").value;
  const pertanyaan = document.getElementById("pertanyaan").value;

  const kotak = document.createElement("div");
  kotak.className = "border-start border-danger ps-3 mb-3";

  const teksPertanyaan = document.createElement("p");
  teksPertanyaan.innerHTML = "<strong>" + nama + ":</strong> " + pertanyaan;

  const belumJawab = document.createElement("p");
  belumJawab.className = "text-muted fst-italic";
  belumJawab.innerText = "(Belum ada jawaban)";

  const tombolBalas = document.createElement("button");
  tombolBalas.className = "btn btn-outline-danger btn-sm mt-1";
  tombolBalas.innerText = "Balas";

  tombolBalas.addEventListener("click", function () {
    tombolBalas.disabled = true;

    const input = document.createElement("input");
    input.type = "text";
    input.className = "form-control my-2";
    input.placeholder = "Tulis jawaban...";

    const kirim = document.createElement("button");
    kirim.className = "btn btn-danger btn-sm mb-2";
    kirim.innerText = "Kirim";

    kirim.addEventListener("click", function () {
      const isi = input.value.trim();
      if (isi !== "") {
        const pJawaban = document.createElement("p");
        pJawaban.innerHTML = "<strong>Jawaban:</strong> " + isi;
        kotak.appendChild(pJawaban);
        input.remove();
        kirim.remove();
        belumJawab.remove();
      }
    });

    kotak.appendChild(input);
    kotak.appendChild(kirim);
  });

  kotak.appendChild(teksPertanyaan);
  kotak.appendChild(belumJawab);
  kotak.appendChild(tombolBalas);
  daftarQA.appendChild(kotak);

  faqForm.reset();
});

// Aktifkan tombol 'Balas' di Q&A statis awal
document.querySelectorAll("#daftar-qa > div").forEach((parent) => {
  const tombol = parent.querySelector("button");
  tombol.addEventListener("click", function () {
    tombol.disabled = true;

    const input = document.createElement("input");
    input.type = "text";
    input.className = "form-control my-2";
    input.placeholder = "Tulis jawaban...";

    const kirim = document.createElement("button");
    kirim.className = "btn btn-danger btn-sm mb-2";
    kirim.innerText = "Kirim";

    kirim.addEventListener("click", function () {
      const isi = input.value.trim();
      if (isi !== "") {
        const pJawaban = document.createElement("p");
        pJawaban.innerHTML = "<strong>User1:</strong> " + isi;
        parent.appendChild(pJawaban);
        input.remove();
        kirim.remove();
      }
    });

    parent.appendChild(input);
    parent.appendChild(kirim);
  });
});

// =================== Review ===================
const reviewList = document.getElementById("daftar-review");
const reviewForm = document.getElementById("review-form");

reviewForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama-review").value;
  const isi = document.getElementById("isi-review").value;
  const rating = document.getElementById("rating").value;

  const item = document.createElement("li");
  item.className = "list-group-item";
  item.innerHTML = "<strong>" + nama + "</strong> (" + rating + "⭐):<br>" + isi;
  reviewList.appendChild(item);

  reviewForm.reset();
});

const reviewDummy = [
  { nama: "Ciara", isi: "Donor di Redvengers sangat cepat dan ramah!", rating: 5 },
  { nama: "Beverly", isi: "Tempatnya bersih dan nyaman. Good job!", rating: 5 }
];

reviewDummy.forEach((data) => {
  const item = document.createElement("li");
  item.className = "list-group-item";
  item.innerHTML = "<strong>" + data.nama + "</strong> (" + data.rating + "⭐):<br>" + data.isi;
  reviewList.appendChild(item);
});
