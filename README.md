# libcharts
Biblioteca de funções para elaboração rápida e eficiente de gráficos usando Charts.js.

* **Exemplo**: Gráfico de barras horizontal de colunas empilhadas com uma série
```javascript
draw_chart("Titulo do Grafico", 'bar-horizontal-stacked', 'canvas_id', arrayLabels, [
    {data: arrayDados, label: 'Label', color: arrayColors}
]);
```

* **Exemplo**: Gráfico de barras horizontal de colunas empilhadas com múltiplas séries
```javascript
draw_chart("Titulo do Grafico", 'bar-horizontal-stacked', 'canvas_id', arrayLabels, [
    {data: arrayDados[1], label: 'Label 1', color: ['dark', 'red']},
    {data: arrayDados[2], label: 'Label 2', color: ['dark', 'red']},
    {data: arrayDados[3], label: 'Label 3', color: ['dark', 'red']},
    {data: arrayDados[4], label: 'Label 4', color: ['dark', 'red']}
]);
```

* **Exemplo**: Gráfico de pizza com uma série
```javascript
draw_chart("Titulo do Grafico", 'pie', 'canvas_id', arrayLabels, [
    {data: arrayDados, label: 'Label', color: arrayColors}
]);
```

* **Exemplo**: Gráfico de pizza com múltiplas séries
```javascript
draw_chart("Titulo do Grafico", 'bar-horizontal-stacked', 'canvas_id', arrayLabels, [
    {data: arrayDados[1], label: 'Label 1', color: ['dark', 'red']},
    {data: arrayDados[2], label: 'Label 2', color: ['dark', 'red']},
    {data: arrayDados[3], label: 'Label 3', color: ['dark', 'red']},
    {data: arrayDados[4], label: 'Label 4', color: ['dark', 'red']}
]);
```

* **Exemplo**: Atualizando dados no gráfico em tempo de execução
```javascript
var graf = draw_chart("Titulo do Grafico", 'bar-horizontal-stacked', 'canvas_id', arrayLabels, [
    {data: arrayDados, label: 'Label', color: arrayColors}
]);

graf.data.datasets[0].data = novosDados;
graf.update();
```

