# libcharts
Biblioteca de funções para elaboração rápida e eficiente de gráficos usando Charts.js.

## Gráficos Disponíveis
* line
* line-stacked
* bar
* bar-stacked
* bar-stackedX
* bar-stackedY
* bar-horizontal
* bar-horizontal-stacked
* pie
* doughnut
* polar

## Função Auxiliar de Criação de Array de Cores RGBA
Função que retorna cor ou array de cores no formato RGBA utilizado no gráfico, com opacidade alterável. (Seleção não randômica).

## Exemplos
* **Gráfico de barras horizontal de colunas empilhadas com uma série**
```javascript
draw_chart("Titulo do Grafico", 'bar-horizontal-stacked', 'canvas_id', arrayLabels, [
    {data: arrayDados, label: 'Label', color: arrayColors}
]);
```

* **Gráfico de barras horizontal de colunas empilhadas com múltiplas séries**
```javascript
draw_chart("Titulo do Grafico", 'bar-horizontal-stacked', 'canvas_id', arrayLabels, [
    {data: arrayDados[1], label: 'Label 1', color: ['dark', 'red']},
    {data: arrayDados[2], label: 'Label 2', color: ['dark', 'red']},
    {data: arrayDados[3], label: 'Label 3', color: ['dark', 'red']},
    {data: arrayDados[4], label: 'Label 4', color: ['dark', 'red']}
]);
```

* **Gráfico de pizza com uma série**
```javascript
draw_chart("Titulo do Grafico", 'pie', 'canvas_id', arrayLabels, [
    {data: arrayDados, label: 'Label', color: arrayColors}
]);
```

* **Gráfico de pizza com múltiplas séries**
```javascript
draw_chart("Titulo do Grafico", 'pie', 'canvas_id', arrayLabels, [
    {data: arrayDados[1], label: 'Label 1', color: ['dark', 'red']},
    {data: arrayDados[2], label: 'Label 2', color: ['dark', 'red']},
    {data: arrayDados[3], label: 'Label 3', color: ['dark', 'red']},
    {data: arrayDados[4], label: 'Label 4', color: ['dark', 'red']}
]);
```

* **Atualizando dados no gráfico em tempo de execução**
```javascript
var graf = draw_chart("Titulo do Grafico", 'doughnut', 'canvas_id', arrayLabels, [
    {data: arrayDados, label: 'Label', color: arrayColors}
]);

graf.data.datasets[0].data = novosDados;
graf.update();
```

