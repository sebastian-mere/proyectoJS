let DATA_COUNT;
let labels = [];
let datosDona = [];

function dataCount() {
    for (let i = 1; i <= DATA_COUNT; ++i) {
        labels.push(i.toString());
    }
}

function rebootLabels() {
    return labels = []
}

function rebootData() {
    return data = {
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
}

function rebootDona() {
    dataDona = {
        labels: [
            'Fondo de Retiro',
            'Sueldo'
        ],
        datasets: [{
            label: 'grafico dos',
            data: datosDona,
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)'
            ],
            backgroundColor: 'rgb(255, 255, 255)',
            hoverOffset: 4
        }]
    };
}



let data = {
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

let dataDona = {
    labels: [
        'Fondo de Retiro',
        'Sueldo'
    ],
    datasets: [{
        label: 'grafico dos',
        data: datosDona,
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)'
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

let curva = new Chart(
    document.getElementById('curva'),
    config
);

const dona = new Chart(
    document.getElementById('dona'),
    configDona
);