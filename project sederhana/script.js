function hitungTotal() {

    // Mengambil jumlah dari masing-masing menu
    let nasi = Number(document.getElementById("nasi").value);
    let mie = Number(document.getElementById("mie").value);
    let kebab = Number(document.getElementById("kebab").value);
    let esteh = Number(document.getElementById("esteh").value);
    let air = Number(document.getElementById("air").value);
    let jus = Number(document.getElementById("jus").value);
    let esjeruk = Number(document.getElementById("esjeruk").value);
    let jasuke = Number(document.getElementById("jasuke").value);
    let burger = Number(document.getElementById("burger").value);
    let spagetti = Number(document.getElementById("spagetti").value);


    // Menghitung total harga
    let total = (nasi * 7000) +
                (mie * 12000) +
                (kebab * 5000) +
                (esteh * 5000) +
                (air * 4000) +
                (jus * 5000) +
                (esjeruk * 5000) +
                (jasuke * 5000) +
                (burger * 5000) +
                (spagetti * 5000);


    // Mengambil nama pelanggan
    let nama = document.getElementById("nama").value;


    // Menampilkan hasil
    document.getElementById("hasil").style.display = "block";

    document.getElementById("hasil").innerHTML = `
        <div class="struk">

            <div class="struk-title">
                KASIR KANTIN SEKOLAH
            </div>

            <div class="garis"></div>

            <p>Nama : ${nama}</p>

            <div class="garis"></div>

            ${nasi > 0 ? `<p>Nasi Uduk x${nasi}</p>` : ""}
            ${mie > 0 ? `<p>Mie Ayam x${mie}</p>` : ""}
            ${kebab > 0 ? `<p>Kebab x${kebab}</p>` : ""}
            ${esteh > 0 ? `<p>Es Teh x${esteh}</p>` : ""}
            ${air > 0 ? `<p>Air Mineral x${air}</p>` : ""}
            ${jus > 0 ? `<p>Jus x${jus}</p>` : ""}
            ${esjeruk > 0 ? `<p>Es Jeruk x${esjeruk}</p>` : ""}
            ${jasuke > 0 ? `<p>Jasuke x${jasuke}</p>` : ""}
            ${burger > 0 ? `<p>Burger x${burger}</p>` : ""}
            ${spagetti > 0 ? `<p>Spagetti x${spagetti}</p>` : ""}

            <div class="garis"></div>

            <p class="total">
                Total Pembayaran :
                Rp${total.toLocaleString("id-ID")}
            </p>

            <div class="garis"></div>

            <p class="berhasil">
                TERIMA KASIH
            </p>

        </div>
    `;
}