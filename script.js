<<<<<<< HEAD
function InputData(datautama){
    var A = parseFloat(document.getElementById("firstNum").value)
    var B = parseFloat(document.getElementById("secondNum").value)
    var C = parseFloat(document.getElementById("thirdNum").value)
    var datautama = [A, B, C]
    return datautama;
}

function bubbleSortAsc(data, jumlah){
    for(var i=0; i<jumlah-1; i++){
        for(var j=0; j<jumlah-1; j++){
          //jika data index x+1 lebih kecil dari data index x
          if(data[j+1]<data[j]){
            //tampung data index x ke temp
            var temp=data[j];
            //ubah data index x menjadi data index x+1
            data[j]=data[j+1];
            //ubah data index x+1 menjadi data temp
            data[j+1]=temp;
          }
        }
      }
  }

function ratarata(){
    var data = InputData(data)
    var total = 0;
    for(var i=0; i<data.length; i++){
        total += data[i]
        var hasilRata = total / data.length;
    }

    document.getElementById("rata_rata").innerHTML = hasilRata.toFixed(2);
}

function median(){
    var data = InputData(data)
    var jumlah = data.length
    var hasilmedian
    
    bubbleSortAsc(data, jumlah)

    if(jumlah % 2 == 1){
        hasilmedian = data[Number((jumlah/2)-0.5)];
      } 
    else{
        hasilmedian =(data[jumlah/2]+data[(jumlah+1)/2])/2;
      } 

    document.getElementById("mediann").innerHTML = hasilmedian;
}

function minmax(){
    var data = InputData(data)
    var jumlah = data.length
    var hasilmedian
    
    bubbleSortAsc(data, jumlah)

    document.getElementById("maksimum").innerHTML = data[Number(jumlah-1)];
    document.getElementById("minimum").innerHTML = data[0];
}

function hitung(){
    ratarata() 
    median()
    minmax()
}

function hapus() {
    document.getElementById("firstNum").value = "";
    document.getElementById("secondNum").value = "";
    document.getElementById("thirdNum").value = "";
    location.reload()
=======
function InputData(datautama){
    var A = parseFloat(document.getElementById("firstNum").value)
    var B = parseFloat(document.getElementById("secondNum").value)
    var C = parseFloat(document.getElementById("thirdNum").value)
    var datautama = [A, B, C]
    return datautama;
}

function bubbleSortAsc(data, jumlah){
    for(var i=0; i<jumlah-1; i++){
        for(var j=0; j<jumlah-1; j++){
          //jika data index x+1 lebih kecil dari data index x
          if(data[j+1]<data[j]){
            //tampung data index x ke temp
            var temp=data[j];
            //ubah data index x menjadi data index x+1
            data[j]=data[j+1];
            //ubah data index x+1 menjadi data temp
            data[j+1]=temp;
          }
        }
      }
  }

function ratarata(){
    var data = InputData(data)
    var total = 0;
    for(var i=0; i<data.length; i++){
        total += data[i]
        var hasilRata = total / data.length;
    }

    document.getElementById("rata_rata").innerHTML = hasilRata.toFixed(2);
}

function median(){
    var data = InputData(data)
    var jumlah = data.length
    var hasilmedian
    
    bubbleSortAsc(data, jumlah)

    if(jumlah % 2 == 1){
        hasilmedian = data[Number((jumlah/2)-0.5)];
      } 
    else{
        hasilmedian =(data[jumlah/2]+data[(jumlah+1)/2])/2;
      } 

    document.getElementById("mediann").innerHTML = hasilmedian;
}

function minmax(){
    var data = InputData(data)
    var jumlah = data.length
    var hasilmedian
    
    bubbleSortAsc(data, jumlah)

    document.getElementById("maksimum").innerHTML = data[Number(jumlah-1)];
    document.getElementById("minimum").innerHTML = data[0];
}

function hitung(){
    ratarata() 
    median()
    minmax()
}

function hapus() {
    document.getElementById("firstNum").value = "";
    document.getElementById("secondNum").value = "";
    document.getElementById("thirdNum").value = "";
    location.reload()
>>>>>>> 5e19617e0569553664a9197afb7fa7633210152a
}