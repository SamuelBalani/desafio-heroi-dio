let nome = "Sir Jav"
let xp = null

const classificador = function(xp) {
    if(xp < 1000){
        console.log(`O Herói de nome ${nome} está no nível de Ferro!`)
    }
    if(xp >= 1001 && xp <= 2000){
        console.log(`O Herói de nome ${nome} está no nível de Bronze!`)
    }
    if(xp >= 2001 && xp <= 5000){
        console.log(`O Herói de nome ${nome} está no nível de Prata!`)
    }
    if(xp >= 5001 && xp <= 7000){
        console.log(`O Herói de nome ${nome} está no nível de Ouro!`)
    }
    if(xp >= 7001 && xp <= 8000){
        console.log(`O Herói de nome ${nome} está no nível de Platina!`)
    }
    if(xp >= 8001 && xp <= 9000){
        console.log(`O Herói de nome ${nome} está no nível de Ascendente!`)
    }
    if(xp >= 9001 && xp <= 10000){
        console.log(`O Herói de nome ${nome} está no nível de Imortal!`)
    }
    if(xp >= 10001){
        console.log(`O Herói de nome ${nome} está no nível de Radiante!`)
    }
}

classificador(8000)