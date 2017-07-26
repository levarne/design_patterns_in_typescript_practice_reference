import {IShape} from './shape/IShape';
import {ShapeFactory} from './shape/ShapeFactory';
import {IRunnable} from '../../IRunnable';

class Driver extends IRunnable {
    public run (): void {
        let shape1: IShape = ShapeFactory.getShape('circle');
        let shape2: IShape = ShapeFactory.getShape('Rectangle');
        let shape3: IShape = ShapeFactory.getShape('Square');

        shape1.draw();
        shape2.draw();
        shape3.draw();
    }
}

new Driver().run();