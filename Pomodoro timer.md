#Timer Pomodoro

Este é um componente React que implementa o timer Pomodoro.

#Estado

O componente mantém o seguinte estado:

time: o tempo restante em segundos. O valor inicial é 1500 (25 minutos).
isRunning: indica se o timer está em execução. O valor inicial é false.
Efeitos de uso
O componente usa useEffect para controlar o intervalo de tempo e atualizar o estado de time a cada segundo enquanto isRunning for true. Quando isRunning é alterado para false, o intervalo é limpo.

#Funções de manipulação de eventos

O componente possui as seguintes funções de manipulação de eventos:

handleStart: altera o estado isRunning para true, iniciando o timer.
handlePause: altera o estado isRunning para false, pausando o timer.
handleReset: redefine o estado time para 1500 e isRunning para false, reiniciando o timer.

#Renderização

A interface exibe o tempo restante em minutos e segundos, bem como botões para iniciar, pausar e reiniciar o timer.