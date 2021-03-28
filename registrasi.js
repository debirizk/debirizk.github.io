<<<<<<< HEAD
var tabel = document.getElementById('tabel'),
            nim = document.getElementById('nim'),
            nama = document.getElementById('nama'),
            prodi = document.getElementById('prodi'),
            btnTambah = document.getElementById('btnTambah'),
            form = document.getElementById('frmUtama'),
            pesan = document.getElementById('pesan'),
            email = document.getElementById('email'),
            db;         
 
        function tampilkanData(e) {
            // Periksa apakah NIM sudah ada btnTambah
            if (tabel.rows.namedItem(nim.value)) {
                pesan.textContent = 'Error: Nim sudah terdaftar!';
                e.preventDefault();
                return;
            }
 
            // Membuat baris baru
            var baris = tabel.insertRow();
            baris.id = nim.value;
            baris.insertCell().appendChild(document.createTextNode(nama.value));
            baris.insertCell().appendChild(document.createTextNode(nim.value));
            baris.insertCell().appendChild(document.createTextNode(prodi.value));
            baris.insertCell().appendChild(document.createTextNode(email.value));
 
            // Membuat tombol hapus untuk setiap baris
            class tombol{
                //membuat constructor
                constructor(btnHapus){
                    this.btnHapus =  document.createElement('input');
                    this.btnHapus.type = 'button';
                    this.btnHapus.value = 'hapus?';
                    this.btnHapus.id = nim.value; 
                    baris.insertCell().appendChild(this.btnHapus);
                }

                //membuat getter
                get Details(){
                    return baris.insertCell().appendChild(this.btnHapus)
                }

                //membuat setter
                set Details(Details){
                    this.btnHapus.value = Details;
                }
            }
            const tombolini = new tombol();
            tombolini.Details = 'Hapus'
            console.log(tombol.Details);

            // Tambah ke database
            tambahKeDatabase({
                nim: nim.value,
                nama: nama.value,
                prodi: prodi.value,
                email: email.value
            });
 
            e.preventDefault();

            document.getElementById("nama").value = "";
            document.getElementById("nim").value = "";
            document.getElementById("prodi").value = "";
            document.getElementById("email").value = "";
        }          
        
        function hapusData(e) {
            if (e.target.type=='button') {                
                tabel.deleteRow(tabel.rows.namedItem(e.target.id).sectionRowIndex);
                hapusDariDatabase(e.target.id);
            }
        }
 
        form.addEventListener('submit', tampilkanData, false);                  
        tabel.addEventListener('click', hapusData, true);      
        
        function kesalahanHandler(e) {
            pesan.innerHTML += 'Kesalahan Database: ' + e.target.errorCode + '<br>';      
        }
         
        function buatDatabase() {
            var request = window.indexedDB.open('latihan', 1);
            request.onerror = kesalahanHandler;
            request.onupgradeneeded = function(e) {             
                var db = e.target.result;
                db.onerror = kesalahanHandler;                          
                var objectstore = db.createObjectStore('mahasiswa', { keyPath: 'nim' });
                pesan.innerHTML += 'Object store mahasiswa berhasil dibuat.<br>';
            }
            request.onsuccess = function(e) {           
                db = e.target.result;
                db.onerror = kesalahanHandler;                          
                pesan.innerHTML += 'Berhasil melakukan koneksi ke database!<br>';    
                bacaDariDatabase();           
            }
        }
         
        buatDatabase();

        function cetakPesanHandler(msg) {
            return function(e) {
                pesan.innerHTML += msg + '<br>';
            }
        }
         
        function buatTransaksi() {
            var transaction = db.transaction(['mahasiswa'], 'readwrite');
            transaction.onerror = kesalahanHandler;
            transaction.oncomplete = cetakPesanHandler('Transaksi baru saja diselesaikan.');                  
            return transaction;
        }
         
        function tambahKeDatabase(mahasiswa) {      
            var objectstore = buatTransaksi().objectStore('mahasiswa');
            var request = objectstore.add(mahasiswa);
            request.onerror = kesalahanHandler;
            request.onsuccess = cetakPesanHandler('Mahasiswa [' + mahasiswa.nim + '] telah ditambahkan ke database lokal.');            
        }

        function bacaDariDatabase() {
            var objectstore = buatTransaksi().objectStore('mahasiswa');
            objectstore.openCursor().onsuccess = function(e) {
                var result = e.target.result;
                if (result) {
                    pesan.innerHTML += 'Membaca mahasiswa [' + result.value.nim + '] dari database.<br>';
                    var baris = tabel.insertRow();                  
                    baris.id = result.value.nim;
                    baris.insertCell().appendChild(document.createTextNode(result.value.nama));
                    baris.insertCell().appendChild(document.createTextNode(result.value.nim));
                    baris.insertCell().appendChild(document.createTextNode(result.value.prodi));
                    baris.insertCell().appendChild(document.createTextNode(result.value.email));
                    var btnHapus = document.createElement('input');
                    btnHapus.type = 'button';
                    btnHapus.value = 'Hapus';
                    btnHapus.id = result.value.nim;         
                    baris.insertCell().appendChild(btnHapus);
                    result.continue();
                }
            }   
        }

        function hapusDariDatabase(nim) {
            var objectstore = buatTransaksi().objectStore('mahasiswa');
            var request = objectstore.delete(nim);
            request.onerror = kesalahanHandler;
            request.onsuccess = cetakPesanHandler('Mahasiswa [' + nim + '] berhasil dihapus dari database lokal.');
        }

=======
var tabel = document.getElementById('tabel'),
            nim = document.getElementById('nim'),
            nama = document.getElementById('nama'),
            prodi = document.getElementById('prodi'),
            btnTambah = document.getElementById('btnTambah'),
            form = document.getElementById('frmUtama'),
            pesan = document.getElementById('pesan'),
            email = document.getElementById('email'),
            db;         
 
        function tampilkanData(e) {
            // Periksa apakah NIM sudah ada btnTambah
            if (tabel.rows.namedItem(nim.value)) {
                pesan.textContent = 'Error: Nim sudah terdaftar!';
                e.preventDefault();
                return;
            }
 
            // Membuat baris baru
            var baris = tabel.insertRow();
            baris.id = nim.value;
            baris.insertCell().appendChild(document.createTextNode(nama.value));
            baris.insertCell().appendChild(document.createTextNode(nim.value));
            baris.insertCell().appendChild(document.createTextNode(prodi.value));
            baris.insertCell().appendChild(document.createTextNode(email.value));
 
            // Membuat tombol hapus untuk setiap baris
            class tombol{
                //membuat constructor
                constructor(btnHapus){
                    this.btnHapus =  document.createElement('input');
                    this.btnHapus.type = 'button';
                    this.btnHapus.value = 'hapus?';
                    this.btnHapus.id = nim.value; 
                    baris.insertCell().appendChild(this.btnHapus);
                }

                //membuat getter
                get Details(){
                    return baris.insertCell().appendChild(this.btnHapus)
                }

                //membuat setter
                set Details(Details){
                    this.btnHapus.value = Details;
                }
            }
            const tombolini = new tombol();
            tombolini.Details = 'Hapus'
            console.log(tombol.Details);

            // Tambah ke database
            tambahKeDatabase({
                nim: nim.value,
                nama: nama.value,
                prodi: prodi.value,
                email: email.value
            });
 
            e.preventDefault();

            document.getElementById("nama").value = "";
            document.getElementById("nim").value = "";
            document.getElementById("prodi").value = "";
            document.getElementById("email").value = "";
        }          
        
        function hapusData(e) {
            if (e.target.type=='button') {                
                tabel.deleteRow(tabel.rows.namedItem(e.target.id).sectionRowIndex);
                hapusDariDatabase(e.target.id);
            }
        }
 
        form.addEventListener('submit', tampilkanData, false);                  
        tabel.addEventListener('click', hapusData, true);      
        
        function kesalahanHandler(e) {
            pesan.innerHTML += 'Kesalahan Database: ' + e.target.errorCode + '<br>';      
        }
         
        function buatDatabase() {
            var request = window.indexedDB.open('latihan', 1);
            request.onerror = kesalahanHandler;
            request.onupgradeneeded = function(e) {             
                var db = e.target.result;
                db.onerror = kesalahanHandler;                          
                var objectstore = db.createObjectStore('mahasiswa', { keyPath: 'nim' });
                pesan.innerHTML += 'Object store mahasiswa berhasil dibuat.<br>';
            }
            request.onsuccess = function(e) {           
                db = e.target.result;
                db.onerror = kesalahanHandler;                          
                pesan.innerHTML += 'Berhasil melakukan koneksi ke database!<br>';    
                bacaDariDatabase();           
            }
        }
         
        buatDatabase();

        function cetakPesanHandler(msg) {
            return function(e) {
                pesan.innerHTML += msg + '<br>';
            }
        }
         
        function buatTransaksi() {
            var transaction = db.transaction(['mahasiswa'], 'readwrite');
            transaction.onerror = kesalahanHandler;
            transaction.oncomplete = cetakPesanHandler('Transaksi baru saja diselesaikan.');                  
            return transaction;
        }
         
        function tambahKeDatabase(mahasiswa) {      
            var objectstore = buatTransaksi().objectStore('mahasiswa');
            var request = objectstore.add(mahasiswa);
            request.onerror = kesalahanHandler;
            request.onsuccess = cetakPesanHandler('Mahasiswa [' + mahasiswa.nim + '] telah ditambahkan ke database lokal.');            
        }

        function bacaDariDatabase() {
            var objectstore = buatTransaksi().objectStore('mahasiswa');
            objectstore.openCursor().onsuccess = function(e) {
                var result = e.target.result;
                if (result) {
                    pesan.innerHTML += 'Membaca mahasiswa [' + result.value.nim + '] dari database.<br>';
                    var baris = tabel.insertRow();                  
                    baris.id = result.value.nim;
                    baris.insertCell().appendChild(document.createTextNode(result.value.nama));
                    baris.insertCell().appendChild(document.createTextNode(result.value.nim));
                    baris.insertCell().appendChild(document.createTextNode(result.value.prodi));
                    baris.insertCell().appendChild(document.createTextNode(result.value.email));
                    var btnHapus = document.createElement('input');
                    btnHapus.type = 'button';
                    btnHapus.value = 'Hapus';
                    btnHapus.id = result.value.nim;         
                    baris.insertCell().appendChild(btnHapus);
                    result.continue();
                }
            }   
        }

        function hapusDariDatabase(nim) {
            var objectstore = buatTransaksi().objectStore('mahasiswa');
            var request = objectstore.delete(nim);
            request.onerror = kesalahanHandler;
            request.onsuccess = cetakPesanHandler('Mahasiswa [' + nim + '] berhasil dihapus dari database lokal.');
        }

>>>>>>> 5e19617e0569553664a9197afb7fa7633210152a
        