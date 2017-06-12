import db from '../db';
import { Sequelize } from 'sequelize';

let Acceleration = db.define('acceleration', {
    x: { type: Sequelize.DOUBLE, allowNull: false, defaultValue: 0 },
    y: { type: Sequelize.DOUBLE, allowNull: false, defaultValue: 0 },
    z: { type: Sequelize.DOUBLE, allowNull: false, defaultValue: 0 },
    amplitude: { type: Sequelize.DOUBLE, allowNull: false, defaultValue: 0 }
});

export default Acceleration;

