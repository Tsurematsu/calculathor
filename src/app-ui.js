// @ts-nocheck
import config from './app/config.js';
const optionGraph = document.querySelector('.option-graph');
const optionTable = document.querySelector('.option-table');
const tabGraph = document.querySelector('.tab-graph');
const tabTable = document.querySelector('.tab-table');

optionGraph.addEventListener('click', () => {
    optionGraph.classList.add('active-option');
    optionTable.classList.remove('active-option');
    tabGraph.classList.add('active-tab');
    tabTable.classList.remove('active-tab');
    config.render = true;
});

optionTable.addEventListener('click', () => {
    optionTable.classList.add('active-option');
    optionGraph.classList.remove('active-option');
    tabGraph.classList.remove('active-tab');
    tabTable.classList.add('active-tab');
    config.render = false;
});