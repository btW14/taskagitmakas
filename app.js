const secenekler = ['tas','kagit','makas'];
const beraberekalma = ['Berabere kaldın.','Nasıl Berabere kaldın ag','Berabere kaldın s2k'];
const kazanma = ['Afferin kazandın','Seni şanslı araba','Helal len kazandın','bisiklet doğru gitti.'];
const kaybetme = ['Kazandın ama başını','Bu da mı gol değil.','Ofsayt','Ağlama hadi oyna','Bu hayatta bi sikimde doğru gitsin.',]
function taskagit (){
    let oyuncununsecimi = prompt("Seciminiz yazin.");
    if(!secenekler.includes(oyuncununsecimi)){
        return alert("Düzgün bir şey yaz s2k");
    }
    let bilgisayarinsecimi = secenekler[Math.floor(Math.random()*secenekler.length)];
    alert(`Oyuncunun Seçimi: ${oyuncununsecimi} Bilgisayarın Seçimi: ${bilgisayarinsecimi}`);
    if(oyuncununsecimi==bilgisayarinsecimi){
        return alert(beraberekalma[Math.floor(Math.random()*beraberekalma.length)]);
    }
    if((oyuncununsecimi == 'tas'&& bilgisayarinsecimi == 'makas' )||
    (oyuncununsecimi == 'makas'&& bilgisayarinsecimi == 'kagit' )||
    (oyuncununsecimi == 'kagit'&& bilgisayarinsecimi == 'tas')){
        return alert(kazanma[Math.floor(Math.random()*kazanma.length)]);
    }else{
        alert(kaybetme[Math.floor(Math.random()*kaybetme.length)]);
    }
}
taskagit()