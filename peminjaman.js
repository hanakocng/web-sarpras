const items = [
  {
    id: 1,
    name: "Proyektor Epson",
    desc: "Digunakan untuk kegiatan presentasi atau pembelajaran di kelas.",
    stok: 3,
    image: "proyektor.png",
  },
  {
    id: 2,
    name: "Bola Voli",
    desc: "Bola voli untuk kegiatan olahraga di lapangan sekolah.",
    stok: 5,
    image: "voli.png",
  },
  {
    id: 3,
    name: "Bola Basket",
    desc: "Bola basket digunakan untuk ekstrakurikuler dan pelajaran olahraga.",
    stok: 4,
    image: "basket.png",
  },
  {
    id: 4,
    name: "Bola Futsal",
    desc: "Bola futsal untuk kegiatan olahraga dan turnamen sekolah.",
    stok: 6,
    image: "futsal.png",
  },
  {
    id: 5,
    name: "Microphone Wireless",
    desc: "Digunakan untuk acara sekolah, upacara, dan kegiatan di aula.",
    stok: 3,
    image: "mic.png",
  },

  {
    id: 6,
    name: "Masjid Al-Muttaqin",
    desc: "Fasilitas ibadah bagi seluruh warga sekolah.",
    stok: 1,
    image: "p.png",
  },
  {
    id: 7,
    name: "Lapangan Atas",
    desc: "Digunakan untuk kegiatan olahraga dan upacara kecil.",
    stok: 1,
    image: "p.png",
  },
  {
    id: 8,
    name: "Lapangan Utama",
    desc: "Lapangan utama untuk upacara, lomba, dan kegiatan besar sekolah.",
    stok: 1,
    image: "p.png",
  },
  {
    id: 9,
    name: "Lab Bahasa",
    desc: "Tempat praktik bahasa asing dengan peralatan audio dan komputer.",
    stok: 1,
    image: "p.png",
  },
  
];


const cardContainer = document.getElementById("cardContainer");
const searchInput = document.getElementById("searchInput");
const noResult = document.getElementById("noResult");

function renderCards(filter = "") {
  cardContainer.innerHTML = "";
  const filtered = items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

  if(filtered.length === 0) {
    noResult.style.display = "block";
  } else {
    noResult.style.display = "none";
    filtered.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h2>${item.name}</h2>
        <p>${item.desc}</p>
        <div class="card-footer">
          <span class="${item.stok > 0 ? 'available' : 'unavailable'}">Stok: ${item.stok}</span>
          <button class="btn-pinjam" ${item.stok === 0 ? "disabled" : ""} data-name="${item.name}">
            Pinjam
          </button>
        </div>
      `;
      cardContainer.appendChild(card);
    });

    document.querySelectorAll(".btn-pinjam").forEach(btn => {
      btn.addEventListener("click", () => {
        const barang = btn.dataset.name;
        window.location.href = `form.html?barang=${encodeURIComponent(barang)}`;
      });
    });
  }
}

searchInput.addEventListener("input", () => renderCards(searchInput.value));
renderCards();
