import {IShape} from './IShape';
import {Circle} from './shapes/Circle';
import {Rectangle} from './shapes/Rectangle';
import {Square} from './shapes/Square';
import {Default} from './shapes/Default';

export class ShapeFactory {
    public static getShape (shapeType: string): IShape {
        switch (shapeType.toLowerCase()) {
            case 'circle':
                return new Circle();
            case 'rectangle':
                return new Rectangle();
            case 'square':
                return new Square();
            default:
                return new Default();
        }
    }
}
