(function(){
    var tiles = []; // arrays com um conjunto de tile
    var startScreen = document.querySelector("#startScreen");
        startScreen.addEventListener('click', startGame, false);


    function init(){
        for(var i=1; i<9; i++){ //loop de numero para declarar junto ao id abaixo.
            var tile = document.querySelector("#n"+i); //aqui estou selecionando os quadradospelo id +i onde i foi declarado na linha acima.
            tile.style.background = "url('img/n"+i+".png')"; //aproveitando para chamar a imagem
            tiles.push(tile); //inserindo isso(elemento) no array criado lá no início.
        }
        tiles.push(null); //inserindo um elemento vazio, no array tiles, para poder mexer as peças.
        render();
    };


    //ajusta a exibição do tabuleiro em função do array tiles
    function render(){
        for(var i in tiles){
            var tile = tiles[i]; //criando uma variavel tile (novamente-[leia a seguir]), que receberá o array referenciado pelo indice i.
            // o nome se repete, pq a var criada antes, ela se limitou apenas dentro da função, fora dela, ela não existe. podemos repetir tranquilamente.
            if(tile){
                tile.style.left = (i%3) * 100 + 5 + "px";
                if(i < 3){
                    tile.style.top = "5px"
                }else
                    if(i < 6){
                        tile.style.top = "105px"
                    }else{
                        tile.style.top = "205px"

                }   
            }
        
        }
    };

    function randomSort(oldArray){
        var newArray;
        var cont = 0;
        do{
            newArray = [];
            while(newArray.length < oldArray.length){
                var i = Math.floor(Math.random()*oldArray.length);
                if(newArray.indexOf(oldArray[i])  < 0){
                    newArray.push(oldArray[i]);
                }
            } 
            cont++;
            console.log(cont);
        }   while(!validGame(newArray));
        return newArray;
    };

    function validGame(array){
        var inversions = 0;
        var len = array.length;

        for(var i = 0; i <length -1; i++){
            for(var j = i+1; j < len; j++){
                if(array[i]&& array[j] && array[i].data.value <array[j].data.set.value){
                    inversions++;
                }
            }
        }
        return inversions%2 === 0;
    };

    function startGame(){
        tiles = randomSort(tiles);
        this.style.opacity = "0";
        this.style.zIndex = "-1";
        this.removeEventListener("click",startGame,false);
        render();
    }

    init();

}());












