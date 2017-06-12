import db from '../db';
import { Sequelize } from 'sequelize';
import LocationCoordinate from './locationCoordinate';
import Acceleration from './acceleration';

const Bump = db.define('bump', {
    id: { type: Sequelize.STRING, primaryKey: true }
});

Bump.LocationCoordinate = Bump.belongsTo(LocationCoordinate, { as: 'location' });
Bump.Acceleration = Bump.belongsTo(Acceleration, { as: 'acceleration' });

Bump.serializer = {
    schemes: {
        default: {
            include: ['@all', 'bump', 'location', 'acceleration']
        }
    }
};

export default Bump;
