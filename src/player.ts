export class Player extends Phaser.GameObjects.Container {
    sprite: Phaser.Physics.Arcade.Sprite;
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;

    ACCELERATION_X = 3000
    MAX_VELOCITY_X = 160
    JUMP_VELOCITY_Y = -500

    constructor(scene: Phaser.Scene){
        super(scene);
        this.sprite = scene.physics.add.sprite(100, 450, 'dude');
        // this.sprite.setFrictionX(100000)
        this.sprite.setCollideWorldBounds(true);

        scene.anims.create({
            key: 'left',
            frames: scene.anims.generateFrameNumbers('dude', {start: 0, end: 3}),
            frameRate: 10,
            repeat: -1
        });

        scene.anims.create({
            key: 'turn',
            frames: [{key: 'dude', frame: 4}],
            frameRate: 20
        });

        scene.anims.create({
            key: 'right',
            frames: scene.anims.generateFrameNumbers('dude', {start: 5, end: 8}),
            frameRate: 10,
            repeat: -1
        });

        //  Input Events
        this.cursors = scene.input.keyboard.createCursorKeys();

    }

    public update() {
        this.sprite.setMaxVelocity(this.MAX_VELOCITY_X, 100000)

        if (this.cursors.left.isDown) {
            this.sprite.setAccelerationX(-this.ACCELERATION_X);

            this.sprite.anims.play('left', true);
        } else if (this.cursors.right.isDown) {
            this.sprite.setAccelerationX(this.ACCELERATION_X);

            this.sprite.anims.play('right', true);
        } else {
            // this.sprite.setVelocityX(0);

            this.sprite.anims.play('turn');
        }

        if (this.cursors.up.isDown && this.sprite.body.touching.down) {
            this.sprite.setAccelerationY(0);
            this.sprite.setVelocityY(this.JUMP_VELOCITY_Y);
        }
    }
}