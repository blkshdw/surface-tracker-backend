import { Router } from 'express';
import { Bump, Acceleration, LocationCoordinate } from '../model';
import Serializer from 'sequelize-to-json';

const router = new Router();

router.get('/', async (req, res) => {

    const bumps = await Bump.findAll({
        include: [
            Bump.Acceleration,
            Bump.LocationCoordinate
        ]
    });

    const bumpsJSON = Serializer.serializeMany(bumps, Bump);

    res.send({status: 'ok', response: bumpsJSON});
});

router.get('/:id', async (req, res) => {

    const bump = await Bump.findById(req.params.id, {
        include: [
            Bump.Acceleration,
            Bump.LocationCoordinate
        ]
    });

    if (bump === null) {
        res.send({status: 'error', error: 'entity_not_found'});
        return;
    }

    const bumpJSON = new Serializer(Bump).serialize(bump);

    res.send({status: 'ok', response: bumpJSON});
});

router.post('/', async (req, res) => {
    if (req.body.bumps && req.body.hasOwnProperty('bumps')) {
        for (let bumpJSON of req.body.bumps) {
            console.log(bumpJSON);
            console.log(bumpJSON.acceleration);
            const { id, acceleration, location } = bumpJSON;
            const accelerationFields = {
                x: acceleration.x,
                y: acceleration.y,
                z: acceleration.z,
                amplitude: acceleration.amplitude
            };
            const locationFields = {
                latitude: location.latitude,
                longitude: location.longitude
            };

            const bumpFields = {
                id: id,
                acceleration: accelerationFields,
                location: locationFields
            };

            let oldBump = await Bump.findByPrimary(id);

            if (oldBump != null) {
                await oldBump.update(bumpFields, {
                    include: [Bump.Acceleration, Bump.LocationCoordinate]
                });
            } else {
                await Bump.create(bumpFields, {
                    include: [Bump.Acceleration, Bump.LocationCoordinate]
                });
            }
        }
        res.send({status: 'ok', response: {}});
    } else {
        res.send({status: 'error', response: '\'bumps\' array is missing'})
    }
});

export default router;