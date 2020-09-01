var calc = 1000*60*60*24; //main code

//start aquarius 30 // الدلو
var startAqu = new Date("2013-01-21");
var endAqu = new Date("2013-02-19");
var aquarius = [];
//end aquarius

//start pisces 29 // الحوت
var startPis = new Date("2020-02-20");
var endPis = new Date("2020-03-20");
var pisces = [];
//end pisces

//start aries 31 // الحمل
var startAri = new Date("2020-03-21");
var endAri = new Date("2020-04-20");
var aries = [];
//end aries

//start taurus 31 // الثور
var startTau = new Date("2020-04-21");
var endTau = new Date("2020-05-21");
var taurus = [];
//end taurus

//start gemini 31 // الجوزاء
var startGem = new Date("2020-05-22");
var endGem = new Date("2020-6-21");
var gemini = [];
//end gemini

//start cancer 31 // السرطان
var startCan = new Date("2020-06-22");
var endCan = new Date("2020-07-22");
var cancer = [];
//end cancer

//start leo 31 // الاسد
var startLeo = new Date("2020-07-23");
var endLeo = new Date("2020-08-22");
var leo = [];
//end leo

//start virgo 31 // العدراء
var startVir = new Date("2020-08-23");
var endVir = new Date("2020-09-22");
var virgo = [];
//end virgo

//start libra 30 // الميزان
var startLib = new Date("2020-09-23");
var endLib = new Date("2020-10-22");
var libra = [];
//end libra

//start scorpio 30 // العقرب
var startSco = new Date("2020-10-23");
var endSco = new Date("2020-11-21");
var scorpio = [];
//end scorpio

//start sagittarius 30 // القوس
var startSag = new Date("2020-11-22");
var endSag = new Date("2020-12-21");
var sagittarius = [];
//end sagittarius

//start capricom 30 // الجدي
var startCap = new Date("2020-12-22");
var endCap = new Date("2020-01-20");
var capricom = [];
//end capricom

//loop 29 days
for(var y = 0; y <= 29; y++){
    //start pisces
    var pisx = startPis.getTime()+calc*y;
    var pisy = new Date(pisx);
    pisces.push((pisy.getMonth()+1)+"-"+pisy.getDate());
    //end     
}
//loop 30 days
for(var i = 0;i <= 30 - 1; i++){
    //start aquarius
    var aqux = startAqu.getTime()+calc*i;
    var aquy = new Date(aqux);
    aquarius.push((aquy.getMonth()+1)+"-"+aquy.getDate());
    //end aquarius
    
    //start libra
    var libx = startLib.getTime()+calc*i;
    var liby = new Date(libx);
    libra.push((liby.getMonth()+1)+"-"+liby.getDate());
     //end libra

    //start scorpio
    var scox = startSco.getTime()+calc*i;
    var scoy = new Date(scox);
    scorpio.push((scoy.getMonth()+1)+"-"+scoy.getDate());
    //end scorpio

    //start sagittarius
    var sagx = startSag.getTime()+calc*i;
    var sagy = new Date(sagx);
    sagittarius.push((sagy.getMonth()+1)+"-"+sagy.getDate());
    //end  sagittarius
    
    //start capricom
    var capx = startCap.getTime()+calc*i;
    var capy = new Date(capx);
    capricom.push((capy.getMonth()+1)+"-"+capy.getDate());
    //end capricom   
}

//loop 31 days
for(var z = 0; z <= 31 - 1; z++){
    //start aries
    var arix = startAri.getTime()+calc*z;
    var ariy = new Date(arix);
    aries.push((ariy.getMonth()+1)+"-"+ariy.getDate());
    //end aries

    //start taurus
    var taux = startTau.getTime()+calc*z;
    var tauy = new Date(taux);
    taurus.push((tauy.getMonth()+1)+"-"+tauy.getDate());
    //end taurus
   
    //start gemini
    var gemx = startGem.getTime()+calc*z;
    var gemy = new Date(gemx);
    gemini.push((gemy.getMonth()+1)+"-"+gemy.getDate());
    //end gemini 

    //start cancer
    var canx = startCan.getTime()+calc*z;
    var cany = new Date(canx);
    cancer.push((cany.getMonth()+1)+"-"+cany.getDate());
    //end cancer

    //start leo
    var leox = startLeo.getTime()+calc*z;
    var leoy = new Date(leox);
    leo.push((leoy.getMonth()+1)+"-"+leoy.getDate());
    //end leo 
    
    //start virgo
    var virx = startVir.getTime()+calc*z;
    var viry = new Date(virx);
    virgo.push((viry.getMonth()+1)+"-"+viry.getDate());
    //end virgo    
}


a7sb.onclick = function() {
    // start main code
    var image = document.getElementById("img");
    var day = window.theDay.value,
    month = window.theMonth.value,
    year = window.theYear.value;
    function h(text) {window.msg.innerHTML = text;}
    function sh(text) {window.sh.innerHTML = text;}
    function p(text) {window.p.innerHTML = text;}
    // end main code

    //second loop
    for(x = 0; x <= 31 - 1; x++){
        /*start searchIn */
        var tau = taurus[x].split("-");
        var ari = aries[x].split("-");
        var gem = gemini[x].split("-");
        var can = cancer[x].split("-");
        var leoo = leo[x].split("-");
        var vir = virgo[x].split("-");
        var cap = capricom[x].split("-");
        var aqu = aquarius[x].split("-");
        var lib = libra[x].split("-");
        var sag = sagittarius[x].split("-");
        var sco = scorpio[x].split("-");
        var pis = pisces[x].split("-");
        /*end searchIn */
        //start air
        if(day == aqu[1] && month == aqu[0]){
            var old = 2020 - year;
            image.src = "aquarius.png";
            image.style.display = "inline";
            sh(old + " Year's old");
            h("برج الدلو");
            p("t this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text ");
            document.getElementById("var1").setAttribute("class" , "air");
            break;
        }
        if(day == lib[1] && month == lib[0]){
            var old = 2020 - year;
            image.src = "libra.png";
            image.style.display = "inline";
            sh(old + " Year's old");
            h("برج الميزان");
            p("t this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text ");
            document.getElementById("var1").setAttribute("class" , "air");
            break;
        }
        if((day == gem[1] || day == 21) && month == gem[0]){
            var old = 2020 - year;
            image.src = "gemini.png";
            image.style.display = "inline";
            sh(old + " Year's old");
            h("برج الجوزاء");
            p("t this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text ");
            document.getElementById("var1").setAttribute("class" , "air");
            break;
        
        }
        
        //end air

        //start water
        if((day == can[1] || day == 22) && month == can[0]){
            var old = 2020 - year;
            image.src = "cancer.png";
            image.style.display = "inline";
            sh(old + " Year's old");
            h("برج السرطان");
            p("t this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text ");
            document.getElementById("var1").setAttribute("class" , "water");
            break;
        }
        if(day == sco[1] && month == sco[0]){
            var old = 2020 - year;
            image.src = "scorpio.png";
            image.style.display = "inline";
            sh(old + " Year's old");
            h("برج العقرب");
            p("t this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text ");
            document.getElementById("var1").setAttribute("class" , "water");
            break;
        }
        if(day == pis[1] && month == pis[0]){
            var old = 2020 - year;
            image.src = "pisec.png";
            image.style.display = "inline";
            sh(old + " Year's old");
            h("برج الحوت");
            p("t this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text ");
            document.getElementById("var1").setAttribute("class" , "water");
            break;
        }
        //end water

        //start fire
        if((day == leoo[1] || day == 22) && month == leoo[0]){
            var old = 2020 - year;
            image.src = "leo.png";
            image.style.display = "inline";
            sh(old + " Year's old");
            h("برج الأسد");
            p("t this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text ");
            document.getElementById("var1").setAttribute("class" , "fire");
            var zero = 0;
            break;
        }
        if((day == ari[1] || day == 20)  && month == ari[0]){
            var old = 2020 - year;
            image.src = "aries.png";
            image.style.display = "inline";
            sh(old + " Year's old");
            h("برج الحمل");
            p("t this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text ");
            document.getElementById("var1").setAttribute("class" , "fire");
            break;
        }
        if(day == sag[1] && month == sag[0]){
            var old = 2020 - year;
            image.src = "sagittarius.png";
            image.style.display = "inline";
            sh(old + " Year's old");
            h("برج القوس");
            p("t this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text ");
            document.getElementById("var1").setAttribute("class" , "fire");
            break;
        }
        //end fire

        //start land
        if(day == cap[1] && month == cap[0]){
            var old = 2020 - year;
            image.src = "capricom.png";
            image.style.display = "inline";
            sh(old + " Year's old");
            h("برج الجدي");
            p("t this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text ");
            document.getElementById("var1").setAttribute("class" , "land");
            break;
        }
        if((day == tau[1] || day == 21) && month == tau[0]){
            var old = 2020 - year;
            image.src = "taurus.png";
            image.style.display = "inline";
            sh(old + " Year's old");
            h("برج الثور");
            p("t this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text ");
            document.getElementById("var1").setAttribute("class" , "land");
            break;
        }
        if((day == vir[1] || day == 22) && month == vir[0]){
            var old = 2020 - year;
            image.src = "virgo.png";
            image.style.display = "inline";
            sh(old + " Year's old");
            h("برج العذراء");
            p("t this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text this is a text ");
            document.getElementById("var1").setAttribute("class" , "land");
            break;
        }
        if(day == "" || month == ""){
            document.getElementById("error").innerHTML = "there is an error";
        }
        //end land
    }
}

