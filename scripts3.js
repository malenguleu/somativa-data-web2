document.addEventListener('DOMContentLoaded', function () {
    const dailyProductionData = {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        datasets: [
            {
                label: 'bicicleta',
                data: [6, 4, 7, 5, 18, 20, 22, 19, 23, 25, 28, 30, 29, 31, 35, 36, 38, 40, 42, 41, 43, 45, 47, 49, 48, 50, 52, 54, 55, 57],
                borderColor: 'green',
                borderWidth: 1,
                fill: false
            },
            {
                label: 'skate',
                data: [9, 4, 9, 9, 9, 19, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
                borderColor: 'blue',
                borderWidth: 1,
                fill: false
            }
        ]
    };

    const dailyProductionConfig = {
        type: 'line',
        data: dailyProductionData,
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Dia do Mês'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Produção'
                    }
                }
            }
        }
    };

    var dailyProductionChart = new Chart(
        document.getElementById('dailyProductionChart'),
        dailyProductionConfig
    );

    const efficiencyComparisonData = {
        labels: ['Linha 1', 'Linha 2', 'Linha 3', 'Linha 4', 'Linha 5'],
        datasets: [
            {
                label: 'Eficiência (%)',
                data: [70, 80, 76, 81, 92],
                backgroundColor: 'yellow',
                borderColor: 'blue',
                borderWidth: 1
            }
        ]
    };

    const efficiencyComparisonConfig = {
        type: 'bar',
        data: efficiencyComparisonData,
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Linha de Produção'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Eficiência (%)'
                    }
                }
            }
        }
    };

    var efficiencyComparisonChart = new Chart(
        document.getElementById('efficiencyComparisonChart'),
        efficiencyComparisonConfig
    );

 
    const rawMaterialStockData = [
        { material: 'metal', quantity: 500, required: 600, status: 'Baixo' },
        { material: 'borracha', quantity: 1200, required: 1000, status: 'Suficiente' },
        { material: 'madeira', quantity: 300, required: 400, status: 'Crítico' }
    ];

    const rawMaterialStockTable = document.getElementById('rawMaterialStockTable').getElementsByTagName('tbody')[0];
    rawMaterialStockData.forEach(item => {
        const row = rawMaterialStockTable.insertRow();
        row.insertCell(0).innerText = item.material;
        row.insertCell(1).innerText = item.quantity;
        row.insertCell(2).innerText = item.required;
        row.insertCell(3).innerText = item.status;
    });

    // Dados para a tabela de status de produção atual
    const currentProductionStatusData = [
        { produced: 100, goal: 200, percentage: '85%' },
        { produced: 200, goal: 400, percentage: '88%' },
        { produced: 150, goal: 300, percentage: '100%' }
    ];

    const currentProductionStatusTable = document.getElementById('currentProductionStatusTable').getElementsByTagName('tbody')[0];
    currentProductionStatusData.forEach(item => {
        const row = currentProductionStatusTable.insertRow();
        row.insertCell(0).innerText = item.produced;
        row.insertCell(1).innerText = item.goal;
        row.insertCell(2).innerText = item.percentage;
    });
});