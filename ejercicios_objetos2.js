const game = (player1, player2) => {
    let player1game = player1.play();
    let player2game = player2.play();
    const rules = {piedra: 'tijera', papel: 'piedra', tijera:'papel'};
    if (player1game === player2game){
        return 'Empate';
    }else if (rules[player1game]===player2game){
        return `${player1.nombre} gana!`       
    }else{
        return `${player2.nombre} gana!`
    }
}

function Player(nombre){
    //declaramos actions como variable para que no se pueda modificar desde fuera
    // y no hacer trampas
    let actions = ['piedra', 'papel', 'tijera']
    this.nombre = nombre
    this.play = function(){
        return actions[Math.floor(Math.random()*actions.length)]

    }
}

let player1 = new Player('jugador 1')
let player2 = new Player('jugador 2')

console.log(game(player1, player2))