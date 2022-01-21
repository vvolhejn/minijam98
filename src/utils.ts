
export function zeroAccelerationIfBlocked(body){
    // Zero out the acceleration when body hits sth.
    if (body.blocked.down && body.acceleration.y > 0) {
        body.setAccelerationY(0);
    }
    if (body.blocked.up && body.acceleration.y < 0) {
        body.setAccelerationY(0);
    }
    if (body.blocked.right && body.acceleration.x > 0) {
        body.setAccelerationX(0);
    }
    if (body.blocked.left && body.acceleration.x < 0) {
        body.setAccelerationX(0);
    }
}
