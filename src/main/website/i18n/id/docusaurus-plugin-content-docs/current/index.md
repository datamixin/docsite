---
sidebar_label: 'Tutorial 5 Menit'
sidebar_position: 1
---

# Tutorial 5 Menit

Selamat datang di Tutorial 5 Menit untuk Aplikasi Datamixin!, dalam panduan singkat ini, kami akan memberikan
sebuah ringkasan cepat yang akan membantu anda untuk mulai memahami dasar dari alat sains data tanpa kode. Apakah anda seorang non-programmer atau baru dibidang sains data, tutorial ini akan melewati konsep 
dasar dan fitur-fitur dari Datamixin hanya dalam beberapa menit. Di akhir tutorial, anda akan memiliki
pemahaman yang baik dan dapat memanfaatkan kemampuan dari Datamixin untuk menjalankan berbagai macam pekerjaan 
sains data tanpa butuh pengetahuan programming, hanya dengan mengarahkan, klik, drag dan drop. Mari masuk dan memulainya!

# Menggunakan Wizard Modeler
Didalam tutorial ini, kami akan membawa anda melewati proses prediksi spesies dari bunga Iris menggunakan
Wizard Modeler. Wizard Modeler adalah dialog dengan beberapa halaman yang akan menuntun anda melewati tahapan
pembuatan model machine learning. Setiap tahapannya mewakili langkah yang umum dalam proses prediksi menggunakan machine learning.
1. Buka aplikasi Datamatic dan pilih **Home** di menu sitebar.
1. Di halaman **Home** klik menu **Modeler Wizard** untuk membuka wizard.
![img alt](/img/home-highlight-modeler-wizard.png)

## Langkah 1: Dataset
Halaman pertama dari wizard adalah halaman **Dataset** yang menampilkan tipe sumber data yang dapat digunakan.
1. Pilih tipe sumber dataset **Sample CSV**.
![img alt](/img/modeler-wizard-dataset-init.png)
1. Di **Sample File Dialog** pilih dataset **Iris Flower** dibawah **Tabular Category**, klik OK.
![img alt](/img/sample-file-dialog-iris.png)
1. Lihat contoh dataset dengan memeriksa jumlah rekaman, jumlah kolom dan tipe data untuk setiap kolom.
![img alt](/img/modeler-wizard-dataset-iris.png)
1. Klik **Next** to lanjut ke halaman **Inputs**.

## Langkah 2: Inputs
Dihalaman yang kedua, berjudul **Inputs**, tetapkan kolom **features** dan **target** untuk model machine learning anda.
1. Drag dan Drop kolom yang sesuai dengan dataset yang ada di bagian kanan dari wizard ke kolom variable 
feature dan target dibagian tengah wizard. Untuk dataset Iris ini, anda dapat memilih features seperti sepal
length, sepal width, petal length dan petal width, sementara untuk target kolom **class** yang merupakan spesies dari bunga Iris.
![img alt](/img/modeler-wizard-inputs-filled.png)
1. Klik **Next** untuk lanjut ke halaman selanjutnya.

## Langkah 3: Learning
Halaman ketiga di Wizard Modeler adalah halaman **Learning** dimana anda akan menentukan jenis algorithm 
yang akan digunakan untuk model mechine learning.
1. Klik tombol **Select** dari bagian **Algorithm** untuk memilih algorithma.
1. Dari **Algorithm Selection Dialog** pilih **LogisticRegression**, periksa detailnya dan pilih jika sudah sesuai.
![img alt](/img/algorithm-selection-dialog-select-logistic-regression.png)
1. Perhatikan setting atau parameter untuk proses machine learning.
![img alt](/img/modeler-wizard-learning-filled-logistic-regression.png)
1. Klik **Next** untuk lanjut ke langkah berikutnya.

## Langkah 4: Model
Dihalaman halaman keempat, berjudul **Model**, anda akan membuat model machine learning berdasarkan pilihan algoritma
dan dataset yang telah anda diberikan.
1. Klik tombol **Play** untuk membangun model dan lihat hasilnya.
![img alt](/img/modeler-wizard-model-result.png)
1. Evaluasi kinerja model menggunakan hasil **evaluation metrics**. Analisa accuracy-nya, precision, recall, atau metrics lainnya yang sesuai.
1. Model telah dibangun dan anda siap untuk menjalankan prediksi, lanjut ke langkah berikutnya dengan klik **Next**.

## Langkah 5: Prediksi
Halaman terakhir dari Wizard Modeler, berjudul **Prediction** dimana anda dapat menjalankan prediksi 
menggunakan data baru.
1. Masukkan nilai untuk features terpilih (sepal length, sepal width, petal length, and petal width) dengan nilai baru dari contoh Iris.
1. Klik tombol **Predict** untuk mendapatkan prediksi spesies dari data baru yang anda berikan menggunakan model yang telah dibangun.
![img alt](/img/modeler-wizard-prediction-result.png)
1. Klik **Finish** untuk menyelesaikan proses pembuatan model.

Selaman! Anda telah berhasil menyelesaikan tutorial 5-menit untuk prediksi dataset Iris menggunakan Datamatic Modeler Wizard. Wizard Modeler memberikan sebuah penuntun yang intuitif untuk membuat model machine learning.
Di sheet modeler anda dapat melihat model atau membangun ulang model menggunakan menu **Model...** atau 
**Tryout...** untuk mencoba prediksi.