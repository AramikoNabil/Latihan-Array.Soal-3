// ***No.3
// var data santri
var santriPondok = [
  "Wandi",
  "Aldi",
  "cep",
  "Putra",
  "Hafif",
  "Syofyan",
  "Rahmad",
];

// mencari seberapa banyak data nya
var banyakSantri = santriPondok.length;
document.write("<ol>");

// perulangan untuk mencetak data santri dan mengurutkan nya
for (i = 0; i < banyakSantri; i++) {
  document.write("<li>" + santriPondok[i] + "</li>");
}
document.write("</ol>");
