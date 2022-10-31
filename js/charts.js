

const DATA_COUNT = aniosFondo.length;
const labels = [];



for (let i = 1; i <= DATA_COUNT; ++i) {
    labels.push(i.toString());
}

const data = {
    labels: labels,
    datasets: [
        {
            label: 'fondo acumulado de retiro',
            data: aniosFondo,
            borderColor: 'rgb(255, 99, 132)',
            fill: false,
            cubicInterpolationMode: 'monotone',
            tension: 0.4
        }
    ]
};

let datosDona = [100, 50, 150];

const dataDona = {
    labels: [
        'Gastos',
        'fondo de retiro',
        'ahorro'
    ],
    datasets: [{
        label: 'grafico dos',
        data: datosDona,
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        backgroundColor: 'rgb(255, 255, 255)',
        hoverOffset: 4
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        
        interaction: {
            intersect: false,
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: "Años"
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'AR$'
                },
                suggestedMin: 0,
                suggestedMax: 200
            }
        }
    },
};

const configDona = {
    type: 'doughnut',
    data: dataDona,
};

const curva = new Chart(
    document.getElementById('curva'),
    config
);

const torta = new Chart(
    document.getElementById('torta'),
    configDona
);