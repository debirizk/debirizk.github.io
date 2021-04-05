$(document).ready(function(){

    semuaData()
    dataIndonesia()
    dataMalaysia()
    dataSingapura()
    dataThailand()
    dataFilipina()


    function semuaData(){
        $.ajax({
            url : 'https://covid19.mathdro.id/api',
            success : function(data){
                try{
                    var json = data;
                    var positif = data.confirmed;
                    var sembuh = data.recovered;
                    var meninggal = data.deaths;

                    $('#data-positif').html(positif.value);
                    $('#data-sembuh').html(sembuh.value);
                    $('#data-meninggal').html(meninggal.value);
                }
                catch{
                    alert('Error');
                }
            }
        })
    }

    function dataIndonesia(){
        $.ajax({
            url : 'https://covid19.mathdro.id/api/countries/IDN',
            success : function(data){
                try{
                    var json = data;
                    var positif = data.confirmed;
                    var sembuh = data.recovered;
                    var meninggal = data.deaths;

                    $('#data-positif-idn').html(positif.value);
                    $('#data-sembuh-idn').html(sembuh.value);
                    $('#data-meninggal-idn').html(meninggal.value);
                }
                catch{
                    alert('Error');
                }
            }
        })
    }

    function dataMalaysia(){
        $.ajax({
            url : 'https://covid19.mathdro.id/api/countries/MYS',
            success : function(data){
                try{
                    var json = data;
                    var positif = data.confirmed;
                    var sembuh = data.recovered;
                    var meninggal = data.deaths;

                    $('#data-positif-mys').html(positif.value);
                    $('#data-sembuh-mys').html(sembuh.value);
                    $('#data-meninggal-mys').html(meninggal.value);
                }
                catch{
                    alert('Error');
                }
            }
        })
    }

    function dataSingapura(){
        $.ajax({
            url : 'https://covid19.mathdro.id/api/countries/SGP',
            success : function(data){
                try{
                    var json = data;
                    var positif = data.confirmed;
                    var sembuh = data.recovered;
                    var meninggal = data.deaths;

                    $('#data-positif-sgp').html(positif.value);
                    $('#data-sembuh-sgp').html(sembuh.value);
                    $('#data-meninggal-sgp').html(meninggal.value);
                }
                catch{
                    alert('Error');
                }
            }
        })
    }

    function dataThailand(){
        $.ajax({
            url : 'https://covid19.mathdro.id/api/countries/THA',
            success : function(data){
                try{
                    var json = data;
                    var positif = data.confirmed;
                    var sembuh = data.recovered;
                    var meninggal = data.deaths;

                    $('#data-positif-tha').html(positif.value);
                    $('#data-sembuh-tha').html(sembuh.value);
                    $('#data-meninggal-tha').html(meninggal.value);
                }
                catch{
                    alert('Error');
                }
            }
        })
    }

    function dataFilipina(){
        $.ajax({
            url : 'https://covid19.mathdro.id/api/countries/PHL',
            success : function(data){
                try{
                    var json = data;
                    var positif = data.confirmed;
                    var sembuh = data.recovered;
                    var meninggal = data.deaths;

                    $('#data-positif-phl').html(positif.value);
                    $('#data-sembuh-phl').html(sembuh.value);
                    $('#data-meninggal-phl').html(meninggal.value);
                }
                catch{
                    alert('Error');
                }
            }
        })
    }


})