let warna = ["biru", "merah", "kuning", "hijau"]

let dataBukuTambahan = {
    penulis:"johndoe",
    tahunTerbit: 2020
}

let buku = {
    nama: "pemrograman dasar",
    jumlahHalaman: 172,
    warnaSampul: ["hitam"]
}

let combined = [...buku.warnaSampul, ...warna];

console.log(combined)

let newBuku = {...buku, ...dataBukuTambahan}
console.log(newBuku)