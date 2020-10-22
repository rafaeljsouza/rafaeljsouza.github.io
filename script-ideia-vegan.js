var cereais = ["arroz", "milho","trigo","centeio", "cevada", "cevadinha", "painço", "aveia","trigo sarraceno", "quinoa", "amaranto" ];
var tuberculos = ["batata", "inhame", "cará", "batata doce", "mandioquinha", "beterraba", "cenoura", "mandioca"];
var leguminosas = ["feijão carioca", "feijão preto", "feijão branco", "feijão fradinho","feijão cavalo",
 "feijão vermelho" ," lentilha tradicional", "lentilha rosa","ervilha", "grão de bico", "soja", "tofu", "tempeh", "edamame", "favas"];
var legumes = [ "abóbora", "abobrinha", "berinjela", "brócolis", "couve-flor", 
"chuchu", "tomate", "pimentão", "ervilha torta", "vagem", "quiabo", "alcachofra", "maxixe"];
var verduras = [ "alface", "agrião", "rúcula", "escarola", "espinafre", "almeirão", "couve manteiga", "repolho", "mostarda", "chicória", "catalônia", "taioba" ];

function escolhe(){
    let cereal = cereais[Math.floor(Math.random()* cereais.length)];
    let tuberculo = tuberculos[Math.floor(Math.random()* tuberculos.length)];
    let leguminosa = leguminosas[Math.floor(Math.random()* leguminosas.length)];
    let legume = legumes[Math.floor(Math.random()* legumes.length)];
    let verdura = verduras[Math.floor(Math.random()* verduras.length)];
    return "A parte dos cereais e tuberculos pode ser: " + cereal + " e " + tuberculo+ ". De leguminosas pode ser: " + leguminosa +
    ". As verduras e legumes podem ser " + verdura +" e " +legume+".";
}