import {IShape} from '../IShape';

export class Default implements IShape {
    public draw (): void {
        console.log('Inside Default::draw() method.');

        // throws silent error
        console.log('Unknown type of Shape.');
    }
}
