const secenekler = ['tas','kagit','makas'];
const beraberekalma = ['Berabere kaldın.'];
const kazanma = ['Kazandın.'];
const kaybetme = ['Kaybettin.',]
function taskagit (){
    let oyuncununsecimi = prompt("Seciminiz yazin.");
    if(!secenekler.includes(oyuncununsecimi)){
        return alert("Seceneklerden birini yazmak zorundasın!");
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
