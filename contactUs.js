document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".needs-validation");
    const alertBox = document.getElementById("successAlert");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("InputEmail1").value.trim();
        const nama = document.getElementById("InputName").value.trim();
        const nomor = document.getElementById("InputNumber").value.trim();
        const pesan = document.getElementById("InputMessage").value.trim();
        const check = document.getElementById("exampleCheck1").checked;

        if (!email || !nama || !nomor || !pesan) {
            alert("Harap isi semua kolom yang wajib diisi.");
            return;
        }

        if (!check) {
            alert("Anda harus menyetujui kebijakan privasi.");
            return;
        }

        // Tampilkan alert sukses
        alertBox.classList.remove("d-none");

        // Reset form
        form.reset();

        // Sembunyikan alert lagi setelah 5 detik
        setTimeout(() => {
            alertBox.classList.add("d-none");
        }, 5000);
    });
});
