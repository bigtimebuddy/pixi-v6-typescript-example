import { Container } from 'pixi.js';

const btn = new Container();
btn.interactive = true;
btn.buttonMode = true;
btn.on('click', ev => console.log('btn.click', {ev}));
