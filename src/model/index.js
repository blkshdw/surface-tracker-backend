export LocationCoordinate from './locationCoordinate';
export Acceleration from './acceleration';
export Bump from './bump';
import db from '../db';

export async function sync() {
    await db.sync({force: true});
}
