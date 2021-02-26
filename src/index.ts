import { Container, Loader, Renderer } from 'pixi.js';

class Container2 extends Container {
    public render(renderer: Renderer) {
        super.render(renderer);
    }
}

Loader.shared.add('blah', './pathTofile.js');
