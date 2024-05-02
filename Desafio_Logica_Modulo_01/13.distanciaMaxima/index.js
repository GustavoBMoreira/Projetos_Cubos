function processData(input) {
    const lines = input.trim().split('\n');
    const N = parseInt(lines[0]);
    const funcionarios = [];

    for (let i = 1; i <= N; i++) {
        const [x, y] = lines[i].split(' ').map(Number);
        funcionarios.push([x, y]);
    }

    function calcularDistancia(p1, p2) {
        return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
    }

    let maiorDistancia = 0;

    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            const distancia = calcularDistancia(funcionarios[i], funcionarios[j]);
            if (distancia > maiorDistancia) {
                maiorDistancia = distancia;
            }
        }
    }

    console.log(maiorDistancia.toFixed(6));
}