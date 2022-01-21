export class HudScene extends Phaser.Scene {

    constructor() {
        super({
            key: 'hud',
        })
    }

    public create() {
        let title = this.add.text(100, 100, 'Overly Fragile Relationships', {
            // fill: '#fff',
            fontFamily: 'Roboto',
            fontSize: '30px',
        })
    }

}