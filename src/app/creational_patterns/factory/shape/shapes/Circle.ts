import {IShape} from '../IShape';

/**
 * concrete class
 */
export class Circle implements IShape {
    public draw (): void {
        console.log('Inside Circle::draw() method.');
    }
}
