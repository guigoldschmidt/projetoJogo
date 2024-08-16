window.onload = function () {
    let canvas = document.getElementById('meuCanvas');
    let ctx = canvas.getContext('2d');

    let centroX = canvas.width / 4;
    let centroY = canvas.height / 10;

    let paInicio = 20; 
    let paRazao = 15;  

    let pgInicio = 50; 
    let pgRazao = 1.5; 

    // Desenha círculos em progressão aritmética
    for (let i = 0; i < 10; i++) {
        let raio = paInicio + i * paRazao;
        ctx.beginPath();
        ctx.arc(centroX, centroY, raio, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(0, 100, ${200 + 5 * i}, 0.5)`;
        ctx.fill();
    }

    // Desenha retângulos em progressão geométrica
    for (let i = 0; i < 10; i++) {
        let xOffset = pgInicio * Math.pow(pgRazao, i);
        ctx.fillStyle = `rgba(${255 - 25 * i}, 50, 100, 0.5)`;
        ctx.fillRect(centroX - xOffset / 2, centroY - 20, xOffset, 40);
    }

    // Desenha retângulos em progressão geométrica
    for (let i = 0; i < 10; i++) {
        let xOffset = pgInicio * Math.pow(pgRazao, i);
        ctx.fillStyle = `rgba(${255 - 25 * i}, 50, 100, 0.5)`;
        ctx.fillRect(centroX - xOffset / 2, centroY - 20, xOffset, 40);
    }
};
