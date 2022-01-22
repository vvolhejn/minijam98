export function clampIfBlocked(body, v: Phaser.Math.Vector2) {
    // Zero out the the vector when body hits sth.
    v = v.clone()

    if (body.blocked.down && v.y > 0) {
        v.y = 0;
    }
    if (body.blocked.up && v.y < 0) {
        v.y = 0;
    }
    if (body.blocked.right && v.x > 0) {
        v.x = 0;
    }
    if (body.blocked.left && v.x < 0) {
        v.x = 0;
    }

    return v
}

export function zeroAccelerationIfBlocked(body) {
    // Zero out the acceleration when body hits sth.
    let accel = clampIfBlocked(body, body.acceleration);
    body.setAcceleration(accel.x, accel.y);
}


export function parseProperties(propertiesArray) {
    let ret = {};
    for (let p of propertiesArray) {
        ret[p['name']] = p['value'];
    }
    return ret;
}


export function parseAllProperties(objectsArray) {
    console.log(objectsArray);
    for (let o of objectsArray) {
        o['properties'] = parseProperties(o['properties'])
    }
}