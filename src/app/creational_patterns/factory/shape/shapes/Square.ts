import {IShape} from '../IShape';

/**
 * concrete class
 */
export class Square implements IShape {
    public draw (): void {
        console.log('Inside Square::draw() method.');
    }
}
