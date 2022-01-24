/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/box.ts":
/*!********************!*\
  !*** ./src/box.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
var Box = /** @class */ (function (_super) {
    __extends(Box, _super);
    function Box(scene, x, y, width, height, textureKey) {
        var _this = _super.call(this, scene, x, y, textureKey) || this;
        _this.FRICTION_COEF = 0.9;
        _this.scene = scene;
        _this.setOrigin(0, 1);
        _this.setDisplaySize(width, height);
        _this.setDepth(5);
        return _this;
    }
    Box.prototype.update = function (_time, delta) {
        this.setVelocityX(this.body.velocity.x * Math.pow(1 - this.FRICTION_COEF, delta / 1000));
    };
    Box.WATER_STRENGTH_FACTOR = 2;
    Box.BOX_STRENGTH_ON_WATER_FACTOR = 7;
    return Box;
}(Phaser.Physics.Arcade.Sprite));
exports.Box = Box;


/***/ }),

/***/ "./src/door.ts":
/*!*********************!*\
  !*** ./src/door.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Door = void 0;
var Door = /** @class */ (function () {
    function Door(scene, x, y, width, height, color) {
        this.locked = false;
        this.openLeft = true;
        this.openRight = true;
        this.openUp = true;
        this.openDown = true;
        var textureKey;
        if (width == 32 && height == 96) {
            textureKey = 'door13';
        }
        else if (width == 32 && height == 64) {
            textureKey = 'door12';
        }
        else if (width == 64 && height == 32) {
            textureKey = 'trapdoor';
        }
        this.doorSprite = scene.physics.add.staticSprite(x, y, textureKey);
        this.doorSprite.setOrigin(0, 1);
        this.doorSprite.setDisplaySize(width, height);
        this.doorSprite.refreshBody();
        this.setOpenSides(true, true, true, true);
        var colorDict = { 'blue': 0x0492C2, 'red': 0x900b03, 'green': 0x03ac13, 'yellow': 0xfce205 };
        this.color = colorDict[color];
        this.doorSprite.setTint(this.color);
    }
    Door.prototype.addKey = function (scene, x, y) {
        this.keySprite = scene.physics.add.staticSprite(x, y, "key");
        this.keySprite.setOrigin(0, 1);
        this.keySprite.refreshBody();
        this.keySprite.setTint(this.color);
        this.locked = true;
        scene.physics.add.overlap(scene.players, this.keySprite, this.onKeyPickup, null, this);
        this.updateCollisionSettings();
    };
    Door.prototype.onKeyPickup = function (_a, _b) {
        this.setLocked(false);
        this.keySprite.setActive(false);
        this.keySprite.setVisible(false);
        this.keySprite.body.enable = false;
        this.doorSprite.setVisible(false);
    };
    Door.prototype.setOpenSides = function (openLeft, openRight, openUp, openDown) {
        if (openUp === void 0) { openUp = false; }
        if (openDown === void 0) { openDown = false; }
        // Which direction can the player walk from if the door is unlocked?
        this.openLeft = openLeft;
        this.openRight = openRight;
        this.openUp = openUp;
        this.openDown = openDown;
        this.updateCollisionSettings();
    };
    Door.prototype.setLocked = function (locked) {
        this.locked = locked;
        if (this.locked) {
            this.keySprite.setTint(0x00ffff);
        }
        else {
            this.keySprite.clearTint();
        }
        this.updateCollisionSettings();
    };
    Door.prototype.updateCollisionSettings = function () {
        this.doorSprite.body.checkCollision = {
            "left": !(this.openLeft && !this.locked),
            "right": !(this.openRight && !this.locked),
            "up": !(this.openUp && !this.locked),
            "down": !(this.openDown && !this.locked),
            "none": false,
        };
    };
    return Door;
}());
exports.Door = Door;


/***/ }),

/***/ "./src/elVictimo.ts":
/*!**************************!*\
  !*** ./src/elVictimo.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElVictimo = exports.VictimDirection = void 0;
var VictimDirection;
(function (VictimDirection) {
    VictimDirection[VictimDirection["LEFT"] = 0] = "LEFT";
    VictimDirection[VictimDirection["RIGHT"] = 1] = "RIGHT";
})(VictimDirection = exports.VictimDirection || (exports.VictimDirection = {}));
var ElVictimo = /** @class */ (function (_super) {
    __extends(ElVictimo, _super);
    function ElVictimo(scene, x, y, textureKey) {
        var _this = _super.call(this, scene, x, y, textureKey) || this;
        _this.FRICTION_COEF = 0.7;
        _this.THROW_VELOCITY_X = 500;
        _this.THROW_VELOCITY_Y = -300;
        scene.physics.add.existing(_this, false);
        _this.savior = null;
        _this.saved = false;
        _this.setDepth(5);
        _this.setScale(2);
        _this.anims.play('victimsad');
        _this.anims.setProgress(Math.random());
        return _this;
    }
    ElVictimo.prototype.pickedUpBy = function (groundPlayer) {
        this.savior = groundPlayer;
        this.anims.play('victimcarried');
        this.onHitGround(this.scene);
    };
    ElVictimo.prototype.update = function (_time, delta) {
        this.setOrigin(0);
        this.setVelocityX(this.body.velocity.x
            * Math.pow(1 - this.FRICTION_COEF, delta / 1000));
        if (this.savior == null) {
            return;
        }
        // Whenever the savior turns, clip the bounding box to the savior from each side.
        this.y = this.savior.sprite.y - this.savior.sprite.height / 2;
        this.x = this.savior.sprite.x - this.savior.sprite.width / 2;
        // So that the gravity doesn't drag him down.
        this.setVelocity(0, 0);
    };
    ElVictimo.prototype.getThrown = function (direction) {
        this.savior = null;
        switch (direction) {
            case VictimDirection.LEFT:
                this.setVelocity(-this.THROW_VELOCITY_X, this.THROW_VELOCITY_Y);
                this.setAngularVelocity(-100);
                break;
            case VictimDirection.RIGHT:
                this.setVelocity(this.THROW_VELOCITY_X, this.THROW_VELOCITY_Y);
                this.setAngularVelocity(100);
                break;
        }
        this.anims.play('victimsad');
    };
    ElVictimo.prototype.onHitGround = function (scene) {
        this.setAngularVelocity(0);
        if (this.saved) {
            this.setRotation(0);
        }
        else {
            scene.tweens.add({
                targets: this,
                rotation: 0,
                ease: 'Power2',
                duration: 200,
            });
        }
    };
    ElVictimo.prototype.getSaved = function () {
        this.anims.play('victimhappy');
    };
    return ElVictimo;
}(Phaser.Physics.Arcade.Sprite));
exports.ElVictimo = ElVictimo;


/***/ }),

/***/ "./src/fire.ts":
/*!*********************!*\
  !*** ./src/fire.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fire = void 0;
var elVictimo_1 = __webpack_require__(/*! ./elVictimo */ "./src/elVictimo.ts");
var Fire = /** @class */ (function (_super) {
    __extends(Fire, _super);
    function Fire(scene, x, y, textureKey, hp) {
        if (hp === void 0) { hp = 50; }
        var _this = _super.call(this, scene, x, y, textureKey) || this;
        _this.ON_DAMAGE_VELOCITY_X = 300;
        _this.ON_DAMAGE_VELOCITY_Y = 100;
        _this.INVINCIBILITY_TIME_MS = 500;
        _this.FIRE_PLAYER_COLLISION_PENALTY_MS = 2000;
        _this.hp = hp;
        _this.baseHp = hp;
        // this.sprite = scene.physics.add.sprite(x, y, spriteKey);
        _this.fireNum = 1 + Math.floor((Math.random() * 3) % 3);
        if (_this.fireNum == 2)
            _this.y = _this.y - 10;
        if (_this.fireNum == 3)
            _this.y = _this.y + 5;
        _this.anims.play("fire" + _this.fireNum + "anim", true);
        _this.anims.setProgress(Math.random());
        if (Math.random() < 0.5) {
            _this.setFlipX(true);
        }
        _this.setRotation(Phaser.Math.RND.rotation() * 0.05);
        _this.scene = scene;
        _this.baseScale = Phaser.Math.RND.realInRange(0.9, 1.1);
        return _this;
    }
    Fire.prototype.updateScale = function () {
        var scale = 2 * this.baseScale * ((this.hp + this.baseHp) / (2 * this.baseHp));
        this.setScale(scale);
        // TODO: center the scaling on the bottom edge
        // const offset = -(scale - 1) * this.height / 2
        // this.setOffset(0, offset)
        if (this.fireNum == 2)
            this.body.setOffset(10, 25);
        else if (this.fireNum == 3)
            this.body.setOffset(10, 10);
        else
            this.body.setOffset(10, 15);
    };
    Fire.prototype.lowerHp = function () {
        this.hp--;
        if (this.hp <= 0 && this.active) {
            this.scene.tssSounds[Math.floor(Math.random() * this.scene.tssSounds.length)].play();
            this.setActive(false);
            // this.setVisible(false);
            this.body.enable = false;
            this.scene.tweens.add({
                targets: this,
                alpha: 0,
                scale: 0.5,
                duration: 200,
                ease: 'Power2'
                // ease: 'Linear'
            });
        }
        this.updateScale();
    };
    Fire.prototype.resetHp = function () {
        this.hp = this.baseHp;
        this.setActive(true);
        this.setVisible(true);
        this.body.enable = true;
        this.updateScale();
        this.setAlpha(1);
    };
    Fire.prototype.onFireCollision = function (damagedGuy, scene) {
        scene.auSounds[Math.floor(Math.random() * scene.auSounds.length)].play();
        if (damagedGuy.invincible)
            return;
        var damagedSprite;
        if (damagedGuy instanceof elVictimo_1.ElVictimo) {
            damagedSprite = damagedGuy;
        }
        else {
            damagedSprite = damagedGuy.sprite;
            scene.timer.total_ms = Math.max(scene.timer.total_ms - this.FIRE_PLAYER_COLLISION_PENALTY_MS, 0);
        }
        var positionDiff = damagedSprite.getCenter().clone().subtract(this.getCenter());
        damagedSprite.setVelocityX(this.ON_DAMAGE_VELOCITY_X * (positionDiff.x > 0 ? 1 : (-1)));
        damagedSprite.setVelocityY(-this.ON_DAMAGE_VELOCITY_Y);
        damagedSprite.setTint(0xFF0000);
        // this.invincible = true;
        // serol.alpha = 0.5;
        scene.time.addEvent({
            delay: this.INVINCIBILITY_TIME_MS,
            callback: function () {
                damagedSprite.clearTint();
                damagedGuy.invincible = false;
            },
            loop: false
        });
    };
    return Fire;
}(Phaser.Physics.Arcade.Sprite));
exports.Fire = Fire;


/***/ }),

/***/ "./src/groundPlayer.ts":
/*!*****************************!*\
  !*** ./src/groundPlayer.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroundPlayer = void 0;
var elVictimo_1 = __webpack_require__(/*! ./elVictimo */ "./src/elVictimo.ts");
var player_1 = __webpack_require__(/*! ./player */ "./src/player.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var GroundPlayer = /** @class */ (function (_super) {
    __extends(GroundPlayer, _super);
    function GroundPlayer(scene, x, y, spriteKey) {
        var _this = _super.call(this, scene, x, y, spriteKey) || this;
        _this.lastDirection = elVictimo_1.VictimDirection.LEFT; // Just default.
        _this.SAVING_COOLDOWN_MS = 500;
        _this.ACCELERATION_X = 3000;
        _this.JUMP_VELOCITY_Y = -550;
        _this.GRAND_FRICTION_COEF = 0.999;
        _this.sprite.setMaxVelocity(player_1.MAX_VELOCITY_X, 100000);
        scene.anims.create({
            key: 'grandLeft',
            frames: scene.anims.generateFrameNumbers(spriteKey, { start: 0, end: 5 }),
            frameRate: 10,
            repeat: -1
        });
        scene.anims.create({
            key: 'grandTurn',
            frames: [{ key: spriteKey, frame: 6 }],
            frameRate: 20
        });
        scene.anims.create({
            key: 'grandLeftSaving',
            frames: scene.anims.generateFrameNumbers(spriteKey, { start: 7, end: 12 }),
            frameRate: 10,
            repeat: -1
        });
        //  Input Events
        _this.cursors = scene.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            throw: Phaser.Input.Keyboard.KeyCodes.SPACE
        });
        return _this;
    }
    GroundPlayer.prototype.update = function (time, delta) {
        this.sprite.setVelocityX(this.sprite.body.velocity.x
            * Math.pow(1 - this.GRAND_FRICTION_COEF, delta / 1000));
        this.sprite.flipX = false;
        if (this.cursors.left.isDown) {
            this.sprite.setAccelerationX(-this.ACCELERATION_X);
            this.lastDirection = elVictimo_1.VictimDirection.LEFT;
            if (this.saving) {
                this.sprite.anims.play('grandLeftSaving', true);
                this.saving.flipX = false;
            }
            else {
                this.sprite.anims.play('grandLeft', true);
            }
        }
        else if (this.cursors.right.isDown) {
            this.sprite.setAccelerationX(this.ACCELERATION_X);
            this.lastDirection = elVictimo_1.VictimDirection.RIGHT;
            if (this.saving) {
                this.sprite.anims.play('grandLeftSaving', true);
                this.saving.flipX = true;
            }
            else {
                this.sprite.anims.play('grandLeft', true);
            }
            this.sprite.flipX = true;
        }
        else {
            this.sprite.setAccelerationX(0);
            this.sprite.anims.play('grandTurn');
        }
        if (this.cursors.up.isDown && this.sprite.body.blocked.down) {
            this.sprite.setAccelerationY(0);
            this.sprite.setVelocityY(this.JUMP_VELOCITY_Y);
        }
        if (this.cursors.throw.isDown && this.saving != null) {
            this.saving.getThrown(this.lastDirection);
            this.saving = null;
            this.lastSavingTimestamp_MS = time;
        }
        utils_1.zeroAccelerationIfBlocked(this.sprite.body);
    };
    GroundPlayer.prototype.pickUp = function (time_ms, elVictimo) {
        if (this.saving != null || elVictimo.saved || time_ms < this.lastSavingTimestamp_MS + this.SAVING_COOLDOWN_MS) {
            return false;
        }
        this.saving = elVictimo;
        return true;
    };
    return GroundPlayer;
}(player_1.Player));
exports.GroundPlayer = GroundPlayer;


/***/ }),

/***/ "./src/hose.ts":
/*!*********************!*\
  !*** ./src/hose.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hose = void 0;
var Hose = /** @class */ (function (_super) {
    __extends(Hose, _super);
    function Hose(scene, x, y) {
        var _this = _super.call(this, scene, 0, 0) || this;
        _this.parts = new Array();
        _this.DISTANCE_BETWEEN_PARTS = 5; // what *should* the distance be?
        _this.SPRING_COEF = 300; // how strong the force is that is proportional to the distance
        _this.DAMPING_COEF = 200; // how quickly velocity decays to 0
        _this.ATTACHED_PULL_COEF = 0.002; // how strongly the attached object is pulled
        _this.N_PHYSICS_ITERATIONS = 1; // more = less bouncy, but more CPU - 1 should be ok
        _this.N_PARTS = 32; // how many parts of the rope
        _this.MAX_ACCELERATION = 100000;
        // Smooths the force applied to the hose parts over time. In [0, 1].
        // Lower makes the rope more realistic, but tends to wobble
        _this.VELOCITY_SMOOTHING_COEF = 0.5;
        // temporary fix
        _this.HOSE_START_POINT = new Phaser.Math.Vector2(200, 500);
        _this.HOSE_DEBUG_VIEW = false; // Disable the line, switch to particles
        _this.HOSE_COLOR_1 = 0x333333;
        _this.HOSE_COLOR_2 = 0x666666;
        _this.HOSE_THICKNESS = 15;
        _this.PART_SCALE = 2.5; // How big are the balls?
        _this.MAX_DISTANCE = 1000; // Limits the force applied when the balls are further than this (px)
        // horizontal speed is multiplied by (1 - FRICTION_COEF) each second
        // so values between 0 and 1 are reasonable
        // Note: this happens for the parts in the air as well
        _this.FRICTION_COEF = 0.5;
        // how much the hose likes to slide along walls, non-negative
        _this.SLIDING_COEF = 0.7;
        _this.SLIDING_MAX = 50;
        _this.endAttachedTo = null;
        _this.pullPlayer = true;
        _this.initialX = x;
        _this.initialY = y;
        _this.debugText = scene.add.text(700, 100, 'Debug text');
        if (!_this.HOSE_DEBUG_VIEW) {
            _this.debugText.setVisible(false);
        }
        _this.smoothedVelocities = [];
        // for (let i = this.N_PARTS - 1; i >= 0; i--) {
        for (var i = 0; i < _this.N_PARTS; i++) {
            var part = scene.physics.add.sprite(x + i * 1, y - i * 1, "debugball");
            if (!_this.HOSE_DEBUG_VIEW) {
                part.setVisible(false);
            }
            _this.parts.push(part);
            part.setCollideWorldBounds(true);
            part.setScale(_this.PART_SCALE);
            part.body.setCircle(part.width / 2);
            _this.smoothedVelocities.push(new Phaser.Math.Vector2(0, 0));
        }
        // this.startPoint = this.parts[this.parts.length - 1].body.position.clone()
        _this.startPoint = _this.HOSE_START_POINT.clone();
        _this.curve = new Phaser.Curves.Spline(_this.parts.map(function (p) { return p.getCenter(); }));
        _this.graphics = scene.add.graphics();
        return _this;
    }
    Hose.prototype.attachEndTo = function (hosePlayer) {
        this.endAttachedTo = hosePlayer;
    };
    Hose.prototype.setStartTo = function (p) {
        var _this = this;
        this.startPoint = p;
        for (var i = 0; i < this.N_PARTS; i++) {
            this.parts[i].setVelocity(0, 0);
            var coef = i / (this.N_PARTS - 1);
            this.smoothedVelocities[i].scale(0);
            var pos = p.clone().scale(1 - coef).add(this.endAttachedTo.sprite.getCenter().scale(coef));
            this.parts[i].setPosition(pos.x, pos.y);
        }
        this.pullPlayer = false;
        this.scene.time.delayedCall(300, function () { _this.pullPlayer = true; }, [], this);
    };
    Hose.prototype.getSpringForces = function (velocities) {
        var forces = [];
        for (var i = 0; i < this.parts.length - 1; i++) {
            var distance = Phaser.Math.Distance.BetweenPoints(this.parts[i].getCenter(), this.parts[i + 1].getCenter());
            if (distance > this.MAX_DISTANCE) {
                distance = this.MAX_DISTANCE;
            }
            var force = -this.SPRING_COEF * (distance - this.DISTANCE_BETWEEN_PARTS);
            forces.push(this.parts[i].getCenter()
                .clone()
                .subtract(this.parts[i + 1].getCenter())
                .setLength(distance * force));
        }
        return forces;
    };
    Hose.prototype.draw = function () {
        for (var _i = 0, _a = this.parts; _i < _a.length; _i++) {
            var part = _a[_i];
            part.setVisible(this.HOSE_DEBUG_VIEW);
        }
        if (!this.HOSE_DEBUG_VIEW) {
            this.curve = new Phaser.Curves.Spline(this.parts.map(function (p) { return p.getCenter(); }));
            this.graphics.clear();
            this.graphics.lineStyle(this.HOSE_THICKNESS, this.HOSE_COLOR_1, 1);
            this.graphics.setDepth(1);
            this.curve.draw(this.graphics, 64);
            this.graphics.lineStyle(this.HOSE_THICKNESS / 2, this.HOSE_COLOR_2, 1);
            this.curve.draw(this.graphics, 64);
        }
    };
    Hose.prototype.update = function (_, delta) {
        // F = -k(|x|-d)(x/|x|) - bv
        // https://gafferongames.com/post/spring_physics/
        var forces;
        var newVelocities = [];
        for (var i = 0; i < this.parts.length; i++) {
            newVelocities.push(this.parts[i].body.velocity.clone());
            // zeroAccelerationIfBlocked(this.parts[i].body);
        }
        var nIterations = this.N_PHYSICS_ITERATIONS;
        for (var it = 0; it < nIterations; it++) {
            forces = this.getSpringForces(newVelocities);
            for (var i = 0; i < this.parts.length; i++) {
                // this.parts[i].setMaxVelocity(100, 100)
                var accel = new Phaser.Math.Vector2(0, 0);
                if (i > 0) {
                    accel.subtract(forces[i - 1]);
                }
                if (i > 0 && i < this.parts.length - 1) {
                    accel.add(forces[i]);
                }
                // console.log(accelY)
                if (accel.length() > this.MAX_ACCELERATION) {
                    accel.setLength(this.MAX_ACCELERATION);
                }
                accel.subtract(newVelocities[i].clone().scale(this.DAMPING_COEF));
                var curDelta = delta / nIterations;
                var coef = 0.0001 * curDelta;
                var coef2 = 0.0001 * curDelta;
                newVelocities[i].add(accel.scale(coef));
                // TODO: only do this when the rope is on the ground?
                newVelocities[i].x *= Math.pow(this.FRICTION_COEF, (curDelta / 1000));
            }
        }
        var vecToString = function (v) { return "(" + v.x.toFixed(2) + ", " + v.y.toFixed(2) + ")"; };
        for (var i = 1; i < this.parts.length; i++) {
            // Apply temporal smoothing to the velocity
            var curCoef = Math.pow(this.VELOCITY_SMOOTHING_COEF, delta / 16);
            this.smoothedVelocities[i] = (this.smoothedVelocities[i]
                .clone().scale(curCoef)
                .add(newVelocities[i].clone().scale(1 - curCoef)));
            var appliedVelocity = this.redirectIfBlocked(this.parts[i], this.smoothedVelocities[i]);
            this.parts[i].setVelocity(appliedVelocity.x, appliedVelocity.y);
        }
        if (this.HOSE_DEBUG_VIEW) {
            this.parts[3].setTint(0xff0000);
            this.debugText.setText(vecToString(this.smoothedVelocities[3]) + "\n" +
                vecToString(forces[0]) + "\n" +
                vecToString(forces[1]) + "\n");
        }
        if (this.endAttachedTo !== null) {
            // Apply force to the player
            var playerBody = this.endAttachedTo.sprite.body;
            this.parts[0].setPosition(playerBody.position.x + playerBody.width / 2, playerBody.position.y + playerBody.height / 2);
            this.parts[0].setVelocity(0, 0);
            if (!this.endAttachedTo.isAnchored && this.pullPlayer) {
                forces[0].scale(this.ATTACHED_PULL_COEF * delta / 1000);
                playerBody.setVelocity(playerBody.velocity.x + forces[0].x, playerBody.velocity.y + forces[0].y);
            }
        }
        if (this.startPoint !== null) {
            // Fix the starting point - the last part
            this.parts[this.parts.length - 1].setPosition(this.startPoint.x, this.startPoint.y);
            this.parts[this.parts.length - 1].setVelocity(0, 0);
        }
        this.draw();
    };
    Hose.prototype.redirectIfBlocked = function (part, wantedVelocity) {
        var _this = this;
        wantedVelocity = wantedVelocity.clone();
        var compute = function (para, perp) {
            return para + Math.sign(para) * Math.min(Math.abs(perp) * _this.SLIDING_COEF, _this.SLIDING_MAX);
        };
        if (part.body.blocked.left) {
            wantedVelocity.y = compute(wantedVelocity.y, wantedVelocity.x);
        }
        if (part.body.blocked.right) {
            wantedVelocity.y = compute(wantedVelocity.y, wantedVelocity.x);
        }
        // This makes the hose "stick" to the ground
        // if (part.body.blocked.up) {
        //     wantedVelocity.y = compute(wantedVelocity.x, wantedVelocity.y);
        // }
        // if (part.body.blocked.down) {
        //     wantedVelocity.y = compute(wantedVelocity.x, wantedVelocity.y);
        // }
        return wantedVelocity;
    };
    return Hose;
}(Phaser.GameObjects.Container));
exports.Hose = Hose;


/***/ }),

/***/ "./src/hosePlayer.ts":
/*!***************************!*\
  !*** ./src/hosePlayer.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.hideParticle = exports.HosePlayer = void 0;
var player_1 = __webpack_require__(/*! ./player */ "./src/player.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var HosePlayer = /** @class */ (function (_super) {
    __extends(HosePlayer, _super);
    function HosePlayer(scene, x, y, spriteKey) {
        var _this = _super.call(this, scene, x, y, spriteKey) || this;
        _this.NUM_PARTICLES = 400;
        _this.ACCELERATION_X = 500;
        _this.SPRINKLER_ACC = 25;
        _this.JUMP_VELOCITY_Y = -800;
        _this.JOSE_FRICTION_COEF = 0.85;
        _this.WATER_VELOCITY_MIN = 400;
        _this.WATER_VELOCITY_MAX = 500;
        // this.sprite.setFrictionX(100000)
        _this.sprite.refreshBody();
        _this.sprite.setMaxVelocity(player_1.MAX_VELOCITY_X, 100000);
        _this.sprite.setDepth(10); // why is the hose still in front?
        _this.isAnchored = false;
        ['joseUp', 'joseUpRight', 'joseUpAnchored', 'joseUpRightAnchored', 'joseRightAchnored'].forEach(function (str, idx) {
            _this.scene.anims.create({
                key: str,
                frames: [{ key: spriteKey, frame: idx }],
                frameRate: 10,
            });
        });
        //  Input Events
        _this.cursors = scene.input.keyboard.createCursorKeys();
        // Water sprinkler
        _this.particles = scene.physics.add.group({
            bounceX: 0.3,
            bounceY: 0.3,
            collideWorldBounds: true,
        });
        for (var i = 0; i < _this.NUM_PARTICLES; i++) {
            _this.particles.create(0, 0, 'droplet', 0, false, false);
            var particle = _this.particles.getLast();
            var scale = 1 + Math.random();
            particle.setScale(scale);
            if (Math.random() < 0.5) {
                particle.setFlipX(true);
            }
            if (Math.random() < 0.5) {
                particle.setFlipY(true);
            }
            particle.setAlpha(0.3 + Math.random() * 0.7);
            particle.setFrictionX(0.5);
            // Otherwise they appear as invisible objects that players can collide with.
            particle.body.enable = false;
            particle.setDepth(10);
        }
        return _this;
    }
    HosePlayer.prototype.update = function (time, delta) {
        _super.prototype.update.call(this, time, delta);
        this.sprite.setVelocityX(this.sprite.body.velocity.x
            * Math.pow(1 - this.JOSE_FRICTION_COEF, delta / 1000));
        var diff = new Phaser.Math.Vector2(0, 0);
        this.isAnchored = false;
        this.sprite.flipY = false;
        this.sprite.flipX = false;
        // Default.
        this.sprite.anims.play('joseUp');
        this.sprite.angle = 0;
        var angleY = null;
        var angleX = null;
        if (this.cursors.up.isDown) {
            diff.y += -50;
            angleY = 0;
        }
        if (this.cursors.down.isDown) {
            diff.y += 50;
            angleY = 180;
        }
        if (this.cursors.left.isDown) {
            diff.x += -50;
            angleX = 270;
        }
        if (this.cursors.right.isDown) {
            diff.x += 50;
            angleX = 90;
        }
        angleX = (angleX == null) ? angleY : angleX;
        angleY = (angleY == null) ? angleX : angleY;
        if (angleX != null) {
            if (angleX == 270 && angleY == 0) {
                this.sprite.angle = 270 + 45;
            }
            else {
                this.sprite.angle = (angleX + angleY) / 2;
            }
        }
        if (this.cursors.shift.isDown && this.sprite.body.blocked.down) {
            this.sprite.setVelocity(0, 0);
            this.isAnchored = true;
        }
        else {
            this.isAnchored = false;
        }
        if (this.isAnchored) {
            this.sprite.angle = 0;
            this.sprite.flipX = false;
            this.sprite.flipY = false;
            if (this.cursors.up.isDown) {
                if (this.cursors.left.isDown) {
                    this.sprite.anims.play('joseUpRightAnchored');
                    this.sprite.flipX = true;
                }
                else if (this.cursors.right.isDown) {
                    this.sprite.anims.play('joseUpRightAnchored');
                }
                else {
                    this.sprite.anims.play('joseUpAnchored');
                }
            }
            else if (this.cursors.down.isDown) {
                this.sprite.anims.play('joseRightAchnored');
                if (this.cursors.left.isDown) {
                    this.sprite.flipX = true;
                }
            }
            else if (this.cursors.left.isDown) {
                this.sprite.anims.play('joseRightAchnored');
                this.sprite.flipX = true;
            }
            else if (this.cursors.right.isDown) {
                this.sprite.anims.play('joseRightAchnored');
            }
            else {
                this.sprite.anims.play('joseRightAchnored');
            }
        }
        utils_1.zeroAccelerationIfBlocked(this.sprite.body);
        if (diff.length() != 0) {
            var numToFire = 6;
            for (var i = 0; i < numToFire; i++) {
                var speed = Phaser.Math.Between(this.WATER_VELOCITY_MIN, this.WATER_VELOCITY_MAX);
                var angle = diff.angle() + Phaser.Math.FloatBetween(-0.1, 0.1);
                var x = this.sprite.x + Math.cos(angle) * 15;
                var y = this.sprite.y + Math.sin(angle) * 15;
                var p = this.particles.getFirstDead(false, x, y);
                if (p != null) {
                    p.collided = false;
                    p.body.enable = true;
                    p.anims.play("droplet_alive", true);
                    p.setVelocity(speed * Math.cos(angle), speed * Math.sin(angle));
                    p.setVisible(true);
                    p.setActive(true);
                    this.scene.time.delayedCall(300, hideParticle, [p, this.scene], this);
                }
            }
            if (!this.isAnchored) {
                this.sprite.setVelocity(this.sprite.body.velocity.x - Math.cos(diff.angle()) * this.SPRINKLER_ACC, this.sprite.body.velocity.y - Math.sin(diff.angle()) * this.SPRINKLER_ACC);
            }
        }
    };
    return HosePlayer;
}(player_1.Player));
exports.HosePlayer = HosePlayer;
function hideParticle(particle, scene) {
    particle.anims.play("droplet_death", true);
    particle.on('animationcomplete', function () {
        particle.body.setEnable(false);
        scene.hosePlayer.particles.killAndHide(particle);
    }, this);
}
exports.hideParticle = hideParticle;


/***/ }),

/***/ "./src/levelGeneration.ts":
/*!********************************!*\
  !*** ./src/levelGeneration.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelGenerator = void 0;
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var LevelGenerator = /** @class */ (function () {
    function LevelGenerator(scene) {
        this.NUM_ROOMS = 17;
        this.scene = scene;
        for (var i = 0; i <= this.NUM_ROOMS; i++) {
            var key = "room" + i;
            scene.load.tilemapTiledJSON(key, "assets/room" + i + ".json");
        }
        scene.load.tilemapTiledJSON("background1", "assets/background1.json");
    }
    LevelGenerator.prototype.create = function () {
        this.rooms = Array();
        for (var i = 0; i <= this.NUM_ROOMS; i++) {
            var key = "room" + i;
            var map = this.scene.make.tilemap({ key: key });
            map['properties'] = utils_1.parseProperties(map['properties']);
            map.mapKey = key;
            map.properties.height = map.properties.height || 1;
            this.rooms.push(map);
        }
    };
    LevelGenerator.prototype.generateLevel = function (groundFloor) {
        var levelFromUrl = this.levelFromUrl();
        var level;
        if (levelFromUrl != null) {
            level = levelFromUrl;
        }
        else {
            var heightLeft_1 = 2;
            var entryConstraints_1;
            while (heightLeft_1 > 0) {
                if (groundFloor) {
                    level = [this.rooms[1]];
                    entryConstraints_1 = this.rooms[1].properties.exit;
                    heightLeft_1 = 3 - this.rooms[1].properties.height;
                }
                else {
                    level = [];
                    entryConstraints_1 = ['teleport'];
                    heightLeft_1 = 3;
                }
                while (heightLeft_1 > 0) {
                    // console.log(heightLeft);
                    var availableRooms = this.rooms.filter(function (map) {
                        var h = map.properties.height;
                        var ok = h <= heightLeft_1;
                        if (entryConstraints_1.length > 0) {
                            var options = entryConstraints_1.map(function (entryOption) {
                                return map.properties.entry.includes(entryOption);
                            });
                            // console.log(map.mapKey, map);
                            // console.log("enrtryu Constraing", entryConstraints);
                            // console.log(options);
                            ok = ok && options.includes(true);
                        }
                        return ok;
                    });
                    // console.log("Available rooms", availableRooms);
                    if (availableRooms.length == 0)
                        break;
                    var room = this.randomChoice(availableRooms);
                    level.push(room);
                    entryConstraints_1 = room.properties.exit;
                    var h = room.properties.height;
                    heightLeft_1 -= h;
                }
            }
        }
        console.log("Level: ", level.map(function (room) { return room.mapKey; }));
        return level;
    };
    LevelGenerator.prototype.levelFromUrl = function () {
        var _this = this;
        var _a;
        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        if (!urlParams.has('rooms')) {
            return null;
        }
        var wantedRooms = (_a = urlParams.get('rooms')) === null || _a === void 0 ? void 0 : _a.split(',').map(function (x) { return +x; });
        console.log("Wanted rooms: ", wantedRooms);
        wantedRooms = wantedRooms === null || wantedRooms === void 0 ? void 0 : wantedRooms.map(function (x) { return _this.rooms[x]; });
        return wantedRooms;
    };
    LevelGenerator.prototype.randomChoice = function (array) {
        return array[Math.floor(Math.random() * array.length)];
    };
    return LevelGenerator;
}());
exports.LevelGenerator = LevelGenerator;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.game = exports.SCREEN_WIDTH = exports.SCREEN_HEIGHT = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
var levelScene_1 = __webpack_require__(/*! ./scenes/levelScene */ "./src/scenes/levelScene.ts");
var levelScene = new levelScene_1.LevelScene('JoseHose');
var levels = [
    levelScene,
];
exports.SCREEN_HEIGHT = 704;
exports.SCREEN_WIDTH = 1200;
var gameConfig = {
    type: Phaser.AUTO,
    parent: 'content',
    width: exports.SCREEN_WIDTH,
    height: exports.SCREEN_HEIGHT,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 800 },
            debug: false,
            fps: 60,
            timeScale: 1,
        }
    },
    scene: levels,
    seed: ["42"],
    pixelArt: true,
};
exports.game = new Phaser.Game(gameConfig);


/***/ }),

/***/ "./src/player.ts":
/*!***********************!*\
  !*** ./src/player.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = exports.MAX_VELOCITY_X = void 0;
exports.MAX_VELOCITY_X = 250;
var FIRE_PLAYER_COLLISION_PENALTY_MS = 2000;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(scene, x, y, spriteKey) {
        var _this = _super.call(this, scene) || this;
        _this.TELEPORT_COOLDOWN_MS = 3000;
        // CURRENTLY UNUSED!
        _this.invincible = false; // briefly true after damage
        _this.canTeleport = true;
        _this.spriteKey = spriteKey;
        _this.sprite = scene.physics.add.sprite(x, y, spriteKey);
        _this.LEFT_ANIM_KEY = spriteKey + "_left";
        _this.RIGHT_ANIM_KEY = spriteKey + "_right";
        _this.TURN_ANIM_KEY = spriteKey + "_turn";
        return _this;
    }
    Player.prototype.setPhysicsProperties = function () {
        // needs to be called after the sprite is added to the physics group
        this.sprite.setCollideWorldBounds(true);
        this.sprite.setMaxVelocity(exports.MAX_VELOCITY_X, 100000);
    };
    Player.prototype.update = function (_time, _delta) {
    };
    Player.prototype.onTeleport = function () {
        var _this = this;
        this.canTeleport = false;
        this.scene.time.delayedCall(this.TELEPORT_COOLDOWN_MS, function () { _this.canTeleport = true; }, [], this);
    };
    return Player;
}(Phaser.GameObjects.Container));
exports.Player = Player;


/***/ }),

/***/ "./src/scenes/levelScene.ts":
/*!**********************************!*\
  !*** ./src/scenes/levelScene.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelScene = void 0;
var groundPlayer_1 = __webpack_require__(/*! ../groundPlayer */ "./src/groundPlayer.ts");
var hose_1 = __webpack_require__(/*! ../hose */ "./src/hose.ts");
var hosePlayer_1 = __webpack_require__(/*! ../hosePlayer */ "./src/hosePlayer.ts");
var fire_1 = __webpack_require__(/*! ../fire */ "./src/fire.ts");
var elVictimo_1 = __webpack_require__(/*! ../elVictimo */ "./src/elVictimo.ts");
var teleportManager_1 = __webpack_require__(/*! ../teleportManager */ "./src/teleportManager.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var thanksWall_1 = __webpack_require__(/*! ../thanksWall */ "./src/thanksWall.ts");
var levelGeneration_1 = __webpack_require__(/*! ../levelGeneration */ "./src/levelGeneration.ts");
var assert = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
var main_1 = __webpack_require__(/*! ../main */ "./src/main.ts");
var box_1 = __webpack_require__(/*! ../box */ "./src/box.ts");
var timer_1 = __webpack_require__(/*! ../timer */ "./src/timer.ts");
var Vector2 = Phaser.Math.Vector2;
var door_1 = __webpack_require__(/*! ../door */ "./src/door.ts");
var HOSE_PLAYER_SPRITE_KEY = 'hosePlayer';
var GROUND_PLAYER_SPRITE_KEY = 'groundPlayer';
var EL_VICTIMO_SPRITE_KEY = 'elVictimo';
var THANKS_COUNT = 10;
var TSS_COUNT = 5;
var ATTACH_COUNT = 5;
var AU_COUNT = 12;
var TILE_SIZE = 32;
var FLOOR_WIDTH = 32 * TILE_SIZE;
var FLOOR_HEIGHT = 7 * TILE_SIZE;
var LevelScene = /** @class */ (function (_super) {
    __extends(LevelScene, _super);
    function LevelScene(key) {
        var _this = _super.call(this, {
            key: key,
        }) || this;
        _this.cameraOffsetY = 0;
        _this.timeFactor = 1;
        _this.timeFactorDecrease = 0.98;
        _this.timePerVictim = 30 * 1000; // ms
        _this.level = 1;
        _this.isGameOver = false;
        _this.levelEntrance = new Vector2(60, main_1.SCREEN_HEIGHT - 60 - 20);
        _this.keyInManager = key;
        return _this;
    }
    LevelScene.prototype.preload = function () {
        this.levelGenerator = new levelGeneration_1.LevelGenerator(this);
        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('tiles', 'assets/TilesetMap.png');
        this.load.image('debugball', 'assets/debugball.png');
        this.load.image('debugstar', 'assets/debugstar.png');
        this.load.image('hydrant', 'assets/hydrant.png');
        this.load.image('door12', 'assets/door12.png');
        this.load.image('door13', 'assets/door13.png');
        this.load.image('trapdoor', 'assets/trapdoor.png');
        this.load.image('box', 'assets/box.png');
        this.load.image('timeBar', 'assets/timeBar.png');
        this.load.image('key', 'assets/key.png');
        this.load.image('stairsdown', 'assets/stairsdown.png');
        this.load.image('stairsup', 'assets/stairsup.png');
        this.load.spritesheet(HOSE_PLAYER_SPRITE_KEY, 'assets/jose_sprites.png', { frameWidth: 38, frameHeight: 39 });
        this.load.spritesheet(GROUND_PLAYER_SPRITE_KEY, 'assets/grand_sprites.png', {
            frameWidth: 32,
            frameHeight: 60
        });
        this.load.spritesheet(EL_VICTIMO_SPRITE_KEY, 'assets/citizen_sprites.png', { frameWidth: 15, frameHeight: 18 });
        this.load.atlas('flares', 'assets/flares.png', 'assets/flares.json');
        this.load.spritesheet("droplet", 'assets/droplets.png', { frameWidth: 10, frameHeight: 10 });
        for (var i = 1; i <= 3; i++) {
            this.load.spritesheet("fire" + i, "assets/fire" + i + ".png", { frameWidth: 50, frameHeight: 70 });
        }
        for (var i = 0; i < THANKS_COUNT; i++) {
            this.load.audio("thanks" + i, "assets/sounds/thanks" + i + ".mp3");
        }
        for (var i = 0; i < AU_COUNT; i++) {
            this.load.audio("au" + i, "assets/sounds/au" + i + ".mp3");
        }
        for (var i = 0; i < TSS_COUNT; i++) {
            this.load.audio("tss" + i, "assets/sounds/tss" + i + ".mp3");
        }
        for (var i = 0; i < ATTACH_COUNT; i++) {
            this.load.audio("attach" + i, "assets/sounds/attach" + i + ".mp3");
        }
    };
    LevelScene.prototype.create = function () {
        var _this = this;
        this.physics.world.setBoundsCollision(true, true, true, true);
        this.physics.world.setBounds(0, 0, main_1.SCREEN_WIDTH, main_1.SCREEN_HEIGHT);
        this.levelGenerator.create();
        for (var i = 1; i <= 3; i++) {
            this.anims.create({
                key: "fire" + i + "anim",
                frames: this.anims.generateFrameNumbers("fire" + i, { start: 0, end: 60 }),
                frameRate: 60,
                repeat: -1,
            });
        }
        this.anims.create({
            key: "droplet_death",
            frames: this.anims.generateFrameNumbers("droplet", { start: 0, end: 5 }),
            frameRate: 20,
        });
        this.anims.create({
            key: "droplet_alive",
            frames: this.anims.generateFrameNumbers("droplet", { start: 0, end: 1 }),
            frameRate: 10,
            repeat: -1,
        });
        this.anims.create({
            key: "victimsad",
            frames: this.anims.generateFrameNumbers(EL_VICTIMO_SPRITE_KEY, { start: 0, end: 1 }),
            frameRate: 3,
            repeat: -1,
        });
        this.anims.create({
            key: "victimcarried",
            frames: this.anims.generateFrameNumbers(EL_VICTIMO_SPRITE_KEY, { start: 2, end: 2 }),
            frameRate: 3,
            repeat: -1,
        });
        this.anims.create({
            key: "victimhappy",
            frames: this.anims.generateFrameNumbers(EL_VICTIMO_SPRITE_KEY, { start: 3, end: 4 }),
            frameRate: 3,
            repeat: -1,
        });
        //  A simple background for our game
        this.sky = this.add.image(main_1.SCREEN_WIDTH / 2, 0, 'sky').setScale(6).setTint(0xcccccc);
        //  The platforms group contains the ground
        this.platforms = this.physics.add.staticGroup();
        //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
        this.platforms.create(main_1.SCREEN_WIDTH / 2, main_1.SCREEN_HEIGHT + 16, 'ground').setScale(3).refreshBody(); // 3 * 32 / 2 = 48
        // Create hose.
        this.hose = new hose_1.Hose(this, 30, main_1.SCREEN_HEIGHT - 32 - 40);
        // Create players.
        this.hosePlayer = new hosePlayer_1.HosePlayer(this, this.hose.initialX, this.hose.initialY, HOSE_PLAYER_SPRITE_KEY);
        this.hose.attachEndTo(this.hosePlayer);
        this.groundPlayer = new groundPlayer_1.GroundPlayer(this, 60, main_1.SCREEN_HEIGHT - 60 - 20, GROUND_PLAYER_SPRITE_KEY);
        this.players = this.physics.add.group([this.hosePlayer.sprite, this.groundPlayer.sprite]);
        this.hosePlayer.setPhysicsProperties();
        this.groundPlayer.setPhysicsProperties();
        this.hosePlayer.sprite.setDepth(1);
        this.groundPlayer.sprite.setDepth(1);
        // Load rooms.
        this.hydrants = this.physics.add.staticGroup();
        this.thanksWalls = this.physics.add.staticGroup();
        this.doors = this.physics.add.staticGroup();
        this.boxes = this.physics.add.group({ collideWorldBounds: true, runChildUpdate: true });
        this.walls = [];
        this.elVictimos = this.physics.add.group({ collideWorldBounds: true, runChildUpdate: true });
        this.teleportManager = new teleportManager_1.TeleportManager(this);
        this.fires = this.physics.add.staticGroup();
        var rooms = this.levelGenerator.generateLevel(true);
        this.buildingHeight = 0;
        for (var _i = 0, rooms_1 = rooms; _i < rooms_1.length; _i++) {
            var room = rooms_1[_i];
            this.loadRoom(room);
        }
        this.timer = new timer_1.Timer(this, main_1.SCREEN_WIDTH - TILE_SIZE, main_1.SCREEN_HEIGHT - TILE_SIZE, TILE_SIZE / 2, main_1.SCREEN_HEIGHT - 2 * TILE_SIZE, 'timeBar');
        this.timer.start(this.timePerVictim * this.timeFactor * this.elVictimos.getChildren().length);
        // Hydrant in the beginning.
        var hydrant = this.physics.add.staticSprite(0, main_1.SCREEN_HEIGHT - 32, 'hydrant');
        hydrant.setDepth(1);
        hydrant.setOrigin(0, 1);
        hydrant.refreshBody();
        hydrant.setState(0);
        this.hydrants.add(hydrant);
        // Sounds
        var thanksSounds = [];
        for (var i = 0; i < THANKS_COUNT; ++i) {
            thanksSounds.push(this.sound.add("thanks" + i, { loop: false }));
        }
        this.auSounds = [];
        for (var i = 0; i < AU_COUNT; ++i) {
            this.auSounds.push(this.sound.add("au" + i, { loop: false }));
        }
        this.tssSounds = [];
        for (var i = 0; i < TSS_COUNT; ++i) {
            this.tssSounds.push(this.sound.add("tss" + i, { loop: false }));
        }
        this.attachSounds = [];
        for (var i = 0; i < ATTACH_COUNT; ++i) {
            this.attachSounds.push(this.sound.add("attach" + i, { loop: false }));
        }
        // Walls of Thanks.
        [
            [0, -1000 * main_1.SCREEN_HEIGHT, 2 * TILE_SIZE, 1001 * main_1.SCREEN_HEIGHT],
            [0, main_1.SCREEN_HEIGHT - 2 * TILE_SIZE, 3 * TILE_SIZE, 2 * TILE_SIZE],
            [main_1.SCREEN_WIDTH - 2 * TILE_SIZE, -1000 * main_1.SCREEN_HEIGHT, 2 * TILE_SIZE, 1001 * main_1.SCREEN_HEIGHT],
            [main_1.SCREEN_WIDTH - 3 * TILE_SIZE, main_1.SCREEN_HEIGHT - 2 * TILE_SIZE, 3 * TILE_SIZE, 2 * TILE_SIZE] // Right bottom
        ].forEach(function (rect) {
            var wall = new thanksWall_1.ThanksWall(_this, rect[0], rect[1], rect[2], rect[3], 'ground', thanksSounds);
            _this.thanksWalls.add(wall, true);
        });
        //  The score
        this.levelText = this.add.text(16, 26, 'Level: 1', { fontSize: '32px' });
        configureText(this.levelText);
        this.gameOverBackground = this.add.rectangle(600, 250, 800, 200, 0x320032);
        this.gameOverText = this.add.text(300, 200, 'Game over!', { fontSize: '100px', color: '#f00' });
        [this.gameOverBackground, this.gameOverText].forEach(function (obj) {
            obj.setDepth(1000);
            obj.setScrollFactor(0, 0);
        });
        this.gameOverBackground.setVisible(false);
        this.gameOverText.setVisible(false);
        this.setCollisions();
        this.physics.disableUpdate();
    };
    LevelScene.prototype.setCollisions = function () {
        var _this = this;
        // Collisions.
        this.physics.add.collider(this.players, this.platforms, this.onPlayerHitGround, null, this);
        this.physics.add.collider(this.players, this.doors);
        this.physics.add.collider(this.hosePlayer.particles, this.platforms);
        this.physics.add.collider(this.hosePlayer.particles, this.doors);
        this.physics.add.collider(this.elVictimos, this.platforms, this.onVictimHitGround);
        this.physics.add.overlap(this.elVictimos, this.thanksWalls, this.onVictimInThanksWall, null, this);
        this.physics.add.overlap(this.hydrants, this.hosePlayer.sprite, this.onTouchHydrant, null, this);
        // Boxes collisions
        this.physics.add.collider(this.boxes, this.boxes);
        this.physics.add.collider(this.boxes, this.elVictimos);
        this.physics.add.collider(this.boxes, this.platforms);
        this.physics.add.collider(this.boxes, this.hydrants);
        this.physics.add.collider(this.boxes, this.doors);
        this.physics.add.collider(this.boxes, this.walls);
        this.physics.add.collider(this.boxes, this.players);
        this.physics.add.overlap(this.boxes, this.hosePlayer.particles, this.onBoxWaterCollision, null, this);
        // Collide with floor map.
        this.physics.add.collider(this.players, this.walls);
        this.physics.add.collider(this.elVictimos, this.walls, this.onVictimHitGround, null, this);
        this.physics.add.collider(this.hosePlayer.particles, this.walls);
        this.physics.add.overlap(this.groundPlayer.sprite, this.elVictimos, this.pickUpElVictimo, null, this);
        this.physics.add.collider(this.hosePlayer.particles, this.fires, this.extinguishFire, null, this);
        this.physics.add.overlap(this.boxes, this.fires, this.extinguishFireWithBox, null, this);
        this.physics.add.overlap(this.players, this.fires, this.onPlayerFireCollision, null, this);
        this.physics.add.overlap(this.elVictimos, this.fires, this.onVictimFireCollision, null, this);
        // Hose collisions.
        this.hose.parts.forEach(function (part) {
            _this.physics.add.collider(part, _this.platforms);
            _this.physics.add.collider(part, _this.walls);
        });
        // Teleporters
        this.physics.add.overlap(this.players, this.teleportManager.teleports, this.onTouchTeleport, null, this);
    };
    LevelScene.prototype.update = function (time, delta) {
        this.timer.update(time, delta);
        if (this.isGameOver) {
            return;
        }
        this.hosePlayer.update(time, delta);
        this.groundPlayer.update(time, delta);
        // if (Math.random() < 0.01){
        this.hose.update(time, delta);
        // }
        this.elVictimos.preUpdate(time, delta);
        this.physics.world.update(time, delta);
        this.boxes.preUpdate(time, delta);
    };
    LevelScene.prototype.extinguishFire = function (particle, fire) {
        hosePlayer_1.hideParticle(particle, this);
        fire.lowerHp();
    };
    LevelScene.prototype.extinguishFireWithBox = function (_box, fire) {
        fire.lowerHp();
    };
    LevelScene.prototype.pickUpElVictimo = function (_groundPlayer, elVictimo) {
        // Note: The first argument is unused because I couldn't get the GroundPlayer object out of it, just ArcadeSprite. 
        if (this.groundPlayer.pickUp(this.time.now, elVictimo)) {
            elVictimo.pickedUpBy(this.groundPlayer);
        }
    };
    LevelScene.prototype.onPlayerFireCollision = function (playerSprite, fire) {
        var player = (playerSprite === this.hosePlayer.sprite) ? this.hosePlayer : this.groundPlayer;
        fire.onFireCollision(player, this);
    };
    LevelScene.prototype.onVictimFireCollision = function (victim, fire) {
        fire.onFireCollision(victim, this);
    };
    LevelScene.prototype.onVictimInThanksWall = function (victim, thanksWall) {
        thanksWall.handleVictim(victim);
        victim.getSaved();
        this.checkVictory();
    };
    LevelScene.prototype.onVictimHitGround = function (victim, _) {
        victim.onHitGround(this);
    };
    LevelScene.prototype.onPlayerHitGround = function (playerSprite, _) {
        // console.log(playerSprite.x)
        // console.log(this.groundPlayer !== undefined)
        // console.log(playerSprite === this.groundPlayer.sprite)
        // console.log(this.level > 1)
        if (this.groundPlayer !== undefined
            && playerSprite === this.groundPlayer.sprite
            && (playerSprite.x > 500 || this.level > 1)) {
            console.log("yes", this.levelEntrance.x, this.levelEntrance.y);
            this.groundPlayer.sprite.x = this.levelEntrance.x;
            this.groundPlayer.sprite.y = this.levelEntrance.y;
        }
    };
    LevelScene.prototype.onTouchHydrant = function (_player, hydrant) {
        if (hydrant.state === 1)
            return; // Already attached
        this.hydrants.children.iterate(function (otherHydrant) {
            otherHydrant.setState(0);
            otherHydrant.clearTint();
        });
        hydrant.setState(1);
        this.hose.setStartTo(hydrant.getCenter());
        hydrant.setTint(0xff0000);
        this.attachSounds[Math.floor(Math.random() * this.attachSounds.length)].play();
    };
    LevelScene.prototype.onBoxWaterCollision = function (box, water) {
        // water.collided is a semihack
        if (water.collided)
            return;
        box.body.setVelocity(water.body.velocity.x / box_1.Box.WATER_STRENGTH_FACTOR, water.body.velocity.y / box_1.Box.WATER_STRENGTH_FACTOR);
        var f = box_1.Box.BOX_STRENGTH_ON_WATER_FACTOR;
        water.body.setVelocity(-water.body.velocity.x / Phaser.Math.Between(f - 2, f + 2), -water.body.velocity.y / Phaser.Math.Between(f - 2, f + 2));
        water.collided = true;
    };
    LevelScene.prototype.onTouchTeleport = function (playerSprite, tp) {
        var otherTp = this.teleportManager.getCorrespondingTeleport(tp);
        if (otherTp === null)
            return;
        var player = (playerSprite === this.hosePlayer.sprite) ? this.hosePlayer : this.groundPlayer;
        if (player.canTeleport) {
            playerSprite.x = otherTp.x;
            playerSprite.y = otherTp.y - 32;
            player.onTeleport();
            if (player === this.hosePlayer) {
                this.hose.setStartTo(new Vector2(otherTp.x, otherTp.y - 32));
            }
        }
    };
    LevelScene.prototype.loadRoom = function (room) {
        var _this = this;
        var _a, _b, _c, _d, _e, _f;
        var map = this.make.tilemap({ key: room.mapKey });
        var tileset = map.addTilesetImage('TilesetMap', 'tiles');
        var offsetX = (main_1.SCREEN_WIDTH - FLOOR_WIDTH) / 2;
        var offsetY = main_1.SCREEN_HEIGHT - 32 - (TILE_SIZE * (this.buildingHeight + 7 * room.properties.height));
        for (var i = 0; i < room.properties.height; i++) {
            var bgMap = this.make.tilemap({ key: "background1" });
            bgMap.createLayer('background', tileset, offsetX, offsetY + FLOOR_HEIGHT * i).setDepth(0);
        }
        var layer = map.createLayer('walls', tileset, offsetX, offsetY);
        map.createLayer('windows', tileset, offsetX, offsetY);
        layer.setCollisionByExclusion([-1], true);
        this.walls.push(layer);
        this.buildingHeight += 7 * room.properties.height;
        // Victims.
        (_a = map.getObjectLayer('victims')) === null || _a === void 0 ? void 0 : _a.objects.forEach(function (victimTile) {
            var victim = new elVictimo_1.ElVictimo(_this, offsetX + victimTile.x - 8, offsetY + victimTile.y - 48, EL_VICTIMO_SPRITE_KEY);
            _this.elVictimos.add(victim, true);
        }, this);
        // Doors.
        var keys = (_b = map.getObjectLayer('keys')) === null || _b === void 0 ? void 0 : _b.objects;
        if (keys) {
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var k = keys_1[_i];
                assert(k.hasOwnProperty('properties'), room.mapKey + " Keys don't have colors specified!");
            }
            utils_1.parseAllProperties(keys);
        }
        var doors = (_c = map.getObjectLayer('doors')) === null || _c === void 0 ? void 0 : _c.objects;
        if (doors) {
            for (var _g = 0, doors_1 = doors; _g < doors_1.length; _g++) {
                var d = doors_1[_g];
                assert(d.hasOwnProperty('properties'), room.mapKey + " Doors don't have colors specified!");
            }
            utils_1.parseAllProperties(doors);
        }
        doors === null || doors === void 0 ? void 0 : doors.forEach(function (doorTile) {
            var door = new door_1.Door(_this, offsetX + doorTile.x, offsetY + doorTile.y, doorTile.width, doorTile.height, doorTile.properties.color);
            _this.doors.add(door.doorSprite, true);
            var fittingKeys = keys.filter(function (key) {
                return key.properties.color == doorTile.properties.color;
            });
            for (var _i = 0, fittingKeys_1 = fittingKeys; _i < fittingKeys_1.length; _i++) {
                var key = fittingKeys_1[_i];
                door.addKey(_this, offsetX + key.x, offsetY + key.y);
            }
        });
        // Boxes
        (_d = map.getObjectLayer('boxes')) === null || _d === void 0 ? void 0 : _d.objects.forEach(function (boxTile) {
            if (boxTile.polygon) {
                console.log("Polygon boxes are not supported..");
                return;
            }
            var box = new box_1.Box(_this, boxTile.x + offsetX, boxTile.y + offsetY, boxTile.width, boxTile.height, 'box');
            _this.boxes.add(box, true);
            box.setMass(1.5);
        }, this);
        // Hydrants
        (_e = map.getObjectLayer('hydrants')) === null || _e === void 0 ? void 0 : _e.objects.forEach(function (hydrantTile) {
            var hydrant = _this.physics.add.staticSprite(offsetX + hydrantTile.x, offsetY + hydrantTile.y, 'hydrant');
            hydrant.setOrigin(0, 1);
            hydrant.setDepth(1);
            hydrant.refreshBody();
            hydrant.setState(0);
            _this.hydrants.add(hydrant);
        });
        this.teleportManager.addRoom(map, offsetX, offsetY);
        // Fires.
        (_f = map.getObjectLayer('fires')) === null || _f === void 0 ? void 0 : _f.objects.sort(function (a, b) { return a.y - b.y; }).forEach(function (fireTile) {
            var fire = new fire_1.Fire(_this, offsetX + fireTile.x + 15, offsetY + fireTile.y - 38, 'fire');
            _this.fires.add(fire, true);
            fire.body.setSize(30, 60, true);
            fire.updateScale();
        });
    };
    LevelScene.prototype.checkVictory = function () {
        var allSaved = this.elVictimos.getChildren().every(function (victim) {
            return victim.saved;
        });
        if (!allSaved) {
            // console.log("not everyone is saved)");
            // console.log(this.elVictimos);
            return;
        }
        console.log("VICTORY");
        this.hydrants = this.physics.add.staticGroup();
        this.doors = this.physics.add.staticGroup();
        this.boxes = this.physics.add.group({ collideWorldBounds: true, runChildUpdate: true });
        this.walls = [];
        this.elVictimos = this.physics.add.group({ collideWorldBounds: true, runChildUpdate: true });
        this.fires = this.physics.add.staticGroup();
        this.teleportManager.clearOld();
        var rooms = this.levelGenerator.generateLevel(false);
        for (var _i = 0, rooms_2 = rooms; _i < rooms_2.length; _i++) {
            var room = rooms_2[_i];
            this.loadRoom(room);
        }
        this.setCollisions();
        this.sky.y = this.sky.y - main_1.SCREEN_HEIGHT;
        var x = this.cameras.main.centerX;
        var y = this.cameras.main.scrollY + this.cameras.main.centerY;
        this.cameraOffsetY -= 21 * TILE_SIZE;
        this.physics.world.setBounds(0, this.cameraOffsetY, main_1.SCREEN_WIDTH, main_1.SCREEN_HEIGHT - this.cameraOffsetY);
        this.cameras.main.pan(x, y - 21 * TILE_SIZE, 2000, "Quad.easeInOut");
        this.levelEntrance = rooms[0].getObjectLayer('entryteleport').objects[0];
        var offsetX = (main_1.SCREEN_WIDTH - FLOOR_WIDTH) / 2;
        // console.log()
        console.log(this.levelEntrance.x, this.levelEntrance.y, this.cameraOffsetY);
        var heightOfRoomsAbove = rooms.map(function (room) { return +room.properties.height; }).reduce(function (a, b) { return a + b; }) - rooms[0].properties.height;
        console.log("Height Above", heightOfRoomsAbove);
        var dy = this.levelEntrance.y + (this.cameraOffsetY - 48) + 32 * 7 * heightOfRoomsAbove;
        var dx = this.levelEntrance.x + offsetX;
        this.levelEntrance = new Vector2(dx, dy);
        console.log(dx, dy, "offsetX", offsetX, this.cameraOffsetY);
        this.hosePlayer.sprite.x = dx - 10;
        this.hosePlayer.sprite.y = dy;
        this.groundPlayer.sprite.x = dx + 10;
        this.groundPlayer.sprite.y = dy;
        this.hosePlayer.sprite.body.setVelocity(0, 0);
        this.groundPlayer.sprite.body.setVelocity(0, 0);
        this.hose.setStartTo(new Vector2(dx - 10, dy - 32));
        this.level++;
        this.levelText.setText('Level: ' + this.level);
        this.timeFactor = this.timeFactorDecrease * this.timeFactor;
        this.timer.start(this.timePerVictim * this.timeFactor * this.elVictimos.getChildren().length);
    };
    LevelScene.prototype.setGameOver = function (enable) {
        var _this = this;
        this.isGameOver = enable;
        this.gameOverText.setVisible(enable);
        this.gameOverBackground.setVisible(enable);
        if (enable) {
            setTimeout(function () {
                var key = "JoseHose" + _this.time.now;
                var manager = _this.scene.manager;
                manager.remove(_this.keyInManager);
                manager.add(key, new LevelScene(key));
                manager.run(key);
                manager.bringToTop(key);
            }, 4000); // debug stuff
        }
    };
    return LevelScene;
}(Phaser.Scene));
exports.LevelScene = LevelScene;
function configureText(text) {
    text.setDepth(100)
        .setShadowOffset(2, 2)
        .setShadowColor("black")
        .setShadowStroke(true)
        .setShadowFill(true)
        .setBackgroundColor("#dd0000")
        .setPadding(3)
        .setAlpha(0.8)
        .setScrollFactor(0);
}


/***/ }),

/***/ "./src/teleportManager.ts":
/*!********************************!*\
  !*** ./src/teleportManager.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TeleportManager = void 0;
var TeleportManager = /** @class */ (function () {
    function TeleportManager(scene) {
        this.entryTeleports = [];
        this.exitTeleports = [];
        this.scene = scene;
        this.teleports = scene.physics.add.staticGroup();
    }
    TeleportManager.prototype.addRoom = function (map, offsetX, offsetY) {
        var _this = this;
        var entries = map.getObjectLayer('entryteleport');
        var exits = map.getObjectLayer('exitteleport');
        var putSprite = function (pos, key) {
            var sprite = _this.scene.physics.add.staticSprite(pos.x + offsetX, pos.y + offsetY, key);
            sprite.setOrigin(0, 1);
            sprite.setDepth(1);
            sprite.refreshBody();
            return sprite;
        };
        if (entries !== null && entries.objects.length > 0) {
            var sprite = putSprite(entries.objects[0], "stairsdown");
            this.entryTeleports.push(sprite);
            this.teleports.add(sprite);
        }
        else {
            this.entryTeleports.push(null);
        }
        if (exits !== null && exits.objects.length > 0) {
            var sprite = putSprite(exits.objects[0], "stairsup");
            this.exitTeleports.push(sprite);
            this.teleports.add(sprite);
        }
        else {
            this.exitTeleports.push(null);
        }
        // console.log(entries, exits)
        // .objects.forEach((tile) => {
        //     console.log(tile)
        // });
    };
    TeleportManager.prototype.getCorrespondingTeleport = function (sprite) {
        var n = this.entryTeleports.length;
        for (var i = 0; i < n; i++) {
            if (i < n - 1 && this.exitTeleports[i] === sprite) {
                // possibly null
                return this.entryTeleports[i + 1];
            }
            if (i > 0 && this.entryTeleports[i] === sprite) {
                return this.exitTeleports[i - 1];
            }
        }
        return null;
    };
    TeleportManager.prototype.clearOld = function () {
        var n = this.entryTeleports.length;
        for (var i = 0; i < n; i++) {
            this.entryTeleports[i] = null;
            this.exitTeleports[i] = null;
        }
    };
    return TeleportManager;
}());
exports.TeleportManager = TeleportManager;


/***/ }),

/***/ "./src/thanksWall.ts":
/*!***************************!*\
  !*** ./src/thanksWall.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThanksWall = void 0;
var ThanksWall = /** @class */ (function (_super) {
    __extends(ThanksWall, _super);
    function ThanksWall(scene, x, y, width, height, textureKey, thanksSounds) {
        var _this = _super.call(this, scene, x, y, textureKey) || this;
        _this.scene = scene;
        _this.setOrigin(0, 0);
        _this.setDisplaySize(width, height);
        _this.setVisible(false);
        _this.thanksSounds = thanksSounds;
        return _this;
    }
    ThanksWall.prototype.handleVictim = function (victim) {
        if (victim.saved || victim.savior != null) {
            return;
        }
        this.thanksSounds[Math.floor(Math.random() * this.thanksSounds.length)].play();
        victim.saved = true;
    };
    return ThanksWall;
}(Phaser.Physics.Arcade.Sprite));
exports.ThanksWall = ThanksWall;


/***/ }),

/***/ "./src/timer.ts":
/*!**********************!*\
  !*** ./src/timer.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
var Timer = /** @class */ (function () {
    function Timer(scene, x, y, width, height, textureKey) {
        this.scene = scene;
        this.sprite = this.scene.add.sprite(x, y, textureKey);
        this.sprite.setScrollFactor(0, 0);
        this.sprite.setOrigin(0, 1);
        this.sprite.setDisplaySize(width, height);
        this.width = width;
        this.height = height;
        this.sprite.visible = false;
    }
    Timer.prototype.start = function (total_ms) {
        this.sprite.setDisplaySize(this.width, this.height);
        this.sprite.visible = true;
        this.total_ms = total_ms;
        this.startTime_ms = this.scene.time.now;
        this.isRunning = true;
    };
    Timer.prototype.update = function (time, _delta) {
        if (!this.isRunning)
            return;
        var elapsedFraction = Math.min(1, (time - this.startTime_ms) / this.total_ms);
        this.sprite.setDisplaySize(this.width, this.height - this.height * elapsedFraction);
        if (elapsedFraction == 1) {
            this.isRunning = false;
            this.scene.setGameOver(true);
        }
    };
    return Timer;
}());
exports.Timer = Timer;


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAllProperties = exports.parseProperties = exports.zeroAccelerationIfBlocked = exports.clampIfBlocked = void 0;
function clampIfBlocked(body, v) {
    // Zero out the the vector when body hits sth.
    v = v.clone();
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
    return v;
}
exports.clampIfBlocked = clampIfBlocked;
function zeroAccelerationIfBlocked(body) {
    // Zero out the acceleration when body hits sth.
    var accel = clampIfBlocked(body, body.acceleration);
    body.setAcceleration(accel.x, accel.y);
}
exports.zeroAccelerationIfBlocked = zeroAccelerationIfBlocked;
function parseProperties(propertiesArray) {
    var ret = {};
    for (var _i = 0, propertiesArray_1 = propertiesArray; _i < propertiesArray_1.length; _i++) {
        var p = propertiesArray_1[_i];
        var val = p['value'];
        if (p['name'] == 'entry' || p['name'] == 'exit') {
            val = val.split(',');
            val = val.map(function (s) {
                return s.trim();
            });
        }
        ret[p['name']] = val;
    }
    return ret;
}
exports.parseProperties = parseProperties;
function parseAllProperties(objectsArray) {
    // console.log(objectsArray);
    for (var _i = 0, objectsArray_1 = objectsArray; _i < objectsArray_1.length; _i++) {
        var o = objectsArray_1[_i];
        o['properties'] = parseProperties(o['properties']);
    }
}
exports.parseAllProperties = parseAllProperties;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JveC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9vci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxWaWN0aW1vLnRzIiwid2VicGFjazovLy8uL3NyYy9maXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9ncm91bmRQbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvc2VQbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xldmVsR2VuZXJhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbGV2ZWxTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVsZXBvcnRNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy90aGFua3NXYWxsLnRzIiwid2VicGFjazovLy8uL3NyYy90aW1lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLHVCQUF1QjtRQUN2Qzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckpBO0lBQXlCLHVCQUE0QjtJQU1qRCxhQUFZLEtBQWlCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVU7UUFBOUQsWUFDSSxrQkFBTSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsU0FLakM7UUFWRCxtQkFBYSxHQUFHLEdBQUcsQ0FBQztRQU1oQixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyQixLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNuQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDOztJQUNyQixDQUFDO0lBRU0sb0JBQU0sR0FBYixVQUFjLEtBQUssRUFBRSxLQUFLO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUN4RSxDQUFDO0lBQ04sQ0FBQztJQWZNLHlCQUFxQixHQUFHLENBQUMsQ0FBQztJQUMxQixnQ0FBNEIsR0FBRyxDQUFDLENBQUM7SUFlNUMsVUFBQztDQUFBLENBbkJ3QixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBbUJwRDtBQW5CWSxrQkFBRzs7Ozs7Ozs7Ozs7Ozs7OztBQ0NoQjtJQWFJLGNBQVksS0FBbUIsRUFBRSxDQUFVLEVBQUUsQ0FBVSxFQUFFLEtBQWMsRUFBRSxNQUFlLEVBQUUsS0FBYTtRQVR2RyxXQUFNLEdBQVksS0FBSyxDQUFDO1FBRXhCLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsY0FBUyxHQUFZLElBQUksQ0FBQztRQUMxQixXQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFLckIsSUFBSSxVQUFVLENBQUM7UUFDZixJQUFJLEtBQUssSUFBSSxFQUFFLElBQUksTUFBTSxJQUFJLEVBQUUsRUFBRTtZQUM3QixVQUFVLEdBQUcsUUFBUSxDQUFDO1NBQ3pCO2FBQU0sSUFBSSxLQUFLLElBQUksRUFBRSxJQUFJLE1BQU0sSUFBSSxFQUFFLEVBQUU7WUFDcEMsVUFBVSxHQUFHLFFBQVEsQ0FBQztTQUN6QjthQUFNLElBQUksS0FBSyxJQUFJLEVBQUUsSUFBSSxNQUFNLElBQUksRUFBRSxFQUFFO1lBQ3BDLFVBQVUsR0FBRyxVQUFVLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTFDLElBQU0sU0FBUyxHQUFHLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0scUJBQU0sR0FBYixVQUFjLEtBQWlCLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFbkIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RixJQUFJLENBQUMsdUJBQXVCLEVBQUU7SUFDbEMsQ0FBQztJQUVNLDBCQUFXLEdBQWxCLFVBQW1CLEVBQUUsRUFBRSxFQUFFO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sMkJBQVksR0FBbkIsVUFBb0IsUUFBaUIsRUFBRSxTQUFrQixFQUFFLE1BQWMsRUFBRSxRQUFnQjtRQUFoQyx1Q0FBYztRQUFFLDJDQUFnQjtRQUN2RixvRUFBb0U7UUFDcEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVNLHdCQUFTLEdBQWhCLFVBQWlCLE1BQU07UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDcEM7YUFBTTtZQUNILElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDOUI7UUFFRCxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRU8sc0NBQXVCLEdBQS9CO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHO1lBQ2xDLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDeEMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMxQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3BDLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDeEMsTUFBTSxFQUFFLEtBQUs7U0FDaEIsQ0FBQztJQUNOLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQztBQWxGWSxvQkFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEakIsSUFBWSxlQUVYO0FBRkQsV0FBWSxlQUFlO0lBQ3ZCLHFEQUFJO0lBQUUsdURBQUs7QUFDZixDQUFDLEVBRlcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUFFMUI7QUFFRDtJQUErQiw2QkFBNEI7SUFTdkQsbUJBQVksS0FBbUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFVBQWtCO1FBQXpELFlBQ0ksa0JBQU0sS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLFNBUWpDO1FBYkQsbUJBQWEsR0FBRyxHQUFHLENBQUM7UUFDcEIsc0JBQWdCLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLHNCQUFnQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBSXBCLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEMsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdCLEtBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDOztJQUMxQyxDQUFDO0lBRU0sOEJBQVUsR0FBakIsVUFBa0IsWUFBWTtRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0sMEJBQU0sR0FBYixVQUFjLEtBQUssRUFBRSxLQUFLO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FDYixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2NBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUNuRCxDQUFDO1FBRUYsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtZQUNyQixPQUFPO1NBQ1Y7UUFFRCxpRkFBaUY7UUFDakYsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRTdELDZDQUE2QztRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRU0sNkJBQVMsR0FBaEIsVUFBaUIsU0FBMEI7UUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsUUFBUSxTQUFTLEVBQUU7WUFDZixLQUFLLGVBQWUsQ0FBQyxJQUFJO2dCQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUNoRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDOUIsTUFBTTtZQUNWLEtBQUssZUFBZSxDQUFDLEtBQUs7Z0JBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzdCLE1BQU07U0FDYjtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTSwrQkFBVyxHQUFsQixVQUFtQixLQUFLO1FBQ3BCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZCO2FBQU07WUFDSCxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDYixPQUFPLEVBQUUsSUFBSTtnQkFDYixRQUFRLEVBQUUsQ0FBQztnQkFDWCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxRQUFRLEVBQUUsR0FBRzthQUNoQixDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFTSw0QkFBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxDQTdFOEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQTZFMUQ7QUE3RVksOEJBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnRCLCtFQUF3QztBQUl4QztJQUEwQix3QkFBNEI7SUFZbEQsY0FBWSxLQUFtQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLEVBQU87UUFBUCw0QkFBTztRQUExRCxZQUNJLGtCQUFNLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxTQWtCakM7UUF4QkQsMEJBQW9CLEdBQUcsR0FBRyxDQUFDO1FBQzNCLDBCQUFvQixHQUFHLEdBQUcsQ0FBQztRQUMzQiwyQkFBcUIsR0FBRyxHQUFHLENBQUM7UUFDNUIsc0NBQWdDLEdBQUcsSUFBSSxDQUFDO1FBSXBDLEtBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsS0FBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFFakIsMkRBQTJEO1FBQzNELEtBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxLQUFJLENBQUMsT0FBTyxJQUFJLENBQUM7WUFDakIsS0FBSSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLEtBQUksQ0FBQyxPQUFPLElBQUksQ0FBQztZQUNqQixLQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQU8sS0FBSSxDQUFDLE9BQU8sU0FBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pELEtBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsRUFBRTtZQUNyQixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDbkQsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsS0FBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQzs7SUFDMUQsQ0FBQztJQUVNLDBCQUFXLEdBQWxCO1FBQ0ksSUFBTSxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFckIsOENBQThDO1FBQzlDLGdEQUFnRDtRQUNoRCw0QkFBNEI7UUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQzNCLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQzs7WUFFNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRXBDLENBQUM7SUFFTSxzQkFBTyxHQUFkO1FBQ0ksSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRVYsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFckYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0QiwwQkFBMEI7WUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBRXpCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDbEIsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsaUJBQWlCO2FBQ3BCLENBQUMsQ0FBQztTQUNOO1FBQ0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxzQkFBTyxHQUFkO1FBQ0ksSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVNLDhCQUFlLEdBQXRCLFVBQXVCLFVBQThCLEVBQUUsS0FBaUI7UUFDcEUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFekUsSUFBSSxVQUFVLENBQUMsVUFBVTtZQUFFLE9BQU87UUFFbEMsSUFBSSxhQUE4QyxDQUFDO1FBQ25ELElBQUksVUFBVSxZQUFZLHFCQUFTLEVBQUU7WUFDakMsYUFBYSxHQUFHLFVBQVU7U0FDN0I7YUFBTTtZQUNILGFBQWEsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO1lBQ2xDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGdDQUFnQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3BHO1FBRUQsSUFBTSxZQUFZLEdBQUcsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNsRixhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEYsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRXZELGFBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEMsMEJBQTBCO1FBQzFCLHFCQUFxQjtRQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLHFCQUFxQjtZQUNqQyxRQUFRLEVBQUU7Z0JBQ04sYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUMxQixVQUFVLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUNsQyxDQUFDO1lBQ0QsSUFBSSxFQUFFLEtBQUs7U0FDZCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsV0FBQztBQUFELENBQUMsQ0E3R3lCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sR0E2R3JEO0FBN0dZLG9CQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pqQiwrRUFBeUQ7QUFDekQsc0VBQWlEO0FBQ2pELG1FQUFvRDtBQUVwRDtJQUFrQyxnQ0FBTTtJQWtCcEMsc0JBQVksS0FBbUIsRUFBRSxDQUFVLEVBQUUsQ0FBVSxFQUFFLFNBQWlCO1FBQTFFLFlBQ0ksa0JBQU0sS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLFNBaUNoQztRQWhERCxtQkFBYSxHQUFvQiwyQkFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLGdCQUFnQjtRQUV2RSx3QkFBa0IsR0FBRyxHQUFHLENBQUM7UUFFekIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIscUJBQWUsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUV2Qix5QkFBbUIsR0FBRyxLQUFLLENBQUM7UUFVeEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsdUJBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVuRCxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUNmLEdBQUcsRUFBRSxXQUFXO1lBQ2hCLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ3pFLFNBQVMsRUFBRSxFQUFFO1lBQ2IsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUNiLENBQUMsQ0FBQztRQUVILEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ2YsR0FBRyxFQUFFLFdBQVc7WUFDaEIsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUN0QyxTQUFTLEVBQUUsRUFBRTtTQUNoQixDQUFDLENBQUM7UUFFSCxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUNmLEdBQUcsRUFBRSxpQkFBaUI7WUFDdEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsU0FBUyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDMUUsU0FBUyxFQUFFLEVBQUU7WUFDYixNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ2IsQ0FBQyxDQUFDO1FBRUgsZ0JBQWdCO1FBQ2hCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUN2QztZQUNJLEVBQUUsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2QyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUs7U0FDOUMsQ0FBQyxDQUFDOztJQUNYLENBQUM7SUFFTSw2QkFBTSxHQUFiLFVBQWMsSUFBSSxFQUFFLEtBQUs7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2NBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQ3pELENBQUM7UUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFMUIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsYUFBYSxHQUFHLDJCQUFlLENBQUMsSUFBSSxDQUFDO1lBRTFDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDYixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUM3QjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzdDO1NBQ0o7YUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsYUFBYSxHQUFHLDJCQUFlLENBQUMsS0FBSyxDQUFDO1lBRTNDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDYixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzthQUM1QjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzdDO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQzVCO2FBQU07WUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWhDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN2QztRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDbEQ7UUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtZQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztTQUN0QztRQUVELGlDQUF5QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVNLDZCQUFNLEdBQWIsVUFBYyxPQUFlLEVBQUUsU0FBUztRQUNwQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxLQUFLLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0csT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLENBOUdpQyxlQUFNLEdBOEd2QztBQTlHWSxvQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBekI7SUFBMEIsd0JBQTRCO0lBNkNsRCxjQUFZLEtBQWlCLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFBbkMsWUFDSSxrQkFBTSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQWdDckI7UUE1RUQsV0FBSyxHQUF3QyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBSXpELDRCQUFzQixHQUFXLENBQUMsQ0FBQyxDQUFFLGlDQUFpQztRQUN0RSxpQkFBVyxHQUFXLEdBQUcsQ0FBQyxDQUFFLCtEQUErRDtRQUMzRixrQkFBWSxHQUFXLEdBQUcsQ0FBQyxDQUFFLG1DQUFtQztRQUNoRSx3QkFBa0IsR0FBRyxLQUFLLENBQUMsQ0FBQyw2Q0FBNkM7UUFDekUsMEJBQW9CLEdBQUcsQ0FBQyxDQUFDLENBQUMsb0RBQW9EO1FBQzlFLGFBQU8sR0FBRyxFQUFFLENBQUMsQ0FBRSw2QkFBNkI7UUFDNUMsc0JBQWdCLEdBQUcsTUFBTSxDQUFDO1FBRTFCLG9FQUFvRTtRQUNwRSwyREFBMkQ7UUFDM0QsNkJBQXVCLEdBQUcsR0FBRyxDQUFDO1FBRTlCLGdCQUFnQjtRQUNoQixzQkFBZ0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVyRCxxQkFBZSxHQUFHLEtBQUssQ0FBQyxDQUFFLHdDQUF3QztRQUNsRSxrQkFBWSxHQUFHLFFBQVEsQ0FBQztRQUN4QixrQkFBWSxHQUFHLFFBQVEsQ0FBQztRQUN4QixvQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixnQkFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDLHlCQUF5QjtRQUMzQyxrQkFBWSxHQUFHLElBQUksQ0FBQyxDQUFDLHFFQUFxRTtRQUUxRixvRUFBb0U7UUFDcEUsMkNBQTJDO1FBQzNDLHNEQUFzRDtRQUN0RCxtQkFBYSxHQUFHLEdBQUcsQ0FBQztRQUVwQiw2REFBNkQ7UUFDN0Qsa0JBQVksR0FBRyxHQUFHLENBQUM7UUFDbkIsaUJBQVcsR0FBRyxFQUFFLENBQUM7UUFFakIsbUJBQWEsR0FBZSxJQUFJLENBQUM7UUFNakMsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFJZCxLQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixLQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUVsQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLEtBQUksQ0FBQyxlQUFlLEVBQUU7WUFDdkIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEM7UUFFRCxLQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO1FBRTdCLGdEQUFnRDtRQUNoRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuQyxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFFekUsSUFBSSxDQUFDLEtBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDMUI7WUFDRCxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwQyxLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0Q7UUFFRCw0RUFBNEU7UUFDNUUsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFaEQsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsU0FBUyxFQUFFLEVBQWIsQ0FBYSxDQUFDLENBQUMsQ0FBQztRQUMxRSxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7O0lBQ3pDLENBQUM7SUFFRCwwQkFBVyxHQUFYLFVBQVksVUFBc0I7UUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUM7SUFDcEMsQ0FBQztJQUVELHlCQUFVLEdBQVYsVUFBVyxDQUFzQjtRQUFqQyxpQkFXQztRQVZHLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzNGLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsY0FBTyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxFQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFRCw4QkFBZSxHQUFmLFVBQWdCLFVBQVU7UUFDdEIsSUFBSSxNQUFNLEdBQStCLEVBQUUsQ0FBQztRQUM1QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7WUFDNUcsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDOUIsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDaEM7WUFDRCxJQUFNLEtBQUssR0FBRyxDQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FDL0IsUUFBUSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FDekMsQ0FBQztZQUVGLE1BQU0sQ0FBQyxJQUFJLENBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUU7aUJBQ3BCLEtBQUssRUFBRTtpQkFDUCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7aUJBQ3ZDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQ25DLENBQUM7U0FDTDtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxtQkFBSSxHQUFKO1FBQ0ksS0FBbUIsVUFBVSxFQUFWLFNBQUksQ0FBQyxLQUFLLEVBQVYsY0FBVSxFQUFWLElBQVUsRUFBRTtZQUExQixJQUFNLElBQUk7WUFDWCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUN6QztRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLFNBQVMsRUFBRSxFQUFiLENBQWEsQ0FBQyxDQUFDLENBQUM7WUFDMUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUV0QixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2RSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztJQUVELHFCQUFNLEdBQU4sVUFBTyxDQUFDLEVBQUUsS0FBSztRQUNYLDRCQUE0QjtRQUM1QixpREFBaUQ7UUFFakQsSUFBSSxNQUFNLENBQUM7UUFFWCxJQUFJLGFBQWEsR0FBK0IsRUFBRSxDQUFDO1FBQ25ELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3hELGlEQUFpRDtTQUNwRDtRQUVELElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztRQUM5QyxLQUFLLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsV0FBVyxFQUFFLEVBQUUsRUFBRSxFQUFFO1lBQ3JDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRTdDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDeEMseUNBQXlDO2dCQUV6QyxJQUFJLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNQLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNqQztnQkFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDcEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDeEI7Z0JBQ0Qsc0JBQXNCO2dCQUV0QixJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7b0JBQ3hDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7aUJBQzFDO2dCQUNELEtBQUssQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFFbEUsSUFBTSxRQUFRLEdBQUcsS0FBSyxHQUFHLFdBQVcsQ0FBQztnQkFDckMsSUFBSSxJQUFJLEdBQUcsTUFBTSxHQUFHLFFBQVEsQ0FBQztnQkFDN0IsSUFBSSxLQUFLLEdBQUcsTUFBTSxHQUFHLFFBQVEsQ0FBQztnQkFFOUIsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBRXhDLHFEQUFxRDtnQkFDckQsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUN6RTtTQUNKO1FBRUQsSUFBTSxXQUFXLEdBQUcsVUFBQyxDQUFDLElBQUssYUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBRyxFQUF4QyxDQUF3QyxDQUFDO1FBRXBFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QywyQ0FBMkM7WUFDM0MsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ25FLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUN6QixJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO2lCQUNyQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2lCQUN0QixHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FDeEQsQ0FBQztZQUVGLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXhGLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25FO1FBRUQsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUNsQixXQUFXLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSTtnQkFDOUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUk7Z0JBQzdCLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQ2hDLENBQUM7U0FDTDtRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxJQUFJLEVBQUU7WUFDN0IsNEJBQTRCO1lBQzVCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoRCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FDckIsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQzVDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUNoRCxDQUFDO1lBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRWhDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNuRCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBRXhELFVBQVUsQ0FBQyxXQUFXLENBQ2xCLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ25DLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3RDLENBQUM7YUFDTDtTQUNKO1FBRUQsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksRUFBRTtZQUMxQix5Q0FBeUM7WUFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FDcEIsQ0FBQztZQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN2RDtRQUVELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU8sZ0NBQWlCLEdBQXpCLFVBQ0ksSUFBa0MsRUFDbEMsY0FBbUM7UUFGdkMsaUJBeUJDO1FBckJHLGNBQWMsR0FBRyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFeEMsSUFBSSxPQUFPLEdBQUcsVUFBQyxJQUFJLEVBQUUsSUFBSTtZQUNyQixPQUFPLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFJLENBQUMsWUFBWSxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNuRyxDQUFDLENBQUM7UUFFRixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUN4QixjQUFjLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsRTtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ3pCLGNBQWMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xFO1FBQ0QsNENBQTRDO1FBQzVDLDhCQUE4QjtRQUM5QixzRUFBc0U7UUFDdEUsSUFBSTtRQUNKLGdDQUFnQztRQUNoQyxzRUFBc0U7UUFDdEUsSUFBSTtRQUVKLE9BQU8sY0FBYyxDQUFDO0lBQzFCLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQyxDQXZReUIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBdVFyRDtBQXZRWSxvQkFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKakIsc0VBQWtEO0FBQ2xELG1FQUFvRDtBQUVwRDtJQUFnQyw4QkFBTTtJQWVsQyxvQkFBWSxLQUFtQixFQUFFLENBQVUsRUFBRSxDQUFVLEVBQUUsU0FBaUI7UUFBMUUsWUFDSSxrQkFBTSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsU0E2Q2hDO1FBeERELG1CQUFhLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLG9CQUFjLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLG1CQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLHFCQUFlLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFFdkIsd0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBRTFCLHdCQUFrQixHQUFHLEdBQUcsQ0FBQztRQUN6Qix3QkFBa0IsR0FBRyxHQUFHLENBQUM7UUFLckIsbUNBQW1DO1FBQ25DLEtBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDMUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsdUJBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNuRCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGtDQUFrQztRQUM1RCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUV4QixDQUFDLFFBQVEsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUscUJBQXFCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRztZQUNyRyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQ3BCLEdBQUcsRUFBRSxHQUFHO2dCQUNSLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUM7Z0JBQ3hDLFNBQVMsRUFBRSxFQUFFO2FBQ2hCLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQztRQUVGLGdCQUFnQjtRQUNoQixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFdkQsa0JBQWtCO1FBQ2xCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3JDLE9BQU8sRUFBRSxHQUFHO1lBQ1osT0FBTyxFQUFFLEdBQUc7WUFDWixrQkFBa0IsRUFBRSxJQUFJO1NBQzNCLENBQUMsQ0FBQztRQUVILEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pDLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDeEQsSUFBSSxRQUFRLEdBQWlDLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFdEUsSUFBTSxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNoQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsRUFBRTtnQkFDckIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzQjtZQUNELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsRUFBRTtnQkFDckIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzQjtZQUNELFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7WUFDNUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7WUFFMUIsNEVBQTRFO1lBQzVFLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM3QixRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3pCOztJQUNMLENBQUM7SUFFTSwyQkFBTSxHQUFiLFVBQWMsSUFBSSxFQUFFLEtBQUs7UUFDckIsaUJBQU0sTUFBTSxZQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Y0FDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FDeEQsQ0FBQztRQUVGLElBQUksSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBRXhCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDMUIsV0FBVztRQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFFdEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRTtZQUN4QixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ2QsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUNkO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDMUIsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDYixNQUFNLEdBQUcsR0FBRztTQUNmO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDMUIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNkLE1BQU0sR0FBRyxHQUFHO1NBQ2Y7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUMzQixJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNiLE1BQU0sR0FBRyxFQUFFLENBQUM7U0FDZjtRQUVELE1BQU0sR0FBRyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDNUMsTUFBTSxHQUFHLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUM1QyxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDaEIsSUFBSSxNQUFNLElBQUksR0FBRyxJQUFJLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7YUFDaEM7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzdDO1NBQ0o7UUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQzVELElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUMxQjthQUFNO1lBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDM0I7UUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3hCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztvQkFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2lCQUM1QjtxQkFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7aUJBQ2pEO3FCQUFNO29CQUNILElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUM1QzthQUNKO2lCQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztpQkFDNUI7YUFDSjtpQkFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzthQUM1QjtpQkFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7YUFDL0M7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7YUFDL0M7U0FDSjtRQUVELGlDQUF5QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFNUMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBRXBCLElBQU0sU0FBUyxHQUFHLENBQUMsQ0FBQztZQUNwQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNoQyxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQ2xGLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDL0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFO2dCQUM1QyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtvQkFDWCxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDbkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNyQixDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3BDLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDaEUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbkIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUN6RTthQUNKO1lBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFDekUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNsRjtTQUNKO0lBQ0wsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxDQTdLK0IsZUFBTSxHQTZLckM7QUE3S1ksZ0NBQVU7QUErS3ZCLFNBQWdCLFlBQVksQ0FBQyxRQUFRLEVBQUUsS0FBSztJQUN4QyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0MsUUFBUSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTtRQUM3QixRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQU5ELG9DQU1DOzs7Ozs7Ozs7Ozs7Ozs7O0FDeExELG1FQUE4RDtBQUU5RDtJQUtJLHdCQUFZLEtBQUs7UUFGakIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUdYLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RDLElBQU0sR0FBRyxHQUFHLFNBQU8sQ0FBRyxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFjLENBQUMsVUFBTyxDQUFDLENBQUM7U0FDNUQ7UUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFTSwrQkFBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsQ0FBQztRQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxJQUFNLEdBQUcsR0FBRyxTQUFPLENBQUcsQ0FBQztZQUN2QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNoRCxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsdUJBQWUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN2RCxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUNqQixHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDeEI7SUFDTCxDQUFDO0lBRU0sc0NBQWEsR0FBcEIsVUFBcUIsV0FBb0I7UUFDckMsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLElBQUksS0FBSyxDQUFDO1FBQ1YsSUFBSSxZQUFZLElBQUksSUFBSSxFQUFFO1lBQ3RCLEtBQUssR0FBRyxZQUFZLENBQUM7U0FDeEI7YUFBTTtZQUNILElBQUksWUFBVSxHQUFHLENBQUMsQ0FBQztZQUNuQixJQUFJLGtCQUFnQixDQUFDO1lBQ3JCLE9BQU8sWUFBVSxHQUFHLENBQUMsRUFBRTtnQkFDbkIsSUFBSSxXQUFXLEVBQUU7b0JBQ2IsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN4QixrQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7b0JBQ2pELFlBQVUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO2lCQUNwRDtxQkFBTTtvQkFDSCxLQUFLLEdBQUcsRUFBRSxDQUFDO29CQUNYLGtCQUFnQixHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ2hDLFlBQVUsR0FBRyxDQUFDLENBQUM7aUJBQ2xCO2dCQUNELE9BQU8sWUFBVSxHQUFHLENBQUMsRUFBRTtvQkFDbkIsMkJBQTJCO29CQUUzQixJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUc7d0JBQ3ZDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO3dCQUM5QixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksWUFBVSxDQUFDO3dCQUN6QixJQUFJLGtCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7NEJBQzdCLElBQUksT0FBTyxHQUFHLGtCQUFnQixDQUFDLEdBQUcsQ0FBQyxVQUFDLFdBQVc7Z0NBQzNDLE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzRCQUN0RCxDQUFDLENBQUMsQ0FBQzs0QkFDSCxnQ0FBZ0M7NEJBQ2hDLHVEQUF1RDs0QkFDdkQsd0JBQXdCOzRCQUN4QixFQUFFLEdBQUcsRUFBRSxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQ3JDO3dCQUNELE9BQU8sRUFBRSxDQUFDO29CQUNkLENBQUMsQ0FBQyxDQUFDO29CQUNILGtEQUFrRDtvQkFDbEQsSUFBSSxjQUFjLENBQUMsTUFBTSxJQUFJLENBQUM7d0JBQzFCLE1BQU07b0JBQ1YsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDN0MsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDakIsa0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7b0JBQ3hDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO29CQUMvQixZQUFVLElBQUksQ0FBQyxDQUFDO2lCQUNuQjthQUNKO1NBQ0o7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxJQUFLLFdBQUksQ0FBQyxNQUFNLEVBQVgsQ0FBVyxDQUFDLENBQUMsQ0FBQztRQUN6RCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRU8scUNBQVksR0FBcEI7UUFBQSxpQkFVQzs7UUFURyxJQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUMzQyxJQUFNLFNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN6QixPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsSUFBSSxXQUFXLFNBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsMENBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsVUFBQyxDQUFDLElBQUssUUFBQyxDQUFDLEVBQUYsQ0FBRSxDQUFDLENBQUM7UUFDcEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUMzQyxXQUFXLEdBQUcsV0FBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxZQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFiLENBQWEsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxxQ0FBWSxHQUFwQixVQUFxQixLQUFLO1FBQ3RCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFDTCxxQkFBQztBQUFELENBQUM7QUE1Rlksd0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGM0IsdUZBQWdDO0FBQ2hDLGdHQUErQztBQUUvQyxJQUFJLFVBQVUsR0FBRyxJQUFJLHVCQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFNUMsSUFBSSxNQUFNLEdBQUc7SUFDVCxVQUFVO0NBQ2IsQ0FBQztBQUVXLHFCQUFhLEdBQUcsR0FBRyxDQUFDO0FBQ3BCLG9CQUFZLEdBQUcsSUFBSSxDQUFDO0FBRWpDLElBQU0sVUFBVSxHQUFHO0lBQ2YsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO0lBQ2pCLE1BQU0sRUFBRSxTQUFTO0lBQ2pCLEtBQUssRUFBRSxvQkFBWTtJQUNuQixNQUFNLEVBQUUscUJBQWE7SUFDckIsT0FBTyxFQUFFO1FBQ0wsT0FBTyxFQUFFLFFBQVE7UUFDakIsTUFBTSxFQUFFO1lBQ0osT0FBTyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBQztZQUNqQixLQUFLLEVBQUUsS0FBSztZQUNaLEdBQUcsRUFBRSxFQUFFO1lBQ1AsU0FBUyxFQUFFLENBQUM7U0FDZjtLQUNKO0lBQ0QsS0FBSyxFQUFFLE1BQU07SUFDYixJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDWixRQUFRLEVBQUUsSUFBSTtDQUNqQixDQUFDO0FBRVcsWUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Qm5DLHNCQUFjLEdBQVksR0FBRyxDQUFDO0FBRTNDLElBQU0sZ0NBQWdDLEdBQUcsSUFBSSxDQUFDO0FBRTlDO0lBQXFDLDBCQUE0QjtJQWU3RCxnQkFBWSxLQUFtQixFQUFFLENBQVUsRUFBRSxDQUFVLEVBQUUsU0FBaUI7UUFBMUUsWUFDSSxrQkFBTSxLQUFLLENBQUMsU0FPZjtRQWZELDBCQUFvQixHQUFHLElBQUksQ0FBQztRQUU1QixvQkFBb0I7UUFDcEIsZ0JBQVUsR0FBRyxLQUFLLENBQUMsQ0FBRSw0QkFBNEI7UUFFakQsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFJZixLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRXhELEtBQUksQ0FBQyxhQUFhLEdBQU0sU0FBUyxVQUFPLENBQUM7UUFDekMsS0FBSSxDQUFDLGNBQWMsR0FBTSxTQUFTLFdBQVEsQ0FBQztRQUMzQyxLQUFJLENBQUMsYUFBYSxHQUFNLFNBQVMsVUFBTyxDQUFDOztJQUM3QyxDQUFDO0lBRU0scUNBQW9CLEdBQTNCO1FBQ0ksb0VBQW9FO1FBQ3BFLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsc0JBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRU0sdUJBQU0sR0FBYixVQUFjLEtBQUssRUFBRSxNQUFNO0lBQzNCLENBQUM7SUFFTSwyQkFBVSxHQUFqQjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUN2QixJQUFJLENBQUMsb0JBQW9CLEVBQ3pCLGNBQVEsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FDL0MsQ0FBQztJQUNOLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQyxDQXpDb0MsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBeUNoRTtBQXpDcUIsd0JBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUDVCLHlGQUErQztBQUMvQyxpRUFBK0I7QUFDL0IsbUZBQXlEO0FBQ3pELGlFQUErQjtBQUMvQixnRkFBeUM7QUFFekMsa0dBQXFEO0FBQ3JELG9FQUE4QztBQUM5QyxtRkFBMkM7QUFDM0Msa0dBQW9EO0FBQ3BELGtGQUFrQztBQUNsQyxpRUFBc0Q7QUFDdEQsOERBQTZCO0FBQzdCLG9FQUFpQztBQUNqQyxJQUFPLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUNyQyxpRUFBK0I7QUFFL0IsSUFBTSxzQkFBc0IsR0FBRyxZQUFZLENBQUM7QUFDNUMsSUFBTSx3QkFBd0IsR0FBRyxjQUFjLENBQUM7QUFDaEQsSUFBTSxxQkFBcUIsR0FBRyxXQUFXLENBQUM7QUFDMUMsSUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLElBQU0sU0FBUyxHQUFHLENBQUMsQ0FBQztBQUNwQixJQUFNLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDdkIsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBR3BCLElBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUNyQixJQUFNLFdBQVcsR0FBRyxFQUFFLEdBQUcsU0FBUyxDQUFDO0FBQ25DLElBQU0sWUFBWSxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUM7QUFFbkM7SUFBZ0MsOEJBQVk7SUFxQ3hDLG9CQUFZLEdBQVc7UUFBdkIsWUFDSSxrQkFBTTtZQUNGLEdBQUcsRUFBRSxHQUFHO1NBQ1gsQ0FBQyxTQUVMO1FBckNELG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBYzFCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLHdCQUFrQixHQUFXLElBQUksQ0FBQztRQUNsQyxtQkFBYSxHQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxLQUFLO1FBSXhDLFdBQUssR0FBRyxDQUFDLENBQUM7UUFDVixnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUluQixtQkFBYSxHQUFHLElBQUksT0FBTyxDQUFDLEVBQUUsRUFBRSxvQkFBYSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQVdyRCxLQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQzs7SUFDNUIsQ0FBQztJQUVNLDRCQUFPLEdBQWQ7UUFDSSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksZ0NBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUvQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUVuRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRSx5QkFBeUIsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsd0JBQXdCLEVBQUUsMEJBQTBCLEVBQUU7WUFDeEUsVUFBVSxFQUFFLEVBQUU7WUFDZCxXQUFXLEVBQUUsRUFBRTtTQUNsQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSw0QkFBNEIsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFaEgsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLHFCQUFxQixFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUU3RixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQU8sQ0FBRyxFQUFFLGdCQUFjLENBQUMsU0FBTSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNqRztRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBUyxDQUFHLEVBQUUseUJBQXVCLENBQUMsU0FBTSxDQUFDLENBQUM7U0FDakU7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQUssQ0FBRyxFQUFFLHFCQUFtQixDQUFDLFNBQU0sQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFNLENBQUcsRUFBRSxzQkFBb0IsQ0FBQyxTQUFNLENBQUMsQ0FBQztTQUMzRDtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBUyxDQUFHLEVBQUUseUJBQXVCLENBQUMsU0FBTSxDQUFDLENBQUM7U0FDakU7SUFDTCxDQUFDO0lBRU0sMkJBQU0sR0FBYjtRQUFBLGlCQW1KQztRQWxKRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxtQkFBWSxFQUFFLG9CQUFhLENBQUMsQ0FBQztRQUVoRSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQ2QsR0FBRyxFQUFFLFNBQU8sQ0FBQyxTQUFNO2dCQUNuQixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxTQUFPLENBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDO2dCQUMxRSxTQUFTLEVBQUUsRUFBRTtnQkFDYixNQUFNLEVBQUUsQ0FBQyxDQUFDO2FBQ2IsQ0FBQyxDQUFDO1NBQ047UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUNkLEdBQUcsRUFBRSxlQUFlO1lBQ3BCLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ3hFLFNBQVMsRUFBRSxFQUFFO1NBQ2hCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ2QsR0FBRyxFQUFFLGVBQWU7WUFDcEIsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsU0FBUyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDeEUsU0FBUyxFQUFFLEVBQUU7WUFDYixNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ2IsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDZCxHQUFHLEVBQUUsV0FBVztZQUNoQixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ3BGLFNBQVMsRUFBRSxDQUFDO1lBQ1osTUFBTSxFQUFFLENBQUMsQ0FBQztTQUNiLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ2QsR0FBRyxFQUFFLGVBQWU7WUFDcEIsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMscUJBQXFCLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNwRixTQUFTLEVBQUUsQ0FBQztZQUNaLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDYixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUNkLEdBQUcsRUFBRSxhQUFhO1lBQ2xCLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLHFCQUFxQixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDcEYsU0FBUyxFQUFFLENBQUM7WUFDWixNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ2IsQ0FBQyxDQUFDO1FBRUgsb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsbUJBQVksR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFcEYsMkNBQTJDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFaEQsaUZBQWlGO1FBQ2pGLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLG1CQUFZLEdBQUcsQ0FBQyxFQUFFLG9CQUFhLEdBQUcsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQjtRQUVuSCxlQUFlO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLG9CQUFhLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBRXhELGtCQUFrQjtRQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksdUJBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztRQUN2RyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLDJCQUFZLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxvQkFBYSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztRQUNsRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxRixJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFHckMsY0FBYztRQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzdGLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFNUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFDeEIsS0FBaUIsVUFBSyxFQUFMLGVBQUssRUFBTCxtQkFBSyxFQUFMLElBQUssRUFBRTtZQUFuQixJQUFJLElBQUk7WUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxJQUFJLEVBQUUsbUJBQVksR0FBRyxTQUFTLEVBQUUsb0JBQWEsR0FBRyxTQUFTLEVBQUUsU0FBUyxHQUFHLENBQUMsRUFBRSxvQkFBYSxHQUFHLENBQUMsR0FBRyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDM0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFHOUYsNEJBQTRCO1FBQzVCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FDdkMsQ0FBQyxFQUNELG9CQUFhLEdBQUcsRUFBRSxFQUNsQixTQUFTLENBQ1osQ0FBQztRQUNGLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEIsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFHM0IsU0FBUztRQUNULElBQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ25DLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBUyxDQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3BFO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFLLENBQUcsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDakU7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQU0sQ0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNuRTtRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBUyxDQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3pFO1FBRUQsbUJBQW1CO1FBQ25CO1lBQ0ksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsb0JBQWEsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLElBQUksR0FBRyxvQkFBYSxDQUFDO1lBQy9ELENBQUMsQ0FBQyxFQUFFLG9CQUFhLEdBQUcsQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUM7WUFDaEUsQ0FBQyxtQkFBWSxHQUFHLENBQUMsR0FBRyxTQUFTLEVBQUUsQ0FBQyxJQUFJLEdBQUcsb0JBQWEsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLElBQUksR0FBRyxvQkFBYSxDQUFDO1lBQzFGLENBQUMsbUJBQVksR0FBRyxDQUFDLEdBQUcsU0FBUyxFQUFFLG9CQUFhLEdBQUcsQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxlQUFlO1NBQzlHLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtZQUNYLElBQU0sSUFBSSxHQUFHLElBQUksdUJBQVUsQ0FBQyxLQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUM5RixLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7UUFFSCxhQUFhO1FBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3pFLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFOUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNoRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztZQUNyRCxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVwQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRU8sa0NBQWEsR0FBckI7UUFBQSxpQkF3Q0M7UUF0Q0csY0FBYztRQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25HLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRWpHLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV0RywwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWpFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTlGLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ3pCLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO1FBRUgsY0FBYztRQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdHLENBQUM7SUFFTSwyQkFBTSxHQUFiLFVBQWMsSUFBSSxFQUFFLEtBQUs7UUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRS9CLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXRDLDZCQUE2QjtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSTtRQUVKLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV2QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sbUNBQWMsR0FBckIsVUFBc0IsUUFBUSxFQUFFLElBQUk7UUFDaEMseUJBQVksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFTSwwQ0FBcUIsR0FBNUIsVUFBNkIsSUFBSSxFQUFFLElBQUk7UUFDbkMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFTyxvQ0FBZSxHQUF2QixVQUF3QixhQUFhLEVBQUUsU0FBUztRQUM1QyxtSEFBbUg7UUFDbkgsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsRUFBRTtZQUNwRCxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMzQztJQUNMLENBQUM7SUFFTywwQ0FBcUIsR0FBN0IsVUFDSSxZQUEwQyxFQUMxQyxJQUFVO1FBRVYsSUFBSSxNQUFNLEdBQVcsQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNyRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU8sMENBQXFCLEdBQTdCLFVBQ0ksTUFBaUIsRUFDakIsSUFBVTtRQUVWLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFHTyx5Q0FBb0IsR0FBNUIsVUFBNkIsTUFBaUIsRUFBRSxVQUFzQjtRQUNsRSxVQUFVLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVPLHNDQUFpQixHQUF6QixVQUEwQixNQUFpQixFQUFFLENBQUM7UUFDMUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU8sc0NBQWlCLEdBQXpCLFVBQTBCLFlBQVksRUFBRSxDQUFDO1FBQ3JDLDhCQUE4QjtRQUM5QiwrQ0FBK0M7UUFDL0MseURBQXlEO1FBQ3pELDhCQUE4QjtRQUM5QixJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssU0FBUztlQUM1QixZQUFZLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNO2VBQ3pDLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtZQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9ELElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7U0FDckQ7SUFDTCxDQUFDO0lBRU8sbUNBQWMsR0FBdEIsVUFBdUIsT0FBTyxFQUFFLE9BQXFDO1FBQ2pFLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxDQUFDO1lBQUUsT0FBTyxDQUFFLG1CQUFtQjtRQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxZQUEwQztZQUN0RSxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDMUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVuRixDQUFDO0lBRU8sd0NBQW1CLEdBQTNCLFVBQTRCLEdBQUcsRUFBRSxLQUFLO1FBQ2xDLCtCQUErQjtRQUMvQixJQUFJLEtBQUssQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUMzQixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FDaEIsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFNBQUcsQ0FBQyxxQkFBcUIsRUFDakQsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFNBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRXZELElBQU0sQ0FBQyxHQUFHLFNBQUcsQ0FBQyw0QkFBNEIsQ0FBQztRQUMzQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9JLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFTyxvQ0FBZSxHQUF2QixVQUNJLFlBQTBDLEVBQzFDLEVBQWdDO1FBRWhDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsd0JBQXdCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEUsSUFBSSxPQUFPLEtBQUssSUFBSTtZQUFFLE9BQU87UUFFN0IsSUFBSSxNQUFNLEdBQVcsQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUVyRyxJQUFJLE1BQU0sQ0FBQyxXQUFXLEVBQUU7WUFDcEIsWUFBWSxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzNCLFlBQVksQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDaEMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBRXBCLElBQUksTUFBTSxLQUFLLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQzthQUMvRDtTQUNKO0lBQ0wsQ0FBQztJQUdPLDZCQUFRLEdBQWhCLFVBQWlCLElBQUk7UUFBckIsaUJBZ0dDOztRQS9GRyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUVsRCxJQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMzRCxJQUFNLE9BQU8sR0FBRyxDQUFDLG1CQUFZLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELElBQU0sT0FBTyxHQUFHLG9CQUFhLEdBQUcsRUFBRSxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRXRHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDO1lBQ3RELEtBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxHQUFHLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDN0Y7UUFFRCxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hFLEdBQUcsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEQsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUVsRCxXQUFXO1FBQ1gsU0FBRyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsMENBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFVBQVU7WUFDdEQsSUFBSSxNQUFNLEdBQUcsSUFBSSxxQkFBUyxDQUN0QixLQUFJLEVBQ0osT0FBTyxHQUFHLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUMxQixPQUFPLEdBQUcsVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQzNCLHFCQUFxQixDQUN4QixDQUFDO1lBQ0YsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFBRSxJQUFJLEVBQUU7UUFFVCxTQUFTO1FBQ1QsSUFBTSxJQUFJLFNBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsMENBQUUsT0FBTyxDQUFDO1FBQ2pELElBQUksSUFBSSxFQUFFO1lBQ04sS0FBYyxVQUFJLEVBQUosYUFBSSxFQUFKLGtCQUFJLEVBQUosSUFBSTtnQkFBYixJQUFJLENBQUM7Z0JBQ04sTUFBTSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQ0FBb0MsQ0FBQyxDQUFDO2FBQUE7WUFDL0YsMEJBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUI7UUFDRCxJQUFNLEtBQUssU0FBRyxHQUFHLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQywwQ0FBRSxPQUFPLENBQUM7UUFDbkQsSUFBSSxLQUFLLEVBQUU7WUFDUCxLQUFjLFVBQUssRUFBTCxlQUFLLEVBQUwsbUJBQUssRUFBTCxJQUFLO2dCQUFkLElBQUksQ0FBQztnQkFDTixNQUFNLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLHFDQUFxQyxDQUFDLENBQUM7YUFBQTtZQUNoRywwQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QjtRQUNELEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxPQUFPLENBQUMsVUFBQyxRQUFRO1lBQ3BCLElBQUksSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLEtBQUksRUFBRSxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFBRSxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsSSxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3RDLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFHO2dCQUNoQyxPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQzdELENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBZ0IsVUFBVyxFQUFYLDJCQUFXLEVBQVgseUJBQVcsRUFBWCxJQUFXLEVBQUU7Z0JBQXhCLElBQUksR0FBRztnQkFDUixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUksRUFBRSxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZEO1FBQ0wsQ0FBQyxFQUFFO1FBRUgsUUFBUTtRQUNSLFNBQUcsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLDBDQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO1lBQ2pELElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtnQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO2dCQUNqRCxPQUFPO2FBQ1Y7WUFFRCxJQUFNLEdBQUcsR0FBRyxJQUFJLFNBQUcsQ0FDZixLQUFJLEVBQ0osT0FBTyxDQUFDLENBQUMsR0FBRyxPQUFPLEVBQ25CLE9BQU8sQ0FBQyxDQUFDLEdBQUcsT0FBTyxFQUNuQixPQUFPLENBQUMsS0FBSyxFQUNiLE9BQU8sQ0FBQyxNQUFNLEVBQ2QsS0FBSyxDQUNSLENBQUM7WUFDRixLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDLEVBQUUsSUFBSSxFQUFFO1FBRVQsV0FBVztRQUNYLFNBQUcsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLDBDQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxXQUFXO1lBQ3hELElBQUksT0FBTyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FDdkMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxDQUFDLEVBQ3ZCLE9BQU8sR0FBRyxXQUFXLENBQUMsQ0FBQyxFQUN2QixTQUFTLENBQ1osQ0FBQztZQUNGLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRXRCLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxFQUFFO1FBRUgsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUVwRCxTQUFTO1FBQ1QsU0FBRyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsMENBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssUUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFULENBQVMsRUFBRSxPQUFPLENBQUMsVUFBQyxRQUFRO1lBQzVFLElBQUksSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLEtBQUksRUFBRSxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3hGLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUU7SUFDUCxDQUFDO0lBRU8saUNBQVksR0FBcEI7UUFDSSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFDLE1BQU07WUFDeEQsT0FBUSxNQUFvQixDQUFDLEtBQUssQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDWCx5Q0FBeUM7WUFDekMsZ0NBQWdDO1lBQ2hDLE9BQU87U0FDVjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzdGLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUU7UUFFL0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckQsS0FBaUIsVUFBSyxFQUFMLGVBQUssRUFBTCxtQkFBSyxFQUFMLElBQUssRUFBRTtZQUFuQixJQUFJLElBQUk7WUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXJCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLG9CQUFhLENBQUM7UUFDeEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDOUQsSUFBSSxDQUFDLGFBQWEsSUFBSSxFQUFFLEdBQUcsU0FBUyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxtQkFBWSxFQUFFLG9CQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRXRHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxTQUFTLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFFckUsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RSxJQUFNLE9BQU8sR0FBRyxDQUFDLG1CQUFZLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELGdCQUFnQjtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUU1RSxJQUFJLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLElBQUssUUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssUUFBQyxHQUFHLENBQUMsRUFBTCxDQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUMzSCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hELElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLGtCQUFrQixDQUFDO1FBQ3hGLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQztRQUN4QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFNUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRWhDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWhELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFcEQsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUvQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzVELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFFTSxnQ0FBVyxHQUFsQixVQUFtQixNQUFlO1FBQWxDLGlCQWNDO1FBYkcsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxJQUFJLE1BQU0sRUFBRTtZQUNSLFVBQVUsQ0FBQztnQkFDUCxJQUFNLEdBQUcsR0FBRyxhQUFXLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBSyxDQUFDO2dCQUN2QyxJQUFNLE9BQU8sR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDbkMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFDLGNBQWM7U0FDMUI7SUFDTCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLENBbmtCK0IsTUFBTSxDQUFDLEtBQUssR0Fta0IzQztBQW5rQlksZ0NBQVU7QUFxa0J2QixTQUFTLGFBQWEsQ0FBQyxJQUE2QjtJQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztTQUNiLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3JCLGNBQWMsQ0FBQyxPQUFPLENBQUM7U0FDdkIsZUFBZSxDQUFDLElBQUksQ0FBQztTQUNyQixhQUFhLENBQUMsSUFBSSxDQUFDO1NBQ25CLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztTQUM3QixVQUFVLENBQUMsQ0FBQyxDQUFDO1NBQ2IsUUFBUSxDQUFDLEdBQUcsQ0FBQztTQUNiLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDM21CRDtJQU9JLHlCQUFZLEtBQWlCO1FBTjdCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBTWYsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBRU0saUNBQU8sR0FBZCxVQUFlLEdBQTRCLEVBQUUsT0FBTyxFQUFFLE9BQU87UUFBN0QsaUJBb0NDO1FBbkNHLElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDbEQsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUUvQyxJQUFJLFNBQVMsR0FBRyxVQUFDLEdBQUcsRUFBRSxHQUFHO1lBQ3JCLElBQUksTUFBTSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQzVDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxFQUNmLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxFQUNmLEdBQUcsQ0FDTixDQUFDO1lBQ0YsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDckIsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFDO1FBRUYsSUFBSSxPQUFPLEtBQUssSUFBSSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNoRCxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM5QjthQUFNO1lBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEM7UUFFRCxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzVDLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzlCO2FBQU07WUFDSCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQztRQUVELDhCQUE4QjtRQUM5QiwrQkFBK0I7UUFDL0Isd0JBQXdCO1FBQ3hCLE1BQU07SUFDVixDQUFDO0lBRU0sa0RBQXdCLEdBQS9CLFVBQWdDLE1BQW9DO1FBQ2hFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1FBQ25DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sRUFBRTtnQkFDL0MsZ0JBQWdCO2dCQUNoQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3JDO1lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxFQUFFO2dCQUM1QyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3BDO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sa0NBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1FBQ25DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDaEM7SUFDTCxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDO0FBdkVZLDBDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0M1QjtJQUFnQyw4QkFBNEI7SUFJeEQsb0JBQVksS0FBaUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFlBQXNDO1FBQXRHLFlBQ0ksa0JBQU0sS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLFNBTWpDO1FBTEcsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbkMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixLQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQzs7SUFDckMsQ0FBQztJQUVNLGlDQUFZLEdBQW5CLFVBQW9CLE1BQWlCO1FBQ2pDLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE9BQU87U0FBRTtRQUV0RCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvRSxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLENBbkIrQixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBbUIzRDtBQW5CWSxnQ0FBVTs7Ozs7Ozs7Ozs7Ozs7OztBQ0R2QjtJQVNJLGVBQVksS0FBaUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBa0I7UUFDbEUsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUVNLHFCQUFLLEdBQVosVUFBYSxRQUFRO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRU0sc0JBQU0sR0FBYixVQUFjLElBQUksRUFBRSxNQUFNO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFDNUIsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsQ0FBQztRQUNwRixJQUFJLGVBQWUsSUFBSSxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7SUFDTCxDQUFDO0lBQ0wsWUFBQztBQUFELENBQUM7QUFyQ1ksc0JBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGbEIsU0FBZ0IsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFzQjtJQUN2RCw4Q0FBOEM7SUFDOUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUU7SUFFYixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQzlCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ1g7SUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQzVCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ1g7SUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQy9CLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ1g7SUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQzlCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ1g7SUFFRCxPQUFPLENBQUM7QUFDWixDQUFDO0FBbEJELHdDQWtCQztBQUVELFNBQWdCLHlCQUF5QixDQUFDLElBQUk7SUFDMUMsZ0RBQWdEO0lBQ2hELElBQUksS0FBSyxHQUFHLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BELElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUpELDhEQUlDO0FBR0QsU0FBZ0IsZUFBZSxDQUFDLGVBQWU7SUFDM0MsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2IsS0FBYyxVQUFlLEVBQWYsbUNBQWUsRUFBZiw2QkFBZSxFQUFmLElBQWUsRUFBRTtRQUExQixJQUFJLENBQUM7UUFDTixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksT0FBTyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLEVBQUU7WUFDN0MsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDO2dCQUNaLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRTtZQUNuQixDQUFDLENBQUMsQ0FBQztTQUNOO1FBQ0QsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztLQUN4QjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQWJELDBDQWFDO0FBR0QsU0FBZ0Isa0JBQWtCLENBQUMsWUFBWTtJQUMzQyw2QkFBNkI7SUFDN0IsS0FBYyxVQUFZLEVBQVosNkJBQVksRUFBWiwwQkFBWSxFQUFaLElBQVksRUFBRTtRQUF2QixJQUFJLENBQUM7UUFDTixDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUNyRDtBQUNMLENBQUM7QUFMRCxnREFLQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgeyBMZXZlbFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL2xldmVsU2NlbmVcIjtcblxuZXhwb3J0IGNsYXNzIEJveCBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUge1xuICAgIHNjZW5lOiBMZXZlbFNjZW5lO1xuICAgIEZSSUNUSU9OX0NPRUYgPSAwLjk7XG4gICAgc3RhdGljIFdBVEVSX1NUUkVOR1RIX0ZBQ1RPUiA9IDI7XG4gICAgc3RhdGljIEJPWF9TVFJFTkdUSF9PTl9XQVRFUl9GQUNUT1IgPSA3O1xuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IExldmVsU2NlbmUsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHRleHR1cmVLZXkpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUsIHgsIHksIHRleHR1cmVLZXkpO1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgICAgIHRoaXMuc2V0T3JpZ2luKDAsIDEpO1xuICAgICAgICB0aGlzLnNldERpc3BsYXlTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB0aGlzLnNldERlcHRoKDUpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoX3RpbWUsIGRlbHRhKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0VmVsb2NpdHlYKFxuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggKiBNYXRoLnBvdygxIC0gdGhpcy5GUklDVElPTl9DT0VGLCBkZWx0YSAvIDEwMDApXG4gICAgICAgICk7XG4gICAgfVxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSBcInBoYXNlclwiO1xuaW1wb3J0IHsgTGV2ZWxTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy9sZXZlbFNjZW5lXCI7XG5cbmV4cG9ydCBjbGFzcyBEb29yIHtcblxuICAgIGRvb3JTcHJpdGU6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGU7XG4gICAga2V5U3ByaXRlOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlO1xuICAgIGxvY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgb3BlbkxlZnQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIG9wZW5SaWdodDogYm9vbGVhbiA9IHRydWU7XG4gICAgb3BlblVwOiBib29sZWFuID0gdHJ1ZTtcbiAgICBvcGVuRG93bjogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBjb2xvcjogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgeDogaW50ZWdlciwgeTogaW50ZWdlciwgd2lkdGg6IGludGVnZXIsIGhlaWdodDogaW50ZWdlciwgY29sb3I6IHN0cmluZykge1xuICAgICAgICBsZXQgdGV4dHVyZUtleTtcbiAgICAgICAgaWYgKHdpZHRoID09IDMyICYmIGhlaWdodCA9PSA5Nikge1xuICAgICAgICAgICAgdGV4dHVyZUtleSA9ICdkb29yMTMnO1xuICAgICAgICB9IGVsc2UgaWYgKHdpZHRoID09IDMyICYmIGhlaWdodCA9PSA2NCkge1xuICAgICAgICAgICAgdGV4dHVyZUtleSA9ICdkb29yMTInO1xuICAgICAgICB9IGVsc2UgaWYgKHdpZHRoID09IDY0ICYmIGhlaWdodCA9PSAzMikge1xuICAgICAgICAgICAgdGV4dHVyZUtleSA9ICd0cmFwZG9vcic7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRvb3JTcHJpdGUgPSBzY2VuZS5waHlzaWNzLmFkZC5zdGF0aWNTcHJpdGUoeCwgeSwgdGV4dHVyZUtleSk7XG4gICAgICAgIHRoaXMuZG9vclNwcml0ZS5zZXRPcmlnaW4oMCwgMSk7XG4gICAgICAgIHRoaXMuZG9vclNwcml0ZS5zZXREaXNwbGF5U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5kb29yU3ByaXRlLnJlZnJlc2hCb2R5KCk7XG4gICAgICAgIHRoaXMuc2V0T3BlblNpZGVzKHRydWUsIHRydWUsIHRydWUsIHRydWUpO1xuXG4gICAgICAgIGNvbnN0IGNvbG9yRGljdCA9IHsgJ2JsdWUnOiAweDA0OTJDMiwgJ3JlZCc6IDB4OTAwYjAzLCAnZ3JlZW4nOiAweDAzYWMxMywgJ3llbGxvdyc6IDB4ZmNlMjA1fTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yRGljdFtjb2xvcl07XG4gICAgICAgIHRoaXMuZG9vclNwcml0ZS5zZXRUaW50KHRoaXMuY29sb3IpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRLZXkoc2NlbmU6IExldmVsU2NlbmUsIHgsIHkpIHtcbiAgICAgICAgdGhpcy5rZXlTcHJpdGUgPSBzY2VuZS5waHlzaWNzLmFkZC5zdGF0aWNTcHJpdGUoeCwgeSwgXCJrZXlcIik7XG4gICAgICAgIHRoaXMua2V5U3ByaXRlLnNldE9yaWdpbigwLCAxKTtcbiAgICAgICAgdGhpcy5rZXlTcHJpdGUucmVmcmVzaEJvZHkoKTtcbiAgICAgICAgdGhpcy5rZXlTcHJpdGUuc2V0VGludCh0aGlzLmNvbG9yKTtcbiAgICAgICAgdGhpcy5sb2NrZWQgPSB0cnVlO1xuXG4gICAgICAgIHNjZW5lLnBoeXNpY3MuYWRkLm92ZXJsYXAoc2NlbmUucGxheWVycywgdGhpcy5rZXlTcHJpdGUsIHRoaXMub25LZXlQaWNrdXAsIG51bGwsIHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbGxpc2lvblNldHRpbmdzKClcbiAgICB9XG5cbiAgICBwdWJsaWMgb25LZXlQaWNrdXAoX2EsIF9iKSB7XG4gICAgICAgIHRoaXMuc2V0TG9ja2VkKGZhbHNlKTtcbiAgICAgICAgdGhpcy5rZXlTcHJpdGUuc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5rZXlTcHJpdGUuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMua2V5U3ByaXRlLmJvZHkuZW5hYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZG9vclNwcml0ZS5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0T3BlblNpZGVzKG9wZW5MZWZ0OiBib29sZWFuLCBvcGVuUmlnaHQ6IGJvb2xlYW4sIG9wZW5VcCA9IGZhbHNlLCBvcGVuRG93biA9IGZhbHNlKSB7XG4gICAgICAgIC8vIFdoaWNoIGRpcmVjdGlvbiBjYW4gdGhlIHBsYXllciB3YWxrIGZyb20gaWYgdGhlIGRvb3IgaXMgdW5sb2NrZWQ/XG4gICAgICAgIHRoaXMub3BlbkxlZnQgPSBvcGVuTGVmdDtcbiAgICAgICAgdGhpcy5vcGVuUmlnaHQgPSBvcGVuUmlnaHQ7XG4gICAgICAgIHRoaXMub3BlblVwID0gb3BlblVwO1xuICAgICAgICB0aGlzLm9wZW5Eb3duID0gb3BlbkRvd247XG4gICAgICAgIHRoaXMudXBkYXRlQ29sbGlzaW9uU2V0dGluZ3MoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0TG9ja2VkKGxvY2tlZCkge1xuICAgICAgICB0aGlzLmxvY2tlZCA9IGxvY2tlZDtcbiAgICAgICAgaWYgKHRoaXMubG9ja2VkKSB7XG4gICAgICAgICAgICB0aGlzLmtleVNwcml0ZS5zZXRUaW50KDB4MDBmZmZmKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMua2V5U3ByaXRlLmNsZWFyVGludCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVDb2xsaXNpb25TZXR0aW5ncygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQ29sbGlzaW9uU2V0dGluZ3MoKSB7XG4gICAgICAgIHRoaXMuZG9vclNwcml0ZS5ib2R5LmNoZWNrQ29sbGlzaW9uID0ge1xuICAgICAgICAgICAgXCJsZWZ0XCI6ICEodGhpcy5vcGVuTGVmdCAmJiAhdGhpcy5sb2NrZWQpLFxuICAgICAgICAgICAgXCJyaWdodFwiOiAhKHRoaXMub3BlblJpZ2h0ICYmICF0aGlzLmxvY2tlZCksXG4gICAgICAgICAgICBcInVwXCI6ICEodGhpcy5vcGVuVXAgJiYgIXRoaXMubG9ja2VkKSxcbiAgICAgICAgICAgIFwiZG93blwiOiAhKHRoaXMub3BlbkRvd24gJiYgIXRoaXMubG9ja2VkKSxcbiAgICAgICAgICAgIFwibm9uZVwiOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9XG59IiwiaW1wb3J0IHsgR3JvdW5kUGxheWVyIH0gZnJvbSBcIi4vZ3JvdW5kUGxheWVyXCI7XG5cbmV4cG9ydCBlbnVtIFZpY3RpbURpcmVjdGlvbiB7XG4gICAgTEVGVCwgUklHSFRcbn1cblxuZXhwb3J0IGNsYXNzIEVsVmljdGltbyBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUge1xuICAgIHNhdmlvcjogR3JvdW5kUGxheWVyO1xuICAgIHNhdmVkOiBib29sZWFuO1xuICAgIGludmluY2libGU6IGJvb2xlYW47XG4gICAgXG4gICAgRlJJQ1RJT05fQ09FRiA9IDAuNztcbiAgICBUSFJPV19WRUxPQ0lUWV9YID0gNTAwO1xuICAgIFRIUk9XX1ZFTE9DSVRZX1kgPSAtMzAwO1xuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgeCwgeSwgdGV4dHVyZUtleTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCB4LCB5LCB0ZXh0dXJlS2V5KTtcbiAgICAgICAgc2NlbmUucGh5c2ljcy5hZGQuZXhpc3RpbmcodGhpcywgZmFsc2UpO1xuICAgICAgICB0aGlzLnNhdmlvciA9IG51bGw7XG4gICAgICAgIHRoaXMuc2F2ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZXREZXB0aCg1KTtcbiAgICAgICAgdGhpcy5zZXRTY2FsZSgyKTtcbiAgICAgICAgdGhpcy5hbmltcy5wbGF5KCd2aWN0aW1zYWQnKTtcbiAgICAgICAgdGhpcy5hbmltcy5zZXRQcm9ncmVzcyhNYXRoLnJhbmRvbSgpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGlja2VkVXBCeShncm91bmRQbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5zYXZpb3IgPSBncm91bmRQbGF5ZXI7XG4gICAgICAgIHRoaXMuYW5pbXMucGxheSgndmljdGltY2FycmllZCcpO1xuICAgICAgICB0aGlzLm9uSGl0R3JvdW5kKHRoaXMuc2NlbmUpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoX3RpbWUsIGRlbHRhKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0T3JpZ2luKDApO1xuICAgICAgICB0aGlzLnNldFZlbG9jaXR5WChcbiAgICAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54XG4gICAgICAgICAgICAqIE1hdGgucG93KDEgLSB0aGlzLkZSSUNUSU9OX0NPRUYsIGRlbHRhIC8gMTAwMClcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAodGhpcy5zYXZpb3IgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2hlbmV2ZXIgdGhlIHNhdmlvciB0dXJucywgY2xpcCB0aGUgYm91bmRpbmcgYm94IHRvIHRoZSBzYXZpb3IgZnJvbSBlYWNoIHNpZGUuXG4gICAgICAgIHRoaXMueSA9IHRoaXMuc2F2aW9yLnNwcml0ZS55IC0gdGhpcy5zYXZpb3Iuc3ByaXRlLmhlaWdodCAvIDI7XG4gICAgICAgIHRoaXMueCA9IHRoaXMuc2F2aW9yLnNwcml0ZS54IC0gdGhpcy5zYXZpb3Iuc3ByaXRlLndpZHRoIC8gMjtcblxuICAgICAgICAvLyBTbyB0aGF0IHRoZSBncmF2aXR5IGRvZXNuJ3QgZHJhZyBoaW0gZG93bi5cbiAgICAgICAgdGhpcy5zZXRWZWxvY2l0eSgwLCAwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VGhyb3duKGRpcmVjdGlvbjogVmljdGltRGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuc2F2aW9yID0gbnVsbDtcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgVmljdGltRGlyZWN0aW9uLkxFRlQ6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWZWxvY2l0eSgtdGhpcy5USFJPV19WRUxPQ0lUWV9YLCB0aGlzLlRIUk9XX1ZFTE9DSVRZX1kpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5ndWxhclZlbG9jaXR5KC0xMDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBWaWN0aW1EaXJlY3Rpb24uUklHSFQ6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWZWxvY2l0eSh0aGlzLlRIUk9XX1ZFTE9DSVRZX1gsIHRoaXMuVEhST1dfVkVMT0NJVFlfWSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBbmd1bGFyVmVsb2NpdHkoMTAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFuaW1zLnBsYXkoJ3ZpY3RpbXNhZCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkhpdEdyb3VuZChzY2VuZSkge1xuICAgICAgICB0aGlzLnNldEFuZ3VsYXJWZWxvY2l0eSgwKTtcbiAgICAgICAgaWYgKHRoaXMuc2F2ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Um90YXRpb24oMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiB0aGlzLFxuICAgICAgICAgICAgICAgIHJvdGF0aW9uOiAwLFxuICAgICAgICAgICAgICAgIGVhc2U6ICdQb3dlcjInLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRTYXZlZCgpIHtcbiAgICAgICAgdGhpcy5hbmltcy5wbGF5KCd2aWN0aW1oYXBweScpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBFbFZpY3RpbW8gfSBmcm9tIFwiLi9lbFZpY3RpbW9cIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgTGV2ZWxTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy9sZXZlbFNjZW5lXCI7XG5cbmV4cG9ydCBjbGFzcyBGaXJlIGV4dGVuZHMgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSB7XG4gICAgaHA6IG51bWJlcjtcbiAgICBiYXNlSHA6IG51bWJlcjtcbiAgICBmaXJlTnVtOiBudW1iZXI7XG4gICAgYmFzZVNjYWxlOiBudW1iZXI7XG4gICAgc2NlbmU7XG5cbiAgICBPTl9EQU1BR0VfVkVMT0NJVFlfWCA9IDMwMDtcbiAgICBPTl9EQU1BR0VfVkVMT0NJVFlfWSA9IDEwMDtcbiAgICBJTlZJTkNJQklMSVRZX1RJTUVfTVMgPSA1MDA7XG4gICAgRklSRV9QTEFZRVJfQ09MTElTSU9OX1BFTkFMVFlfTVMgPSAyMDAwO1xuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgeCwgeSwgdGV4dHVyZUtleSwgaHAgPSA1MCkge1xuICAgICAgICBzdXBlcihzY2VuZSwgeCwgeSwgdGV4dHVyZUtleSk7XG4gICAgICAgIHRoaXMuaHAgPSBocDtcbiAgICAgICAgdGhpcy5iYXNlSHAgPSBocDtcblxuICAgICAgICAvLyB0aGlzLnNwcml0ZSA9IHNjZW5lLnBoeXNpY3MuYWRkLnNwcml0ZSh4LCB5LCBzcHJpdGVLZXkpO1xuICAgICAgICB0aGlzLmZpcmVOdW0gPSAxICsgTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDMpICUgMyk7XG4gICAgICAgIGlmICh0aGlzLmZpcmVOdW0gPT0gMilcbiAgICAgICAgICAgIHRoaXMueSA9IHRoaXMueSAtIDEwO1xuICAgICAgICBpZiAodGhpcy5maXJlTnVtID09IDMpXG4gICAgICAgICAgICB0aGlzLnkgPSB0aGlzLnkgKyA1O1xuICAgICAgICB0aGlzLmFuaW1zLnBsYXkoYGZpcmUke3RoaXMuZmlyZU51bX1hbmltYCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuYW5pbXMuc2V0UHJvZ3Jlc3MoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC41KSB7XG4gICAgICAgICAgICB0aGlzLnNldEZsaXBYKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0Um90YXRpb24oUGhhc2VyLk1hdGguUk5ELnJvdGF0aW9uKCkgKiAwLjA1KVxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgICAgIHRoaXMuYmFzZVNjYWxlID0gUGhhc2VyLk1hdGguUk5ELnJlYWxJblJhbmdlKDAuOSwgMS4xKVxuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVTY2FsZSgpIHtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSAyICogdGhpcy5iYXNlU2NhbGUgKiAoKHRoaXMuaHAgKyB0aGlzLmJhc2VIcCkgLyAoMiAqIHRoaXMuYmFzZUhwKSk7XG4gICAgICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUpO1xuXG4gICAgICAgIC8vIFRPRE86IGNlbnRlciB0aGUgc2NhbGluZyBvbiB0aGUgYm90dG9tIGVkZ2VcbiAgICAgICAgLy8gY29uc3Qgb2Zmc2V0ID0gLShzY2FsZSAtIDEpICogdGhpcy5oZWlnaHQgLyAyXG4gICAgICAgIC8vIHRoaXMuc2V0T2Zmc2V0KDAsIG9mZnNldClcbiAgICAgICAgaWYgKHRoaXMuZmlyZU51bSA9PSAyKVxuICAgICAgICAgICAgdGhpcy5ib2R5LnNldE9mZnNldCgxMCwgMjUpO1xuICAgICAgICBlbHNlIGlmICh0aGlzLmZpcmVOdW0gPT0gMylcbiAgICAgICAgICAgIHRoaXMuYm9keS5zZXRPZmZzZXQoMTAsIDEwKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5ib2R5LnNldE9mZnNldCgxMCwgMTUpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGxvd2VySHAoKSB7XG4gICAgICAgIHRoaXMuaHAtLTtcblxuICAgICAgICBpZiAodGhpcy5ocCA8PSAwICYmIHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLnRzc1NvdW5kc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnNjZW5lLnRzc1NvdW5kcy5sZW5ndGgpXS5wbGF5KCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmJvZHkuZW5hYmxlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0czogdGhpcyxcbiAgICAgICAgICAgICAgICBhbHBoYTogMCxcbiAgICAgICAgICAgICAgICBzY2FsZTogMC41LFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgICAgZWFzZTogJ1Bvd2VyMidcbiAgICAgICAgICAgICAgICAvLyBlYXNlOiAnTGluZWFyJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVTY2FsZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXNldEhwKCkge1xuICAgICAgICB0aGlzLmhwID0gdGhpcy5iYXNlSHA7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlKHRydWUpO1xuICAgICAgICB0aGlzLnNldFZpc2libGUodHJ1ZSk7XG4gICAgICAgIHRoaXMuYm9keS5lbmFibGUgPSB0cnVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVNjYWxlKCk7XG4gICAgICAgIHRoaXMuc2V0QWxwaGEoMSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRmlyZUNvbGxpc2lvbihkYW1hZ2VkR3V5OiBQbGF5ZXIgfCBFbFZpY3RpbW8sIHNjZW5lOiBMZXZlbFNjZW5lKSB7XG4gICAgICAgIHNjZW5lLmF1U291bmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNjZW5lLmF1U291bmRzLmxlbmd0aCldLnBsYXkoKTtcblxuICAgICAgICBpZiAoZGFtYWdlZEd1eS5pbnZpbmNpYmxlKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGRhbWFnZWRTcHJpdGU6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUgfCBhbnk7XG4gICAgICAgIGlmIChkYW1hZ2VkR3V5IGluc3RhbmNlb2YgRWxWaWN0aW1vKSB7XG4gICAgICAgICAgICBkYW1hZ2VkU3ByaXRlID0gZGFtYWdlZEd1eVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGFtYWdlZFNwcml0ZSA9IGRhbWFnZWRHdXkuc3ByaXRlO1xuICAgICAgICAgICAgc2NlbmUudGltZXIudG90YWxfbXMgPSBNYXRoLm1heChzY2VuZS50aW1lci50b3RhbF9tcyAtIHRoaXMuRklSRV9QTEFZRVJfQ09MTElTSU9OX1BFTkFMVFlfTVMsIDApO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uRGlmZiA9IGRhbWFnZWRTcHJpdGUuZ2V0Q2VudGVyKCkuY2xvbmUoKS5zdWJ0cmFjdCh0aGlzLmdldENlbnRlcigpKTtcbiAgICAgICAgZGFtYWdlZFNwcml0ZS5zZXRWZWxvY2l0eVgodGhpcy5PTl9EQU1BR0VfVkVMT0NJVFlfWCAqIChwb3NpdGlvbkRpZmYueCA+IDAgPyAxIDogKC0xKSkpO1xuICAgICAgICBkYW1hZ2VkU3ByaXRlLnNldFZlbG9jaXR5WSgtdGhpcy5PTl9EQU1BR0VfVkVMT0NJVFlfWSk7XG5cbiAgICAgICAgZGFtYWdlZFNwcml0ZS5zZXRUaW50KDB4RkYwMDAwKTtcbiAgICAgICAgLy8gdGhpcy5pbnZpbmNpYmxlID0gdHJ1ZTtcbiAgICAgICAgLy8gc2Vyb2wuYWxwaGEgPSAwLjU7XG4gICAgICAgIHNjZW5lLnRpbWUuYWRkRXZlbnQoe1xuICAgICAgICAgICAgZGVsYXk6IHRoaXMuSU5WSU5DSUJJTElUWV9USU1FX01TLFxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBkYW1hZ2VkU3ByaXRlLmNsZWFyVGludCgpO1xuICAgICAgICAgICAgICAgIGRhbWFnZWRHdXkuaW52aW5jaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBFbFZpY3RpbW8sIFZpY3RpbURpcmVjdGlvbiB9IGZyb20gJy4vZWxWaWN0aW1vJztcbmltcG9ydCB7IFBsYXllciwgTUFYX1ZFTE9DSVRZX1ggfSBmcm9tICcuL3BsYXllcidcbmltcG9ydCB7IHplcm9BY2NlbGVyYXRpb25JZkJsb2NrZWQgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgR3JvdW5kUGxheWVyIGV4dGVuZHMgUGxheWVyIHtcbiAgICBjdXJzb3JzOiBhbnk7IC8vIHNlZSBob3cgaXQncyBhc3NpZ25lZCBpbiBjb25zdHJ1Y3RvclxuICAgIHNhdmluZzogRWxWaWN0aW1vO1xuICAgIGxhc3RTYXZpbmdUaW1lc3RhbXBfTVM6IG51bWJlcjtcbiAgICBsYXN0RGlyZWN0aW9uOiBWaWN0aW1EaXJlY3Rpb24gPSBWaWN0aW1EaXJlY3Rpb24uTEVGVDsgLy8gSnVzdCBkZWZhdWx0LlxuXG4gICAgU0FWSU5HX0NPT0xET1dOX01TID0gNTAwO1xuXG4gICAgQUNDRUxFUkFUSU9OX1ggPSAzMDAwO1xuICAgIEpVTVBfVkVMT0NJVFlfWSA9IC01NTA7XG5cbiAgICBHUkFORF9GUklDVElPTl9DT0VGID0gMC45OTk7XG5cbiAgICBMRUZUX0FOSU1fS0VZOiBzdHJpbmc7XG4gICAgUklHSFRfQU5JTV9LRVk6IHN0cmluZztcbiAgICBET1dOX0FOSU1fS0VZOiBzdHJpbmc7XG4gICAgVVBfQU5JTV9LRVk6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHg6IGludGVnZXIsIHk6IGludGVnZXIsIHNwcml0ZUtleTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCB4LCB5LCBzcHJpdGVLZXkpO1xuXG4gICAgICAgIHRoaXMuc3ByaXRlLnNldE1heFZlbG9jaXR5KE1BWF9WRUxPQ0lUWV9YLCAxMDAwMDApO1xuXG4gICAgICAgIHNjZW5lLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgICAgICBrZXk6ICdncmFuZExlZnQnLFxuICAgICAgICAgICAgZnJhbWVzOiBzY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycyhzcHJpdGVLZXksIHsgc3RhcnQ6IDAsIGVuZDogNSB9KSxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTAsXG4gICAgICAgICAgICByZXBlYXQ6IC0xXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNjZW5lLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgICAgICBrZXk6ICdncmFuZFR1cm4nLFxuICAgICAgICAgICAgZnJhbWVzOiBbeyBrZXk6IHNwcml0ZUtleSwgZnJhbWU6IDYgfV0sXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDIwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNjZW5lLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgICAgICBrZXk6ICdncmFuZExlZnRTYXZpbmcnLFxuICAgICAgICAgICAgZnJhbWVzOiBzY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycyhzcHJpdGVLZXksIHsgc3RhcnQ6IDcsIGVuZDogMTIgfSksXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDEwLFxuICAgICAgICAgICAgcmVwZWF0OiAtMVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyAgSW5wdXQgRXZlbnRzXG4gICAgICAgIHRoaXMuY3Vyc29ycyA9IHNjZW5lLmlucHV0LmtleWJvYXJkLmFkZEtleXMoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdXA6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5XLFxuICAgICAgICAgICAgICAgIGRvd246IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TLFxuICAgICAgICAgICAgICAgIGxlZnQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5BLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuRCxcbiAgICAgICAgICAgICAgICB0aHJvdzogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlNQQUNFXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKHRpbWUsIGRlbHRhKSB7XG4gICAgICAgIHRoaXMuc3ByaXRlLnNldFZlbG9jaXR5WChcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLmJvZHkudmVsb2NpdHkueFxuICAgICAgICAgICAgKiBNYXRoLnBvdygxIC0gdGhpcy5HUkFORF9GUklDVElPTl9DT0VGLCBkZWx0YSAvIDEwMDApXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5zcHJpdGUuZmxpcFggPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5jdXJzb3JzLmxlZnQuaXNEb3duKSB7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5zZXRBY2NlbGVyYXRpb25YKC10aGlzLkFDQ0VMRVJBVElPTl9YKTtcbiAgICAgICAgICAgIHRoaXMubGFzdERpcmVjdGlvbiA9IFZpY3RpbURpcmVjdGlvbi5MRUZUO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zYXZpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS5hbmltcy5wbGF5KCdncmFuZExlZnRTYXZpbmcnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmluZy5mbGlwWCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS5hbmltcy5wbGF5KCdncmFuZExlZnQnLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnNvcnMucmlnaHQuaXNEb3duKSB7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5zZXRBY2NlbGVyYXRpb25YKHRoaXMuQUNDRUxFUkFUSU9OX1gpO1xuICAgICAgICAgICAgdGhpcy5sYXN0RGlyZWN0aW9uID0gVmljdGltRGlyZWN0aW9uLlJJR0hUO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zYXZpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS5hbmltcy5wbGF5KCdncmFuZExlZnRTYXZpbmcnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmluZy5mbGlwWCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLmFuaW1zLnBsYXkoJ2dyYW5kTGVmdCcsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zcHJpdGUuZmxpcFggPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUuc2V0QWNjZWxlcmF0aW9uWCgwKTtcblxuICAgICAgICAgICAgdGhpcy5zcHJpdGUuYW5pbXMucGxheSgnZ3JhbmRUdXJuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jdXJzb3JzLnVwLmlzRG93biAmJiB0aGlzLnNwcml0ZS5ib2R5LmJsb2NrZWQuZG93bikge1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUuc2V0QWNjZWxlcmF0aW9uWSgwKTtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnNldFZlbG9jaXR5WSh0aGlzLkpVTVBfVkVMT0NJVFlfWSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jdXJzb3JzLnRocm93LmlzRG93biAmJiB0aGlzLnNhdmluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNhdmluZy5nZXRUaHJvd24odGhpcy5sYXN0RGlyZWN0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuc2F2aW5nID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMubGFzdFNhdmluZ1RpbWVzdGFtcF9NUyA9IHRpbWU7XG4gICAgICAgIH1cblxuICAgICAgICB6ZXJvQWNjZWxlcmF0aW9uSWZCbG9ja2VkKHRoaXMuc3ByaXRlLmJvZHkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwaWNrVXAodGltZV9tczogbnVtYmVyLCBlbFZpY3RpbW8pOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuc2F2aW5nICE9IG51bGwgfHwgZWxWaWN0aW1vLnNhdmVkIHx8IHRpbWVfbXMgPCB0aGlzLmxhc3RTYXZpbmdUaW1lc3RhbXBfTVMgKyB0aGlzLlNBVklOR19DT09MRE9XTl9NUykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2F2aW5nID0gZWxWaWN0aW1vO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgSG9zZVBsYXllciB9IGZyb20gXCIuL2hvc2VQbGF5ZXJcIjtcbmltcG9ydCB7IExldmVsU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvbGV2ZWxTY2VuZVwiO1xuaW1wb3J0IHsgY2xhbXBJZkJsb2NrZWQsIHplcm9BY2NlbGVyYXRpb25JZkJsb2NrZWQgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgSG9zZSBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXIge1xuXG4gICAgcGFydHM6IEFycmF5PFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGU+ID0gbmV3IEFycmF5KCk7XG4gICAgaW5pdGlhbFg6IG51bWJlcjtcbiAgICBpbml0aWFsWTogbnVtYmVyO1xuXG4gICAgRElTVEFOQ0VfQkVUV0VFTl9QQVJUUzogbnVtYmVyID0gNTsgIC8vIHdoYXQgKnNob3VsZCogdGhlIGRpc3RhbmNlIGJlP1xuICAgIFNQUklOR19DT0VGOiBudW1iZXIgPSAzMDA7ICAvLyBob3cgc3Ryb25nIHRoZSBmb3JjZSBpcyB0aGF0IGlzIHByb3BvcnRpb25hbCB0byB0aGUgZGlzdGFuY2VcbiAgICBEQU1QSU5HX0NPRUY6IG51bWJlciA9IDIwMDsgIC8vIGhvdyBxdWlja2x5IHZlbG9jaXR5IGRlY2F5cyB0byAwXG4gICAgQVRUQUNIRURfUFVMTF9DT0VGID0gMC4wMDI7IC8vIGhvdyBzdHJvbmdseSB0aGUgYXR0YWNoZWQgb2JqZWN0IGlzIHB1bGxlZFxuICAgIE5fUEhZU0lDU19JVEVSQVRJT05TID0gMTsgLy8gbW9yZSA9IGxlc3MgYm91bmN5LCBidXQgbW9yZSBDUFUgLSAxIHNob3VsZCBiZSBva1xuICAgIE5fUEFSVFMgPSAzMjsgIC8vIGhvdyBtYW55IHBhcnRzIG9mIHRoZSByb3BlXG4gICAgTUFYX0FDQ0VMRVJBVElPTiA9IDEwMDAwMDtcblxuICAgIC8vIFNtb290aHMgdGhlIGZvcmNlIGFwcGxpZWQgdG8gdGhlIGhvc2UgcGFydHMgb3ZlciB0aW1lLiBJbiBbMCwgMV0uXG4gICAgLy8gTG93ZXIgbWFrZXMgdGhlIHJvcGUgbW9yZSByZWFsaXN0aWMsIGJ1dCB0ZW5kcyB0byB3b2JibGVcbiAgICBWRUxPQ0lUWV9TTU9PVEhJTkdfQ09FRiA9IDAuNTtcblxuICAgIC8vIHRlbXBvcmFyeSBmaXhcbiAgICBIT1NFX1NUQVJUX1BPSU5UID0gbmV3IFBoYXNlci5NYXRoLlZlY3RvcjIoMjAwLCA1MDApO1xuXG4gICAgSE9TRV9ERUJVR19WSUVXID0gZmFsc2U7ICAvLyBEaXNhYmxlIHRoZSBsaW5lLCBzd2l0Y2ggdG8gcGFydGljbGVzXG4gICAgSE9TRV9DT0xPUl8xID0gMHgzMzMzMzM7XG4gICAgSE9TRV9DT0xPUl8yID0gMHg2NjY2NjY7XG4gICAgSE9TRV9USElDS05FU1MgPSAxNTtcbiAgICBQQVJUX1NDQUxFID0gMi41OyAvLyBIb3cgYmlnIGFyZSB0aGUgYmFsbHM/XG4gICAgTUFYX0RJU1RBTkNFID0gMTAwMDsgLy8gTGltaXRzIHRoZSBmb3JjZSBhcHBsaWVkIHdoZW4gdGhlIGJhbGxzIGFyZSBmdXJ0aGVyIHRoYW4gdGhpcyAocHgpXG5cbiAgICAvLyBob3Jpem9udGFsIHNwZWVkIGlzIG11bHRpcGxpZWQgYnkgKDEgLSBGUklDVElPTl9DT0VGKSBlYWNoIHNlY29uZFxuICAgIC8vIHNvIHZhbHVlcyBiZXR3ZWVuIDAgYW5kIDEgYXJlIHJlYXNvbmFibGVcbiAgICAvLyBOb3RlOiB0aGlzIGhhcHBlbnMgZm9yIHRoZSBwYXJ0cyBpbiB0aGUgYWlyIGFzIHdlbGxcbiAgICBGUklDVElPTl9DT0VGID0gMC41O1xuXG4gICAgLy8gaG93IG11Y2ggdGhlIGhvc2UgbGlrZXMgdG8gc2xpZGUgYWxvbmcgd2FsbHMsIG5vbi1uZWdhdGl2ZVxuICAgIFNMSURJTkdfQ09FRiA9IDAuNztcbiAgICBTTElESU5HX01BWCA9IDUwO1xuICAgIFxuICAgIGVuZEF0dGFjaGVkVG86IEhvc2VQbGF5ZXIgPSBudWxsO1xuICAgIHN0YXJ0UG9pbnQ6IFBoYXNlci5NYXRoLlZlY3RvcjI7XG4gICAgY3VydmU6IFBoYXNlci5DdXJ2ZXMuU3BsaW5lO1xuICAgIGdyYXBoaWNzO1xuICAgIGRlYnVnVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XG4gICAgc21vb3RoZWRWZWxvY2l0aWVzOiBBcnJheTxQaGFzZXIuTWF0aC5WZWN0b3IyPjtcbiAgICBwdWxsUGxheWVyID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBMZXZlbFNjZW5lLCB4LCB5KSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCAwLCAwKTtcbiAgICAgICAgdGhpcy5pbml0aWFsWCA9IHg7XG4gICAgICAgIHRoaXMuaW5pdGlhbFkgPSB5O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5kZWJ1Z1RleHQgPSBzY2VuZS5hZGQudGV4dCg3MDAsIDEwMCwgJ0RlYnVnIHRleHQnKTtcbiAgICAgICAgaWYgKCF0aGlzLkhPU0VfREVCVUdfVklFVykge1xuICAgICAgICAgICAgdGhpcy5kZWJ1Z1RleHQuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNtb290aGVkVmVsb2NpdGllcyA9IFtdO1xuXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSB0aGlzLk5fUEFSVFMgLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuTl9QQVJUUzsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJ0ID0gc2NlbmUucGh5c2ljcy5hZGQuc3ByaXRlKHggKyBpICogMSwgeSAtIGkgKiAxLCBcImRlYnVnYmFsbFwiKTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLkhPU0VfREVCVUdfVklFVykge1xuICAgICAgICAgICAgICAgIHBhcnQuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBhcnRzLnB1c2gocGFydCk7XG4gICAgICAgICAgICBwYXJ0LnNldENvbGxpZGVXb3JsZEJvdW5kcyh0cnVlKTtcblxuICAgICAgICAgICAgcGFydC5zZXRTY2FsZSh0aGlzLlBBUlRfU0NBTEUpO1xuXG4gICAgICAgICAgICBwYXJ0LmJvZHkuc2V0Q2lyY2xlKHBhcnQud2lkdGggLyAyKTtcbiAgICAgICAgICAgIHRoaXMuc21vb3RoZWRWZWxvY2l0aWVzLnB1c2gobmV3IFBoYXNlci5NYXRoLlZlY3RvcjIoMCwgMCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcy5zdGFydFBvaW50ID0gdGhpcy5wYXJ0c1t0aGlzLnBhcnRzLmxlbmd0aCAtIDFdLmJvZHkucG9zaXRpb24uY2xvbmUoKVxuICAgICAgICB0aGlzLnN0YXJ0UG9pbnQgPSB0aGlzLkhPU0VfU1RBUlRfUE9JTlQuY2xvbmUoKTtcblxuICAgICAgICB0aGlzLmN1cnZlID0gbmV3IFBoYXNlci5DdXJ2ZXMuU3BsaW5lKHRoaXMucGFydHMubWFwKHAgPT4gcC5nZXRDZW50ZXIoKSkpO1xuICAgICAgICB0aGlzLmdyYXBoaWNzID0gc2NlbmUuYWRkLmdyYXBoaWNzKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoRW5kVG8oaG9zZVBsYXllcjogSG9zZVBsYXllcikge1xuICAgICAgICB0aGlzLmVuZEF0dGFjaGVkVG8gPSBob3NlUGxheWVyO1xuICAgIH1cblxuICAgIHNldFN0YXJ0VG8ocDogUGhhc2VyLk1hdGguVmVjdG9yMikge1xuICAgICAgICB0aGlzLnN0YXJ0UG9pbnQgPSBwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuTl9QQVJUUzsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBhcnRzW2ldLnNldFZlbG9jaXR5KDAsIDApO1xuICAgICAgICAgICAgbGV0IGNvZWYgPSBpIC8gKHRoaXMuTl9QQVJUUyAtIDEpO1xuICAgICAgICAgICAgdGhpcy5zbW9vdGhlZFZlbG9jaXRpZXNbaV0uc2NhbGUoMCk7XG4gICAgICAgICAgICBsZXQgcG9zID0gcC5jbG9uZSgpLnNjYWxlKDEgLSBjb2VmKS5hZGQodGhpcy5lbmRBdHRhY2hlZFRvLnNwcml0ZS5nZXRDZW50ZXIoKS5zY2FsZShjb2VmKSk7XG4gICAgICAgICAgICB0aGlzLnBhcnRzW2ldLnNldFBvc2l0aW9uKHBvcy54LCBwb3MueSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wdWxsUGxheWVyID0gZmFsc2VcbiAgICAgICAgdGhpcy5zY2VuZS50aW1lLmRlbGF5ZWRDYWxsKDMwMCwgKCkgPT4ge3RoaXMucHVsbFBsYXllciA9IHRydWU7fSwgW10sIHRoaXMpO1xuICAgIH1cblxuICAgIGdldFNwcmluZ0ZvcmNlcyh2ZWxvY2l0aWVzKTogQXJyYXk8UGhhc2VyLk1hdGguVmVjdG9yMj4ge1xuICAgICAgICBsZXQgZm9yY2VzOiBBcnJheTxQaGFzZXIuTWF0aC5WZWN0b3IyPiA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBQaGFzZXIuTWF0aC5EaXN0YW5jZS5CZXR3ZWVuUG9pbnRzKHRoaXMucGFydHNbaV0uZ2V0Q2VudGVyKCksIHRoaXMucGFydHNbaSArIDFdLmdldENlbnRlcigpKTtcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA+IHRoaXMuTUFYX0RJU1RBTkNFKSB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2UgPSB0aGlzLk1BWF9ESVNUQU5DRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZvcmNlID0gLSB0aGlzLlNQUklOR19DT0VGICogKFxuICAgICAgICAgICAgICAgIGRpc3RhbmNlIC0gdGhpcy5ESVNUQU5DRV9CRVRXRUVOX1BBUlRTXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBmb3JjZXMucHVzaChcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnRzW2ldLmdldENlbnRlcigpXG4gICAgICAgICAgICAgICAgICAgIC5jbG9uZSgpXG4gICAgICAgICAgICAgICAgICAgIC5zdWJ0cmFjdCh0aGlzLnBhcnRzW2kgKyAxXS5nZXRDZW50ZXIoKSlcbiAgICAgICAgICAgICAgICAgICAgLnNldExlbmd0aChkaXN0YW5jZSAqIGZvcmNlKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3JjZXM7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgZm9yIChjb25zdCBwYXJ0IG9mIHRoaXMucGFydHMpIHtcbiAgICAgICAgICAgIHBhcnQuc2V0VmlzaWJsZSh0aGlzLkhPU0VfREVCVUdfVklFVyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuSE9TRV9ERUJVR19WSUVXKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnZlID0gbmV3IFBoYXNlci5DdXJ2ZXMuU3BsaW5lKHRoaXMucGFydHMubWFwKHAgPT4gcC5nZXRDZW50ZXIoKSkpO1xuICAgICAgICAgICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xuXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVTdHlsZSh0aGlzLkhPU0VfVEhJQ0tORVNTLCB0aGlzLkhPU0VfQ09MT1JfMSwgMSk7XG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLnNldERlcHRoKDEpXG4gICAgICAgICAgICB0aGlzLmN1cnZlLmRyYXcodGhpcy5ncmFwaGljcywgNjQpO1xuXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVTdHlsZSh0aGlzLkhPU0VfVEhJQ0tORVNTIC8gMiwgdGhpcy5IT1NFX0NPTE9SXzIsIDEpO1xuICAgICAgICAgICAgdGhpcy5jdXJ2ZS5kcmF3KHRoaXMuZ3JhcGhpY3MsIDY0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZShfLCBkZWx0YSkge1xuICAgICAgICAvLyBGID0gLWsofHh8LWQpKHgvfHh8KSAtIGJ2XG4gICAgICAgIC8vIGh0dHBzOi8vZ2FmZmVyb25nYW1lcy5jb20vcG9zdC9zcHJpbmdfcGh5c2ljcy9cblxuICAgICAgICBsZXQgZm9yY2VzO1xuXG4gICAgICAgIGxldCBuZXdWZWxvY2l0aWVzOiBBcnJheTxQaGFzZXIuTWF0aC5WZWN0b3IyPiA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG5ld1ZlbG9jaXRpZXMucHVzaCh0aGlzLnBhcnRzW2ldLmJvZHkudmVsb2NpdHkuY2xvbmUoKSk7XG4gICAgICAgICAgICAvLyB6ZXJvQWNjZWxlcmF0aW9uSWZCbG9ja2VkKHRoaXMucGFydHNbaV0uYm9keSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuSXRlcmF0aW9ucyA9IHRoaXMuTl9QSFlTSUNTX0lURVJBVElPTlM7XG4gICAgICAgIGZvciAobGV0IGl0ID0gMDsgaXQgPCBuSXRlcmF0aW9uczsgaXQrKykge1xuICAgICAgICAgICAgZm9yY2VzID0gdGhpcy5nZXRTcHJpbmdGb3JjZXMobmV3VmVsb2NpdGllcyk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMucGFydHNbaV0uc2V0TWF4VmVsb2NpdHkoMTAwLCAxMDApXG5cbiAgICAgICAgICAgICAgICBsZXQgYWNjZWwgPSBuZXcgUGhhc2VyLk1hdGguVmVjdG9yMigwLCAwKTtcbiAgICAgICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjZWwuc3VidHJhY3QoZm9yY2VzW2kgLSAxXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpID4gMCAmJiBpIDwgdGhpcy5wYXJ0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjY2VsLmFkZChmb3JjZXNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhY2NlbFkpXG5cbiAgICAgICAgICAgICAgICBpZiAoYWNjZWwubGVuZ3RoKCkgPiB0aGlzLk1BWF9BQ0NFTEVSQVRJT04pIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjZWwuc2V0TGVuZ3RoKHRoaXMuTUFYX0FDQ0VMRVJBVElPTik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFjY2VsLnN1YnRyYWN0KG5ld1ZlbG9jaXRpZXNbaV0uY2xvbmUoKS5zY2FsZSh0aGlzLkRBTVBJTkdfQ09FRikpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY3VyRGVsdGEgPSBkZWx0YSAvIG5JdGVyYXRpb25zO1xuICAgICAgICAgICAgICAgIGxldCBjb2VmID0gMC4wMDAxICogY3VyRGVsdGE7XG4gICAgICAgICAgICAgICAgbGV0IGNvZWYyID0gMC4wMDAxICogY3VyRGVsdGE7XG5cbiAgICAgICAgICAgICAgICBuZXdWZWxvY2l0aWVzW2ldLmFkZChhY2NlbC5zY2FsZShjb2VmKSk7XG5cbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBvbmx5IGRvIHRoaXMgd2hlbiB0aGUgcm9wZSBpcyBvbiB0aGUgZ3JvdW5kP1xuICAgICAgICAgICAgICAgIG5ld1ZlbG9jaXRpZXNbaV0ueCAqPSBNYXRoLnBvdyh0aGlzLkZSSUNUSU9OX0NPRUYsIChjdXJEZWx0YSAvIDEwMDApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZlY1RvU3RyaW5nID0gKHYpID0+IGAoJHt2LngudG9GaXhlZCgyKX0sICR7di55LnRvRml4ZWQoMil9KWA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLnBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBBcHBseSB0ZW1wb3JhbCBzbW9vdGhpbmcgdG8gdGhlIHZlbG9jaXR5XG4gICAgICAgICAgICBjb25zdCBjdXJDb2VmID0gTWF0aC5wb3codGhpcy5WRUxPQ0lUWV9TTU9PVEhJTkdfQ09FRiwgZGVsdGEgLyAxNik7XG4gICAgICAgICAgICB0aGlzLnNtb290aGVkVmVsb2NpdGllc1tpXSA9IChcbiAgICAgICAgICAgICAgICB0aGlzLnNtb290aGVkVmVsb2NpdGllc1tpXVxuICAgICAgICAgICAgICAgICAgICAuY2xvbmUoKS5zY2FsZShjdXJDb2VmKVxuICAgICAgICAgICAgICAgICAgICAuYWRkKG5ld1ZlbG9jaXRpZXNbaV0uY2xvbmUoKS5zY2FsZSgxIC0gY3VyQ29lZikpXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBsZXQgYXBwbGllZFZlbG9jaXR5ID0gdGhpcy5yZWRpcmVjdElmQmxvY2tlZCh0aGlzLnBhcnRzW2ldLCB0aGlzLnNtb290aGVkVmVsb2NpdGllc1tpXSk7XG5cbiAgICAgICAgICAgIHRoaXMucGFydHNbaV0uc2V0VmVsb2NpdHkoYXBwbGllZFZlbG9jaXR5LngsIGFwcGxpZWRWZWxvY2l0eS55KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLkhPU0VfREVCVUdfVklFVykge1xuICAgICAgICAgICAgdGhpcy5wYXJ0c1szXS5zZXRUaW50KDB4ZmYwMDAwKTtcbiAgICAgICAgICAgIHRoaXMuZGVidWdUZXh0LnNldFRleHQoXG4gICAgICAgICAgICAgICAgdmVjVG9TdHJpbmcodGhpcy5zbW9vdGhlZFZlbG9jaXRpZXNbM10pICsgXCJcXG5cIiArXG4gICAgICAgICAgICAgICAgdmVjVG9TdHJpbmcoZm9yY2VzWzBdKSArIFwiXFxuXCIgK1xuICAgICAgICAgICAgICAgIHZlY1RvU3RyaW5nKGZvcmNlc1sxXSkgKyBcIlxcblwiXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZW5kQXR0YWNoZWRUbyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gQXBwbHkgZm9yY2UgdG8gdGhlIHBsYXllclxuICAgICAgICAgICAgbGV0IHBsYXllckJvZHkgPSB0aGlzLmVuZEF0dGFjaGVkVG8uc3ByaXRlLmJvZHk7XG4gICAgICAgICAgICB0aGlzLnBhcnRzWzBdLnNldFBvc2l0aW9uKFxuICAgICAgICAgICAgICAgIHBsYXllckJvZHkucG9zaXRpb24ueCArIHBsYXllckJvZHkud2lkdGggLyAyLFxuICAgICAgICAgICAgICAgIHBsYXllckJvZHkucG9zaXRpb24ueSArIHBsYXllckJvZHkuaGVpZ2h0IC8gMixcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnBhcnRzWzBdLnNldFZlbG9jaXR5KDAsIDApO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuZW5kQXR0YWNoZWRUby5pc0FuY2hvcmVkICYmIHRoaXMucHVsbFBsYXllcikge1xuICAgICAgICAgICAgICAgIGZvcmNlc1swXS5zY2FsZSh0aGlzLkFUVEFDSEVEX1BVTExfQ09FRiAqIGRlbHRhIC8gMTAwMCk7XG5cbiAgICAgICAgICAgICAgICBwbGF5ZXJCb2R5LnNldFZlbG9jaXR5KFxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJCb2R5LnZlbG9jaXR5LnggKyBmb3JjZXNbMF0ueCxcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyQm9keS52ZWxvY2l0eS55ICsgZm9yY2VzWzBdLnksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXJ0UG9pbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIEZpeCB0aGUgc3RhcnRpbmcgcG9pbnQgLSB0aGUgbGFzdCBwYXJ0XG4gICAgICAgICAgICB0aGlzLnBhcnRzW3RoaXMucGFydHMubGVuZ3RoIC0gMV0uc2V0UG9zaXRpb24oXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFBvaW50LngsXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFBvaW50LnksXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5wYXJ0c1t0aGlzLnBhcnRzLmxlbmd0aCAtIDFdLnNldFZlbG9jaXR5KDAsIDApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWRpcmVjdElmQmxvY2tlZChcbiAgICAgICAgcGFydDogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSxcbiAgICAgICAgd2FudGVkVmVsb2NpdHk6IFBoYXNlci5NYXRoLlZlY3RvcjIsXG4gICAgKSB7XG4gICAgICAgIHdhbnRlZFZlbG9jaXR5ID0gd2FudGVkVmVsb2NpdHkuY2xvbmUoKTtcblxuICAgICAgICBsZXQgY29tcHV0ZSA9IChwYXJhLCBwZXJwKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcGFyYSArIE1hdGguc2lnbihwYXJhKSAqIE1hdGgubWluKE1hdGguYWJzKHBlcnApICogdGhpcy5TTElESU5HX0NPRUYsIHRoaXMuU0xJRElOR19NQVgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChwYXJ0LmJvZHkuYmxvY2tlZC5sZWZ0KSB7XG4gICAgICAgICAgICB3YW50ZWRWZWxvY2l0eS55ID0gY29tcHV0ZSh3YW50ZWRWZWxvY2l0eS55LCB3YW50ZWRWZWxvY2l0eS54KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFydC5ib2R5LmJsb2NrZWQucmlnaHQpIHtcbiAgICAgICAgICAgIHdhbnRlZFZlbG9jaXR5LnkgPSBjb21wdXRlKHdhbnRlZFZlbG9jaXR5LnksIHdhbnRlZFZlbG9jaXR5LngpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRoaXMgbWFrZXMgdGhlIGhvc2UgXCJzdGlja1wiIHRvIHRoZSBncm91bmRcbiAgICAgICAgLy8gaWYgKHBhcnQuYm9keS5ibG9ja2VkLnVwKSB7XG4gICAgICAgIC8vICAgICB3YW50ZWRWZWxvY2l0eS55ID0gY29tcHV0ZSh3YW50ZWRWZWxvY2l0eS54LCB3YW50ZWRWZWxvY2l0eS55KTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAocGFydC5ib2R5LmJsb2NrZWQuZG93bikge1xuICAgICAgICAvLyAgICAgd2FudGVkVmVsb2NpdHkueSA9IGNvbXB1dGUod2FudGVkVmVsb2NpdHkueCwgd2FudGVkVmVsb2NpdHkueSk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICByZXR1cm4gd2FudGVkVmVsb2NpdHk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUGxheWVyLCBNQVhfVkVMT0NJVFlfWCB9IGZyb20gJy4vcGxheWVyJztcbmltcG9ydCB7IHplcm9BY2NlbGVyYXRpb25JZkJsb2NrZWQgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgSG9zZVBsYXllciBleHRlbmRzIFBsYXllciB7XG4gICAgY3Vyc29yczogUGhhc2VyLlR5cGVzLklucHV0LktleWJvYXJkLkN1cnNvcktleXM7XG4gICAgcGFydGljbGVzOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuR3JvdXA7XG4gICAgaXNBbmNob3JlZDogYm9vbGVhbjtcblxuICAgIE5VTV9QQVJUSUNMRVMgPSA0MDA7XG4gICAgQUNDRUxFUkFUSU9OX1ggPSA1MDA7XG4gICAgU1BSSU5LTEVSX0FDQyA9IDI1O1xuICAgIEpVTVBfVkVMT0NJVFlfWSA9IC04MDA7XG4gICAgXG4gICAgSk9TRV9GUklDVElPTl9DT0VGID0gMC44NTtcblxuICAgIFdBVEVSX1ZFTE9DSVRZX01JTiA9IDQwMDtcbiAgICBXQVRFUl9WRUxPQ0lUWV9NQVggPSA1MDA7XG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB4OiBpbnRlZ2VyLCB5OiBpbnRlZ2VyLCBzcHJpdGVLZXk6IHN0cmluZykge1xuICAgICAgICBzdXBlcihzY2VuZSwgeCwgeSwgc3ByaXRlS2V5KTtcblxuICAgICAgICAvLyB0aGlzLnNwcml0ZS5zZXRGcmljdGlvblgoMTAwMDAwKVxuICAgICAgICB0aGlzLnNwcml0ZS5yZWZyZXNoQm9keSgpO1xuICAgICAgICB0aGlzLnNwcml0ZS5zZXRNYXhWZWxvY2l0eShNQVhfVkVMT0NJVFlfWCwgMTAwMDAwKTtcbiAgICAgICAgdGhpcy5zcHJpdGUuc2V0RGVwdGgoMTApOyAvLyB3aHkgaXMgdGhlIGhvc2Ugc3RpbGwgaW4gZnJvbnQ/XG4gICAgICAgIHRoaXMuaXNBbmNob3JlZCA9IGZhbHNlO1xuXG4gICAgICAgIFsnam9zZVVwJywgJ2pvc2VVcFJpZ2h0JywgJ2pvc2VVcEFuY2hvcmVkJywgJ2pvc2VVcFJpZ2h0QW5jaG9yZWQnLCAnam9zZVJpZ2h0QWNobm9yZWQnXS5mb3JFYWNoKChzdHIsIGlkeCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5hbmltcy5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIGtleTogc3RyLFxuICAgICAgICAgICAgICAgIGZyYW1lczogW3sga2V5OiBzcHJpdGVLZXksIGZyYW1lOiBpZHggfV0sXG4gICAgICAgICAgICAgICAgZnJhbWVSYXRlOiAxMCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vICBJbnB1dCBFdmVudHNcbiAgICAgICAgdGhpcy5jdXJzb3JzID0gc2NlbmUuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xuXG4gICAgICAgIC8vIFdhdGVyIHNwcmlua2xlclxuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IHNjZW5lLnBoeXNpY3MuYWRkLmdyb3VwKHtcbiAgICAgICAgICAgIGJvdW5jZVg6IDAuMyxcbiAgICAgICAgICAgIGJvdW5jZVk6IDAuMyxcbiAgICAgICAgICAgIGNvbGxpZGVXb3JsZEJvdW5kczogdHJ1ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLk5VTV9QQVJUSUNMRVM7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMuY3JlYXRlKDAsIDAsICdkcm9wbGV0JywgMCwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgIGxldCBwYXJ0aWNsZTogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSA9IHRoaXMucGFydGljbGVzLmdldExhc3QoKTtcblxuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSAxICsgTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIHBhcnRpY2xlLnNldFNjYWxlKHNjYWxlKTtcbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC41KSB7XG4gICAgICAgICAgICAgICAgcGFydGljbGUuc2V0RmxpcFgodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuNSkge1xuICAgICAgICAgICAgICAgIHBhcnRpY2xlLnNldEZsaXBZKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFydGljbGUuc2V0QWxwaGEoMC4zICsgTWF0aC5yYW5kb20oKSAqIDAuNylcbiAgICAgICAgICAgIHBhcnRpY2xlLnNldEZyaWN0aW9uWCgwLjUpXG5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSB0aGV5IGFwcGVhciBhcyBpbnZpc2libGUgb2JqZWN0cyB0aGF0IHBsYXllcnMgY2FuIGNvbGxpZGUgd2l0aC5cbiAgICAgICAgICAgIHBhcnRpY2xlLmJvZHkuZW5hYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBwYXJ0aWNsZS5zZXREZXB0aCgxMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKHRpbWUsIGRlbHRhKSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZSh0aW1lLCBkZWx0YSk7XG5cbiAgICAgICAgdGhpcy5zcHJpdGUuc2V0VmVsb2NpdHlYKFxuICAgICAgICAgICAgdGhpcy5zcHJpdGUuYm9keS52ZWxvY2l0eS54XG4gICAgICAgICAgICAqIE1hdGgucG93KDEgLSB0aGlzLkpPU0VfRlJJQ1RJT05fQ09FRiwgZGVsdGEgLyAxMDAwKVxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBkaWZmID0gbmV3IFBoYXNlci5NYXRoLlZlY3RvcjIoMCwgMCk7XG4gICAgICAgIHRoaXMuaXNBbmNob3JlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuc3ByaXRlLmZsaXBZID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3ByaXRlLmZsaXBYID0gZmFsc2U7XG4gICAgICAgIC8vIERlZmF1bHQuXG4gICAgICAgIHRoaXMuc3ByaXRlLmFuaW1zLnBsYXkoJ2pvc2VVcCcpO1xuICAgICAgICB0aGlzLnNwcml0ZS5hbmdsZSA9IDA7XG5cbiAgICAgICAgbGV0IGFuZ2xlWSA9IG51bGw7XG4gICAgICAgIGxldCBhbmdsZVggPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5jdXJzb3JzLnVwLmlzRG93bikge1xuICAgICAgICAgICAgZGlmZi55ICs9IC01MDtcbiAgICAgICAgICAgIGFuZ2xlWSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3Vyc29ycy5kb3duLmlzRG93bikge1xuICAgICAgICAgICAgZGlmZi55ICs9IDUwO1xuICAgICAgICAgICAgYW5nbGVZID0gMTgwXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3Vyc29ycy5sZWZ0LmlzRG93bikge1xuICAgICAgICAgICAgZGlmZi54ICs9IC01MDtcbiAgICAgICAgICAgIGFuZ2xlWCA9IDI3MFxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmN1cnNvcnMucmlnaHQuaXNEb3duKSB7XG4gICAgICAgICAgICBkaWZmLnggKz0gNTA7XG4gICAgICAgICAgICBhbmdsZVggPSA5MDtcbiAgICAgICAgfVxuXG4gICAgICAgIGFuZ2xlWCA9IChhbmdsZVggPT0gbnVsbCkgPyBhbmdsZVkgOiBhbmdsZVg7XG4gICAgICAgIGFuZ2xlWSA9IChhbmdsZVkgPT0gbnVsbCkgPyBhbmdsZVggOiBhbmdsZVk7XG4gICAgICAgIGlmIChhbmdsZVggIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGFuZ2xlWCA9PSAyNzAgJiYgYW5nbGVZID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS5hbmdsZSA9IDI3MCArIDQ1O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS5hbmdsZSA9IChhbmdsZVggKyBhbmdsZVkpIC8gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmN1cnNvcnMuc2hpZnQuaXNEb3duICYmIHRoaXMuc3ByaXRlLmJvZHkuYmxvY2tlZC5kb3duKSB7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5zZXRWZWxvY2l0eSgwLCAwKTtcbiAgICAgICAgICAgIHRoaXMuaXNBbmNob3JlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzQW5jaG9yZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzQW5jaG9yZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLmFuZ2xlID0gMDtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLmZsaXBYID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5mbGlwWSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3Vyc29ycy51cC5pc0Rvd24pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJzb3JzLmxlZnQuaXNEb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLmFuaW1zLnBsYXkoJ2pvc2VVcFJpZ2h0QW5jaG9yZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUuZmxpcFggPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJzb3JzLnJpZ2h0LmlzRG93bikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS5hbmltcy5wbGF5KCdqb3NlVXBSaWdodEFuY2hvcmVkJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUuYW5pbXMucGxheSgnam9zZVVwQW5jaG9yZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3Vyc29ycy5kb3duLmlzRG93bikge1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLmFuaW1zLnBsYXkoJ2pvc2VSaWdodEFjaG5vcmVkJyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3Vyc29ycy5sZWZ0LmlzRG93bikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS5mbGlwWCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnNvcnMubGVmdC5pc0Rvd24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS5hbmltcy5wbGF5KCdqb3NlUmlnaHRBY2hub3JlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLmZsaXBYID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJzb3JzLnJpZ2h0LmlzRG93bikge1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLmFuaW1zLnBsYXkoJ2pvc2VSaWdodEFjaG5vcmVkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLmFuaW1zLnBsYXkoJ2pvc2VSaWdodEFjaG5vcmVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB6ZXJvQWNjZWxlcmF0aW9uSWZCbG9ja2VkKHRoaXMuc3ByaXRlLmJvZHkpO1xuXG4gICAgICAgIGlmIChkaWZmLmxlbmd0aCgpICE9IDApIHtcblxuICAgICAgICAgICAgY29uc3QgbnVtVG9GaXJlID0gNjtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVG9GaXJlOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc3BlZWQgPSBQaGFzZXIuTWF0aC5CZXR3ZWVuKHRoaXMuV0FURVJfVkVMT0NJVFlfTUlOLCB0aGlzLldBVEVSX1ZFTE9DSVRZX01BWCk7XG4gICAgICAgICAgICAgICAgbGV0IGFuZ2xlID0gZGlmZi5hbmdsZSgpICsgUGhhc2VyLk1hdGguRmxvYXRCZXR3ZWVuKC0wLjEsIDAuMSk7XG4gICAgICAgICAgICAgICAgbGV0IHggPSB0aGlzLnNwcml0ZS54ICsgTWF0aC5jb3MoYW5nbGUpICogMTVcbiAgICAgICAgICAgICAgICBsZXQgeSA9IHRoaXMuc3ByaXRlLnkgKyBNYXRoLnNpbihhbmdsZSkgKiAxNVxuICAgICAgICAgICAgICAgIGxldCBwID0gdGhpcy5wYXJ0aWNsZXMuZ2V0Rmlyc3REZWFkKGZhbHNlLCB4LCB5KTtcbiAgICAgICAgICAgICAgICBpZiAocCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHAuY29sbGlkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcC5ib2R5LmVuYWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHAuYW5pbXMucGxheShcImRyb3BsZXRfYWxpdmVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHAuc2V0VmVsb2NpdHkoc3BlZWQgKiBNYXRoLmNvcyhhbmdsZSksIHNwZWVkICogTWF0aC5zaW4oYW5nbGUpKTtcbiAgICAgICAgICAgICAgICAgICAgcC5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBwLnNldEFjdGl2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZS50aW1lLmRlbGF5ZWRDYWxsKDMwMCwgaGlkZVBhcnRpY2xlLCBbcCwgdGhpcy5zY2VuZV0sIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQW5jaG9yZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS5zZXRWZWxvY2l0eShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUuYm9keS52ZWxvY2l0eS54IC0gTWF0aC5jb3MoZGlmZi5hbmdsZSgpKSAqIHRoaXMuU1BSSU5LTEVSX0FDQyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUuYm9keS52ZWxvY2l0eS55IC0gTWF0aC5zaW4oZGlmZi5hbmdsZSgpKSAqIHRoaXMuU1BSSU5LTEVSX0FDQyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlUGFydGljbGUocGFydGljbGUsIHNjZW5lKSB7XG4gICAgcGFydGljbGUuYW5pbXMucGxheShcImRyb3BsZXRfZGVhdGhcIiwgdHJ1ZSk7XG4gICAgcGFydGljbGUub24oJ2FuaW1hdGlvbmNvbXBsZXRlJywgKCkgPT4ge1xuICAgICAgICBwYXJ0aWNsZS5ib2R5LnNldEVuYWJsZShmYWxzZSk7XG4gICAgICAgIHNjZW5lLmhvc2VQbGF5ZXIucGFydGljbGVzLmtpbGxBbmRIaWRlKHBhcnRpY2xlKTtcbiAgICB9LCB0aGlzKTtcbn0iLCJpbXBvcnQgeyBwYXJzZUFsbFByb3BlcnRpZXMsIHBhcnNlUHJvcGVydGllcyB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBMZXZlbEdlbmVyYXRvciB7XG4gICAgc2NlbmU7XG4gICAgcm9vbXM7XG4gICAgTlVNX1JPT01TID0gMTc7XG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZSkge1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHRoaXMuTlVNX1JPT01TOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGByb29tJHtpfWA7XG4gICAgICAgICAgICBzY2VuZS5sb2FkLnRpbGVtYXBUaWxlZEpTT04oa2V5LCBgYXNzZXRzL3Jvb20ke2l9Lmpzb25gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNjZW5lLmxvYWQudGlsZW1hcFRpbGVkSlNPTihcImJhY2tncm91bmQxXCIsIFwiYXNzZXRzL2JhY2tncm91bmQxLmpzb25cIik7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZSgpIHtcbiAgICAgICAgdGhpcy5yb29tcyA9IEFycmF5KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHRoaXMuTlVNX1JPT01TOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGByb29tJHtpfWA7XG4gICAgICAgICAgICBsZXQgbWFwID0gdGhpcy5zY2VuZS5tYWtlLnRpbGVtYXAoeyBrZXk6IGtleSB9KTtcbiAgICAgICAgICAgIG1hcFsncHJvcGVydGllcyddID0gcGFyc2VQcm9wZXJ0aWVzKG1hcFsncHJvcGVydGllcyddKTtcbiAgICAgICAgICAgIG1hcC5tYXBLZXkgPSBrZXk7XG4gICAgICAgICAgICBtYXAucHJvcGVydGllcy5oZWlnaHQgPSBtYXAucHJvcGVydGllcy5oZWlnaHQgfHwgMTtcbiAgICAgICAgICAgIHRoaXMucm9vbXMucHVzaChtYXApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdlbmVyYXRlTGV2ZWwoZ3JvdW5kRmxvb3I6IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IGxldmVsRnJvbVVybCA9IHRoaXMubGV2ZWxGcm9tVXJsKCk7XG4gICAgICAgIGxldCBsZXZlbDtcbiAgICAgICAgaWYgKGxldmVsRnJvbVVybCAhPSBudWxsKSB7XG4gICAgICAgICAgICBsZXZlbCA9IGxldmVsRnJvbVVybDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBoZWlnaHRMZWZ0ID0gMjtcbiAgICAgICAgICAgIGxldCBlbnRyeUNvbnN0cmFpbnRzO1xuICAgICAgICAgICAgd2hpbGUgKGhlaWdodExlZnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdyb3VuZEZsb29yKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldmVsID0gW3RoaXMucm9vbXNbMV1dO1xuICAgICAgICAgICAgICAgICAgICBlbnRyeUNvbnN0cmFpbnRzID0gdGhpcy5yb29tc1sxXS5wcm9wZXJ0aWVzLmV4aXQ7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodExlZnQgPSAzIC0gdGhpcy5yb29tc1sxXS5wcm9wZXJ0aWVzLmhlaWdodDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXZlbCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBlbnRyeUNvbnN0cmFpbnRzID0gWyd0ZWxlcG9ydCddO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHRMZWZ0ID0gMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2hpbGUgKGhlaWdodExlZnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGhlaWdodExlZnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBhdmFpbGFibGVSb29tcyA9IHRoaXMucm9vbXMuZmlsdGVyKChtYXApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoID0gbWFwLnByb3BlcnRpZXMuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9rID0gaCA8PSBoZWlnaHRMZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5Q29uc3RyYWludHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb25zID0gZW50cnlDb25zdHJhaW50cy5tYXAoKGVudHJ5T3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXAucHJvcGVydGllcy5lbnRyeS5pbmNsdWRlcyhlbnRyeU9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobWFwLm1hcEtleSwgbWFwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVucnRyeXUgQ29uc3RyYWluZ1wiLCBlbnRyeUNvbnN0cmFpbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvayA9IG9rICYmIG9wdGlvbnMuaW5jbHVkZXModHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2s7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkF2YWlsYWJsZSByb29tc1wiLCBhdmFpbGFibGVSb29tcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdmFpbGFibGVSb29tcy5sZW5ndGggPT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcm9vbSA9IHRoaXMucmFuZG9tQ2hvaWNlKGF2YWlsYWJsZVJvb21zKTtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwucHVzaChyb29tKTtcbiAgICAgICAgICAgICAgICAgICAgZW50cnlDb25zdHJhaW50cyA9IHJvb20ucHJvcGVydGllcy5leGl0O1xuICAgICAgICAgICAgICAgICAgICBsZXQgaCA9IHJvb20ucHJvcGVydGllcy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodExlZnQgLT0gaDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJMZXZlbDogXCIsIGxldmVsLm1hcCgocm9vbSkgPT4gcm9vbS5tYXBLZXkpKTtcbiAgICAgICAgcmV0dXJuIGxldmVsO1xuICAgIH1cblxuICAgIHByaXZhdGUgbGV2ZWxGcm9tVXJsKCkge1xuICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xuICAgICAgICBpZiAoIXVybFBhcmFtcy5oYXMoJ3Jvb21zJykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGxldCB3YW50ZWRSb29tcyA9IHVybFBhcmFtcy5nZXQoJ3Jvb21zJyk/LnNwbGl0KCcsJykubWFwKCh4KSA9PiAreCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiV2FudGVkIHJvb21zOiBcIiwgd2FudGVkUm9vbXMpO1xuICAgICAgICB3YW50ZWRSb29tcyA9IHdhbnRlZFJvb21zPy5tYXAoKHgpID0+IHRoaXMucm9vbXNbeF0pO1xuICAgICAgICByZXR1cm4gd2FudGVkUm9vbXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByYW5kb21DaG9pY2UoYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5Lmxlbmd0aCldO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJ1xuaW1wb3J0IHtMZXZlbFNjZW5lfSBmcm9tICcuL3NjZW5lcy9sZXZlbFNjZW5lJztcblxubGV0IGxldmVsU2NlbmUgPSBuZXcgTGV2ZWxTY2VuZSgnSm9zZUhvc2UnKTtcblxubGV0IGxldmVscyA9IFtcbiAgICBsZXZlbFNjZW5lLFxuXTtcblxuZXhwb3J0IGNvbnN0IFNDUkVFTl9IRUlHSFQgPSA3MDQ7XG5leHBvcnQgY29uc3QgU0NSRUVOX1dJRFRIID0gMTIwMDtcblxuY29uc3QgZ2FtZUNvbmZpZyA9IHtcbiAgICB0eXBlOiBQaGFzZXIuQVVUTyxcbiAgICBwYXJlbnQ6ICdjb250ZW50JyxcbiAgICB3aWR0aDogU0NSRUVOX1dJRFRILFxuICAgIGhlaWdodDogU0NSRUVOX0hFSUdIVCxcbiAgICBwaHlzaWNzOiB7XG4gICAgICAgIGRlZmF1bHQ6ICdhcmNhZGUnLFxuICAgICAgICBhcmNhZGU6IHtcbiAgICAgICAgICAgIGdyYXZpdHk6IHt5OiA4MDB9LFxuICAgICAgICAgICAgZGVidWc6IGZhbHNlLFxuICAgICAgICAgICAgZnBzOiA2MCwgLy8gRlBTIG9mIHRoZSBwaHlzaWNzIHNpbXVsYXRpb24gLSBtYXliZSBoaWdoZXIgY291bGQgaW5jcmVhc2Ugc3RhYmlsaXR5XG4gICAgICAgICAgICB0aW1lU2NhbGU6IDEsIC8vIGhpZ2hlciB0byBzbG93IGRvd24gLSBmb3IgZGVidWdnaW5nXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNjZW5lOiBsZXZlbHMsXG4gICAgc2VlZDogW1wiNDJcIl0sXG4gICAgcGl4ZWxBcnQ6IHRydWUsXG59O1xuXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKTsiLCJpbXBvcnQgeyBGaXJlIH0gZnJvbSBcIi4vZmlyZVwiO1xuaW1wb3J0IHsgTGV2ZWxTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy9sZXZlbFNjZW5lXCI7XG5cbmV4cG9ydCBjb25zdCBNQVhfVkVMT0NJVFlfWDogaW50ZWdlciA9IDI1MDtcblxuY29uc3QgRklSRV9QTEFZRVJfQ09MTElTSU9OX1BFTkFMVFlfTVMgPSAyMDAwO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUGxheWVyIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lciB7XG4gICAgc3ByaXRlOiBQaGFzZXIuVHlwZXMuUGh5c2ljcy5BcmNhZGUuU3ByaXRlV2l0aER5bmFtaWNCb2R5O1xuICAgIHNwcml0ZUtleTogc3RyaW5nO1xuXG4gICAgTEVGVF9BTklNX0tFWTogc3RyaW5nO1xuICAgIFJJR0hUX0FOSU1fS0VZOiBzdHJpbmc7XG4gICAgVFVSTl9BTklNX0tFWTogc3RyaW5nO1xuXG4gICAgVEVMRVBPUlRfQ09PTERPV05fTVMgPSAzMDAwO1xuXG4gICAgLy8gQ1VSUkVOVExZIFVOVVNFRCFcbiAgICBpbnZpbmNpYmxlID0gZmFsc2U7ICAvLyBicmllZmx5IHRydWUgYWZ0ZXIgZGFtYWdlXG5cbiAgICBjYW5UZWxlcG9ydCA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB4OiBpbnRlZ2VyLCB5OiBpbnRlZ2VyLCBzcHJpdGVLZXk6IHN0cmluZykge1xuICAgICAgICBzdXBlcihzY2VuZSk7XG4gICAgICAgIHRoaXMuc3ByaXRlS2V5ID0gc3ByaXRlS2V5O1xuICAgICAgICB0aGlzLnNwcml0ZSA9IHNjZW5lLnBoeXNpY3MuYWRkLnNwcml0ZSh4LCB5LCBzcHJpdGVLZXkpO1xuXG4gICAgICAgIHRoaXMuTEVGVF9BTklNX0tFWSA9IGAke3Nwcml0ZUtleX1fbGVmdGA7XG4gICAgICAgIHRoaXMuUklHSFRfQU5JTV9LRVkgPSBgJHtzcHJpdGVLZXl9X3JpZ2h0YDtcbiAgICAgICAgdGhpcy5UVVJOX0FOSU1fS0VZID0gYCR7c3ByaXRlS2V5fV90dXJuYDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UGh5c2ljc1Byb3BlcnRpZXMoKSB7XG4gICAgICAgIC8vIG5lZWRzIHRvIGJlIGNhbGxlZCBhZnRlciB0aGUgc3ByaXRlIGlzIGFkZGVkIHRvIHRoZSBwaHlzaWNzIGdyb3VwXG4gICAgICAgIHRoaXMuc3ByaXRlLnNldENvbGxpZGVXb3JsZEJvdW5kcyh0cnVlKTtcbiAgICAgICAgdGhpcy5zcHJpdGUuc2V0TWF4VmVsb2NpdHkoTUFYX1ZFTE9DSVRZX1gsIDEwMDAwMCk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZShfdGltZSwgX2RlbHRhKTogdm9pZCB7XG4gICAgfVxuXG4gICAgcHVibGljIG9uVGVsZXBvcnQoKSB7XG4gICAgICAgIHRoaXMuY2FuVGVsZXBvcnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zY2VuZS50aW1lLmRlbGF5ZWRDYWxsKFxuICAgICAgICAgICAgdGhpcy5URUxFUE9SVF9DT09MRE9XTl9NUyxcbiAgICAgICAgICAgICgpID0+IHsgdGhpcy5jYW5UZWxlcG9ydCA9IHRydWU7IH0sIFtdLCB0aGlzXG4gICAgICAgICk7XG4gICAgfVxufSIsImltcG9ydCB7IEdyb3VuZFBsYXllciB9IGZyb20gXCIuLi9ncm91bmRQbGF5ZXJcIjtcbmltcG9ydCB7IEhvc2UgfSBmcm9tIFwiLi4vaG9zZVwiO1xuaW1wb3J0IHsgaGlkZVBhcnRpY2xlLCBIb3NlUGxheWVyIH0gZnJvbSBcIi4uL2hvc2VQbGF5ZXJcIjtcbmltcG9ydCB7IEZpcmUgfSBmcm9tIFwiLi4vZmlyZVwiO1xuaW1wb3J0IHsgRWxWaWN0aW1vIH0gZnJvbSBcIi4uL2VsVmljdGltb1wiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL3BsYXllclwiO1xuaW1wb3J0IHsgVGVsZXBvcnRNYW5hZ2VyIH0gZnJvbSBcIi4uL3RlbGVwb3J0TWFuYWdlclwiO1xuaW1wb3J0IHsgcGFyc2VBbGxQcm9wZXJ0aWVzIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5pbXBvcnQgeyBUaGFua3NXYWxsIH0gZnJvbSBcIi4uL3RoYW5rc1dhbGxcIjtcbmltcG9ydCB7IExldmVsR2VuZXJhdG9yIH0gZnJvbSBcIi4uL2xldmVsR2VuZXJhdGlvblwiO1xuaW1wb3J0IGFzc2VydCA9IHJlcXVpcmUoXCJhc3NlcnRcIik7XG5pbXBvcnQgeyBTQ1JFRU5fSEVJR0hULCBTQ1JFRU5fV0lEVEggfSBmcm9tIFwiLi4vbWFpblwiO1xuaW1wb3J0IHsgQm94IH0gZnJvbSBcIi4uL2JveFwiO1xuaW1wb3J0IHsgVGltZXIgfSBmcm9tIFwiLi4vdGltZXJcIjtcbmltcG9ydCBWZWN0b3IyID0gUGhhc2VyLk1hdGguVmVjdG9yMjtcbmltcG9ydCB7IERvb3IgfSBmcm9tIFwiLi4vZG9vclwiO1xuXG5jb25zdCBIT1NFX1BMQVlFUl9TUFJJVEVfS0VZID0gJ2hvc2VQbGF5ZXInO1xuY29uc3QgR1JPVU5EX1BMQVlFUl9TUFJJVEVfS0VZID0gJ2dyb3VuZFBsYXllcic7XG5jb25zdCBFTF9WSUNUSU1PX1NQUklURV9LRVkgPSAnZWxWaWN0aW1vJztcbmNvbnN0IFRIQU5LU19DT1VOVCA9IDEwO1xuY29uc3QgVFNTX0NPVU5UID0gNTtcbmNvbnN0IEFUVEFDSF9DT1VOVCA9IDU7XG5jb25zdCBBVV9DT1VOVCA9IDEyO1xuXG5cbmNvbnN0IFRJTEVfU0laRSA9IDMyO1xuY29uc3QgRkxPT1JfV0lEVEggPSAzMiAqIFRJTEVfU0laRTtcbmNvbnN0IEZMT09SX0hFSUdIVCA9IDcgKiBUSUxFX1NJWkU7XG5cbmV4cG9ydCBjbGFzcyBMZXZlbFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgICBrZXlJbk1hbmFnZXI6IHN0cmluZztcblxuICAgIGxldmVsR2VuZXJhdG9yOiBMZXZlbEdlbmVyYXRvcjtcbiAgICBidWlsZGluZ0hlaWdodDogbnVtYmVyO1xuICAgIGNhbWVyYU9mZnNldFk6IG51bWJlciA9IDA7XG4gICAgc2t5O1xuXG4gICAgaG9zZVBsYXllcjogSG9zZVBsYXllcjtcbiAgICBncm91bmRQbGF5ZXI6IEdyb3VuZFBsYXllcjtcbiAgICB3YWxsczogQXJyYXk8UGhhc2VyLlRpbGVtYXBzLlRpbGVtYXBMYXllcj47XG4gICAgZmlyZXM6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TdGF0aWNHcm91cDtcbiAgICBkb29yczogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlN0YXRpY0dyb3VwO1xuICAgIHRoYW5rc1dhbGxzOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3RhdGljR3JvdXA7XG4gICAgaHlkcmFudHM6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TdGF0aWNHcm91cDtcbiAgICBib3hlczogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkdyb3VwO1xuXG4gICAgdGVsZXBvcnRNYW5hZ2VyOiBUZWxlcG9ydE1hbmFnZXI7XG4gICAgdGltZXI6IFRpbWVyO1xuICAgIHRpbWVGYWN0b3I6IG51bWJlciA9IDE7XG4gICAgdGltZUZhY3RvckRlY3JlYXNlOiBudW1iZXIgPSAwLjk4O1xuICAgIHRpbWVQZXJWaWN0aW06IG51bWJlciA9IDMwICogMTAwMDsgLy8gbXNcbiAgICBlbFZpY3RpbW9zOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuR3JvdXA7XG4gICAgcGxhdGZvcm1zO1xuICAgIHBsYXllcnM6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Hcm91cDtcbiAgICBsZXZlbCA9IDE7XG4gICAgaXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgIGxldmVsVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XG4gICAgZ2FtZU92ZXJUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcbiAgICBnYW1lT3ZlckJhY2tncm91bmQ6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGU7XG4gICAgbGV2ZWxFbnRyYW5jZSA9IG5ldyBWZWN0b3IyKDYwLCBTQ1JFRU5fSEVJR0hUIC0gNjAgLSAyMCk7XG4gICAgYXVTb3VuZHM7XG4gICAgdHNzU291bmRzO1xuICAgIGF0dGFjaFNvdW5kcztcblxuICAgIGhvc2U6IEhvc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZykge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMua2V5SW5NYW5hZ2VyID0ga2V5O1xuICAgIH1cblxuICAgIHB1YmxpYyBwcmVsb2FkKCkge1xuICAgICAgICB0aGlzLmxldmVsR2VuZXJhdG9yID0gbmV3IExldmVsR2VuZXJhdG9yKHRoaXMpO1xuXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnc2t5JywgJ2Fzc2V0cy9za3kucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnZ3JvdW5kJywgJ2Fzc2V0cy9wbGF0Zm9ybS5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCd0aWxlcycsICdhc3NldHMvVGlsZXNldE1hcC5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdkZWJ1Z2JhbGwnLCAnYXNzZXRzL2RlYnVnYmFsbC5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdkZWJ1Z3N0YXInLCAnYXNzZXRzL2RlYnVnc3Rhci5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdoeWRyYW50JywgJ2Fzc2V0cy9oeWRyYW50LnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2Rvb3IxMicsICdhc3NldHMvZG9vcjEyLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2Rvb3IxMycsICdhc3NldHMvZG9vcjEzLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3RyYXBkb29yJywgJ2Fzc2V0cy90cmFwZG9vci5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdib3gnLCAnYXNzZXRzL2JveC5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCd0aW1lQmFyJywgJ2Fzc2V0cy90aW1lQmFyLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2tleScsICdhc3NldHMva2V5LnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3N0YWlyc2Rvd24nLCAnYXNzZXRzL3N0YWlyc2Rvd24ucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnc3RhaXJzdXAnLCAnYXNzZXRzL3N0YWlyc3VwLnBuZycpO1xuXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldChIT1NFX1BMQVlFUl9TUFJJVEVfS0VZLCAnYXNzZXRzL2pvc2Vfc3ByaXRlcy5wbmcnLCB7IGZyYW1lV2lkdGg6IDM4LCBmcmFtZUhlaWdodDogMzkgfSk7XG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldChHUk9VTkRfUExBWUVSX1NQUklURV9LRVksICdhc3NldHMvZ3JhbmRfc3ByaXRlcy5wbmcnLCB7XG4gICAgICAgICAgICBmcmFtZVdpZHRoOiAzMixcbiAgICAgICAgICAgIGZyYW1lSGVpZ2h0OiA2MFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KEVMX1ZJQ1RJTU9fU1BSSVRFX0tFWSwgJ2Fzc2V0cy9jaXRpemVuX3Nwcml0ZXMucG5nJywgeyBmcmFtZVdpZHRoOiAxNSwgZnJhbWVIZWlnaHQ6IDE4IH0pO1xuXG4gICAgICAgIHRoaXMubG9hZC5hdGxhcygnZmxhcmVzJywgJ2Fzc2V0cy9mbGFyZXMucG5nJywgJ2Fzc2V0cy9mbGFyZXMuanNvbicpO1xuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoXCJkcm9wbGV0XCIsICdhc3NldHMvZHJvcGxldHMucG5nJywgeyBmcmFtZVdpZHRoOiAxMCwgZnJhbWVIZWlnaHQ6IDEwIH0pO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KGBmaXJlJHtpfWAsIGBhc3NldHMvZmlyZSR7aX0ucG5nYCwgeyBmcmFtZVdpZHRoOiA1MCwgZnJhbWVIZWlnaHQ6IDcwIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBUSEFOS1NfQ09VTlQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKGB0aGFua3Mke2l9YCwgYGFzc2V0cy9zb3VuZHMvdGhhbmtzJHtpfS5tcDNgKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEFVX0NPVU5UOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubG9hZC5hdWRpbyhgYXUke2l9YCwgYGFzc2V0cy9zb3VuZHMvYXUke2l9Lm1wM2ApO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgVFNTX0NPVU5UOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubG9hZC5hdWRpbyhgdHNzJHtpfWAsIGBhc3NldHMvc291bmRzL3RzcyR7aX0ubXAzYCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBBVFRBQ0hfQ09VTlQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKGBhdHRhY2gke2l9YCwgYGFzc2V0cy9zb3VuZHMvYXR0YWNoJHtpfS5tcDNgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGUoKSB7XG4gICAgICAgIHRoaXMucGh5c2ljcy53b3JsZC5zZXRCb3VuZHNDb2xsaXNpb24odHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMucGh5c2ljcy53b3JsZC5zZXRCb3VuZHMoMCwgMCwgU0NSRUVOX1dJRFRILCBTQ1JFRU5fSEVJR0hUKTtcblxuICAgICAgICB0aGlzLmxldmVsR2VuZXJhdG9yLmNyZWF0ZSgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBrZXk6IGBmaXJlJHtpfWFuaW1gLFxuICAgICAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycyhgZmlyZSR7aX1gLCB7IHN0YXJ0OiAwLCBlbmQ6IDYwIH0pLFxuICAgICAgICAgICAgICAgIGZyYW1lUmF0ZTogNjAsXG4gICAgICAgICAgICAgICAgcmVwZWF0OiAtMSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAgICAgICAga2V5OiBcImRyb3BsZXRfZGVhdGhcIixcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycyhcImRyb3BsZXRcIiwgeyBzdGFydDogMCwgZW5kOiA1IH0pLFxuICAgICAgICAgICAgZnJhbWVSYXRlOiAyMCxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcbiAgICAgICAgICAgIGtleTogXCJkcm9wbGV0X2FsaXZlXCIsXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoXCJkcm9wbGV0XCIsIHsgc3RhcnQ6IDAsIGVuZDogMSB9KSxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTAsXG4gICAgICAgICAgICByZXBlYXQ6IC0xLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgICAgICBrZXk6IFwidmljdGltc2FkXCIsXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoRUxfVklDVElNT19TUFJJVEVfS0VZLCB7IHN0YXJ0OiAwLCBlbmQ6IDEgfSksXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDMsXG4gICAgICAgICAgICByZXBlYXQ6IC0xLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAgICAgICAga2V5OiBcInZpY3RpbWNhcnJpZWRcIixcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycyhFTF9WSUNUSU1PX1NQUklURV9LRVksIHsgc3RhcnQ6IDIsIGVuZDogMiB9KSxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMyxcbiAgICAgICAgICAgIHJlcGVhdDogLTEsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgICAgICBrZXk6IFwidmljdGltaGFwcHlcIixcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycyhFTF9WSUNUSU1PX1NQUklURV9LRVksIHsgc3RhcnQ6IDMsIGVuZDogNCB9KSxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMyxcbiAgICAgICAgICAgIHJlcGVhdDogLTEsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vICBBIHNpbXBsZSBiYWNrZ3JvdW5kIGZvciBvdXIgZ2FtZVxuICAgICAgICB0aGlzLnNreSA9IHRoaXMuYWRkLmltYWdlKFNDUkVFTl9XSURUSCAvIDIsIDAsICdza3knKS5zZXRTY2FsZSg2KS5zZXRUaW50KDB4Y2NjY2NjKTtcblxuICAgICAgICAvLyAgVGhlIHBsYXRmb3JtcyBncm91cCBjb250YWlucyB0aGUgZ3JvdW5kXG4gICAgICAgIHRoaXMucGxhdGZvcm1zID0gdGhpcy5waHlzaWNzLmFkZC5zdGF0aWNHcm91cCgpO1xuXG4gICAgICAgIC8vICBTY2FsZSBpdCB0byBmaXQgdGhlIHdpZHRoIG9mIHRoZSBnYW1lICh0aGUgb3JpZ2luYWwgc3ByaXRlIGlzIDQwMHgzMiBpbiBzaXplKVxuICAgICAgICB0aGlzLnBsYXRmb3Jtcy5jcmVhdGUoU0NSRUVOX1dJRFRIIC8gMiwgU0NSRUVOX0hFSUdIVCArIDE2LCAnZ3JvdW5kJykuc2V0U2NhbGUoMykucmVmcmVzaEJvZHkoKTsgLy8gMyAqIDMyIC8gMiA9IDQ4XG5cbiAgICAgICAgLy8gQ3JlYXRlIGhvc2UuXG4gICAgICAgIHRoaXMuaG9zZSA9IG5ldyBIb3NlKHRoaXMsIDMwLCBTQ1JFRU5fSEVJR0hUIC0gMzIgLSA0MCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHBsYXllcnMuXG4gICAgICAgIHRoaXMuaG9zZVBsYXllciA9IG5ldyBIb3NlUGxheWVyKHRoaXMsIHRoaXMuaG9zZS5pbml0aWFsWCwgdGhpcy5ob3NlLmluaXRpYWxZLCBIT1NFX1BMQVlFUl9TUFJJVEVfS0VZKTtcbiAgICAgICAgdGhpcy5ob3NlLmF0dGFjaEVuZFRvKHRoaXMuaG9zZVBsYXllcik7XG4gICAgICAgIHRoaXMuZ3JvdW5kUGxheWVyID0gbmV3IEdyb3VuZFBsYXllcih0aGlzLCA2MCwgU0NSRUVOX0hFSUdIVCAtIDYwIC0gMjAsIEdST1VORF9QTEFZRVJfU1BSSVRFX0tFWSk7XG4gICAgICAgIHRoaXMucGxheWVycyA9IHRoaXMucGh5c2ljcy5hZGQuZ3JvdXAoW3RoaXMuaG9zZVBsYXllci5zcHJpdGUsIHRoaXMuZ3JvdW5kUGxheWVyLnNwcml0ZV0pO1xuICAgICAgICB0aGlzLmhvc2VQbGF5ZXIuc2V0UGh5c2ljc1Byb3BlcnRpZXMoKTtcbiAgICAgICAgdGhpcy5ncm91bmRQbGF5ZXIuc2V0UGh5c2ljc1Byb3BlcnRpZXMoKTtcbiAgICAgICAgdGhpcy5ob3NlUGxheWVyLnNwcml0ZS5zZXREZXB0aCgxKTtcbiAgICAgICAgdGhpcy5ncm91bmRQbGF5ZXIuc3ByaXRlLnNldERlcHRoKDEpO1xuXG5cbiAgICAgICAgLy8gTG9hZCByb29tcy5cbiAgICAgICAgdGhpcy5oeWRyYW50cyA9IHRoaXMucGh5c2ljcy5hZGQuc3RhdGljR3JvdXAoKTtcbiAgICAgICAgdGhpcy50aGFua3NXYWxscyA9IHRoaXMucGh5c2ljcy5hZGQuc3RhdGljR3JvdXAoKTtcbiAgICAgICAgdGhpcy5kb29ycyA9IHRoaXMucGh5c2ljcy5hZGQuc3RhdGljR3JvdXAoKTtcbiAgICAgICAgdGhpcy5ib3hlcyA9IHRoaXMucGh5c2ljcy5hZGQuZ3JvdXAoeyBjb2xsaWRlV29ybGRCb3VuZHM6IHRydWUsIHJ1bkNoaWxkVXBkYXRlOiB0cnVlIH0pO1xuICAgICAgICB0aGlzLndhbGxzID0gW107XG4gICAgICAgIHRoaXMuZWxWaWN0aW1vcyA9IHRoaXMucGh5c2ljcy5hZGQuZ3JvdXAoeyBjb2xsaWRlV29ybGRCb3VuZHM6IHRydWUsIHJ1bkNoaWxkVXBkYXRlOiB0cnVlIH0pO1xuICAgICAgICB0aGlzLnRlbGVwb3J0TWFuYWdlciA9IG5ldyBUZWxlcG9ydE1hbmFnZXIodGhpcyk7XG4gICAgICAgIHRoaXMuZmlyZXMgPSB0aGlzLnBoeXNpY3MuYWRkLnN0YXRpY0dyb3VwKCk7XG5cbiAgICAgICAgbGV0IHJvb21zID0gdGhpcy5sZXZlbEdlbmVyYXRvci5nZW5lcmF0ZUxldmVsKHRydWUpO1xuICAgICAgICB0aGlzLmJ1aWxkaW5nSGVpZ2h0ID0gMDtcbiAgICAgICAgZm9yIChsZXQgcm9vbSBvZiByb29tcykge1xuICAgICAgICAgICAgdGhpcy5sb2FkUm9vbShyb29tKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGltZXIgPSBuZXcgVGltZXIodGhpcywgU0NSRUVOX1dJRFRIIC0gVElMRV9TSVpFLCBTQ1JFRU5fSEVJR0hUIC0gVElMRV9TSVpFLCBUSUxFX1NJWkUgLyAyLCBTQ1JFRU5fSEVJR0hUIC0gMiAqIFRJTEVfU0laRSwgJ3RpbWVCYXInKTtcbiAgICAgICAgdGhpcy50aW1lci5zdGFydCh0aGlzLnRpbWVQZXJWaWN0aW0gKiB0aGlzLnRpbWVGYWN0b3IgKiB0aGlzLmVsVmljdGltb3MuZ2V0Q2hpbGRyZW4oKS5sZW5ndGgpO1xuXG5cbiAgICAgICAgLy8gSHlkcmFudCBpbiB0aGUgYmVnaW5uaW5nLlxuICAgICAgICBsZXQgaHlkcmFudCA9IHRoaXMucGh5c2ljcy5hZGQuc3RhdGljU3ByaXRlKFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIFNDUkVFTl9IRUlHSFQgLSAzMixcbiAgICAgICAgICAgICdoeWRyYW50JyxcbiAgICAgICAgKTtcbiAgICAgICAgaHlkcmFudC5zZXREZXB0aCgxKTtcbiAgICAgICAgaHlkcmFudC5zZXRPcmlnaW4oMCwgMSk7XG4gICAgICAgIGh5ZHJhbnQucmVmcmVzaEJvZHkoKTtcbiAgICAgICAgaHlkcmFudC5zZXRTdGF0ZSgwKTtcbiAgICAgICAgdGhpcy5oeWRyYW50cy5hZGQoaHlkcmFudCk7XG5cblxuICAgICAgICAvLyBTb3VuZHNcbiAgICAgICAgY29uc3QgdGhhbmtzU291bmRzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgVEhBTktTX0NPVU5UOyArK2kpIHtcbiAgICAgICAgICAgIHRoYW5rc1NvdW5kcy5wdXNoKHRoaXMuc291bmQuYWRkKGB0aGFua3Mke2l9YCwgeyBsb29wOiBmYWxzZSB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hdVNvdW5kcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEFVX0NPVU5UOyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMuYXVTb3VuZHMucHVzaCh0aGlzLnNvdW5kLmFkZChgYXUke2l9YCwgeyBsb29wOiBmYWxzZSB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50c3NTb3VuZHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBUU1NfQ09VTlQ7ICsraSkge1xuICAgICAgICAgICAgdGhpcy50c3NTb3VuZHMucHVzaCh0aGlzLnNvdW5kLmFkZChgdHNzJHtpfWAsIHsgbG9vcDogZmFsc2UgfSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXR0YWNoU291bmRzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQVRUQUNIX0NPVU5UOyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoU291bmRzLnB1c2godGhpcy5zb3VuZC5hZGQoYGF0dGFjaCR7aX1gLCB7IGxvb3A6IGZhbHNlIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdhbGxzIG9mIFRoYW5rcy5cbiAgICAgICAgW1xuICAgICAgICAgICAgWzAsIC0xMDAwICogU0NSRUVOX0hFSUdIVCwgMiAqIFRJTEVfU0laRSwgMTAwMSAqIFNDUkVFTl9IRUlHSFRdLCAvLyBMZWZ0IGxvbmdcbiAgICAgICAgICAgIFswLCBTQ1JFRU5fSEVJR0hUIC0gMiAqIFRJTEVfU0laRSwgMyAqIFRJTEVfU0laRSwgMiAqIFRJTEVfU0laRV0sIC8vIExlZnQgYm90dG9tXG4gICAgICAgICAgICBbU0NSRUVOX1dJRFRIIC0gMiAqIFRJTEVfU0laRSwgLTEwMDAgKiBTQ1JFRU5fSEVJR0hULCAyICogVElMRV9TSVpFLCAxMDAxICogU0NSRUVOX0hFSUdIVF0sICAgIC8vIFJpZ2h0IGxvbmdcbiAgICAgICAgICAgIFtTQ1JFRU5fV0lEVEggLSAzICogVElMRV9TSVpFLCBTQ1JFRU5fSEVJR0hUIC0gMiAqIFRJTEVfU0laRSwgMyAqIFRJTEVfU0laRSwgMiAqIFRJTEVfU0laRV0gLy8gUmlnaHQgYm90dG9tXG4gICAgICAgIF0uZm9yRWFjaCgocmVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgd2FsbCA9IG5ldyBUaGFua3NXYWxsKHRoaXMsIHJlY3RbMF0sIHJlY3RbMV0sIHJlY3RbMl0sIHJlY3RbM10sICdncm91bmQnLCB0aGFua3NTb3VuZHMpO1xuICAgICAgICAgICAgdGhpcy50aGFua3NXYWxscy5hZGQod2FsbCwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vICBUaGUgc2NvcmVcbiAgICAgICAgdGhpcy5sZXZlbFRleHQgPSB0aGlzLmFkZC50ZXh0KDE2LCAyNiwgJ0xldmVsOiAxJywgeyBmb250U2l6ZTogJzMycHgnIH0pO1xuICAgICAgICBjb25maWd1cmVUZXh0KHRoaXMubGV2ZWxUZXh0KTtcblxuICAgICAgICB0aGlzLmdhbWVPdmVyQmFja2dyb3VuZCA9IHRoaXMuYWRkLnJlY3RhbmdsZSg2MDAsIDI1MCwgODAwLCAyMDAsIDB4MzIwMDMyKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclRleHQgPSB0aGlzLmFkZC50ZXh0KDMwMCwgMjAwLCAnR2FtZSBvdmVyIScsIHsgZm9udFNpemU6ICcxMDBweCcsIGNvbG9yOiAnI2YwMCcgfSk7XG4gICAgICAgIFt0aGlzLmdhbWVPdmVyQmFja2dyb3VuZCwgdGhpcy5nYW1lT3ZlclRleHRdLmZvckVhY2goKG9iaikgPT4ge1xuICAgICAgICAgICAgb2JqLnNldERlcHRoKDEwMDApO1xuICAgICAgICAgICAgb2JqLnNldFNjcm9sbEZhY3RvcigwLCAwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nYW1lT3ZlckJhY2tncm91bmQuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJUZXh0LnNldFZpc2libGUoZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuc2V0Q29sbGlzaW9ucygpO1xuXG4gICAgICAgIHRoaXMucGh5c2ljcy5kaXNhYmxlVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRDb2xsaXNpb25zKCkge1xuXG4gICAgICAgIC8vIENvbGxpc2lvbnMuXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5wbGF5ZXJzLCB0aGlzLnBsYXRmb3JtcywgdGhpcy5vblBsYXllckhpdEdyb3VuZCwgbnVsbCwgdGhpcyk7XG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5wbGF5ZXJzLCB0aGlzLmRvb3JzKTtcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLmhvc2VQbGF5ZXIucGFydGljbGVzLCB0aGlzLnBsYXRmb3Jtcyk7XG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5ob3NlUGxheWVyLnBhcnRpY2xlcywgdGhpcy5kb29ycyk7XG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5lbFZpY3RpbW9zLCB0aGlzLnBsYXRmb3JtcywgdGhpcy5vblZpY3RpbUhpdEdyb3VuZCk7XG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQub3ZlcmxhcCh0aGlzLmVsVmljdGltb3MsIHRoaXMudGhhbmtzV2FsbHMsIHRoaXMub25WaWN0aW1JblRoYW5rc1dhbGwsIG51bGwsIHRoaXMpO1xuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLm92ZXJsYXAodGhpcy5oeWRyYW50cywgdGhpcy5ob3NlUGxheWVyLnNwcml0ZSwgdGhpcy5vblRvdWNoSHlkcmFudCwgbnVsbCwgdGhpcyk7XG5cbiAgICAgICAgLy8gQm94ZXMgY29sbGlzaW9uc1xuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuYm94ZXMsIHRoaXMuYm94ZXMpO1xuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuYm94ZXMsIHRoaXMuZWxWaWN0aW1vcyk7XG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5ib3hlcywgdGhpcy5wbGF0Zm9ybXMpO1xuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuYm94ZXMsIHRoaXMuaHlkcmFudHMpO1xuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuYm94ZXMsIHRoaXMuZG9vcnMpO1xuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuYm94ZXMsIHRoaXMud2FsbHMpO1xuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuYm94ZXMsIHRoaXMucGxheWVycyk7XG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQub3ZlcmxhcCh0aGlzLmJveGVzLCB0aGlzLmhvc2VQbGF5ZXIucGFydGljbGVzLCB0aGlzLm9uQm94V2F0ZXJDb2xsaXNpb24sIG51bGwsIHRoaXMpO1xuXG4gICAgICAgIC8vIENvbGxpZGUgd2l0aCBmbG9vciBtYXAuXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5wbGF5ZXJzLCB0aGlzLndhbGxzKTtcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLmVsVmljdGltb3MsIHRoaXMud2FsbHMsIHRoaXMub25WaWN0aW1IaXRHcm91bmQsIG51bGwsIHRoaXMpO1xuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuaG9zZVBsYXllci5wYXJ0aWNsZXMsIHRoaXMud2FsbHMpO1xuXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQub3ZlcmxhcCh0aGlzLmdyb3VuZFBsYXllci5zcHJpdGUsIHRoaXMuZWxWaWN0aW1vcywgdGhpcy5waWNrVXBFbFZpY3RpbW8sIG51bGwsIHRoaXMpO1xuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuaG9zZVBsYXllci5wYXJ0aWNsZXMsIHRoaXMuZmlyZXMsIHRoaXMuZXh0aW5ndWlzaEZpcmUsIG51bGwsIHRoaXMpO1xuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLm92ZXJsYXAodGhpcy5ib3hlcywgdGhpcy5maXJlcywgdGhpcy5leHRpbmd1aXNoRmlyZVdpdGhCb3gsIG51bGwsIHRoaXMpO1xuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLm92ZXJsYXAodGhpcy5wbGF5ZXJzLCB0aGlzLmZpcmVzLCB0aGlzLm9uUGxheWVyRmlyZUNvbGxpc2lvbiwgbnVsbCwgdGhpcyk7XG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQub3ZlcmxhcCh0aGlzLmVsVmljdGltb3MsIHRoaXMuZmlyZXMsIHRoaXMub25WaWN0aW1GaXJlQ29sbGlzaW9uLCBudWxsLCB0aGlzKTtcblxuICAgICAgICAvLyBIb3NlIGNvbGxpc2lvbnMuXG4gICAgICAgIHRoaXMuaG9zZS5wYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHBhcnQsIHRoaXMucGxhdGZvcm1zKTtcbiAgICAgICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIocGFydCwgdGhpcy53YWxscyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFRlbGVwb3J0ZXJzXG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQub3ZlcmxhcCh0aGlzLnBsYXllcnMsIHRoaXMudGVsZXBvcnRNYW5hZ2VyLnRlbGVwb3J0cywgdGhpcy5vblRvdWNoVGVsZXBvcnQsIG51bGwsIHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUodGltZSwgZGVsdGEpIHsgIC8vIGRlbHRhIGlzIGluIG1zXG4gICAgICAgIHRoaXMudGltZXIudXBkYXRlKHRpbWUsIGRlbHRhKTtcblxuICAgICAgICBpZiAodGhpcy5pc0dhbWVPdmVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhvc2VQbGF5ZXIudXBkYXRlKHRpbWUsIGRlbHRhKTtcbiAgICAgICAgdGhpcy5ncm91bmRQbGF5ZXIudXBkYXRlKHRpbWUsIGRlbHRhKTtcblxuICAgICAgICAvLyBpZiAoTWF0aC5yYW5kb20oKSA8IDAuMDEpe1xuICAgICAgICB0aGlzLmhvc2UudXBkYXRlKHRpbWUsIGRlbHRhKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIHRoaXMuZWxWaWN0aW1vcy5wcmVVcGRhdGUodGltZSwgZGVsdGEpO1xuXG4gICAgICAgIHRoaXMucGh5c2ljcy53b3JsZC51cGRhdGUodGltZSwgZGVsdGEpO1xuICAgICAgICB0aGlzLmJveGVzLnByZVVwZGF0ZSh0aW1lLCBkZWx0YSk7XG4gICAgfVxuXG4gICAgcHVibGljIGV4dGluZ3Vpc2hGaXJlKHBhcnRpY2xlLCBmaXJlKSB7XG4gICAgICAgIGhpZGVQYXJ0aWNsZShwYXJ0aWNsZSwgdGhpcyk7XG4gICAgICAgIGZpcmUubG93ZXJIcCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBleHRpbmd1aXNoRmlyZVdpdGhCb3goX2JveCwgZmlyZSkge1xuICAgICAgICBmaXJlLmxvd2VySHAoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBpY2tVcEVsVmljdGltbyhfZ3JvdW5kUGxheWVyLCBlbFZpY3RpbW8pIHtcbiAgICAgICAgLy8gTm90ZTogVGhlIGZpcnN0IGFyZ3VtZW50IGlzIHVudXNlZCBiZWNhdXNlIEkgY291bGRuJ3QgZ2V0IHRoZSBHcm91bmRQbGF5ZXIgb2JqZWN0IG91dCBvZiBpdCwganVzdCBBcmNhZGVTcHJpdGUuIFxuICAgICAgICBpZiAodGhpcy5ncm91bmRQbGF5ZXIucGlja1VwKHRoaXMudGltZS5ub3csIGVsVmljdGltbykpIHtcbiAgICAgICAgICAgIGVsVmljdGltby5waWNrZWRVcEJ5KHRoaXMuZ3JvdW5kUGxheWVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25QbGF5ZXJGaXJlQ29sbGlzaW9uKFxuICAgICAgICBwbGF5ZXJTcHJpdGU6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUsXG4gICAgICAgIGZpcmU6IEZpcmUsXG4gICAgKSB7XG4gICAgICAgIGxldCBwbGF5ZXI6IFBsYXllciA9IChwbGF5ZXJTcHJpdGUgPT09IHRoaXMuaG9zZVBsYXllci5zcHJpdGUpID8gdGhpcy5ob3NlUGxheWVyIDogdGhpcy5ncm91bmRQbGF5ZXI7XG4gICAgICAgIGZpcmUub25GaXJlQ29sbGlzaW9uKHBsYXllciwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblZpY3RpbUZpcmVDb2xsaXNpb24oXG4gICAgICAgIHZpY3RpbTogRWxWaWN0aW1vLFxuICAgICAgICBmaXJlOiBGaXJlLFxuICAgICkge1xuICAgICAgICBmaXJlLm9uRmlyZUNvbGxpc2lvbih2aWN0aW0sIHRoaXMpO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBvblZpY3RpbUluVGhhbmtzV2FsbCh2aWN0aW06IEVsVmljdGltbywgdGhhbmtzV2FsbDogVGhhbmtzV2FsbCkge1xuICAgICAgICB0aGFua3NXYWxsLmhhbmRsZVZpY3RpbSh2aWN0aW0pO1xuICAgICAgICB2aWN0aW0uZ2V0U2F2ZWQoKTtcbiAgICAgICAgdGhpcy5jaGVja1ZpY3RvcnkoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVmljdGltSGl0R3JvdW5kKHZpY3RpbTogRWxWaWN0aW1vLCBfKSB7XG4gICAgICAgIHZpY3RpbS5vbkhpdEdyb3VuZCh0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uUGxheWVySGl0R3JvdW5kKHBsYXllclNwcml0ZSwgXykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXJTcHJpdGUueClcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ncm91bmRQbGF5ZXIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgLy8gY29uc29sZS5sb2cocGxheWVyU3ByaXRlID09PSB0aGlzLmdyb3VuZFBsYXllci5zcHJpdGUpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubGV2ZWwgPiAxKVxuICAgICAgICBpZiAodGhpcy5ncm91bmRQbGF5ZXIgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgJiYgcGxheWVyU3ByaXRlID09PSB0aGlzLmdyb3VuZFBsYXllci5zcHJpdGVcbiAgICAgICAgICAgICYmIChwbGF5ZXJTcHJpdGUueCA+IDUwMCB8fCB0aGlzLmxldmVsID4gMSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieWVzXCIsIHRoaXMubGV2ZWxFbnRyYW5jZS54LCB0aGlzLmxldmVsRW50cmFuY2UueSk7XG4gICAgICAgICAgICB0aGlzLmdyb3VuZFBsYXllci5zcHJpdGUueCA9IHRoaXMubGV2ZWxFbnRyYW5jZS54O1xuICAgICAgICAgICAgdGhpcy5ncm91bmRQbGF5ZXIuc3ByaXRlLnkgPSB0aGlzLmxldmVsRW50cmFuY2UueTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25Ub3VjaEh5ZHJhbnQoX3BsYXllciwgaHlkcmFudDogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSkge1xuICAgICAgICBpZiAoaHlkcmFudC5zdGF0ZSA9PT0gMSkgcmV0dXJuOyAgLy8gQWxyZWFkeSBhdHRhY2hlZFxuICAgICAgICB0aGlzLmh5ZHJhbnRzLmNoaWxkcmVuLml0ZXJhdGUoKG90aGVySHlkcmFudDogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSkgPT4ge1xuICAgICAgICAgICAgb3RoZXJIeWRyYW50LnNldFN0YXRlKDApO1xuICAgICAgICAgICAgb3RoZXJIeWRyYW50LmNsZWFyVGludCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgaHlkcmFudC5zZXRTdGF0ZSgxKTtcbiAgICAgICAgdGhpcy5ob3NlLnNldFN0YXJ0VG8oaHlkcmFudC5nZXRDZW50ZXIoKSk7XG4gICAgICAgIGh5ZHJhbnQuc2V0VGludCgweGZmMDAwMCk7XG4gICAgICAgIHRoaXMuYXR0YWNoU291bmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuYXR0YWNoU291bmRzLmxlbmd0aCldLnBsYXkoKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25Cb3hXYXRlckNvbGxpc2lvbihib3gsIHdhdGVyKSB7XG4gICAgICAgIC8vIHdhdGVyLmNvbGxpZGVkIGlzIGEgc2VtaWhhY2tcbiAgICAgICAgaWYgKHdhdGVyLmNvbGxpZGVkKSByZXR1cm47XG4gICAgICAgIGJveC5ib2R5LnNldFZlbG9jaXR5KFxuICAgICAgICAgICAgd2F0ZXIuYm9keS52ZWxvY2l0eS54IC8gQm94LldBVEVSX1NUUkVOR1RIX0ZBQ1RPUixcbiAgICAgICAgICAgIHdhdGVyLmJvZHkudmVsb2NpdHkueSAvIEJveC5XQVRFUl9TVFJFTkdUSF9GQUNUT1IpO1xuXG4gICAgICAgIGNvbnN0IGYgPSBCb3guQk9YX1NUUkVOR1RIX09OX1dBVEVSX0ZBQ1RPUjtcbiAgICAgICAgd2F0ZXIuYm9keS5zZXRWZWxvY2l0eSgtd2F0ZXIuYm9keS52ZWxvY2l0eS54IC8gUGhhc2VyLk1hdGguQmV0d2VlbihmIC0gMiwgZiArIDIpLCAtd2F0ZXIuYm9keS52ZWxvY2l0eS55IC8gUGhhc2VyLk1hdGguQmV0d2VlbihmIC0gMiwgZiArIDIpKTtcbiAgICAgICAgd2F0ZXIuY29sbGlkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Ub3VjaFRlbGVwb3J0KFxuICAgICAgICBwbGF5ZXJTcHJpdGU6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUsXG4gICAgICAgIHRwOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlLFxuICAgICkge1xuICAgICAgICBsZXQgb3RoZXJUcCA9IHRoaXMudGVsZXBvcnRNYW5hZ2VyLmdldENvcnJlc3BvbmRpbmdUZWxlcG9ydCh0cCk7XG4gICAgICAgIGlmIChvdGhlclRwID09PSBudWxsKSByZXR1cm47XG5cbiAgICAgICAgbGV0IHBsYXllcjogUGxheWVyID0gKHBsYXllclNwcml0ZSA9PT0gdGhpcy5ob3NlUGxheWVyLnNwcml0ZSkgPyB0aGlzLmhvc2VQbGF5ZXIgOiB0aGlzLmdyb3VuZFBsYXllcjtcblxuICAgICAgICBpZiAocGxheWVyLmNhblRlbGVwb3J0KSB7XG4gICAgICAgICAgICBwbGF5ZXJTcHJpdGUueCA9IG90aGVyVHAueDtcbiAgICAgICAgICAgIHBsYXllclNwcml0ZS55ID0gb3RoZXJUcC55IC0gMzI7XG4gICAgICAgICAgICBwbGF5ZXIub25UZWxlcG9ydCgpO1xuXG4gICAgICAgICAgICBpZiAocGxheWVyID09PSB0aGlzLmhvc2VQbGF5ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvc2Uuc2V0U3RhcnRUbyhuZXcgVmVjdG9yMihvdGhlclRwLngsIG90aGVyVHAueSAtIDMyKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBsb2FkUm9vbShyb29tKSB7XG4gICAgICAgIGxldCBtYXAgPSB0aGlzLm1ha2UudGlsZW1hcCh7IGtleTogcm9vbS5tYXBLZXkgfSk7XG5cbiAgICAgICAgY29uc3QgdGlsZXNldCA9IG1hcC5hZGRUaWxlc2V0SW1hZ2UoJ1RpbGVzZXRNYXAnLCAndGlsZXMnKTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IChTQ1JFRU5fV0lEVEggLSBGTE9PUl9XSURUSCkgLyAyO1xuICAgICAgICBjb25zdCBvZmZzZXRZID0gU0NSRUVOX0hFSUdIVCAtIDMyIC0gKFRJTEVfU0laRSAqICh0aGlzLmJ1aWxkaW5nSGVpZ2h0ICsgNyAqIHJvb20ucHJvcGVydGllcy5oZWlnaHQpKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvb20ucHJvcGVydGllcy5oZWlnaHQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJnTWFwID0gdGhpcy5tYWtlLnRpbGVtYXAoeyBrZXk6IFwiYmFja2dyb3VuZDFcIiB9KTtcbiAgICAgICAgICAgIGJnTWFwLmNyZWF0ZUxheWVyKCdiYWNrZ3JvdW5kJywgdGlsZXNldCwgb2Zmc2V0WCwgb2Zmc2V0WSArIEZMT09SX0hFSUdIVCAqIGkpLnNldERlcHRoKDApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxheWVyID0gbWFwLmNyZWF0ZUxheWVyKCd3YWxscycsIHRpbGVzZXQsIG9mZnNldFgsIG9mZnNldFkpO1xuICAgICAgICBtYXAuY3JlYXRlTGF5ZXIoJ3dpbmRvd3MnLCB0aWxlc2V0LCBvZmZzZXRYLCBvZmZzZXRZKTtcbiAgICAgICAgbGF5ZXIuc2V0Q29sbGlzaW9uQnlFeGNsdXNpb24oWy0xXSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMud2FsbHMucHVzaChsYXllcik7XG4gICAgICAgIHRoaXMuYnVpbGRpbmdIZWlnaHQgKz0gNyAqIHJvb20ucHJvcGVydGllcy5oZWlnaHQ7XG5cbiAgICAgICAgLy8gVmljdGltcy5cbiAgICAgICAgbWFwLmdldE9iamVjdExheWVyKCd2aWN0aW1zJyk/Lm9iamVjdHMuZm9yRWFjaCgodmljdGltVGlsZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHZpY3RpbSA9IG5ldyBFbFZpY3RpbW8oXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBvZmZzZXRYICsgdmljdGltVGlsZS54IC0gOCxcbiAgICAgICAgICAgICAgICBvZmZzZXRZICsgdmljdGltVGlsZS55IC0gNDgsXG4gICAgICAgICAgICAgICAgRUxfVklDVElNT19TUFJJVEVfS0VZLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuZWxWaWN0aW1vcy5hZGQodmljdGltLCB0cnVlKTtcbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgLy8gRG9vcnMuXG4gICAgICAgIGNvbnN0IGtleXMgPSBtYXAuZ2V0T2JqZWN0TGF5ZXIoJ2tleXMnKT8ub2JqZWN0cztcbiAgICAgICAgaWYgKGtleXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGsgb2Yga2V5cylcbiAgICAgICAgICAgICAgICBhc3NlcnQoay5oYXNPd25Qcm9wZXJ0eSgncHJvcGVydGllcycpLCByb29tLm1hcEtleSArIFwiIEtleXMgZG9uJ3QgaGF2ZSBjb2xvcnMgc3BlY2lmaWVkIVwiKTtcbiAgICAgICAgICAgIHBhcnNlQWxsUHJvcGVydGllcyhrZXlzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkb29ycyA9IG1hcC5nZXRPYmplY3RMYXllcignZG9vcnMnKT8ub2JqZWN0cztcbiAgICAgICAgaWYgKGRvb3JzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBkIG9mIGRvb3JzKVxuICAgICAgICAgICAgICAgIGFzc2VydChkLmhhc093blByb3BlcnR5KCdwcm9wZXJ0aWVzJyksIHJvb20ubWFwS2V5ICsgXCIgRG9vcnMgZG9uJ3QgaGF2ZSBjb2xvcnMgc3BlY2lmaWVkIVwiKTtcbiAgICAgICAgICAgIHBhcnNlQWxsUHJvcGVydGllcyhkb29ycyk7XG4gICAgICAgIH1cbiAgICAgICAgZG9vcnM/LmZvckVhY2goKGRvb3JUaWxlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZG9vciA9IG5ldyBEb29yKHRoaXMsIG9mZnNldFggKyBkb29yVGlsZS54LCBvZmZzZXRZICsgZG9vclRpbGUueSwgZG9vclRpbGUud2lkdGgsIGRvb3JUaWxlLmhlaWdodCwgZG9vclRpbGUucHJvcGVydGllcy5jb2xvcik7XG4gICAgICAgICAgICB0aGlzLmRvb3JzLmFkZChkb29yLmRvb3JTcHJpdGUsIHRydWUpO1xuICAgICAgICAgICAgY29uc3QgZml0dGluZ0tleXMgPSBrZXlzLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleS5wcm9wZXJ0aWVzLmNvbG9yID09IGRvb3JUaWxlLnByb3BlcnRpZXMuY29sb3I7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBvZiBmaXR0aW5nS2V5cykge1xuICAgICAgICAgICAgICAgIGRvb3IuYWRkS2V5KHRoaXMsIG9mZnNldFggKyBrZXkueCwgb2Zmc2V0WSArIGtleS55KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQm94ZXNcbiAgICAgICAgbWFwLmdldE9iamVjdExheWVyKCdib3hlcycpPy5vYmplY3RzLmZvckVhY2goKGJveFRpbGUpID0+IHtcbiAgICAgICAgICAgIGlmIChib3hUaWxlLnBvbHlnb24pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBvbHlnb24gYm94ZXMgYXJlIG5vdCBzdXBwb3J0ZWQuLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGJveCA9IG5ldyBCb3goXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBib3hUaWxlLnggKyBvZmZzZXRYLFxuICAgICAgICAgICAgICAgIGJveFRpbGUueSArIG9mZnNldFksXG4gICAgICAgICAgICAgICAgYm94VGlsZS53aWR0aCxcbiAgICAgICAgICAgICAgICBib3hUaWxlLmhlaWdodCxcbiAgICAgICAgICAgICAgICAnYm94J1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuYm94ZXMuYWRkKGJveCwgdHJ1ZSk7XG4gICAgICAgICAgICBib3guc2V0TWFzcygxLjUpO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAvLyBIeWRyYW50c1xuICAgICAgICBtYXAuZ2V0T2JqZWN0TGF5ZXIoJ2h5ZHJhbnRzJyk/Lm9iamVjdHMuZm9yRWFjaCgoaHlkcmFudFRpbGUpID0+IHtcbiAgICAgICAgICAgIGxldCBoeWRyYW50ID0gdGhpcy5waHlzaWNzLmFkZC5zdGF0aWNTcHJpdGUoXG4gICAgICAgICAgICAgICAgb2Zmc2V0WCArIGh5ZHJhbnRUaWxlLngsXG4gICAgICAgICAgICAgICAgb2Zmc2V0WSArIGh5ZHJhbnRUaWxlLnksXG4gICAgICAgICAgICAgICAgJ2h5ZHJhbnQnLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGh5ZHJhbnQuc2V0T3JpZ2luKDAsIDEpO1xuICAgICAgICAgICAgaHlkcmFudC5zZXREZXB0aCgxKTtcbiAgICAgICAgICAgIGh5ZHJhbnQucmVmcmVzaEJvZHkoKTtcblxuICAgICAgICAgICAgaHlkcmFudC5zZXRTdGF0ZSgwKTtcbiAgICAgICAgICAgIHRoaXMuaHlkcmFudHMuYWRkKGh5ZHJhbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRlbGVwb3J0TWFuYWdlci5hZGRSb29tKG1hcCwgb2Zmc2V0WCwgb2Zmc2V0WSk7XG5cbiAgICAgICAgLy8gRmlyZXMuXG4gICAgICAgIG1hcC5nZXRPYmplY3RMYXllcignZmlyZXMnKT8ub2JqZWN0cy5zb3J0KChhLCBiKSA9PiBhLnkgLSBiLnkpLmZvckVhY2goKGZpcmVUaWxlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZmlyZSA9IG5ldyBGaXJlKHRoaXMsIG9mZnNldFggKyBmaXJlVGlsZS54ICsgMTUsIG9mZnNldFkgKyBmaXJlVGlsZS55IC0gMzgsICdmaXJlJyk7XG4gICAgICAgICAgICB0aGlzLmZpcmVzLmFkZChmaXJlLCB0cnVlKTtcbiAgICAgICAgICAgIGZpcmUuYm9keS5zZXRTaXplKDMwLCA2MCwgdHJ1ZSk7XG4gICAgICAgICAgICBmaXJlLnVwZGF0ZVNjYWxlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tWaWN0b3J5KCkge1xuICAgICAgICBjb25zdCBhbGxTYXZlZCA9IHRoaXMuZWxWaWN0aW1vcy5nZXRDaGlsZHJlbigpLmV2ZXJ5KCh2aWN0aW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAodmljdGltIGFzIEVsVmljdGltbykuc2F2ZWQ7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWFsbFNhdmVkKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vdCBldmVyeW9uZSBpcyBzYXZlZClcIik7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmVsVmljdGltb3MpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVklDVE9SWVwiKTtcblxuICAgICAgICB0aGlzLmh5ZHJhbnRzID0gdGhpcy5waHlzaWNzLmFkZC5zdGF0aWNHcm91cCgpO1xuICAgICAgICB0aGlzLmRvb3JzID0gdGhpcy5waHlzaWNzLmFkZC5zdGF0aWNHcm91cCgpO1xuICAgICAgICB0aGlzLmJveGVzID0gdGhpcy5waHlzaWNzLmFkZC5ncm91cCh7IGNvbGxpZGVXb3JsZEJvdW5kczogdHJ1ZSwgcnVuQ2hpbGRVcGRhdGU6IHRydWUgfSk7XG4gICAgICAgIHRoaXMud2FsbHMgPSBbXTtcbiAgICAgICAgdGhpcy5lbFZpY3RpbW9zID0gdGhpcy5waHlzaWNzLmFkZC5ncm91cCh7IGNvbGxpZGVXb3JsZEJvdW5kczogdHJ1ZSwgcnVuQ2hpbGRVcGRhdGU6IHRydWUgfSk7XG4gICAgICAgIHRoaXMuZmlyZXMgPSB0aGlzLnBoeXNpY3MuYWRkLnN0YXRpY0dyb3VwKCk7XG4gICAgICAgIHRoaXMudGVsZXBvcnRNYW5hZ2VyLmNsZWFyT2xkKClcblxuICAgICAgICBsZXQgcm9vbXMgPSB0aGlzLmxldmVsR2VuZXJhdG9yLmdlbmVyYXRlTGV2ZWwoZmFsc2UpO1xuICAgICAgICBmb3IgKGxldCByb29tIG9mIHJvb21zKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRSb29tKHJvb20pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRDb2xsaXNpb25zKCk7XG5cbiAgICAgICAgdGhpcy5za3kueSA9IHRoaXMuc2t5LnkgLSBTQ1JFRU5fSEVJR0hUO1xuICAgICAgICBsZXQgeCA9IHRoaXMuY2FtZXJhcy5tYWluLmNlbnRlclg7XG4gICAgICAgIGxldCB5ID0gdGhpcy5jYW1lcmFzLm1haW4uc2Nyb2xsWSArIHRoaXMuY2FtZXJhcy5tYWluLmNlbnRlclk7XG4gICAgICAgIHRoaXMuY2FtZXJhT2Zmc2V0WSAtPSAyMSAqIFRJTEVfU0laRTtcbiAgICAgICAgdGhpcy5waHlzaWNzLndvcmxkLnNldEJvdW5kcygwLCB0aGlzLmNhbWVyYU9mZnNldFksIFNDUkVFTl9XSURUSCwgU0NSRUVOX0hFSUdIVCAtIHRoaXMuY2FtZXJhT2Zmc2V0WSk7XG5cbiAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4ucGFuKHgsIHkgLSAyMSAqIFRJTEVfU0laRSwgMjAwMCwgXCJRdWFkLmVhc2VJbk91dFwiKTtcblxuICAgICAgICB0aGlzLmxldmVsRW50cmFuY2UgPSByb29tc1swXS5nZXRPYmplY3RMYXllcignZW50cnl0ZWxlcG9ydCcpLm9iamVjdHNbMF07XG4gICAgICAgIGNvbnN0IG9mZnNldFggPSAoU0NSRUVOX1dJRFRIIC0gRkxPT1JfV0lEVEgpIC8gMjtcbiAgICAgICAgLy8gY29uc29sZS5sb2coKVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxldmVsRW50cmFuY2UueCwgdGhpcy5sZXZlbEVudHJhbmNlLnksIHRoaXMuY2FtZXJhT2Zmc2V0WSk7XG5cbiAgICAgICAgbGV0IGhlaWdodE9mUm9vbXNBYm92ZSA9IHJvb21zLm1hcCgocm9vbSkgPT4gK3Jvb20ucHJvcGVydGllcy5oZWlnaHQpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpIC0gcm9vbXNbMF0ucHJvcGVydGllcy5oZWlnaHQ7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGVpZ2h0IEFib3ZlXCIsIGhlaWdodE9mUm9vbXNBYm92ZSk7XG4gICAgICAgIGxldCBkeSA9IHRoaXMubGV2ZWxFbnRyYW5jZS55ICsgKHRoaXMuY2FtZXJhT2Zmc2V0WSAtIDQ4KSArIDMyICogNyAqIGhlaWdodE9mUm9vbXNBYm92ZTtcbiAgICAgICAgbGV0IGR4ID0gdGhpcy5sZXZlbEVudHJhbmNlLnggKyBvZmZzZXRYO1xuICAgICAgICB0aGlzLmxldmVsRW50cmFuY2UgPSBuZXcgVmVjdG9yMihkeCwgZHkpO1xuICAgICAgICBjb25zb2xlLmxvZyhkeCwgZHksIFwib2Zmc2V0WFwiLCBvZmZzZXRYLCB0aGlzLmNhbWVyYU9mZnNldFkpO1xuXG4gICAgICAgIHRoaXMuaG9zZVBsYXllci5zcHJpdGUueCA9IGR4IC0gMTA7XG4gICAgICAgIHRoaXMuaG9zZVBsYXllci5zcHJpdGUueSA9IGR5O1xuICAgICAgICB0aGlzLmdyb3VuZFBsYXllci5zcHJpdGUueCA9IGR4ICsgMTA7XG4gICAgICAgIHRoaXMuZ3JvdW5kUGxheWVyLnNwcml0ZS55ID0gZHk7XG5cbiAgICAgICAgdGhpcy5ob3NlUGxheWVyLnNwcml0ZS5ib2R5LnNldFZlbG9jaXR5KDAsIDApO1xuICAgICAgICB0aGlzLmdyb3VuZFBsYXllci5zcHJpdGUuYm9keS5zZXRWZWxvY2l0eSgwLCAwKTtcblxuICAgICAgICB0aGlzLmhvc2Uuc2V0U3RhcnRUbyhuZXcgVmVjdG9yMihkeCAtIDEwLCBkeSAtIDMyKSk7XG5cbiAgICAgICAgdGhpcy5sZXZlbCsrO1xuICAgICAgICB0aGlzLmxldmVsVGV4dC5zZXRUZXh0KCdMZXZlbDogJyArIHRoaXMubGV2ZWwpO1xuXG4gICAgICAgIHRoaXMudGltZUZhY3RvciA9IHRoaXMudGltZUZhY3RvckRlY3JlYXNlICogdGhpcy50aW1lRmFjdG9yO1xuICAgICAgICB0aGlzLnRpbWVyLnN0YXJ0KHRoaXMudGltZVBlclZpY3RpbSAqIHRoaXMudGltZUZhY3RvciAqIHRoaXMuZWxWaWN0aW1vcy5nZXRDaGlsZHJlbigpLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEdhbWVPdmVyKGVuYWJsZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmlzR2FtZU92ZXIgPSBlbmFibGU7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJUZXh0LnNldFZpc2libGUoZW5hYmxlKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlckJhY2tncm91bmQuc2V0VmlzaWJsZShlbmFibGUpO1xuICAgICAgICBpZiAoZW5hYmxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBgSm9zZUhvc2Uke3RoaXMudGltZS5ub3d9YDtcbiAgICAgICAgICAgICAgICBjb25zdCBtYW5hZ2VyID0gdGhpcy5zY2VuZS5tYW5hZ2VyO1xuICAgICAgICAgICAgICAgIG1hbmFnZXIucmVtb3ZlKHRoaXMua2V5SW5NYW5hZ2VyKTtcbiAgICAgICAgICAgICAgICBtYW5hZ2VyLmFkZChrZXksIG5ldyBMZXZlbFNjZW5lKGtleSkpO1xuICAgICAgICAgICAgICAgIG1hbmFnZXIucnVuKGtleSk7XG4gICAgICAgICAgICAgICAgbWFuYWdlci5icmluZ1RvVG9wKGtleSk7XG4gICAgICAgICAgICB9LCA0MDAwKSAvLyBkZWJ1ZyBzdHVmZlxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb25maWd1cmVUZXh0KHRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0KSB7XG4gICAgdGV4dC5zZXREZXB0aCgxMDApXG4gICAgICAgIC5zZXRTaGFkb3dPZmZzZXQoMiwgMilcbiAgICAgICAgLnNldFNoYWRvd0NvbG9yKFwiYmxhY2tcIilcbiAgICAgICAgLnNldFNoYWRvd1N0cm9rZSh0cnVlKVxuICAgICAgICAuc2V0U2hhZG93RmlsbCh0cnVlKVxuICAgICAgICAuc2V0QmFja2dyb3VuZENvbG9yKFwiI2RkMDAwMFwiKVxuICAgICAgICAuc2V0UGFkZGluZygzKVxuICAgICAgICAuc2V0QWxwaGEoMC44KVxuICAgICAgICAuc2V0U2Nyb2xsRmFjdG9yKDApO1xufSIsImltcG9ydCB7IExldmVsU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvbGV2ZWxTY2VuZVwiO1xuXG5leHBvcnQgY2xhc3MgVGVsZXBvcnRNYW5hZ2VyIHtcbiAgICBlbnRyeVRlbGVwb3J0cyA9IFtdO1xuICAgIGV4aXRUZWxlcG9ydHMgPSBbXTtcbiAgICB0ZWxlcG9ydHM6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TdGF0aWNHcm91cDtcblxuICAgIHNjZW5lOiBMZXZlbFNjZW5lO1xuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IExldmVsU2NlbmUpIHtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICAgICAgICB0aGlzLnRlbGVwb3J0cyA9IHNjZW5lLnBoeXNpY3MuYWRkLnN0YXRpY0dyb3VwKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZFJvb20obWFwOiBQaGFzZXIuVGlsZW1hcHMuVGlsZW1hcCwgb2Zmc2V0WCwgb2Zmc2V0WSkge1xuICAgICAgICBsZXQgZW50cmllcyA9IG1hcC5nZXRPYmplY3RMYXllcignZW50cnl0ZWxlcG9ydCcpO1xuICAgICAgICBsZXQgZXhpdHMgPSBtYXAuZ2V0T2JqZWN0TGF5ZXIoJ2V4aXR0ZWxlcG9ydCcpO1xuXG4gICAgICAgIGxldCBwdXRTcHJpdGUgPSAocG9zLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGxldCBzcHJpdGUgPSB0aGlzLnNjZW5lLnBoeXNpY3MuYWRkLnN0YXRpY1Nwcml0ZShcbiAgICAgICAgICAgICAgICBwb3MueCArIG9mZnNldFgsXG4gICAgICAgICAgICAgICAgcG9zLnkgKyBvZmZzZXRZLFxuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzcHJpdGUuc2V0T3JpZ2luKDAsIDEpO1xuICAgICAgICAgICAgc3ByaXRlLnNldERlcHRoKDEpO1xuICAgICAgICAgICAgc3ByaXRlLnJlZnJlc2hCb2R5KCk7XG4gICAgICAgICAgICByZXR1cm4gc3ByaXRlO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChlbnRyaWVzICE9PSBudWxsICYmIGVudHJpZXMub2JqZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgc3ByaXRlID0gcHV0U3ByaXRlKGVudHJpZXMub2JqZWN0c1swXSwgXCJzdGFpcnNkb3duXCIpO1xuICAgICAgICAgICAgdGhpcy5lbnRyeVRlbGVwb3J0cy5wdXNoKHNwcml0ZSk7XG4gICAgICAgICAgICB0aGlzLnRlbGVwb3J0cy5hZGQoc3ByaXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW50cnlUZWxlcG9ydHMucHVzaChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChleGl0cyAhPT0gbnVsbCAmJiBleGl0cy5vYmplY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBzcHJpdGUgPSBwdXRTcHJpdGUoZXhpdHMub2JqZWN0c1swXSwgXCJzdGFpcnN1cFwiKTtcbiAgICAgICAgICAgIHRoaXMuZXhpdFRlbGVwb3J0cy5wdXNoKHNwcml0ZSk7XG4gICAgICAgICAgICB0aGlzLnRlbGVwb3J0cy5hZGQoc3ByaXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXhpdFRlbGVwb3J0cy5wdXNoKG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coZW50cmllcywgZXhpdHMpXG4gICAgICAgIC8vIC5vYmplY3RzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHRpbGUpXG4gICAgICAgIC8vIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDb3JyZXNwb25kaW5nVGVsZXBvcnQoc3ByaXRlOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlKSB7XG4gICAgICAgIGxldCBuID0gdGhpcy5lbnRyeVRlbGVwb3J0cy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA8IG4gLSAxICYmIHRoaXMuZXhpdFRlbGVwb3J0c1tpXSA9PT0gc3ByaXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gcG9zc2libHkgbnVsbFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVudHJ5VGVsZXBvcnRzW2kgKyAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpID4gMCAmJiB0aGlzLmVudHJ5VGVsZXBvcnRzW2ldID09PSBzcHJpdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5leGl0VGVsZXBvcnRzW2kgLSAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJPbGQoKSB7XG4gICAgICAgIGxldCBuID0gdGhpcy5lbnRyeVRlbGVwb3J0cy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmVudHJ5VGVsZXBvcnRzW2ldID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZXhpdFRlbGVwb3J0c1tpXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgRWxWaWN0aW1vIH0gZnJvbSBcIi4vZWxWaWN0aW1vXCI7XG5pbXBvcnQgeyBMZXZlbFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL2xldmVsU2NlbmVcIjtcblxuZXhwb3J0IGNsYXNzIFRoYW5rc1dhbGwgZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcbiAgICBzY2VuZTogTGV2ZWxTY2VuZTtcbiAgICB0aGFua3NTb3VuZHM6IFBoYXNlci5Tb3VuZC5CYXNlU291bmRbXTtcblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBMZXZlbFNjZW5lLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCB0ZXh0dXJlS2V5LCB0aGFua3NTb3VuZHM6IFBoYXNlci5Tb3VuZC5CYXNlU291bmRbXSkge1xuICAgICAgICBzdXBlcihzY2VuZSwgeCwgeSwgdGV4dHVyZUtleSk7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICAgICAgdGhpcy5zZXRPcmlnaW4oMCwgMCk7XG4gICAgICAgIHRoaXMuc2V0RGlzcGxheVNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHRoaXMuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMudGhhbmtzU291bmRzID0gdGhhbmtzU291bmRzO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYW5kbGVWaWN0aW0odmljdGltOiBFbFZpY3RpbW8pIHtcbiAgICAgICAgaWYgKHZpY3RpbS5zYXZlZCB8fCB2aWN0aW0uc2F2aW9yICE9IG51bGwpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgdGhpcy50aGFua3NTb3VuZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy50aGFua3NTb3VuZHMubGVuZ3RoKV0ucGxheSgpO1xuICAgICAgICB2aWN0aW0uc2F2ZWQgPSB0cnVlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBMZXZlbFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL2xldmVsU2NlbmVcIjtcblxuZXhwb3J0IGNsYXNzIFRpbWVyIHtcbiAgICBzY2VuZTogTGV2ZWxTY2VuZTtcbiAgICBzcHJpdGU6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XG4gICAgdG90YWxfbXM6IG51bWJlcjtcbiAgICBzdGFydFRpbWVfbXM6IG51bWJlcjtcbiAgICBpc1J1bm5pbmc6IGJvb2xlYW47XG5cbiAgICB4OyB5OyB3aWR0aDsgaGVpZ2h0O1xuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IExldmVsU2NlbmUsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHRleHR1cmVLZXk6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgICAgIHRoaXMuc3ByaXRlID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKHgsIHksIHRleHR1cmVLZXkpO1xuICAgICAgICB0aGlzLnNwcml0ZS5zZXRTY3JvbGxGYWN0b3IoMCwgMCk7XG4gICAgICAgIHRoaXMuc3ByaXRlLnNldE9yaWdpbigwLCAxKTtcbiAgICAgICAgdGhpcy5zcHJpdGUuc2V0RGlzcGxheVNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuc3ByaXRlLnZpc2libGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnQodG90YWxfbXMpIHtcbiAgICAgICAgdGhpcy5zcHJpdGUuc2V0RGlzcGxheVNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLnNwcml0ZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50b3RhbF9tcyA9IHRvdGFsX21zO1xuICAgICAgICB0aGlzLnN0YXJ0VGltZV9tcyA9IHRoaXMuc2NlbmUudGltZS5ub3c7XG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKHRpbWUsIF9kZWx0YSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNSdW5uaW5nKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGVsYXBzZWRGcmFjdGlvbiA9IE1hdGgubWluKDEsICh0aW1lIC0gdGhpcy5zdGFydFRpbWVfbXMpIC8gdGhpcy50b3RhbF9tcyk7XG4gICAgICAgIHRoaXMuc3ByaXRlLnNldERpc3BsYXlTaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgKiBlbGFwc2VkRnJhY3Rpb24pO1xuICAgICAgICBpZiAoZWxhcHNlZEZyYWN0aW9uID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLnNldEdhbWVPdmVyKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBjbGFtcElmQmxvY2tlZChib2R5LCB2OiBQaGFzZXIuTWF0aC5WZWN0b3IyKSB7XG4gICAgLy8gWmVybyBvdXQgdGhlIHRoZSB2ZWN0b3Igd2hlbiBib2R5IGhpdHMgc3RoLlxuICAgIHYgPSB2LmNsb25lKClcblxuICAgIGlmIChib2R5LmJsb2NrZWQuZG93biAmJiB2LnkgPiAwKSB7XG4gICAgICAgIHYueSA9IDA7XG4gICAgfVxuICAgIGlmIChib2R5LmJsb2NrZWQudXAgJiYgdi55IDwgMCkge1xuICAgICAgICB2LnkgPSAwO1xuICAgIH1cbiAgICBpZiAoYm9keS5ibG9ja2VkLnJpZ2h0ICYmIHYueCA+IDApIHtcbiAgICAgICAgdi54ID0gMDtcbiAgICB9XG4gICAgaWYgKGJvZHkuYmxvY2tlZC5sZWZ0ICYmIHYueCA8IDApIHtcbiAgICAgICAgdi54ID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gdlxufVxuXG5leHBvcnQgZnVuY3Rpb24gemVyb0FjY2VsZXJhdGlvbklmQmxvY2tlZChib2R5KSB7XG4gICAgLy8gWmVybyBvdXQgdGhlIGFjY2VsZXJhdGlvbiB3aGVuIGJvZHkgaGl0cyBzdGguXG4gICAgbGV0IGFjY2VsID0gY2xhbXBJZkJsb2NrZWQoYm9keSwgYm9keS5hY2NlbGVyYXRpb24pO1xuICAgIGJvZHkuc2V0QWNjZWxlcmF0aW9uKGFjY2VsLngsIGFjY2VsLnkpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVByb3BlcnRpZXMocHJvcGVydGllc0FycmF5KSB7XG4gICAgbGV0IHJldCA9IHt9O1xuICAgIGZvciAobGV0IHAgb2YgcHJvcGVydGllc0FycmF5KSB7XG4gICAgICAgIGxldCB2YWwgPSBwWyd2YWx1ZSddO1xuICAgICAgICBpZiAocFsnbmFtZSddID09ICdlbnRyeScgfHwgcFsnbmFtZSddID09ICdleGl0Jykge1xuICAgICAgICAgICAgdmFsID0gdmFsLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICB2YWwgPSB2YWwubWFwKChzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHMudHJpbSgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXRbcFsnbmFtZSddXSA9IHZhbDtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBbGxQcm9wZXJ0aWVzKG9iamVjdHNBcnJheSkge1xuICAgIC8vIGNvbnNvbGUubG9nKG9iamVjdHNBcnJheSk7XG4gICAgZm9yIChsZXQgbyBvZiBvYmplY3RzQXJyYXkpIHtcbiAgICAgICAgb1sncHJvcGVydGllcyddID0gcGFyc2VQcm9wZXJ0aWVzKG9bJ3Byb3BlcnRpZXMnXSlcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==