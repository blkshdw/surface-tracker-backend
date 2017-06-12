import db from '../db';
import { Sequelize } from 'sequelize';

const LocationCoordinate = db.define('location_coordinate', {
    latitude: { type: Sequelize.DOUBLE, allowNull: false, defaultValue: 0 },
    longitude: { type: Sequelize.DOUBLE, allowNull: false, defaultValue: 0 }
});

export default LocationCoordinate;
