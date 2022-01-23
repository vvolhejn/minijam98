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
        }
        var positionDiff = damagedSprite.getCenter().clone().subtract(this.getCenter());
        damagedSprite.setVelocityX(this.ON_DAMAGE_VELOCITY_X * (positionDiff.x > 0 ? 1 : (-1)));
        damagedSprite.setVelocityY(-this.ON_DAMAGE_VELOCITY_Y);
        scene.timer.total_ms = Math.max(scene.timer.total_ms - this.FIRE_PLAYER_COLLISION_PENALTY_MS, 0);
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
        _this.JUMP_VELOCITY_Y = -430;
        _this.GRAND_FRICTION_COEF = 0.99;
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
        this.NUM_ROOMS = 16;
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
var levelScene = new levelScene_1.LevelScene();
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
var AU_COUNT = 11;
var TILE_SIZE = 32;
var FLOOR_WIDTH = 32 * TILE_SIZE;
var FLOOR_HEIGHT = 7 * TILE_SIZE;
var LevelScene = /** @class */ (function (_super) {
    __extends(LevelScene, _super);
    function LevelScene() {
        var _this = _super.call(this, {
            key: 'level',
        }) || this;
        _this.cameraOffsetY = 0;
        _this.timeFactor = 1;
        _this.timeFactorDecrease = 0.98;
        _this.timePerVictim = 30 * 1000; // ms
        _this.level = 1;
        _this.isGameOver = false;
        _this.levelEntrance = new Vector2(60, main_1.SCREEN_HEIGHT - 60 - 20);
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
        this.physics.add.collider(this.boxes, this.fires);
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
        this.physics.add.collider(this.boxes, this.fires, this.extinguishFireWithBox, null, this);
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
    LevelScene.prototype.extinguishFireWithBox = function (box, fire) {
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
        console.log(otherTp);
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
        var heightOfRoomsAbove = rooms.map(function (room) { return room.properties.height; }).sum() - rooms[0].properties.height;
        var dy = this.levelEntrance.y + (this.cameraOffsetY - 48) + heightOfRoomsAbove;
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
            setTimeout(function () { return _this.setGameOver(false); }, 500); // debug stuff
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
        var putSprite = function (pos) {
            var sprite = _this.scene.physics.add.staticSprite(pos.x + offsetX, pos.y + offsetY, "debugstar");
            sprite.setOrigin(0, 1);
            sprite.setDepth(10);
            sprite.refreshBody();
            return sprite;
        };
        if (entries !== null && entries.objects.length > 0) {
            var sprite = putSprite(entries.objects[0]);
            sprite.setTint(0xff0000);
            this.entryTeleports.push(sprite);
            this.teleports.add(sprite);
        }
        else {
            this.entryTeleports.push(null);
        }
        if (exits !== null && exits.objects.length > 0) {
            var sprite = putSprite(exits.objects[0]);
            sprite.setTint(0x00ff00);
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
        console.log(this.entryTeleports, this.exitTeleports);
        var n = this.entryTeleports.length;
        for (var i = 0; i < n; i++) {
            if (i < n - 1 && this.exitTeleports[i] === sprite) {
                // possibly null
                return this.entryTeleports[i + 1]; //swapped signs
            }
            if (i > 0 && this.entryTeleports[i] === sprite) {
                return this.exitTeleports[i - 1];
            }
        }
        return null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JveC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9vci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxWaWN0aW1vLnRzIiwid2VicGFjazovLy8uL3NyYy9maXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9ncm91bmRQbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvc2VQbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xldmVsR2VuZXJhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbGV2ZWxTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVsZXBvcnRNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy90aGFua3NXYWxsLnRzIiwid2VicGFjazovLy8uL3NyYy90aW1lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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QUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDO2dCQUNaLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRTtZQUNuQixDQUFDLENBQUMsQ0FBQztTQUNOO1FBQ0QsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztLQUN4QjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQWJELDBDQWFDO0FBR0QsU0FBZ0Isa0JBQWtCLENBQUMsWUFBWTtJQUMzQyw2QkFBNkI7SUFDN0IsS0FBYyxVQUFZLEVBQVosNkJBQVksRUFBWiwwQkFBWSxFQUFaLElBQVksRUFBRTtRQUF2QixJQUFJLENBQUM7UUFDTixDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUNyRDtBQUNMLENBQUM7QUFMRCxnREFLQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgeyBMZXZlbFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL2xldmVsU2NlbmVcIjtcblxuZXhwb3J0IGNsYXNzIEJveCBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUge1xuICAgIHNjZW5lOiBMZXZlbFNjZW5lO1xuICAgIEZSSUNUSU9OX0NPRUYgPSAwLjk7XG4gICAgc3RhdGljIFdBVEVSX1NUUkVOR1RIX0ZBQ1RPUiA9IDI7XG4gICAgc3RhdGljIEJPWF9TVFJFTkdUSF9PTl9XQVRFUl9GQUNUT1IgPSA3O1xuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IExldmVsU2NlbmUsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHRleHR1cmVLZXkpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUsIHgsIHksIHRleHR1cmVLZXkpO1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgICAgIHRoaXMuc2V0T3JpZ2luKDAsIDEpO1xuICAgICAgICB0aGlzLnNldERpc3BsYXlTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB0aGlzLnNldERlcHRoKDUpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoX3RpbWUsIGRlbHRhKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0VmVsb2NpdHlYKFxuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggKiBNYXRoLnBvdygxIC0gdGhpcy5GUklDVElPTl9DT0VGLCBkZWx0YSAvIDEwMDApXG4gICAgICAgICk7XG4gICAgfVxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSBcInBoYXNlclwiO1xuaW1wb3J0IHsgTGV2ZWxTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy9sZXZlbFNjZW5lXCI7XG5cbmV4cG9ydCBjbGFzcyBEb29yIHtcblxuICAgIGRvb3JTcHJpdGU6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGU7XG4gICAga2V5U3ByaXRlOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlO1xuICAgIGxvY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgb3BlbkxlZnQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIG9wZW5SaWdodDogYm9vbGVhbiA9IHRydWU7XG4gICAgb3BlblVwOiBib29sZWFuID0gdHJ1ZTtcbiAgICBvcGVuRG93bjogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBjb2xvcjogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgeDogaW50ZWdlciwgeTogaW50ZWdlciwgd2lkdGg6IGludGVnZXIsIGhlaWdodDogaW50ZWdlciwgY29sb3I6IHN0cmluZykge1xuICAgICAgICBsZXQgdGV4dHVyZUtleTtcbiAgICAgICAgaWYgKHdpZHRoID09IDMyICYmIGhlaWdodCA9PSA5Nikge1xuICAgICAgICAgICAgdGV4dHVyZUtleSA9ICdkb29yMTMnO1xuICAgICAgICB9IGVsc2UgaWYgKHdpZHRoID09IDMyICYmIGhlaWdodCA9PSA2NCkge1xuICAgICAgICAgICAgdGV4dHVyZUtleSA9ICdkb29yMTInO1xuICAgICAgICB9IGVsc2UgaWYgKHdpZHRoID09IDY0ICYmIGhlaWdodCA9PSAzMikge1xuICAgICAgICAgICAgdGV4dHVyZUtleSA9ICd0cmFwZG9vcic7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRvb3JTcHJpdGUgPSBzY2VuZS5waHlzaWNzLmFkZC5zdGF0aWNTcHJpdGUoeCwgeSwgdGV4dHVyZUtleSk7XG4gICAgICAgIHRoaXMuZG9vclNwcml0ZS5zZXRPcmlnaW4oMCwgMSk7XG4gICAgICAgIHRoaXMuZG9vclNwcml0ZS5zZXREaXNwbGF5U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5kb29yU3ByaXRlLnJlZnJlc2hCb2R5KCk7XG4gICAgICAgIHRoaXMuc2V0T3BlblNpZGVzKHRydWUsIHRydWUsIHRydWUsIHRydWUpO1xuXG4gICAgICAgIGNvbnN0IGNvbG9yRGljdCA9IHsgJ2JsdWUnOiAweDA0OTJDMiwgJ3JlZCc6IDB4OTAwYjAzLCAnZ3JlZW4nOiAweDAzYWMxMywgJ3llbGxvdyc6IDB4ZmNlMjA1fTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yRGljdFtjb2xvcl07XG4gICAgICAgIHRoaXMuZG9vclNwcml0ZS5zZXRUaW50KHRoaXMuY29sb3IpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRLZXkoc2NlbmU6IExldmVsU2NlbmUsIHgsIHkpIHtcbiAgICAgICAgdGhpcy5rZXlTcHJpdGUgPSBzY2VuZS5waHlzaWNzLmFkZC5zdGF0aWNTcHJpdGUoeCwgeSwgXCJrZXlcIik7XG4gICAgICAgIHRoaXMua2V5U3ByaXRlLnNldE9yaWdpbigwLCAxKTtcbiAgICAgICAgdGhpcy5rZXlTcHJpdGUucmVmcmVzaEJvZHkoKTtcbiAgICAgICAgdGhpcy5rZXlTcHJpdGUuc2V0VGludCh0aGlzLmNvbG9yKTtcbiAgICAgICAgdGhpcy5sb2NrZWQgPSB0cnVlO1xuXG4gICAgICAgIHNjZW5lLnBoeXNpY3MuYWRkLm92ZXJsYXAoc2NlbmUucGxheWVycywgdGhpcy5rZXlTcHJpdGUsIHRoaXMub25LZXlQaWNrdXAsIG51bGwsIHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbGxpc2lvblNldHRpbmdzKClcbiAgICB9XG5cbiAgICBwdWJsaWMgb25LZXlQaWNrdXAoX2EsIF9iKSB7XG4gICAgICAgIHRoaXMuc2V0TG9ja2VkKGZhbHNlKTtcbiAgICAgICAgdGhpcy5rZXlTcHJpdGUuc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5rZXlTcHJpdGUuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMua2V5U3ByaXRlLmJvZHkuZW5hYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZG9vclNwcml0ZS5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0T3BlblNpZGVzKG9wZW5MZWZ0OiBib29sZWFuLCBvcGVuUmlnaHQ6IGJvb2xlYW4sIG9wZW5VcCA9IGZhbHNlLCBvcGVuRG93biA9IGZhbHNlKSB7XG4gICAgICAgIC8vIFdoaWNoIGRpcmVjdGlvbiBjYW4gdGhlIHBsYXllciB3YWxrIGZyb20gaWYgdGhlIGRvb3IgaXMgdW5sb2NrZWQ/XG4gICAgICAgIHRoaXMub3BlbkxlZnQgPSBvcGVuTGVmdDtcbiAgICAgICAgdGhpcy5vcGVuUmlnaHQgPSBvcGVuUmlnaHQ7XG4gICAgICAgIHRoaXMub3BlblVwID0gb3BlblVwO1xuICAgICAgICB0aGlzLm9wZW5Eb3duID0gb3BlbkRvd247XG4gICAgICAgIHRoaXMudXBkYXRlQ29sbGlzaW9uU2V0dGluZ3MoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0TG9ja2VkKGxvY2tlZCkge1xuICAgICAgICB0aGlzLmxvY2tlZCA9IGxvY2tlZDtcbiAgICAgICAgaWYgKHRoaXMubG9ja2VkKSB7XG4gICAgICAgICAgICB0aGlzLmtleVNwcml0ZS5zZXRUaW50KDB4MDBmZmZmKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMua2V5U3ByaXRlLmNsZWFyVGludCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVDb2xsaXNpb25TZXR0aW5ncygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQ29sbGlzaW9uU2V0dGluZ3MoKSB7XG4gICAgICAgIHRoaXMuZG9vclNwcml0ZS5ib2R5LmNoZWNrQ29sbGlzaW9uID0ge1xuICAgICAgICAgICAgXCJsZWZ0XCI6ICEodGhpcy5vcGVuTGVmdCAmJiAhdGhpcy5sb2NrZWQpLFxuICAgICAgICAgICAgXCJyaWdodFwiOiAhKHRoaXMub3BlblJpZ2h0ICYmICF0aGlzLmxvY2tlZCksXG4gICAgICAgICAgICBcInVwXCI6ICEodGhpcy5vcGVuVXAgJiYgIXRoaXMubG9ja2VkKSxcbiAgICAgICAgICAgIFwiZG93blwiOiAhKHRoaXMub3BlbkRvd24gJiYgIXRoaXMubG9ja2VkKSxcbiAgICAgICAgICAgIFwibm9uZVwiOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9XG59IiwiaW1wb3J0IHsgR3JvdW5kUGxheWVyIH0gZnJvbSBcIi4vZ3JvdW5kUGxheWVyXCI7XG5cbmV4cG9ydCBlbnVtIFZpY3RpbURpcmVjdGlvbiB7XG4gICAgTEVGVCwgUklHSFRcbn1cblxuZXhwb3J0IGNsYXNzIEVsVmljdGltbyBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUge1xuICAgIHNhdmlvcjogR3JvdW5kUGxheWVyO1xuICAgIHNhdmVkOiBib29sZWFuO1xuICAgIGludmluY2libGU6IGJvb2xlYW47XG4gICAgXG4gICAgRlJJQ1RJT05fQ09FRiA9IDAuNztcbiAgICBUSFJPV19WRUxPQ0lUWV9YID0gNTAwO1xuICAgIFRIUk9XX1ZFTE9DSVRZX1kgPSAtMzAwO1xuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgeCwgeSwgdGV4dHVyZUtleTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCB4LCB5LCB0ZXh0dXJlS2V5KTtcbiAgICAgICAgc2NlbmUucGh5c2ljcy5hZGQuZXhpc3RpbmcodGhpcywgZmFsc2UpO1xuICAgICAgICB0aGlzLnNhdmlvciA9IG51bGw7XG4gICAgICAgIHRoaXMuc2F2ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZXREZXB0aCg1KTtcbiAgICAgICAgdGhpcy5zZXRTY2FsZSgyKTtcbiAgICAgICAgdGhpcy5hbmltcy5wbGF5KCd2aWN0aW1zYWQnKTtcbiAgICAgICAgdGhpcy5hbmltcy5zZXRQcm9ncmVzcyhNYXRoLnJhbmRvbSgpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGlja2VkVXBCeShncm91bmRQbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5zYXZpb3IgPSBncm91bmRQbGF5ZXI7XG4gICAgICAgIHRoaXMuYW5pbXMucGxheSgndmljdGltY2FycmllZCcpO1xuICAgICAgICB0aGlzLm9uSGl0R3JvdW5kKHRoaXMuc2NlbmUpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoX3RpbWUsIGRlbHRhKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0T3JpZ2luKDApO1xuICAgICAgICB0aGlzLnNldFZlbG9jaXR5WChcbiAgICAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54XG4gICAgICAgICAgICAqIE1hdGgucG93KDEgLSB0aGlzLkZSSUNUSU9OX0NPRUYsIGRlbHRhIC8gMTAwMClcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAodGhpcy5zYXZpb3IgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2hlbmV2ZXIgdGhlIHNhdmlvciB0dXJucywgY2xpcCB0aGUgYm91bmRpbmcgYm94IHRvIHRoZSBzYXZpb3IgZnJvbSBlYWNoIHNpZGUuXG4gICAgICAgIHRoaXMueSA9IHRoaXMuc2F2aW9yLnNwcml0ZS55IC0gdGhpcy5zYXZpb3Iuc3ByaXRlLmhlaWdodCAvIDI7XG4gICAgICAgIHRoaXMueCA9IHRoaXMuc2F2aW9yLnNwcml0ZS54IC0gdGhpcy5zYXZpb3Iuc3ByaXRlLndpZHRoIC8gMjtcblxuICAgICAgICAvLyBTbyB0aGF0IHRoZSBncmF2aXR5IGRvZXNuJ3QgZHJhZyBoaW0gZG93bi5cbiAgICAgICAgdGhpcy5zZXRWZWxvY2l0eSgwLCAwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VGhyb3duKGRpcmVjdGlvbjogVmljdGltRGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuc2F2aW9yID0gbnVsbDtcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgVmljdGltRGlyZWN0aW9uLkxFRlQ6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWZWxvY2l0eSgtdGhpcy5USFJPV19WRUxPQ0lUWV9YLCB0aGlzLlRIUk9XX1ZFTE9DSVRZX1kpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5ndWxhclZlbG9jaXR5KC0xMDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBWaWN0aW1EaXJlY3Rpb24uUklHSFQ6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWZWxvY2l0eSh0aGlzLlRIUk9XX1ZFTE9DSVRZX1gsIHRoaXMuVEhST1dfVkVMT0NJVFlfWSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBbmd1bGFyVmVsb2NpdHkoMTAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFuaW1zLnBsYXkoJ3ZpY3RpbXNhZCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkhpdEdyb3VuZChzY2VuZSkge1xuICAgICAgICB0aGlzLnNldEFuZ3VsYXJWZWxvY2l0eSgwKTtcbiAgICAgICAgaWYgKHRoaXMuc2F2ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Um90YXRpb24oMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiB0aGlzLFxuICAgICAgICAgICAgICAgIHJvdGF0aW9uOiAwLFxuICAgICAgICAgICAgICAgIGVhc2U6ICdQb3dlcjInLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRTYXZlZCgpIHtcbiAgICAgICAgdGhpcy5hbmltcy5wbGF5KCd2aWN0aW1oYXBweScpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBFbFZpY3RpbW8gfSBmcm9tIFwiLi9lbFZpY3RpbW9cIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgTGV2ZWxTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy9sZXZlbFNjZW5lXCI7XG5cbmV4cG9ydCBjbGFzcyBGaXJlIGV4dGVuZHMgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSB7XG4gICAgaHA6IG51bWJlcjtcbiAgICBiYXNlSHA6IG51bWJlcjtcbiAgICBmaXJlTnVtOiBudW1iZXI7XG4gICAgYmFzZVNjYWxlOiBudW1iZXI7XG4gICAgc2NlbmU7XG5cbiAgICBPTl9EQU1BR0VfVkVMT0NJVFlfWCA9IDMwMDtcbiAgICBPTl9EQU1BR0VfVkVMT0NJVFlfWSA9IDEwMDtcbiAgICBJTlZJTkNJQklMSVRZX1RJTUVfTVMgPSA1MDA7XG4gICAgRklSRV9QTEFZRVJfQ09MTElTSU9OX1BFTkFMVFlfTVMgPSAyMDAwO1xuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgeCwgeSwgdGV4dHVyZUtleSwgaHAgPSA1MCkge1xuICAgICAgICBzdXBlcihzY2VuZSwgeCwgeSwgdGV4dHVyZUtleSk7XG4gICAgICAgIHRoaXMuaHAgPSBocDtcbiAgICAgICAgdGhpcy5iYXNlSHAgPSBocDtcblxuICAgICAgICAvLyB0aGlzLnNwcml0ZSA9IHNjZW5lLnBoeXNpY3MuYWRkLnNwcml0ZSh4LCB5LCBzcHJpdGVLZXkpO1xuICAgICAgICB0aGlzLmZpcmVOdW0gPSAxICsgTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDMpICUgMyk7XG4gICAgICAgIGlmICh0aGlzLmZpcmVOdW0gPT0gMilcbiAgICAgICAgICAgIHRoaXMueSA9IHRoaXMueSAtIDEwO1xuICAgICAgICBpZiAodGhpcy5maXJlTnVtID09IDMpXG4gICAgICAgICAgICB0aGlzLnkgPSB0aGlzLnkgKyA1O1xuICAgICAgICB0aGlzLmFuaW1zLnBsYXkoYGZpcmUke3RoaXMuZmlyZU51bX1hbmltYCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuYW5pbXMuc2V0UHJvZ3Jlc3MoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC41KSB7XG4gICAgICAgICAgICB0aGlzLnNldEZsaXBYKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0Um90YXRpb24oUGhhc2VyLk1hdGguUk5ELnJvdGF0aW9uKCkgKiAwLjA1KVxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgICAgIHRoaXMuYmFzZVNjYWxlID0gUGhhc2VyLk1hdGguUk5ELnJlYWxJblJhbmdlKDAuOSwgMS4xKVxuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVTY2FsZSgpIHtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSAyICogdGhpcy5iYXNlU2NhbGUgKiAoKHRoaXMuaHAgKyB0aGlzLmJhc2VIcCkgLyAoMiAqIHRoaXMuYmFzZUhwKSk7XG4gICAgICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUpO1xuXG4gICAgICAgIC8vIFRPRE86IGNlbnRlciB0aGUgc2NhbGluZyBvbiB0aGUgYm90dG9tIGVkZ2VcbiAgICAgICAgLy8gY29uc3Qgb2Zmc2V0ID0gLShzY2FsZSAtIDEpICogdGhpcy5oZWlnaHQgLyAyXG4gICAgICAgIC8vIHRoaXMuc2V0T2Zmc2V0KDAsIG9mZnNldClcbiAgICAgICAgaWYgKHRoaXMuZmlyZU51bSA9PSAyKVxuICAgICAgICAgICAgdGhpcy5ib2R5LnNldE9mZnNldCgxMCwgMjUpO1xuICAgICAgICBlbHNlIGlmICh0aGlzLmZpcmVOdW0gPT0gMylcbiAgICAgICAgICAgIHRoaXMuYm9keS5zZXRPZmZzZXQoMTAsIDEwKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5ib2R5LnNldE9mZnNldCgxMCwgMTUpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGxvd2VySHAoKSB7XG4gICAgICAgIHRoaXMuaHAtLTtcblxuICAgICAgICBpZiAodGhpcy5ocCA8PSAwICYmIHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZShmYWxzZSk7XG4gICAgICAgICAgICAvLyB0aGlzLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5ib2R5LmVuYWJsZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnR3ZWVucy5hZGQoe1xuICAgICAgICAgICAgICAgIHRhcmdldHM6IHRoaXMsXG4gICAgICAgICAgICAgICAgYWxwaGE6IDAsXG4gICAgICAgICAgICAgICAgc2NhbGU6IDAuNSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICAgIGVhc2U6ICdQb3dlcjInXG4gICAgICAgICAgICAgICAgLy8gZWFzZTogJ0xpbmVhcidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlU2NhbGUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXRIcCgpIHtcbiAgICAgICAgdGhpcy5ocCA9IHRoaXMuYmFzZUhwO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZSh0cnVlKTtcbiAgICAgICAgdGhpcy5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICB0aGlzLmJvZHkuZW5hYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVTY2FsZSgpO1xuICAgICAgICB0aGlzLnNldEFscGhhKDEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkZpcmVDb2xsaXNpb24oZGFtYWdlZEd1eTogUGxheWVyIHwgRWxWaWN0aW1vLCBzY2VuZTogTGV2ZWxTY2VuZSkge1xuICAgICAgICBzY2VuZS5hdVNvdW5kc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzY2VuZS5hdVNvdW5kcy5sZW5ndGgpXS5wbGF5KCk7XG5cbiAgICAgICAgaWYgKGRhbWFnZWRHdXkuaW52aW5jaWJsZSkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBkYW1hZ2VkU3ByaXRlOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlIHwgYW55O1xuICAgICAgICBpZiAoZGFtYWdlZEd1eSBpbnN0YW5jZW9mIEVsVmljdGltbykge1xuICAgICAgICAgICAgZGFtYWdlZFNwcml0ZSA9IGRhbWFnZWRHdXlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhbWFnZWRTcHJpdGUgPSBkYW1hZ2VkR3V5LnNwcml0ZTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCBwb3NpdGlvbkRpZmYgPSBkYW1hZ2VkU3ByaXRlLmdldENlbnRlcigpLmNsb25lKCkuc3VidHJhY3QodGhpcy5nZXRDZW50ZXIoKSk7XG4gICAgICAgIGRhbWFnZWRTcHJpdGUuc2V0VmVsb2NpdHlYKHRoaXMuT05fREFNQUdFX1ZFTE9DSVRZX1ggKiAocG9zaXRpb25EaWZmLnggPiAwID8gMSA6ICgtMSkpKTtcbiAgICAgICAgZGFtYWdlZFNwcml0ZS5zZXRWZWxvY2l0eVkoLXRoaXMuT05fREFNQUdFX1ZFTE9DSVRZX1kpO1xuXG4gICAgICAgIHNjZW5lLnRpbWVyLnRvdGFsX21zID0gTWF0aC5tYXgoc2NlbmUudGltZXIudG90YWxfbXMgLSB0aGlzLkZJUkVfUExBWUVSX0NPTExJU0lPTl9QRU5BTFRZX01TLCAwKTtcbiAgICAgICAgZGFtYWdlZFNwcml0ZS5zZXRUaW50KDB4RkYwMDAwKTtcbiAgICAgICAgLy8gdGhpcy5pbnZpbmNpYmxlID0gdHJ1ZTtcbiAgICAgICAgLy8gc2Vyb2wuYWxwaGEgPSAwLjU7XG4gICAgICAgIHNjZW5lLnRpbWUuYWRkRXZlbnQoe1xuICAgICAgICAgICAgZGVsYXk6IHRoaXMuSU5WSU5DSUJJTElUWV9USU1FX01TLFxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBkYW1hZ2VkU3ByaXRlLmNsZWFyVGludCgpO1xuICAgICAgICAgICAgICAgIGRhbWFnZWRHdXkuaW52aW5jaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBFbFZpY3RpbW8sIFZpY3RpbURpcmVjdGlvbiB9IGZyb20gJy4vZWxWaWN0aW1vJztcbmltcG9ydCB7IFBsYXllciwgTUFYX1ZFTE9DSVRZX1ggfSBmcm9tICcuL3BsYXllcidcbmltcG9ydCB7IHplcm9BY2NlbGVyYXRpb25JZkJsb2NrZWQgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgR3JvdW5kUGxheWVyIGV4dGVuZHMgUGxheWVyIHtcbiAgICBjdXJzb3JzOiBhbnk7IC8vIHNlZSBob3cgaXQncyBhc3NpZ25lZCBpbiBjb25zdHJ1Y3RvclxuICAgIHNhdmluZzogRWxWaWN0aW1vO1xuICAgIGxhc3RTYXZpbmdUaW1lc3RhbXBfTVM6IG51bWJlcjtcbiAgICBsYXN0RGlyZWN0aW9uOiBWaWN0aW1EaXJlY3Rpb24gPSBWaWN0aW1EaXJlY3Rpb24uTEVGVDsgLy8gSnVzdCBkZWZhdWx0LlxuXG4gICAgU0FWSU5HX0NPT0xET1dOX01TID0gNTAwO1xuXG4gICAgQUNDRUxFUkFUSU9OX1ggPSAzMDAwO1xuICAgIEpVTVBfVkVMT0NJVFlfWSA9IC00MzA7XG5cbiAgICBHUkFORF9GUklDVElPTl9DT0VGID0gMC45OTtcblxuICAgIExFRlRfQU5JTV9LRVk6IHN0cmluZztcbiAgICBSSUdIVF9BTklNX0tFWTogc3RyaW5nO1xuICAgIERPV05fQU5JTV9LRVk6IHN0cmluZztcbiAgICBVUF9BTklNX0tFWTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgeDogaW50ZWdlciwgeTogaW50ZWdlciwgc3ByaXRlS2V5OiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUsIHgsIHksIHNwcml0ZUtleSk7XG5cbiAgICAgICAgdGhpcy5zcHJpdGUuc2V0TWF4VmVsb2NpdHkoTUFYX1ZFTE9DSVRZX1gsIDEwMDAwMCk7XG5cbiAgICAgICAgc2NlbmUuYW5pbXMuY3JlYXRlKHtcbiAgICAgICAgICAgIGtleTogJ2dyYW5kTGVmdCcsXG4gICAgICAgICAgICBmcmFtZXM6IHNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKHNwcml0ZUtleSwgeyBzdGFydDogMCwgZW5kOiA1IH0pLFxuICAgICAgICAgICAgZnJhbWVSYXRlOiAxMCxcbiAgICAgICAgICAgIHJlcGVhdDogLTFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2NlbmUuYW5pbXMuY3JlYXRlKHtcbiAgICAgICAgICAgIGtleTogJ2dyYW5kVHVybicsXG4gICAgICAgICAgICBmcmFtZXM6IFt7IGtleTogc3ByaXRlS2V5LCBmcmFtZTogNiB9XSxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMjBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2NlbmUuYW5pbXMuY3JlYXRlKHtcbiAgICAgICAgICAgIGtleTogJ2dyYW5kTGVmdFNhdmluZycsXG4gICAgICAgICAgICBmcmFtZXM6IHNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKHNwcml0ZUtleSwgeyBzdGFydDogNywgZW5kOiAxMiB9KSxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTAsXG4gICAgICAgICAgICByZXBlYXQ6IC0xXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vICBJbnB1dCBFdmVudHNcbiAgICAgICAgdGhpcy5jdXJzb3JzID0gc2NlbmUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5cyhcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1cDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlcsXG4gICAgICAgICAgICAgICAgZG93bjogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlMsXG4gICAgICAgICAgICAgICAgbGVmdDogUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLkEsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5ELFxuICAgICAgICAgICAgICAgIHRocm93OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuU1BBQ0VcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUodGltZSwgZGVsdGEpIHtcbiAgICAgICAgdGhpcy5zcHJpdGUuc2V0VmVsb2NpdHlYKFxuICAgICAgICAgICAgdGhpcy5zcHJpdGUuYm9keS52ZWxvY2l0eS54XG4gICAgICAgICAgICAqIE1hdGgucG93KDEgLSB0aGlzLkdSQU5EX0ZSSUNUSU9OX0NPRUYsIGRlbHRhIC8gMTAwMClcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnNwcml0ZS5mbGlwWCA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnNvcnMubGVmdC5pc0Rvd24pIHtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnNldEFjY2VsZXJhdGlvblgoLXRoaXMuQUNDRUxFUkFUSU9OX1gpO1xuICAgICAgICAgICAgdGhpcy5sYXN0RGlyZWN0aW9uID0gVmljdGltRGlyZWN0aW9uLkxFRlQ7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNhdmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLmFuaW1zLnBsYXkoJ2dyYW5kTGVmdFNhdmluZycsIHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2F2aW5nLmZsaXBYID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLmFuaW1zLnBsYXkoJ2dyYW5kTGVmdCcsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3Vyc29ycy5yaWdodC5pc0Rvd24pIHtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnNldEFjY2VsZXJhdGlvblgodGhpcy5BQ0NFTEVSQVRJT05fWCk7XG4gICAgICAgICAgICB0aGlzLmxhc3REaXJlY3Rpb24gPSBWaWN0aW1EaXJlY3Rpb24uUklHSFQ7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNhdmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLmFuaW1zLnBsYXkoJ2dyYW5kTGVmdFNhdmluZycsIHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2F2aW5nLmZsaXBYID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUuYW5pbXMucGxheSgnZ3JhbmRMZWZ0JywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5mbGlwWCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5zZXRBY2NlbGVyYXRpb25YKDApO1xuXG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5hbmltcy5wbGF5KCdncmFuZFR1cm4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmN1cnNvcnMudXAuaXNEb3duICYmIHRoaXMuc3ByaXRlLmJvZHkuYmxvY2tlZC5kb3duKSB7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5zZXRBY2NlbGVyYXRpb25ZKDApO1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUuc2V0VmVsb2NpdHlZKHRoaXMuSlVNUF9WRUxPQ0lUWV9ZKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmN1cnNvcnMudGhyb3cuaXNEb3duICYmIHRoaXMuc2F2aW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2F2aW5nLmdldFRocm93bih0aGlzLmxhc3REaXJlY3Rpb24pO1xuICAgICAgICAgICAgdGhpcy5zYXZpbmcgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5sYXN0U2F2aW5nVGltZXN0YW1wX01TID0gdGltZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHplcm9BY2NlbGVyYXRpb25JZkJsb2NrZWQodGhpcy5zcHJpdGUuYm9keSk7XG4gICAgfVxuXG4gICAgcHVibGljIHBpY2tVcCh0aW1lX21zOiBudW1iZXIsIGVsVmljdGltbyk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5zYXZpbmcgIT0gbnVsbCB8fCBlbFZpY3RpbW8uc2F2ZWQgfHwgdGltZV9tcyA8IHRoaXMubGFzdFNhdmluZ1RpbWVzdGFtcF9NUyArIHRoaXMuU0FWSU5HX0NPT0xET1dOX01TKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zYXZpbmcgPSBlbFZpY3RpbW87XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBIb3NlUGxheWVyIH0gZnJvbSBcIi4vaG9zZVBsYXllclwiO1xuaW1wb3J0IHsgTGV2ZWxTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy9sZXZlbFNjZW5lXCI7XG5pbXBvcnQgeyBjbGFtcElmQmxvY2tlZCwgemVyb0FjY2VsZXJhdGlvbklmQmxvY2tlZCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBIb3NlIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lciB7XG5cbiAgICBwYXJ0czogQXJyYXk8UGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZT4gPSBuZXcgQXJyYXkoKTtcbiAgICBpbml0aWFsWDogbnVtYmVyO1xuICAgIGluaXRpYWxZOiBudW1iZXI7XG5cbiAgICBESVNUQU5DRV9CRVRXRUVOX1BBUlRTOiBudW1iZXIgPSA1OyAgLy8gd2hhdCAqc2hvdWxkKiB0aGUgZGlzdGFuY2UgYmU/XG4gICAgU1BSSU5HX0NPRUY6IG51bWJlciA9IDMwMDsgIC8vIGhvdyBzdHJvbmcgdGhlIGZvcmNlIGlzIHRoYXQgaXMgcHJvcG9ydGlvbmFsIHRvIHRoZSBkaXN0YW5jZVxuICAgIERBTVBJTkdfQ09FRjogbnVtYmVyID0gMjAwOyAgLy8gaG93IHF1aWNrbHkgdmVsb2NpdHkgZGVjYXlzIHRvIDBcbiAgICBBVFRBQ0hFRF9QVUxMX0NPRUYgPSAwLjAwMjsgLy8gaG93IHN0cm9uZ2x5IHRoZSBhdHRhY2hlZCBvYmplY3QgaXMgcHVsbGVkXG4gICAgTl9QSFlTSUNTX0lURVJBVElPTlMgPSAxOyAvLyBtb3JlID0gbGVzcyBib3VuY3ksIGJ1dCBtb3JlIENQVSAtIDEgc2hvdWxkIGJlIG9rXG4gICAgTl9QQVJUUyA9IDMyOyAgLy8gaG93IG1hbnkgcGFydHMgb2YgdGhlIHJvcGVcbiAgICBNQVhfQUNDRUxFUkFUSU9OID0gMTAwMDAwO1xuXG4gICAgLy8gU21vb3RocyB0aGUgZm9yY2UgYXBwbGllZCB0byB0aGUgaG9zZSBwYXJ0cyBvdmVyIHRpbWUuIEluIFswLCAxXS5cbiAgICAvLyBMb3dlciBtYWtlcyB0aGUgcm9wZSBtb3JlIHJlYWxpc3RpYywgYnV0IHRlbmRzIHRvIHdvYmJsZVxuICAgIFZFTE9DSVRZX1NNT09USElOR19DT0VGID0gMC41O1xuXG4gICAgLy8gdGVtcG9yYXJ5IGZpeFxuICAgIEhPU0VfU1RBUlRfUE9JTlQgPSBuZXcgUGhhc2VyLk1hdGguVmVjdG9yMigyMDAsIDUwMCk7XG5cbiAgICBIT1NFX0RFQlVHX1ZJRVcgPSBmYWxzZTsgIC8vIERpc2FibGUgdGhlIGxpbmUsIHN3aXRjaCB0byBwYXJ0aWNsZXNcbiAgICBIT1NFX0NPTE9SXzEgPSAweDMzMzMzMztcbiAgICBIT1NFX0NPTE9SXzIgPSAweDY2NjY2NjtcbiAgICBIT1NFX1RISUNLTkVTUyA9IDE1O1xuICAgIFBBUlRfU0NBTEUgPSAyLjU7IC8vIEhvdyBiaWcgYXJlIHRoZSBiYWxscz9cbiAgICBNQVhfRElTVEFOQ0UgPSAxMDAwOyAvLyBMaW1pdHMgdGhlIGZvcmNlIGFwcGxpZWQgd2hlbiB0aGUgYmFsbHMgYXJlIGZ1cnRoZXIgdGhhbiB0aGlzIChweClcblxuICAgIC8vIGhvcml6b250YWwgc3BlZWQgaXMgbXVsdGlwbGllZCBieSAoMSAtIEZSSUNUSU9OX0NPRUYpIGVhY2ggc2Vjb25kXG4gICAgLy8gc28gdmFsdWVzIGJldHdlZW4gMCBhbmQgMSBhcmUgcmVhc29uYWJsZVxuICAgIC8vIE5vdGU6IHRoaXMgaGFwcGVucyBmb3IgdGhlIHBhcnRzIGluIHRoZSBhaXIgYXMgd2VsbFxuICAgIEZSSUNUSU9OX0NPRUYgPSAwLjU7XG5cbiAgICAvLyBob3cgbXVjaCB0aGUgaG9zZSBsaWtlcyB0byBzbGlkZSBhbG9uZyB3YWxscywgbm9uLW5lZ2F0aXZlXG4gICAgU0xJRElOR19DT0VGID0gMC43O1xuICAgIFNMSURJTkdfTUFYID0gNTA7XG4gICAgXG4gICAgZW5kQXR0YWNoZWRUbzogSG9zZVBsYXllciA9IG51bGw7XG4gICAgc3RhcnRQb2ludDogUGhhc2VyLk1hdGguVmVjdG9yMjtcbiAgICBjdXJ2ZTogUGhhc2VyLkN1cnZlcy5TcGxpbmU7XG4gICAgZ3JhcGhpY3M7XG4gICAgZGVidWdUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcbiAgICBzbW9vdGhlZFZlbG9jaXRpZXM6IEFycmF5PFBoYXNlci5NYXRoLlZlY3RvcjI+O1xuICAgIHB1bGxQbGF5ZXIgPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IExldmVsU2NlbmUsIHgsIHkpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUsIDAsIDApO1xuICAgICAgICB0aGlzLmluaXRpYWxYID0geDtcbiAgICAgICAgdGhpcy5pbml0aWFsWSA9IHk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmRlYnVnVGV4dCA9IHNjZW5lLmFkZC50ZXh0KDcwMCwgMTAwLCAnRGVidWcgdGV4dCcpO1xuICAgICAgICBpZiAoIXRoaXMuSE9TRV9ERUJVR19WSUVXKSB7XG4gICAgICAgICAgICB0aGlzLmRlYnVnVGV4dC5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc21vb3RoZWRWZWxvY2l0aWVzID0gW107XG5cbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IHRoaXMuTl9QQVJUUyAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5OX1BBUlRTOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnQgPSBzY2VuZS5waHlzaWNzLmFkZC5zcHJpdGUoeCArIGkgKiAxLCB5IC0gaSAqIDEsIFwiZGVidWdiYWxsXCIpO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuSE9TRV9ERUJVR19WSUVXKSB7XG4gICAgICAgICAgICAgICAgcGFydC5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGFydHMucHVzaChwYXJ0KTtcbiAgICAgICAgICAgIHBhcnQuc2V0Q29sbGlkZVdvcmxkQm91bmRzKHRydWUpO1xuXG4gICAgICAgICAgICBwYXJ0LnNldFNjYWxlKHRoaXMuUEFSVF9TQ0FMRSk7XG5cbiAgICAgICAgICAgIHBhcnQuYm9keS5zZXRDaXJjbGUocGFydC53aWR0aCAvIDIpO1xuICAgICAgICAgICAgdGhpcy5zbW9vdGhlZFZlbG9jaXRpZXMucHVzaChuZXcgUGhhc2VyLk1hdGguVmVjdG9yMigwLCAwKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzLnN0YXJ0UG9pbnQgPSB0aGlzLnBhcnRzW3RoaXMucGFydHMubGVuZ3RoIC0gMV0uYm9keS5wb3NpdGlvbi5jbG9uZSgpXG4gICAgICAgIHRoaXMuc3RhcnRQb2ludCA9IHRoaXMuSE9TRV9TVEFSVF9QT0lOVC5jbG9uZSgpO1xuXG4gICAgICAgIHRoaXMuY3VydmUgPSBuZXcgUGhhc2VyLkN1cnZlcy5TcGxpbmUodGhpcy5wYXJ0cy5tYXAocCA9PiBwLmdldENlbnRlcigpKSk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MgPSBzY2VuZS5hZGQuZ3JhcGhpY3MoKTtcbiAgICB9XG5cbiAgICBhdHRhY2hFbmRUbyhob3NlUGxheWVyOiBIb3NlUGxheWVyKSB7XG4gICAgICAgIHRoaXMuZW5kQXR0YWNoZWRUbyA9IGhvc2VQbGF5ZXI7XG4gICAgfVxuXG4gICAgc2V0U3RhcnRUbyhwOiBQaGFzZXIuTWF0aC5WZWN0b3IyKSB7XG4gICAgICAgIHRoaXMuc3RhcnRQb2ludCA9IHA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5OX1BBUlRTOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucGFydHNbaV0uc2V0VmVsb2NpdHkoMCwgMCk7XG4gICAgICAgICAgICBsZXQgY29lZiA9IGkgLyAodGhpcy5OX1BBUlRTIC0gMSk7XG4gICAgICAgICAgICB0aGlzLnNtb290aGVkVmVsb2NpdGllc1tpXS5zY2FsZSgwKTtcbiAgICAgICAgICAgIGxldCBwb3MgPSBwLmNsb25lKCkuc2NhbGUoMSAtIGNvZWYpLmFkZCh0aGlzLmVuZEF0dGFjaGVkVG8uc3ByaXRlLmdldENlbnRlcigpLnNjYWxlKGNvZWYpKTtcbiAgICAgICAgICAgIHRoaXMucGFydHNbaV0uc2V0UG9zaXRpb24ocG9zLngsIHBvcy55KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnB1bGxQbGF5ZXIgPSBmYWxzZVxuICAgICAgICB0aGlzLnNjZW5lLnRpbWUuZGVsYXllZENhbGwoMzAwLCAoKSA9PiB7dGhpcy5wdWxsUGxheWVyID0gdHJ1ZTt9LCBbXSwgdGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0U3ByaW5nRm9yY2VzKHZlbG9jaXRpZXMpOiBBcnJheTxQaGFzZXIuTWF0aC5WZWN0b3IyPiB7XG4gICAgICAgIGxldCBmb3JjZXM6IEFycmF5PFBoYXNlci5NYXRoLlZlY3RvcjI+ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJ0cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IFBoYXNlci5NYXRoLkRpc3RhbmNlLkJldHdlZW5Qb2ludHModGhpcy5wYXJ0c1tpXS5nZXRDZW50ZXIoKSwgdGhpcy5wYXJ0c1tpICsgMV0uZ2V0Q2VudGVyKCkpO1xuICAgICAgICAgICAgaWYgKGRpc3RhbmNlID4gdGhpcy5NQVhfRElTVEFOQ0UpIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMuTUFYX0RJU1RBTkNFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZm9yY2UgPSAtIHRoaXMuU1BSSU5HX0NPRUYgKiAoXG4gICAgICAgICAgICAgICAgZGlzdGFuY2UgLSB0aGlzLkRJU1RBTkNFX0JFVFdFRU5fUEFSVFNcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGZvcmNlcy5wdXNoKFxuICAgICAgICAgICAgICAgIHRoaXMucGFydHNbaV0uZ2V0Q2VudGVyKClcbiAgICAgICAgICAgICAgICAgICAgLmNsb25lKClcbiAgICAgICAgICAgICAgICAgICAgLnN1YnRyYWN0KHRoaXMucGFydHNbaSArIDFdLmdldENlbnRlcigpKVxuICAgICAgICAgICAgICAgICAgICAuc2V0TGVuZ3RoKGRpc3RhbmNlICogZm9yY2UpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvcmNlcztcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBmb3IgKGNvbnN0IHBhcnQgb2YgdGhpcy5wYXJ0cykge1xuICAgICAgICAgICAgcGFydC5zZXRWaXNpYmxlKHRoaXMuSE9TRV9ERUJVR19WSUVXKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5IT1NFX0RFQlVHX1ZJRVcpIHtcbiAgICAgICAgICAgIHRoaXMuY3VydmUgPSBuZXcgUGhhc2VyLkN1cnZlcy5TcGxpbmUodGhpcy5wYXJ0cy5tYXAocCA9PiBwLmdldENlbnRlcigpKSk7XG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XG5cbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVN0eWxlKHRoaXMuSE9TRV9USElDS05FU1MsIHRoaXMuSE9TRV9DT0xPUl8xLCAxKTtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3Muc2V0RGVwdGgoMSlcbiAgICAgICAgICAgIHRoaXMuY3VydmUuZHJhdyh0aGlzLmdyYXBoaWNzLCA2NCk7XG5cbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVN0eWxlKHRoaXMuSE9TRV9USElDS05FU1MgLyAyLCB0aGlzLkhPU0VfQ09MT1JfMiwgMSk7XG4gICAgICAgICAgICB0aGlzLmN1cnZlLmRyYXcodGhpcy5ncmFwaGljcywgNjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKF8sIGRlbHRhKSB7XG4gICAgICAgIC8vIEYgPSAtayh8eHwtZCkoeC98eHwpIC0gYnZcbiAgICAgICAgLy8gaHR0cHM6Ly9nYWZmZXJvbmdhbWVzLmNvbS9wb3N0L3NwcmluZ19waHlzaWNzL1xuXG4gICAgICAgIGxldCBmb3JjZXM7XG5cbiAgICAgICAgbGV0IG5ld1ZlbG9jaXRpZXM6IEFycmF5PFBoYXNlci5NYXRoLlZlY3RvcjI+ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbmV3VmVsb2NpdGllcy5wdXNoKHRoaXMucGFydHNbaV0uYm9keS52ZWxvY2l0eS5jbG9uZSgpKTtcbiAgICAgICAgICAgIC8vIHplcm9BY2NlbGVyYXRpb25JZkJsb2NrZWQodGhpcy5wYXJ0c1tpXS5ib2R5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5JdGVyYXRpb25zID0gdGhpcy5OX1BIWVNJQ1NfSVRFUkFUSU9OUztcbiAgICAgICAgZm9yIChsZXQgaXQgPSAwOyBpdCA8IG5JdGVyYXRpb25zOyBpdCsrKSB7XG4gICAgICAgICAgICBmb3JjZXMgPSB0aGlzLmdldFNwcmluZ0ZvcmNlcyhuZXdWZWxvY2l0aWVzKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wYXJ0c1tpXS5zZXRNYXhWZWxvY2l0eSgxMDAsIDEwMClcblxuICAgICAgICAgICAgICAgIGxldCBhY2NlbCA9IG5ldyBQaGFzZXIuTWF0aC5WZWN0b3IyKDAsIDApO1xuICAgICAgICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBhY2NlbC5zdWJ0cmFjdChmb3JjZXNbaSAtIDFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGkgPiAwICYmIGkgPCB0aGlzLnBhcnRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjZWwuYWRkKGZvcmNlc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFjY2VsWSlcblxuICAgICAgICAgICAgICAgIGlmIChhY2NlbC5sZW5ndGgoKSA+IHRoaXMuTUFYX0FDQ0VMRVJBVElPTikge1xuICAgICAgICAgICAgICAgICAgICBhY2NlbC5zZXRMZW5ndGgodGhpcy5NQVhfQUNDRUxFUkFUSU9OKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWNjZWwuc3VidHJhY3QobmV3VmVsb2NpdGllc1tpXS5jbG9uZSgpLnNjYWxlKHRoaXMuREFNUElOR19DT0VGKSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjdXJEZWx0YSA9IGRlbHRhIC8gbkl0ZXJhdGlvbnM7XG4gICAgICAgICAgICAgICAgbGV0IGNvZWYgPSAwLjAwMDEgKiBjdXJEZWx0YTtcbiAgICAgICAgICAgICAgICBsZXQgY29lZjIgPSAwLjAwMDEgKiBjdXJEZWx0YTtcblxuICAgICAgICAgICAgICAgIG5ld1ZlbG9jaXRpZXNbaV0uYWRkKGFjY2VsLnNjYWxlKGNvZWYpKTtcblxuICAgICAgICAgICAgICAgIC8vIFRPRE86IG9ubHkgZG8gdGhpcyB3aGVuIHRoZSByb3BlIGlzIG9uIHRoZSBncm91bmQ/XG4gICAgICAgICAgICAgICAgbmV3VmVsb2NpdGllc1tpXS54ICo9IE1hdGgucG93KHRoaXMuRlJJQ1RJT05fQ09FRiwgKGN1ckRlbHRhIC8gMTAwMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmVjVG9TdHJpbmcgPSAodikgPT4gYCgke3YueC50b0ZpeGVkKDIpfSwgJHt2LnkudG9GaXhlZCgyKX0pYDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMucGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIEFwcGx5IHRlbXBvcmFsIHNtb290aGluZyB0byB0aGUgdmVsb2NpdHlcbiAgICAgICAgICAgIGNvbnN0IGN1ckNvZWYgPSBNYXRoLnBvdyh0aGlzLlZFTE9DSVRZX1NNT09USElOR19DT0VGLCBkZWx0YSAvIDE2KTtcbiAgICAgICAgICAgIHRoaXMuc21vb3RoZWRWZWxvY2l0aWVzW2ldID0gKFxuICAgICAgICAgICAgICAgIHRoaXMuc21vb3RoZWRWZWxvY2l0aWVzW2ldXG4gICAgICAgICAgICAgICAgICAgIC5jbG9uZSgpLnNjYWxlKGN1ckNvZWYpXG4gICAgICAgICAgICAgICAgICAgIC5hZGQobmV3VmVsb2NpdGllc1tpXS5jbG9uZSgpLnNjYWxlKDEgLSBjdXJDb2VmKSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGxldCBhcHBsaWVkVmVsb2NpdHkgPSB0aGlzLnJlZGlyZWN0SWZCbG9ja2VkKHRoaXMucGFydHNbaV0sIHRoaXMuc21vb3RoZWRWZWxvY2l0aWVzW2ldKTtcblxuICAgICAgICAgICAgdGhpcy5wYXJ0c1tpXS5zZXRWZWxvY2l0eShhcHBsaWVkVmVsb2NpdHkueCwgYXBwbGllZFZlbG9jaXR5LnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuSE9TRV9ERUJVR19WSUVXKSB7XG4gICAgICAgICAgICB0aGlzLnBhcnRzWzNdLnNldFRpbnQoMHhmZjAwMDApO1xuICAgICAgICAgICAgdGhpcy5kZWJ1Z1RleHQuc2V0VGV4dChcbiAgICAgICAgICAgICAgICB2ZWNUb1N0cmluZyh0aGlzLnNtb290aGVkVmVsb2NpdGllc1szXSkgKyBcIlxcblwiICtcbiAgICAgICAgICAgICAgICB2ZWNUb1N0cmluZyhmb3JjZXNbMF0pICsgXCJcXG5cIiArXG4gICAgICAgICAgICAgICAgdmVjVG9TdHJpbmcoZm9yY2VzWzFdKSArIFwiXFxuXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5lbmRBdHRhY2hlZFRvICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBBcHBseSBmb3JjZSB0byB0aGUgcGxheWVyXG4gICAgICAgICAgICBsZXQgcGxheWVyQm9keSA9IHRoaXMuZW5kQXR0YWNoZWRUby5zcHJpdGUuYm9keTtcbiAgICAgICAgICAgIHRoaXMucGFydHNbMF0uc2V0UG9zaXRpb24oXG4gICAgICAgICAgICAgICAgcGxheWVyQm9keS5wb3NpdGlvbi54ICsgcGxheWVyQm9keS53aWR0aCAvIDIsXG4gICAgICAgICAgICAgICAgcGxheWVyQm9keS5wb3NpdGlvbi55ICsgcGxheWVyQm9keS5oZWlnaHQgLyAyLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMucGFydHNbMF0uc2V0VmVsb2NpdHkoMCwgMCk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5lbmRBdHRhY2hlZFRvLmlzQW5jaG9yZWQgJiYgdGhpcy5wdWxsUGxheWVyKSB7XG4gICAgICAgICAgICAgICAgZm9yY2VzWzBdLnNjYWxlKHRoaXMuQVRUQUNIRURfUFVMTF9DT0VGICogZGVsdGEgLyAxMDAwKTtcblxuICAgICAgICAgICAgICAgIHBsYXllckJvZHkuc2V0VmVsb2NpdHkoXG4gICAgICAgICAgICAgICAgICAgIHBsYXllckJvZHkudmVsb2NpdHkueCArIGZvcmNlc1swXS54LFxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJCb2R5LnZlbG9jaXR5LnkgKyBmb3JjZXNbMF0ueSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhcnRQb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gRml4IHRoZSBzdGFydGluZyBwb2ludCAtIHRoZSBsYXN0IHBhcnRcbiAgICAgICAgICAgIHRoaXMucGFydHNbdGhpcy5wYXJ0cy5sZW5ndGggLSAxXS5zZXRQb3NpdGlvbihcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0UG9pbnQueCxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0UG9pbnQueSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnBhcnRzW3RoaXMucGFydHMubGVuZ3RoIC0gMV0uc2V0VmVsb2NpdHkoMCwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlZGlyZWN0SWZCbG9ja2VkKFxuICAgICAgICBwYXJ0OiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlLFxuICAgICAgICB3YW50ZWRWZWxvY2l0eTogUGhhc2VyLk1hdGguVmVjdG9yMixcbiAgICApIHtcbiAgICAgICAgd2FudGVkVmVsb2NpdHkgPSB3YW50ZWRWZWxvY2l0eS5jbG9uZSgpO1xuXG4gICAgICAgIGxldCBjb21wdXRlID0gKHBhcmEsIHBlcnApID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJhICsgTWF0aC5zaWduKHBhcmEpICogTWF0aC5taW4oTWF0aC5hYnMocGVycCkgKiB0aGlzLlNMSURJTkdfQ09FRiwgdGhpcy5TTElESU5HX01BWCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHBhcnQuYm9keS5ibG9ja2VkLmxlZnQpIHtcbiAgICAgICAgICAgIHdhbnRlZFZlbG9jaXR5LnkgPSBjb21wdXRlKHdhbnRlZFZlbG9jaXR5LnksIHdhbnRlZFZlbG9jaXR5LngpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJ0LmJvZHkuYmxvY2tlZC5yaWdodCkge1xuICAgICAgICAgICAgd2FudGVkVmVsb2NpdHkueSA9IGNvbXB1dGUod2FudGVkVmVsb2NpdHkueSwgd2FudGVkVmVsb2NpdHkueCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhpcyBtYWtlcyB0aGUgaG9zZSBcInN0aWNrXCIgdG8gdGhlIGdyb3VuZFxuICAgICAgICAvLyBpZiAocGFydC5ib2R5LmJsb2NrZWQudXApIHtcbiAgICAgICAgLy8gICAgIHdhbnRlZFZlbG9jaXR5LnkgPSBjb21wdXRlKHdhbnRlZFZlbG9jaXR5LngsIHdhbnRlZFZlbG9jaXR5LnkpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmIChwYXJ0LmJvZHkuYmxvY2tlZC5kb3duKSB7XG4gICAgICAgIC8vICAgICB3YW50ZWRWZWxvY2l0eS55ID0gY29tcHV0ZSh3YW50ZWRWZWxvY2l0eS54LCB3YW50ZWRWZWxvY2l0eS55KTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIHJldHVybiB3YW50ZWRWZWxvY2l0eTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBQbGF5ZXIsIE1BWF9WRUxPQ0lUWV9YIH0gZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0IHsgemVyb0FjY2VsZXJhdGlvbklmQmxvY2tlZCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBIb3NlUGxheWVyIGV4dGVuZHMgUGxheWVyIHtcbiAgICBjdXJzb3JzOiBQaGFzZXIuVHlwZXMuSW5wdXQuS2V5Ym9hcmQuQ3Vyc29yS2V5cztcbiAgICBwYXJ0aWNsZXM6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Hcm91cDtcbiAgICBpc0FuY2hvcmVkOiBib29sZWFuO1xuXG4gICAgTlVNX1BBUlRJQ0xFUyA9IDQwMDtcbiAgICBBQ0NFTEVSQVRJT05fWCA9IDUwMDtcbiAgICBTUFJJTktMRVJfQUNDID0gMjU7XG4gICAgSlVNUF9WRUxPQ0lUWV9ZID0gLTgwMDtcbiAgICBcbiAgICBKT1NFX0ZSSUNUSU9OX0NPRUYgPSAwLjg1O1xuXG4gICAgV0FURVJfVkVMT0NJVFlfTUlOID0gNDAwO1xuICAgIFdBVEVSX1ZFTE9DSVRZX01BWCA9IDUwMDtcblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHg6IGludGVnZXIsIHk6IGludGVnZXIsIHNwcml0ZUtleTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCB4LCB5LCBzcHJpdGVLZXkpO1xuXG4gICAgICAgIC8vIHRoaXMuc3ByaXRlLnNldEZyaWN0aW9uWCgxMDAwMDApXG4gICAgICAgIHRoaXMuc3ByaXRlLnJlZnJlc2hCb2R5KCk7XG4gICAgICAgIHRoaXMuc3ByaXRlLnNldE1heFZlbG9jaXR5KE1BWF9WRUxPQ0lUWV9YLCAxMDAwMDApO1xuICAgICAgICB0aGlzLnNwcml0ZS5zZXREZXB0aCgxMCk7IC8vIHdoeSBpcyB0aGUgaG9zZSBzdGlsbCBpbiBmcm9udD9cbiAgICAgICAgdGhpcy5pc0FuY2hvcmVkID0gZmFsc2U7XG5cbiAgICAgICAgWydqb3NlVXAnLCAnam9zZVVwUmlnaHQnLCAnam9zZVVwQW5jaG9yZWQnLCAnam9zZVVwUmlnaHRBbmNob3JlZCcsICdqb3NlUmlnaHRBY2hub3JlZCddLmZvckVhY2goKHN0ciwgaWR4KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAga2V5OiBzdHIsXG4gICAgICAgICAgICAgICAgZnJhbWVzOiBbeyBrZXk6IHNwcml0ZUtleSwgZnJhbWU6IGlkeCB9XSxcbiAgICAgICAgICAgICAgICBmcmFtZVJhdGU6IDEwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gIElucHV0IEV2ZW50c1xuICAgICAgICB0aGlzLmN1cnNvcnMgPSBzY2VuZS5pbnB1dC5rZXlib2FyZC5jcmVhdGVDdXJzb3JLZXlzKCk7XG5cbiAgICAgICAgLy8gV2F0ZXIgc3ByaW5rbGVyXG4gICAgICAgIHRoaXMucGFydGljbGVzID0gc2NlbmUucGh5c2ljcy5hZGQuZ3JvdXAoe1xuICAgICAgICAgICAgYm91bmNlWDogMC4zLFxuICAgICAgICAgICAgYm91bmNlWTogMC4zLFxuICAgICAgICAgICAgY29sbGlkZVdvcmxkQm91bmRzOiB0cnVlLFxuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuTlVNX1BBUlRJQ0xFUzsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlcy5jcmVhdGUoMCwgMCwgJ2Ryb3BsZXQnLCAwLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgbGV0IHBhcnRpY2xlOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlID0gdGhpcy5wYXJ0aWNsZXMuZ2V0TGFzdCgpO1xuXG4gICAgICAgICAgICBjb25zdCBzY2FsZSA9IDEgKyBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgcGFydGljbGUuc2V0U2NhbGUoc2NhbGUpO1xuICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjUpIHtcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZS5zZXRGbGlwWCh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgMC41KSB7XG4gICAgICAgICAgICAgICAgcGFydGljbGUuc2V0RmxpcFkodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJ0aWNsZS5zZXRBbHBoYSgwLjMgKyBNYXRoLnJhbmRvbSgpICogMC43KVxuICAgICAgICAgICAgcGFydGljbGUuc2V0RnJpY3Rpb25YKDAuNSlcblxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHRoZXkgYXBwZWFyIGFzIGludmlzaWJsZSBvYmplY3RzIHRoYXQgcGxheWVycyBjYW4gY29sbGlkZSB3aXRoLlxuICAgICAgICAgICAgcGFydGljbGUuYm9keS5lbmFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHBhcnRpY2xlLnNldERlcHRoKDEwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUodGltZSwgZGVsdGEpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlKHRpbWUsIGRlbHRhKTtcblxuICAgICAgICB0aGlzLnNwcml0ZS5zZXRWZWxvY2l0eVgoXG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5ib2R5LnZlbG9jaXR5LnhcbiAgICAgICAgICAgICogTWF0aC5wb3coMSAtIHRoaXMuSk9TRV9GUklDVElPTl9DT0VGLCBkZWx0YSAvIDEwMDApXG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IGRpZmYgPSBuZXcgUGhhc2VyLk1hdGguVmVjdG9yMigwLCAwKTtcbiAgICAgICAgdGhpcy5pc0FuY2hvcmVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5zcHJpdGUuZmxpcFkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zcHJpdGUuZmxpcFggPSBmYWxzZTtcbiAgICAgICAgLy8gRGVmYXVsdC5cbiAgICAgICAgdGhpcy5zcHJpdGUuYW5pbXMucGxheSgnam9zZVVwJyk7XG4gICAgICAgIHRoaXMuc3ByaXRlLmFuZ2xlID0gMDtcblxuICAgICAgICBsZXQgYW5nbGVZID0gbnVsbDtcbiAgICAgICAgbGV0IGFuZ2xlWCA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLmN1cnNvcnMudXAuaXNEb3duKSB7XG4gICAgICAgICAgICBkaWZmLnkgKz0gLTUwO1xuICAgICAgICAgICAgYW5nbGVZID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jdXJzb3JzLmRvd24uaXNEb3duKSB7XG4gICAgICAgICAgICBkaWZmLnkgKz0gNTA7XG4gICAgICAgICAgICBhbmdsZVkgPSAxODBcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jdXJzb3JzLmxlZnQuaXNEb3duKSB7XG4gICAgICAgICAgICBkaWZmLnggKz0gLTUwO1xuICAgICAgICAgICAgYW5nbGVYID0gMjcwXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3Vyc29ycy5yaWdodC5pc0Rvd24pIHtcbiAgICAgICAgICAgIGRpZmYueCArPSA1MDtcbiAgICAgICAgICAgIGFuZ2xlWCA9IDkwO1xuICAgICAgICB9XG5cbiAgICAgICAgYW5nbGVYID0gKGFuZ2xlWCA9PSBudWxsKSA/IGFuZ2xlWSA6IGFuZ2xlWDtcbiAgICAgICAgYW5nbGVZID0gKGFuZ2xlWSA9PSBudWxsKSA/IGFuZ2xlWCA6IGFuZ2xlWTtcbiAgICAgICAgaWYgKGFuZ2xlWCAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoYW5nbGVYID09IDI3MCAmJiBhbmdsZVkgPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLmFuZ2xlID0gMjcwICsgNDU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLmFuZ2xlID0gKGFuZ2xlWCArIGFuZ2xlWSkgLyAyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY3Vyc29ycy5zaGlmdC5pc0Rvd24gJiYgdGhpcy5zcHJpdGUuYm9keS5ibG9ja2VkLmRvd24pIHtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnNldFZlbG9jaXR5KDAsIDApO1xuICAgICAgICAgICAgdGhpcy5pc0FuY2hvcmVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNBbmNob3JlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNBbmNob3JlZCkge1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUuYW5nbGUgPSAwO1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUuZmxpcFggPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLmZsaXBZID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJzb3JzLnVwLmlzRG93bikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnNvcnMubGVmdC5pc0Rvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUuYW5pbXMucGxheSgnam9zZVVwUmlnaHRBbmNob3JlZCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS5mbGlwWCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnNvcnMucmlnaHQuaXNEb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLmFuaW1zLnBsYXkoJ2pvc2VVcFJpZ2h0QW5jaG9yZWQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS5hbmltcy5wbGF5KCdqb3NlVXBBbmNob3JlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJzb3JzLmRvd24uaXNEb3duKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUuYW5pbXMucGxheSgnam9zZVJpZ2h0QWNobm9yZWQnKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJzb3JzLmxlZnQuaXNEb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLmZsaXBYID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3Vyc29ycy5sZWZ0LmlzRG93bikge1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLmFuaW1zLnBsYXkoJ2pvc2VSaWdodEFjaG5vcmVkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUuZmxpcFggPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnNvcnMucmlnaHQuaXNEb3duKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUuYW5pbXMucGxheSgnam9zZVJpZ2h0QWNobm9yZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUuYW5pbXMucGxheSgnam9zZVJpZ2h0QWNobm9yZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHplcm9BY2NlbGVyYXRpb25JZkJsb2NrZWQodGhpcy5zcHJpdGUuYm9keSk7XG5cbiAgICAgICAgaWYgKGRpZmYubGVuZ3RoKCkgIT0gMCkge1xuXG4gICAgICAgICAgICBjb25zdCBudW1Ub0ZpcmUgPSA2O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Ub0ZpcmU7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBzcGVlZCA9IFBoYXNlci5NYXRoLkJldHdlZW4odGhpcy5XQVRFUl9WRUxPQ0lUWV9NSU4sIHRoaXMuV0FURVJfVkVMT0NJVFlfTUFYKTtcbiAgICAgICAgICAgICAgICBsZXQgYW5nbGUgPSBkaWZmLmFuZ2xlKCkgKyBQaGFzZXIuTWF0aC5GbG9hdEJldHdlZW4oLTAuMSwgMC4xKTtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IHRoaXMuc3ByaXRlLnggKyBNYXRoLmNvcyhhbmdsZSkgKiAxNVxuICAgICAgICAgICAgICAgIGxldCB5ID0gdGhpcy5zcHJpdGUueSArIE1hdGguc2luKGFuZ2xlKSAqIDE1XG4gICAgICAgICAgICAgICAgbGV0IHAgPSB0aGlzLnBhcnRpY2xlcy5nZXRGaXJzdERlYWQoZmFsc2UsIHgsIHkpO1xuICAgICAgICAgICAgICAgIGlmIChwICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcC5jb2xsaWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBwLmJvZHkuZW5hYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcC5hbmltcy5wbGF5KFwiZHJvcGxldF9hbGl2ZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgcC5zZXRWZWxvY2l0eShzcGVlZCAqIE1hdGguY29zKGFuZ2xlKSwgc3BlZWQgKiBNYXRoLnNpbihhbmdsZSkpO1xuICAgICAgICAgICAgICAgICAgICBwLnNldFZpc2libGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHAuc2V0QWN0aXZlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnRpbWUuZGVsYXllZENhbGwoMzAwLCBoaWRlUGFydGljbGUsIFtwLCB0aGlzLnNjZW5lXSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNBbmNob3JlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLnNldFZlbG9jaXR5KFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS5ib2R5LnZlbG9jaXR5LnggLSBNYXRoLmNvcyhkaWZmLmFuZ2xlKCkpICogdGhpcy5TUFJJTktMRVJfQUNDLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS5ib2R5LnZlbG9jaXR5LnkgLSBNYXRoLnNpbihkaWZmLmFuZ2xlKCkpICogdGhpcy5TUFJJTktMRVJfQUNDKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVQYXJ0aWNsZShwYXJ0aWNsZSwgc2NlbmUpIHtcbiAgICBwYXJ0aWNsZS5hbmltcy5wbGF5KFwiZHJvcGxldF9kZWF0aFwiLCB0cnVlKTtcbiAgICBwYXJ0aWNsZS5vbignYW5pbWF0aW9uY29tcGxldGUnLCAoKSA9PiB7XG4gICAgICAgIHBhcnRpY2xlLmJvZHkuc2V0RW5hYmxlKGZhbHNlKTtcbiAgICAgICAgc2NlbmUuaG9zZVBsYXllci5wYXJ0aWNsZXMua2lsbEFuZEhpZGUocGFydGljbGUpO1xuICAgIH0sIHRoaXMpO1xufSIsImltcG9ydCB7IHBhcnNlQWxsUHJvcGVydGllcywgcGFyc2VQcm9wZXJ0aWVzIH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIExldmVsR2VuZXJhdG9yIHtcbiAgICBzY2VuZTtcbiAgICByb29tcztcbiAgICBOVU1fUk9PTVMgPSAxNjtcblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lKSB7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdGhpcy5OVU1fUk9PTVM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gYHJvb20ke2l9YDtcbiAgICAgICAgICAgIHNjZW5lLmxvYWQudGlsZW1hcFRpbGVkSlNPTihrZXksIGBhc3NldHMvcm9vbSR7aX0uanNvbmApO1xuICAgICAgICB9XG5cbiAgICAgICAgc2NlbmUubG9hZC50aWxlbWFwVGlsZWRKU09OKFwiYmFja2dyb3VuZDFcIiwgXCJhc3NldHMvYmFja2dyb3VuZDEuanNvblwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLnJvb21zID0gQXJyYXkoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdGhpcy5OVU1fUk9PTVM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gYHJvb20ke2l9YDtcbiAgICAgICAgICAgIGxldCBtYXAgPSB0aGlzLnNjZW5lLm1ha2UudGlsZW1hcCh7IGtleToga2V5IH0pO1xuICAgICAgICAgICAgbWFwWydwcm9wZXJ0aWVzJ10gPSBwYXJzZVByb3BlcnRpZXMobWFwWydwcm9wZXJ0aWVzJ10pO1xuICAgICAgICAgICAgbWFwLm1hcEtleSA9IGtleTtcbiAgICAgICAgICAgIG1hcC5wcm9wZXJ0aWVzLmhlaWdodCA9IG1hcC5wcm9wZXJ0aWVzLmhlaWdodCB8fCAxO1xuICAgICAgICAgICAgdGhpcy5yb29tcy5wdXNoKG1hcCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2VuZXJhdGVMZXZlbChncm91bmRGbG9vcjogYm9vbGVhbikge1xuICAgICAgICBsZXQgbGV2ZWxGcm9tVXJsID0gdGhpcy5sZXZlbEZyb21VcmwoKTtcbiAgICAgICAgbGV0IGxldmVsO1xuICAgICAgICBpZiAobGV2ZWxGcm9tVXJsICE9IG51bGwpIHtcbiAgICAgICAgICAgIGxldmVsID0gbGV2ZWxGcm9tVXJsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGhlaWdodExlZnQgPSAyO1xuICAgICAgICAgICAgbGV0IGVudHJ5Q29uc3RyYWludHM7XG4gICAgICAgICAgICB3aGlsZSAoaGVpZ2h0TGVmdCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoZ3JvdW5kRmxvb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwgPSBbdGhpcy5yb29tc1sxXV07XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5Q29uc3RyYWludHMgPSB0aGlzLnJvb21zWzFdLnByb3BlcnRpZXMuZXhpdDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0TGVmdCA9IDMgLSB0aGlzLnJvb21zWzFdLnByb3BlcnRpZXMuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldmVsID0gW107XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5Q29uc3RyYWludHMgPSBbJ3RlbGVwb3J0J107XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodExlZnQgPSAzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aGlsZSAoaGVpZ2h0TGVmdCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaGVpZ2h0TGVmdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGF2YWlsYWJsZVJvb21zID0gdGhpcy5yb29tcy5maWx0ZXIoKG1hcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGggPSBtYXAucHJvcGVydGllcy5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2sgPSBoIDw9IGhlaWdodExlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnlDb25zdHJhaW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSBlbnRyeUNvbnN0cmFpbnRzLm1hcCgoZW50cnlPcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hcC5wcm9wZXJ0aWVzLmVudHJ5LmluY2x1ZGVzKGVudHJ5T3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtYXAubWFwS2V5LCBtYXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZW5ydHJ5dSBDb25zdHJhaW5nXCIsIGVudHJ5Q29uc3RyYWludHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9rID0gb2sgJiYgb3B0aW9ucy5pbmNsdWRlcyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvaztcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQXZhaWxhYmxlIHJvb21zXCIsIGF2YWlsYWJsZVJvb21zKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF2YWlsYWJsZVJvb21zLmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGxldCByb29tID0gdGhpcy5yYW5kb21DaG9pY2UoYXZhaWxhYmxlUm9vbXMpO1xuICAgICAgICAgICAgICAgICAgICBsZXZlbC5wdXNoKHJvb20pO1xuICAgICAgICAgICAgICAgICAgICBlbnRyeUNvbnN0cmFpbnRzID0gcm9vbS5wcm9wZXJ0aWVzLmV4aXQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBoID0gcm9vbS5wcm9wZXJ0aWVzLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0TGVmdCAtPSBoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIkxldmVsOiBcIiwgbGV2ZWwubWFwKChyb29tKSA9PiByb29tLm1hcEtleSkpO1xuICAgICAgICByZXR1cm4gbGV2ZWw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsZXZlbEZyb21VcmwoKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XG4gICAgICAgIGlmICghdXJsUGFyYW1zLmhhcygncm9vbXMnKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHdhbnRlZFJvb21zID0gdXJsUGFyYW1zLmdldCgncm9vbXMnKT8uc3BsaXQoJywnKS5tYXAoKHgpID0+ICt4KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJXYW50ZWQgcm9vbXM6IFwiLCB3YW50ZWRSb29tcyk7XG4gICAgICAgIHdhbnRlZFJvb21zID0gd2FudGVkUm9vbXM/Lm1hcCgoeCkgPT4gdGhpcy5yb29tc1t4XSk7XG4gICAgICAgIHJldHVybiB3YW50ZWRSb29tcztcbiAgICB9XG5cbiAgICBwcml2YXRlIHJhbmRvbUNob2ljZShhcnJheSkge1xuICAgICAgICByZXR1cm4gYXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKV07XG4gICAgfVxufSIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInXG5pbXBvcnQge0xldmVsU2NlbmV9IGZyb20gJy4vc2NlbmVzL2xldmVsU2NlbmUnO1xuXG5sZXQgbGV2ZWxTY2VuZSA9IG5ldyBMZXZlbFNjZW5lKCk7XG5cbmxldCBsZXZlbHMgPSBbXG4gICAgbGV2ZWxTY2VuZSxcbl07XG5cbmV4cG9ydCBjb25zdCBTQ1JFRU5fSEVJR0hUID0gNzA0O1xuZXhwb3J0IGNvbnN0IFNDUkVFTl9XSURUSCA9IDEyMDA7XG5cbmNvbnN0IGdhbWVDb25maWcgPSB7XG4gICAgdHlwZTogUGhhc2VyLkFVVE8sXG4gICAgcGFyZW50OiAnY29udGVudCcsXG4gICAgd2lkdGg6IFNDUkVFTl9XSURUSCxcbiAgICBoZWlnaHQ6IFNDUkVFTl9IRUlHSFQsXG4gICAgcGh5c2ljczoge1xuICAgICAgICBkZWZhdWx0OiAnYXJjYWRlJyxcbiAgICAgICAgYXJjYWRlOiB7XG4gICAgICAgICAgICBncmF2aXR5OiB7eTogODAwfSxcbiAgICAgICAgICAgIGRlYnVnOiBmYWxzZSxcbiAgICAgICAgICAgIGZwczogNjAsIC8vIEZQUyBvZiB0aGUgcGh5c2ljcyBzaW11bGF0aW9uIC0gbWF5YmUgaGlnaGVyIGNvdWxkIGluY3JlYXNlIHN0YWJpbGl0eVxuICAgICAgICAgICAgdGltZVNjYWxlOiAxLCAvLyBoaWdoZXIgdG8gc2xvdyBkb3duIC0gZm9yIGRlYnVnZ2luZ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzY2VuZTogbGV2ZWxzLFxuICAgIHNlZWQ6IFtcIjQyXCJdLFxuICAgIHBpeGVsQXJ0OiB0cnVlLFxufTtcblxuZXhwb3J0IGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoZ2FtZUNvbmZpZyk7IiwiaW1wb3J0IHsgRmlyZSB9IGZyb20gXCIuL2ZpcmVcIjtcbmltcG9ydCB7IExldmVsU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvbGV2ZWxTY2VuZVwiO1xuXG5leHBvcnQgY29uc3QgTUFYX1ZFTE9DSVRZX1g6IGludGVnZXIgPSAyNTA7XG5cbmNvbnN0IEZJUkVfUExBWUVSX0NPTExJU0lPTl9QRU5BTFRZX01TID0gMjAwMDtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBsYXllciBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXIge1xuICAgIHNwcml0ZTogUGhhc2VyLlR5cGVzLlBoeXNpY3MuQXJjYWRlLlNwcml0ZVdpdGhEeW5hbWljQm9keTtcbiAgICBzcHJpdGVLZXk6IHN0cmluZztcblxuICAgIExFRlRfQU5JTV9LRVk6IHN0cmluZztcbiAgICBSSUdIVF9BTklNX0tFWTogc3RyaW5nO1xuICAgIFRVUk5fQU5JTV9LRVk6IHN0cmluZztcblxuICAgIFRFTEVQT1JUX0NPT0xET1dOX01TID0gMzAwMDtcblxuICAgIC8vIENVUlJFTlRMWSBVTlVTRUQhXG4gICAgaW52aW5jaWJsZSA9IGZhbHNlOyAgLy8gYnJpZWZseSB0cnVlIGFmdGVyIGRhbWFnZVxuXG4gICAgY2FuVGVsZXBvcnQgPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgeDogaW50ZWdlciwgeTogaW50ZWdlciwgc3ByaXRlS2V5OiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUpO1xuICAgICAgICB0aGlzLnNwcml0ZUtleSA9IHNwcml0ZUtleTtcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBzY2VuZS5waHlzaWNzLmFkZC5zcHJpdGUoeCwgeSwgc3ByaXRlS2V5KTtcblxuICAgICAgICB0aGlzLkxFRlRfQU5JTV9LRVkgPSBgJHtzcHJpdGVLZXl9X2xlZnRgO1xuICAgICAgICB0aGlzLlJJR0hUX0FOSU1fS0VZID0gYCR7c3ByaXRlS2V5fV9yaWdodGA7XG4gICAgICAgIHRoaXMuVFVSTl9BTklNX0tFWSA9IGAke3Nwcml0ZUtleX1fdHVybmA7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFBoeXNpY3NQcm9wZXJ0aWVzKCkge1xuICAgICAgICAvLyBuZWVkcyB0byBiZSBjYWxsZWQgYWZ0ZXIgdGhlIHNwcml0ZSBpcyBhZGRlZCB0byB0aGUgcGh5c2ljcyBncm91cFxuICAgICAgICB0aGlzLnNwcml0ZS5zZXRDb2xsaWRlV29ybGRCb3VuZHModHJ1ZSk7XG4gICAgICAgIHRoaXMuc3ByaXRlLnNldE1heFZlbG9jaXR5KE1BWF9WRUxPQ0lUWV9YLCAxMDAwMDApO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoX3RpbWUsIF9kZWx0YSk6IHZvaWQge1xuICAgIH1cblxuICAgIHB1YmxpYyBvblRlbGVwb3J0KCkge1xuICAgICAgICB0aGlzLmNhblRlbGVwb3J0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2NlbmUudGltZS5kZWxheWVkQ2FsbChcbiAgICAgICAgICAgIHRoaXMuVEVMRVBPUlRfQ09PTERPV05fTVMsXG4gICAgICAgICAgICAoKSA9PiB7IHRoaXMuY2FuVGVsZXBvcnQgPSB0cnVlOyB9LCBbXSwgdGhpc1xuICAgICAgICApO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBHcm91bmRQbGF5ZXIgfSBmcm9tIFwiLi4vZ3JvdW5kUGxheWVyXCI7XG5pbXBvcnQgeyBIb3NlIH0gZnJvbSBcIi4uL2hvc2VcIjtcbmltcG9ydCB7IGhpZGVQYXJ0aWNsZSwgSG9zZVBsYXllciB9IGZyb20gXCIuLi9ob3NlUGxheWVyXCI7XG5pbXBvcnQgeyBGaXJlIH0gZnJvbSBcIi4uL2ZpcmVcIjtcbmltcG9ydCB7IEVsVmljdGltbyB9IGZyb20gXCIuLi9lbFZpY3RpbW9cIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi9wbGF5ZXJcIjtcbmltcG9ydCB7IFRlbGVwb3J0TWFuYWdlciB9IGZyb20gXCIuLi90ZWxlcG9ydE1hbmFnZXJcIjtcbmltcG9ydCB7IHBhcnNlQWxsUHJvcGVydGllcyB9IGZyb20gXCIuLi91dGlsc1wiO1xuaW1wb3J0IHsgVGhhbmtzV2FsbCB9IGZyb20gXCIuLi90aGFua3NXYWxsXCI7XG5pbXBvcnQgeyBMZXZlbEdlbmVyYXRvciB9IGZyb20gXCIuLi9sZXZlbEdlbmVyYXRpb25cIjtcbmltcG9ydCBhc3NlcnQgPSByZXF1aXJlKFwiYXNzZXJ0XCIpO1xuaW1wb3J0IHsgU0NSRUVOX0hFSUdIVCwgU0NSRUVOX1dJRFRIIH0gZnJvbSBcIi4uL21haW5cIjtcbmltcG9ydCB7IEJveCB9IGZyb20gXCIuLi9ib3hcIjtcbmltcG9ydCB7IFRpbWVyIH0gZnJvbSBcIi4uL3RpbWVyXCI7XG5pbXBvcnQgVmVjdG9yMiA9IFBoYXNlci5NYXRoLlZlY3RvcjI7XG5pbXBvcnQgeyBEb29yIH0gZnJvbSBcIi4uL2Rvb3JcIjtcblxuY29uc3QgSE9TRV9QTEFZRVJfU1BSSVRFX0tFWSA9ICdob3NlUGxheWVyJztcbmNvbnN0IEdST1VORF9QTEFZRVJfU1BSSVRFX0tFWSA9ICdncm91bmRQbGF5ZXInO1xuY29uc3QgRUxfVklDVElNT19TUFJJVEVfS0VZID0gJ2VsVmljdGltbyc7XG5jb25zdCBUSEFOS1NfQ09VTlQgPSAxMDtcbmNvbnN0IEFVX0NPVU5UID0gMTE7XG5cblxuY29uc3QgVElMRV9TSVpFID0gMzI7XG5jb25zdCBGTE9PUl9XSURUSCA9IDMyICogVElMRV9TSVpFO1xuY29uc3QgRkxPT1JfSEVJR0hUID0gNyAqIFRJTEVfU0laRTtcblxuZXhwb3J0IGNsYXNzIExldmVsU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICAgIGxldmVsR2VuZXJhdG9yOiBMZXZlbEdlbmVyYXRvcjtcbiAgICBidWlsZGluZ0hlaWdodDogbnVtYmVyO1xuICAgIGNhbWVyYU9mZnNldFk6IG51bWJlciA9IDA7XG4gICAgc2t5O1xuXG4gICAgaG9zZVBsYXllcjogSG9zZVBsYXllcjtcbiAgICBncm91bmRQbGF5ZXI6IEdyb3VuZFBsYXllcjtcbiAgICB3YWxsczogQXJyYXk8UGhhc2VyLlRpbGVtYXBzLlRpbGVtYXBMYXllcj47XG4gICAgZmlyZXM6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TdGF0aWNHcm91cDtcbiAgICBkb29yczogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlN0YXRpY0dyb3VwO1xuICAgIHRoYW5rc1dhbGxzOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3RhdGljR3JvdXA7XG4gICAgaHlkcmFudHM6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TdGF0aWNHcm91cDtcbiAgICBib3hlczogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkdyb3VwO1xuXG4gICAgdGVsZXBvcnRNYW5hZ2VyOiBUZWxlcG9ydE1hbmFnZXI7XG4gICAgdGltZXI6IFRpbWVyO1xuICAgIHRpbWVGYWN0b3I6IG51bWJlciA9IDE7XG4gICAgdGltZUZhY3RvckRlY3JlYXNlOiBudW1iZXIgPSAwLjk4O1xuICAgIHRpbWVQZXJWaWN0aW06IG51bWJlciA9IDMwICogMTAwMDsgLy8gbXNcbiAgICBlbFZpY3RpbW9zOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuR3JvdXA7XG4gICAgcGxhdGZvcm1zO1xuICAgIHBsYXllcnM6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Hcm91cDtcbiAgICBsZXZlbCA9IDE7XG4gICAgaXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgIGxldmVsVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XG4gICAgZ2FtZU92ZXJUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcbiAgICBnYW1lT3ZlckJhY2tncm91bmQ6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGU7XG4gICAgbGV2ZWxFbnRyYW5jZSA9IG5ldyBWZWN0b3IyKDYwLCBTQ1JFRU5fSEVJR0hUIC0gNjAgLSAyMCk7XG4gICAgYXVTb3VuZHM7XG5cbiAgICBob3NlOiBIb3NlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIGtleTogJ2xldmVsJyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHByZWxvYWQoKSB7XG4gICAgICAgIHRoaXMubGV2ZWxHZW5lcmF0b3IgPSBuZXcgTGV2ZWxHZW5lcmF0b3IodGhpcyk7XG5cbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdza3knLCAnYXNzZXRzL3NreS5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdncm91bmQnLCAnYXNzZXRzL3BsYXRmb3JtLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3RpbGVzJywgJ2Fzc2V0cy9UaWxlc2V0TWFwLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2RlYnVnYmFsbCcsICdhc3NldHMvZGVidWdiYWxsLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2RlYnVnc3RhcicsICdhc3NldHMvZGVidWdzdGFyLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2h5ZHJhbnQnLCAnYXNzZXRzL2h5ZHJhbnQucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnZG9vcjEyJywgJ2Fzc2V0cy9kb29yMTIucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnZG9vcjEzJywgJ2Fzc2V0cy9kb29yMTMucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgndHJhcGRvb3InLCAnYXNzZXRzL3RyYXBkb29yLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2JveCcsICdhc3NldHMvYm94LnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3RpbWVCYXInLCAnYXNzZXRzL3RpbWVCYXIucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgna2V5JywgJ2Fzc2V0cy9rZXkucG5nJyk7XG5cbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KEhPU0VfUExBWUVSX1NQUklURV9LRVksICdhc3NldHMvam9zZV9zcHJpdGVzLnBuZycsIHsgZnJhbWVXaWR0aDogMzgsIGZyYW1lSGVpZ2h0OiAzOSB9KTtcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KEdST1VORF9QTEFZRVJfU1BSSVRFX0tFWSwgJ2Fzc2V0cy9ncmFuZF9zcHJpdGVzLnBuZycsIHtcbiAgICAgICAgICAgIGZyYW1lV2lkdGg6IDMyLFxuICAgICAgICAgICAgZnJhbWVIZWlnaHQ6IDYwXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoRUxfVklDVElNT19TUFJJVEVfS0VZLCAnYXNzZXRzL2NpdGl6ZW5fc3ByaXRlcy5wbmcnLCB7IGZyYW1lV2lkdGg6IDE1LCBmcmFtZUhlaWdodDogMTggfSk7XG5cbiAgICAgICAgdGhpcy5sb2FkLmF0bGFzKCdmbGFyZXMnLCAnYXNzZXRzL2ZsYXJlcy5wbmcnLCAnYXNzZXRzL2ZsYXJlcy5qc29uJyk7XG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldChcImRyb3BsZXRcIiwgJ2Fzc2V0cy9kcm9wbGV0cy5wbmcnLCB7IGZyYW1lV2lkdGg6IDEwLCBmcmFtZUhlaWdodDogMTAgfSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoYGZpcmUke2l9YCwgYGFzc2V0cy9maXJlJHtpfS5wbmdgLCB7IGZyYW1lV2lkdGg6IDUwLCBmcmFtZUhlaWdodDogNzAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFRIQU5LU19DT1VOVDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWQuYXVkaW8oYHRoYW5rcyR7aX1gLCBgYXNzZXRzL3NvdW5kcy90aGFua3Mke2l9Lm1wM2ApO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQVVfQ09VTlQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKGBhdSR7aX1gLCBgYXNzZXRzL3NvdW5kcy9hdSR7aX0ubXAzYCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLnBoeXNpY3Mud29ybGQuc2V0Qm91bmRzQ29sbGlzaW9uKHRydWUsIHRydWUsIHRydWUsIHRydWUpO1xuICAgICAgICB0aGlzLnBoeXNpY3Mud29ybGQuc2V0Qm91bmRzKDAsIDAsIFNDUkVFTl9XSURUSCwgU0NSRUVOX0hFSUdIVCk7XG5cbiAgICAgICAgdGhpcy5sZXZlbEdlbmVyYXRvci5jcmVhdGUoKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBrZXk6IGBmaXJlJHtpfWFuaW1gLFxuICAgICAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycyhgZmlyZSR7aX1gLCB7IHN0YXJ0OiAwLCBlbmQ6IDYwIH0pLFxuICAgICAgICAgICAgICAgIGZyYW1lUmF0ZTogNjAsXG4gICAgICAgICAgICAgICAgcmVwZWF0OiAtMSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAgICAgICAga2V5OiBcImRyb3BsZXRfZGVhdGhcIixcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycyhcImRyb3BsZXRcIiwgeyBzdGFydDogMCwgZW5kOiA1IH0pLFxuICAgICAgICAgICAgZnJhbWVSYXRlOiAyMCxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcbiAgICAgICAgICAgIGtleTogXCJkcm9wbGV0X2FsaXZlXCIsXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoXCJkcm9wbGV0XCIsIHsgc3RhcnQ6IDAsIGVuZDogMSB9KSxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTAsXG4gICAgICAgICAgICByZXBlYXQ6IC0xLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgICAgICBrZXk6IFwidmljdGltc2FkXCIsXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoRUxfVklDVElNT19TUFJJVEVfS0VZLCB7IHN0YXJ0OiAwLCBlbmQ6IDEgfSksXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDMsXG4gICAgICAgICAgICByZXBlYXQ6IC0xLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAgICAgICAga2V5OiBcInZpY3RpbWNhcnJpZWRcIixcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycyhFTF9WSUNUSU1PX1NQUklURV9LRVksIHsgc3RhcnQ6IDIsIGVuZDogMiB9KSxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMyxcbiAgICAgICAgICAgIHJlcGVhdDogLTEsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgICAgICBrZXk6IFwidmljdGltaGFwcHlcIixcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycyhFTF9WSUNUSU1PX1NQUklURV9LRVksIHsgc3RhcnQ6IDMsIGVuZDogNCB9KSxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMyxcbiAgICAgICAgICAgIHJlcGVhdDogLTEsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vICBBIHNpbXBsZSBiYWNrZ3JvdW5kIGZvciBvdXIgZ2FtZVxuICAgICAgICB0aGlzLnNreSA9IHRoaXMuYWRkLmltYWdlKFNDUkVFTl9XSURUSCAvIDIsIDAsICdza3knKS5zZXRTY2FsZSg2KS5zZXRUaW50KDB4Y2NjY2NjKTtcblxuICAgICAgICAvLyAgVGhlIHBsYXRmb3JtcyBncm91cCBjb250YWlucyB0aGUgZ3JvdW5kXG4gICAgICAgIHRoaXMucGxhdGZvcm1zID0gdGhpcy5waHlzaWNzLmFkZC5zdGF0aWNHcm91cCgpO1xuXG4gICAgICAgIC8vICBTY2FsZSBpdCB0byBmaXQgdGhlIHdpZHRoIG9mIHRoZSBnYW1lICh0aGUgb3JpZ2luYWwgc3ByaXRlIGlzIDQwMHgzMiBpbiBzaXplKVxuICAgICAgICB0aGlzLnBsYXRmb3Jtcy5jcmVhdGUoU0NSRUVOX1dJRFRIIC8gMiwgU0NSRUVOX0hFSUdIVCArIDE2LCAnZ3JvdW5kJykuc2V0U2NhbGUoMykucmVmcmVzaEJvZHkoKTsgLy8gMyAqIDMyIC8gMiA9IDQ4XG5cbiAgICAgICAgLy8gQ3JlYXRlIGhvc2UuXG4gICAgICAgIHRoaXMuaG9zZSA9IG5ldyBIb3NlKHRoaXMsIDMwLCBTQ1JFRU5fSEVJR0hUIC0gMzIgLSA0MCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHBsYXllcnMuXG4gICAgICAgIHRoaXMuaG9zZVBsYXllciA9IG5ldyBIb3NlUGxheWVyKHRoaXMsIHRoaXMuaG9zZS5pbml0aWFsWCwgdGhpcy5ob3NlLmluaXRpYWxZLCBIT1NFX1BMQVlFUl9TUFJJVEVfS0VZKTtcbiAgICAgICAgdGhpcy5ob3NlLmF0dGFjaEVuZFRvKHRoaXMuaG9zZVBsYXllcik7XG4gICAgICAgIHRoaXMuZ3JvdW5kUGxheWVyID0gbmV3IEdyb3VuZFBsYXllcih0aGlzLCA2MCwgU0NSRUVOX0hFSUdIVCAtIDYwIC0gMjAsIEdST1VORF9QTEFZRVJfU1BSSVRFX0tFWSk7XG4gICAgICAgIHRoaXMucGxheWVycyA9IHRoaXMucGh5c2ljcy5hZGQuZ3JvdXAoW3RoaXMuaG9zZVBsYXllci5zcHJpdGUsIHRoaXMuZ3JvdW5kUGxheWVyLnNwcml0ZV0pO1xuICAgICAgICB0aGlzLmhvc2VQbGF5ZXIuc2V0UGh5c2ljc1Byb3BlcnRpZXMoKTtcbiAgICAgICAgdGhpcy5ncm91bmRQbGF5ZXIuc2V0UGh5c2ljc1Byb3BlcnRpZXMoKTtcbiAgICAgICAgdGhpcy5ob3NlUGxheWVyLnNwcml0ZS5zZXREZXB0aCgxKTtcbiAgICAgICAgdGhpcy5ncm91bmRQbGF5ZXIuc3ByaXRlLnNldERlcHRoKDEpO1xuXG5cbiAgICAgICAgLy8gTG9hZCByb29tcy5cbiAgICAgICAgdGhpcy5oeWRyYW50cyA9IHRoaXMucGh5c2ljcy5hZGQuc3RhdGljR3JvdXAoKTtcbiAgICAgICAgdGhpcy50aGFua3NXYWxscyA9IHRoaXMucGh5c2ljcy5hZGQuc3RhdGljR3JvdXAoKTtcbiAgICAgICAgdGhpcy5kb29ycyA9IHRoaXMucGh5c2ljcy5hZGQuc3RhdGljR3JvdXAoKTtcbiAgICAgICAgdGhpcy5ib3hlcyA9IHRoaXMucGh5c2ljcy5hZGQuZ3JvdXAoeyBjb2xsaWRlV29ybGRCb3VuZHM6IHRydWUsIHJ1bkNoaWxkVXBkYXRlOiB0cnVlIH0pO1xuICAgICAgICB0aGlzLndhbGxzID0gW107XG4gICAgICAgIHRoaXMuZWxWaWN0aW1vcyA9IHRoaXMucGh5c2ljcy5hZGQuZ3JvdXAoeyBjb2xsaWRlV29ybGRCb3VuZHM6IHRydWUsIHJ1bkNoaWxkVXBkYXRlOiB0cnVlIH0pO1xuICAgICAgICB0aGlzLnRlbGVwb3J0TWFuYWdlciA9IG5ldyBUZWxlcG9ydE1hbmFnZXIodGhpcyk7XG4gICAgICAgIHRoaXMuZmlyZXMgPSB0aGlzLnBoeXNpY3MuYWRkLnN0YXRpY0dyb3VwKCk7XG5cbiAgICAgICAgbGV0IHJvb21zID0gdGhpcy5sZXZlbEdlbmVyYXRvci5nZW5lcmF0ZUxldmVsKHRydWUpO1xuICAgICAgICB0aGlzLmJ1aWxkaW5nSGVpZ2h0ID0gMDtcbiAgICAgICAgZm9yIChsZXQgcm9vbSBvZiByb29tcykge1xuICAgICAgICAgICAgdGhpcy5sb2FkUm9vbShyb29tKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGltZXIgPSBuZXcgVGltZXIodGhpcywgU0NSRUVOX1dJRFRIIC0gVElMRV9TSVpFLCBTQ1JFRU5fSEVJR0hUIC0gVElMRV9TSVpFLCBUSUxFX1NJWkUgLyAyLCBTQ1JFRU5fSEVJR0hUIC0gMiAqIFRJTEVfU0laRSwgJ3RpbWVCYXInKTtcbiAgICAgICAgdGhpcy50aW1lci5zdGFydCh0aGlzLnRpbWVQZXJWaWN0aW0gKiB0aGlzLnRpbWVGYWN0b3IgKiB0aGlzLmVsVmljdGltb3MuZ2V0Q2hpbGRyZW4oKS5sZW5ndGgpO1xuXG5cbiAgICAgICAgLy8gSHlkcmFudCBpbiB0aGUgYmVnaW5uaW5nLlxuICAgICAgICBsZXQgaHlkcmFudCA9IHRoaXMucGh5c2ljcy5hZGQuc3RhdGljU3ByaXRlKFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIFNDUkVFTl9IRUlHSFQgLSAzMixcbiAgICAgICAgICAgICdoeWRyYW50JyxcbiAgICAgICAgKTtcbiAgICAgICAgaHlkcmFudC5zZXREZXB0aCgxKTtcbiAgICAgICAgaHlkcmFudC5zZXRPcmlnaW4oMCwgMSk7XG4gICAgICAgIGh5ZHJhbnQucmVmcmVzaEJvZHkoKTtcbiAgICAgICAgaHlkcmFudC5zZXRTdGF0ZSgwKTtcbiAgICAgICAgdGhpcy5oeWRyYW50cy5hZGQoaHlkcmFudCk7XG5cblxuICAgICAgICAvLyBTb3VuZHNcbiAgICAgICAgY29uc3QgdGhhbmtzU291bmRzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgVEhBTktTX0NPVU5UOyArK2kpIHtcbiAgICAgICAgICAgIHRoYW5rc1NvdW5kcy5wdXNoKHRoaXMuc291bmQuYWRkKGB0aGFua3Mke2l9YCwgeyBsb29wOiBmYWxzZSB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hdVNvdW5kcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEFVX0NPVU5UOyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMuYXVTb3VuZHMucHVzaCh0aGlzLnNvdW5kLmFkZChgYXUke2l9YCwgeyBsb29wOiBmYWxzZSB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXYWxscyBvZiBUaGFua3MuXG4gICAgICAgIFtcbiAgICAgICAgICAgIFswLCAtMTAwMCAqIFNDUkVFTl9IRUlHSFQsIDIgKiBUSUxFX1NJWkUsIDEwMDEgKiBTQ1JFRU5fSEVJR0hUXSwgLy8gTGVmdCBsb25nXG4gICAgICAgICAgICBbMCwgU0NSRUVOX0hFSUdIVCAtIDIgKiBUSUxFX1NJWkUsIDMgKiBUSUxFX1NJWkUsIDIgKiBUSUxFX1NJWkVdLCAvLyBMZWZ0IGJvdHRvbVxuICAgICAgICAgICAgW1NDUkVFTl9XSURUSCAtIDIgKiBUSUxFX1NJWkUsIC0xMDAwICogU0NSRUVOX0hFSUdIVCwgMiAqIFRJTEVfU0laRSwgMTAwMSAqIFNDUkVFTl9IRUlHSFRdLCAgICAvLyBSaWdodCBsb25nXG4gICAgICAgICAgICBbU0NSRUVOX1dJRFRIIC0gMyAqIFRJTEVfU0laRSwgU0NSRUVOX0hFSUdIVCAtIDIgKiBUSUxFX1NJWkUsIDMgKiBUSUxFX1NJWkUsIDIgKiBUSUxFX1NJWkVdIC8vIFJpZ2h0IGJvdHRvbVxuICAgICAgICBdLmZvckVhY2goKHJlY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHdhbGwgPSBuZXcgVGhhbmtzV2FsbCh0aGlzLCByZWN0WzBdLCByZWN0WzFdLCByZWN0WzJdLCByZWN0WzNdLCAnZ3JvdW5kJywgdGhhbmtzU291bmRzKTtcbiAgICAgICAgICAgIHRoaXMudGhhbmtzV2FsbHMuYWRkKHdhbGwsIHRydWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyAgVGhlIHNjb3JlXG4gICAgICAgIHRoaXMubGV2ZWxUZXh0ID0gdGhpcy5hZGQudGV4dCgxNiwgMjYsICdMZXZlbDogMScsIHsgZm9udFNpemU6ICczMnB4JyB9KTtcbiAgICAgICAgY29uZmlndXJlVGV4dCh0aGlzLmxldmVsVGV4dCk7XG5cbiAgICAgICAgdGhpcy5nYW1lT3ZlckJhY2tncm91bmQgPSB0aGlzLmFkZC5yZWN0YW5nbGUoNjAwLCAyNTAsIDgwMCwgMjAwLCAweDMyMDAzMik7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJUZXh0ID0gdGhpcy5hZGQudGV4dCgzMDAsIDIwMCwgJ0dhbWUgb3ZlciEnLCB7IGZvbnRTaXplOiAnMTAwcHgnLCBjb2xvcjogJyNmMDAnIH0pO1xuICAgICAgICBbdGhpcy5nYW1lT3ZlckJhY2tncm91bmQsIHRoaXMuZ2FtZU92ZXJUZXh0XS5mb3JFYWNoKChvYmopID0+IHtcbiAgICAgICAgICAgIG9iai5zZXREZXB0aCgxMDAwKTtcbiAgICAgICAgICAgIG9iai5zZXRTY3JvbGxGYWN0b3IoMCwgMCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJCYWNrZ3JvdW5kLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyVGV4dC5zZXRWaXNpYmxlKGZhbHNlKTtcblxuICAgICAgICB0aGlzLnNldENvbGxpc2lvbnMoKTtcblxuICAgICAgICB0aGlzLnBoeXNpY3MuZGlzYWJsZVVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Q29sbGlzaW9ucygpIHtcblxuICAgICAgICAvLyBDb2xsaXNpb25zLlxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMucGxheWVycywgdGhpcy5wbGF0Zm9ybXMsIHRoaXMub25QbGF5ZXJIaXRHcm91bmQsIG51bGwsIHRoaXMpO1xuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMucGxheWVycywgdGhpcy5kb29ycyk7XG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5ob3NlUGxheWVyLnBhcnRpY2xlcywgdGhpcy5wbGF0Zm9ybXMpO1xuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuaG9zZVBsYXllci5wYXJ0aWNsZXMsIHRoaXMuZG9vcnMpO1xuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuZWxWaWN0aW1vcywgdGhpcy5wbGF0Zm9ybXMsIHRoaXMub25WaWN0aW1IaXRHcm91bmQpO1xuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLm92ZXJsYXAodGhpcy5lbFZpY3RpbW9zLCB0aGlzLnRoYW5rc1dhbGxzLCB0aGlzLm9uVmljdGltSW5UaGFua3NXYWxsLCBudWxsLCB0aGlzKTtcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5vdmVybGFwKHRoaXMuaHlkcmFudHMsIHRoaXMuaG9zZVBsYXllci5zcHJpdGUsIHRoaXMub25Ub3VjaEh5ZHJhbnQsIG51bGwsIHRoaXMpO1xuXG4gICAgICAgIC8vIEJveGVzIGNvbGxpc2lvbnNcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLmJveGVzLCB0aGlzLmJveGVzKTtcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLmJveGVzLCB0aGlzLmVsVmljdGltb3MpO1xuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuYm94ZXMsIHRoaXMucGxhdGZvcm1zKTtcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLmJveGVzLCB0aGlzLmh5ZHJhbnRzKTtcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLmJveGVzLCB0aGlzLmZpcmVzKTtcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLmJveGVzLCB0aGlzLmRvb3JzKTtcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLmJveGVzLCB0aGlzLndhbGxzKTtcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLmJveGVzLCB0aGlzLnBsYXllcnMpO1xuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLm92ZXJsYXAodGhpcy5ib3hlcywgdGhpcy5ob3NlUGxheWVyLnBhcnRpY2xlcywgdGhpcy5vbkJveFdhdGVyQ29sbGlzaW9uLCBudWxsLCB0aGlzKTtcblxuICAgICAgICAvLyBDb2xsaWRlIHdpdGggZmxvb3IgbWFwLlxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMucGxheWVycywgdGhpcy53YWxscyk7XG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5lbFZpY3RpbW9zLCB0aGlzLndhbGxzLCB0aGlzLm9uVmljdGltSGl0R3JvdW5kLCBudWxsLCB0aGlzKTtcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLmhvc2VQbGF5ZXIucGFydGljbGVzLCB0aGlzLndhbGxzKTtcblxuICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLm92ZXJsYXAodGhpcy5ncm91bmRQbGF5ZXIuc3ByaXRlLCB0aGlzLmVsVmljdGltb3MsIHRoaXMucGlja1VwRWxWaWN0aW1vLCBudWxsLCB0aGlzKTtcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLmhvc2VQbGF5ZXIucGFydGljbGVzLCB0aGlzLmZpcmVzLCB0aGlzLmV4dGluZ3Vpc2hGaXJlLCBudWxsLCB0aGlzKTtcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLmJveGVzLCB0aGlzLmZpcmVzLCB0aGlzLmV4dGluZ3Vpc2hGaXJlV2l0aEJveCwgbnVsbCwgdGhpcyk7XG4gICAgICAgIHRoaXMucGh5c2ljcy5hZGQub3ZlcmxhcCh0aGlzLnBsYXllcnMsIHRoaXMuZmlyZXMsIHRoaXMub25QbGF5ZXJGaXJlQ29sbGlzaW9uLCBudWxsLCB0aGlzKTtcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5vdmVybGFwKHRoaXMuZWxWaWN0aW1vcywgdGhpcy5maXJlcywgdGhpcy5vblZpY3RpbUZpcmVDb2xsaXNpb24sIG51bGwsIHRoaXMpO1xuXG4gICAgICAgIC8vIEhvc2UgY29sbGlzaW9ucy5cbiAgICAgICAgdGhpcy5ob3NlLnBhcnRzLmZvckVhY2goKHBhcnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIocGFydCwgdGhpcy5wbGF0Zm9ybXMpO1xuICAgICAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcihwYXJ0LCB0aGlzLndhbGxzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVGVsZXBvcnRlcnNcbiAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5vdmVybGFwKHRoaXMucGxheWVycywgdGhpcy50ZWxlcG9ydE1hbmFnZXIudGVsZXBvcnRzLCB0aGlzLm9uVG91Y2hUZWxlcG9ydCwgbnVsbCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZSh0aW1lLCBkZWx0YSkgeyAgLy8gZGVsdGEgaXMgaW4gbXNcbiAgICAgICAgdGhpcy50aW1lci51cGRhdGUodGltZSwgZGVsdGEpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzR2FtZU92ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaG9zZVBsYXllci51cGRhdGUodGltZSwgZGVsdGEpO1xuICAgICAgICB0aGlzLmdyb3VuZFBsYXllci51cGRhdGUodGltZSwgZGVsdGEpO1xuXG4gICAgICAgIC8vIGlmIChNYXRoLnJhbmRvbSgpIDwgMC4wMSl7XG4gICAgICAgIHRoaXMuaG9zZS51cGRhdGUodGltZSwgZGVsdGEpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgdGhpcy5lbFZpY3RpbW9zLnByZVVwZGF0ZSh0aW1lLCBkZWx0YSk7XG5cbiAgICAgICAgdGhpcy5waHlzaWNzLndvcmxkLnVwZGF0ZSh0aW1lLCBkZWx0YSk7XG4gICAgICAgIHRoaXMuYm94ZXMucHJlVXBkYXRlKHRpbWUsIGRlbHRhKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXh0aW5ndWlzaEZpcmUocGFydGljbGUsIGZpcmUpIHtcbiAgICAgICAgaGlkZVBhcnRpY2xlKHBhcnRpY2xlLCB0aGlzKTtcbiAgICAgICAgZmlyZS5sb3dlckhwKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGV4dGluZ3Vpc2hGaXJlV2l0aEJveChib3gsIGZpcmUpIHtcbiAgICAgICAgZmlyZS5sb3dlckhwKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwaWNrVXBFbFZpY3RpbW8oX2dyb3VuZFBsYXllciwgZWxWaWN0aW1vKSB7XG4gICAgICAgIC8vIE5vdGU6IFRoZSBmaXJzdCBhcmd1bWVudCBpcyB1bnVzZWQgYmVjYXVzZSBJIGNvdWxkbid0IGdldCB0aGUgR3JvdW5kUGxheWVyIG9iamVjdCBvdXQgb2YgaXQsIGp1c3QgQXJjYWRlU3ByaXRlLiBcbiAgICAgICAgaWYgKHRoaXMuZ3JvdW5kUGxheWVyLnBpY2tVcCh0aGlzLnRpbWUubm93LCBlbFZpY3RpbW8pKSB7XG4gICAgICAgICAgICBlbFZpY3RpbW8ucGlja2VkVXBCeSh0aGlzLmdyb3VuZFBsYXllcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uUGxheWVyRmlyZUNvbGxpc2lvbihcbiAgICAgICAgcGxheWVyU3ByaXRlOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlLFxuICAgICAgICBmaXJlOiBGaXJlLFxuICAgICkge1xuICAgICAgICBsZXQgcGxheWVyOiBQbGF5ZXIgPSAocGxheWVyU3ByaXRlID09PSB0aGlzLmhvc2VQbGF5ZXIuc3ByaXRlKSA/IHRoaXMuaG9zZVBsYXllciA6IHRoaXMuZ3JvdW5kUGxheWVyO1xuICAgICAgICBmaXJlLm9uRmlyZUNvbGxpc2lvbihwbGF5ZXIsIHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25WaWN0aW1GaXJlQ29sbGlzaW9uKFxuICAgICAgICB2aWN0aW06IEVsVmljdGltbyxcbiAgICAgICAgZmlyZTogRmlyZSxcbiAgICApIHtcbiAgICAgICAgZmlyZS5vbkZpcmVDb2xsaXNpb24odmljdGltLCB0aGlzKTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgb25WaWN0aW1JblRoYW5rc1dhbGwodmljdGltOiBFbFZpY3RpbW8sIHRoYW5rc1dhbGw6IFRoYW5rc1dhbGwpIHtcbiAgICAgICAgdGhhbmtzV2FsbC5oYW5kbGVWaWN0aW0odmljdGltKTtcbiAgICAgICAgdmljdGltLmdldFNhdmVkKCk7XG4gICAgICAgIHRoaXMuY2hlY2tWaWN0b3J5KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblZpY3RpbUhpdEdyb3VuZCh2aWN0aW06IEVsVmljdGltbywgXykge1xuICAgICAgICB2aWN0aW0ub25IaXRHcm91bmQodGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblBsYXllckhpdEdyb3VuZChwbGF5ZXJTcHJpdGUsIF8pIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocGxheWVyU3ByaXRlLngpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZ3JvdW5kUGxheWVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBsYXllclNwcml0ZSA9PT0gdGhpcy5ncm91bmRQbGF5ZXIuc3ByaXRlKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxldmVsID4gMSlcbiAgICAgICAgaWYgKHRoaXMuZ3JvdW5kUGxheWVyICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICYmIHBsYXllclNwcml0ZSA9PT0gdGhpcy5ncm91bmRQbGF5ZXIuc3ByaXRlXG4gICAgICAgICAgICAmJiAocGxheWVyU3ByaXRlLnggPiA1MDAgfHwgdGhpcy5sZXZlbCA+IDEpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInllc1wiLCB0aGlzLmxldmVsRW50cmFuY2UueCwgdGhpcy5sZXZlbEVudHJhbmNlLnkpO1xuICAgICAgICAgICAgdGhpcy5ncm91bmRQbGF5ZXIuc3ByaXRlLnggPSB0aGlzLmxldmVsRW50cmFuY2UueDtcbiAgICAgICAgICAgIHRoaXMuZ3JvdW5kUGxheWVyLnNwcml0ZS55ID0gdGhpcy5sZXZlbEVudHJhbmNlLnk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVG91Y2hIeWRyYW50KF9wbGF5ZXIsIGh5ZHJhbnQ6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUpIHtcbiAgICAgICAgaWYgKGh5ZHJhbnQuc3RhdGUgPT09IDEpIHJldHVybjsgIC8vIEFscmVhZHkgYXR0YWNoZWRcbiAgICAgICAgdGhpcy5oeWRyYW50cy5jaGlsZHJlbi5pdGVyYXRlKChvdGhlckh5ZHJhbnQ6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUpID0+IHtcbiAgICAgICAgICAgIG90aGVySHlkcmFudC5zZXRTdGF0ZSgwKTtcbiAgICAgICAgICAgIG90aGVySHlkcmFudC5jbGVhclRpbnQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGh5ZHJhbnQuc2V0U3RhdGUoMSk7XG4gICAgICAgIHRoaXMuaG9zZS5zZXRTdGFydFRvKGh5ZHJhbnQuZ2V0Q2VudGVyKCkpO1xuICAgICAgICBoeWRyYW50LnNldFRpbnQoMHhmZjAwMDApO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Cb3hXYXRlckNvbGxpc2lvbihib3gsIHdhdGVyKSB7XG4gICAgICAgIC8vIHdhdGVyLmNvbGxpZGVkIGlzIGEgc2VtaWhhY2tcbiAgICAgICAgaWYgKHdhdGVyLmNvbGxpZGVkKSByZXR1cm47XG4gICAgICAgIGJveC5ib2R5LnNldFZlbG9jaXR5KFxuICAgICAgICAgICAgd2F0ZXIuYm9keS52ZWxvY2l0eS54IC8gQm94LldBVEVSX1NUUkVOR1RIX0ZBQ1RPUixcbiAgICAgICAgICAgIHdhdGVyLmJvZHkudmVsb2NpdHkueSAvIEJveC5XQVRFUl9TVFJFTkdUSF9GQUNUT1IpO1xuXG4gICAgICAgIGNvbnN0IGYgPSBCb3guQk9YX1NUUkVOR1RIX09OX1dBVEVSX0ZBQ1RPUjtcbiAgICAgICAgd2F0ZXIuYm9keS5zZXRWZWxvY2l0eSgtd2F0ZXIuYm9keS52ZWxvY2l0eS54IC8gUGhhc2VyLk1hdGguQmV0d2VlbihmIC0gMiwgZiArIDIpLCAtd2F0ZXIuYm9keS52ZWxvY2l0eS55IC8gUGhhc2VyLk1hdGguQmV0d2VlbihmIC0gMiwgZiArIDIpKTtcbiAgICAgICAgd2F0ZXIuY29sbGlkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Ub3VjaFRlbGVwb3J0KFxuICAgICAgICBwbGF5ZXJTcHJpdGU6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUsXG4gICAgICAgIHRwOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlLFxuICAgICkge1xuICAgICAgICBsZXQgb3RoZXJUcCA9IHRoaXMudGVsZXBvcnRNYW5hZ2VyLmdldENvcnJlc3BvbmRpbmdUZWxlcG9ydCh0cCk7XG4gICAgICAgIGNvbnNvbGUubG9nKG90aGVyVHApO1xuICAgICAgICBpZiAob3RoZXJUcCA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBwbGF5ZXI6IFBsYXllciA9IChwbGF5ZXJTcHJpdGUgPT09IHRoaXMuaG9zZVBsYXllci5zcHJpdGUpID8gdGhpcy5ob3NlUGxheWVyIDogdGhpcy5ncm91bmRQbGF5ZXI7XG5cbiAgICAgICAgaWYgKHBsYXllci5jYW5UZWxlcG9ydCkge1xuICAgICAgICAgICAgcGxheWVyU3ByaXRlLnggPSBvdGhlclRwLng7XG4gICAgICAgICAgICBwbGF5ZXJTcHJpdGUueSA9IG90aGVyVHAueSAtIDMyO1xuICAgICAgICAgICAgcGxheWVyLm9uVGVsZXBvcnQoKTtcblxuICAgICAgICAgICAgaWYgKHBsYXllciA9PT0gdGhpcy5ob3NlUGxheWVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3NlLnNldFN0YXJ0VG8obmV3IFZlY3RvcjIob3RoZXJUcC54LCBvdGhlclRwLnkgLSAzMikpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHByaXZhdGUgbG9hZFJvb20ocm9vbSkge1xuICAgICAgICBsZXQgbWFwID0gdGhpcy5tYWtlLnRpbGVtYXAoeyBrZXk6IHJvb20ubWFwS2V5IH0pO1xuXG4gICAgICAgIGNvbnN0IHRpbGVzZXQgPSBtYXAuYWRkVGlsZXNldEltYWdlKCdUaWxlc2V0TWFwJywgJ3RpbGVzJyk7XG4gICAgICAgIGNvbnN0IG9mZnNldFggPSAoU0NSRUVOX1dJRFRIIC0gRkxPT1JfV0lEVEgpIC8gMjtcbiAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IFNDUkVFTl9IRUlHSFQgLSAzMiAtIChUSUxFX1NJWkUgKiAodGhpcy5idWlsZGluZ0hlaWdodCArIDcgKiByb29tLnByb3BlcnRpZXMuaGVpZ2h0KSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb29tLnByb3BlcnRpZXMuaGVpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBiZ01hcCA9IHRoaXMubWFrZS50aWxlbWFwKHsga2V5OiBcImJhY2tncm91bmQxXCIgfSk7XG4gICAgICAgICAgICBiZ01hcC5jcmVhdGVMYXllcignYmFja2dyb3VuZCcsIHRpbGVzZXQsIG9mZnNldFgsIG9mZnNldFkgKyBGTE9PUl9IRUlHSFQgKiBpKS5zZXREZXB0aCgwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsYXllciA9IG1hcC5jcmVhdGVMYXllcignd2FsbHMnLCB0aWxlc2V0LCBvZmZzZXRYLCBvZmZzZXRZKTtcbiAgICAgICAgbWFwLmNyZWF0ZUxheWVyKCd3aW5kb3dzJywgdGlsZXNldCwgb2Zmc2V0WCwgb2Zmc2V0WSk7XG4gICAgICAgIGxheWVyLnNldENvbGxpc2lvbkJ5RXhjbHVzaW9uKFstMV0sIHRydWUpO1xuICAgICAgICB0aGlzLndhbGxzLnB1c2gobGF5ZXIpO1xuICAgICAgICB0aGlzLmJ1aWxkaW5nSGVpZ2h0ICs9IDcgKiByb29tLnByb3BlcnRpZXMuaGVpZ2h0O1xuXG4gICAgICAgIC8vIFZpY3RpbXMuXG4gICAgICAgIG1hcC5nZXRPYmplY3RMYXllcigndmljdGltcycpPy5vYmplY3RzLmZvckVhY2goKHZpY3RpbVRpbGUpID0+IHtcbiAgICAgICAgICAgIGxldCB2aWN0aW0gPSBuZXcgRWxWaWN0aW1vKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgb2Zmc2V0WCArIHZpY3RpbVRpbGUueCAtIDgsXG4gICAgICAgICAgICAgICAgb2Zmc2V0WSArIHZpY3RpbVRpbGUueSAtIDQ4LFxuICAgICAgICAgICAgICAgIEVMX1ZJQ1RJTU9fU1BSSVRFX0tFWSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmVsVmljdGltb3MuYWRkKHZpY3RpbSwgdHJ1ZSk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIC8vIERvb3JzLlxuICAgICAgICBjb25zdCBrZXlzID0gbWFwLmdldE9iamVjdExheWVyKCdrZXlzJyk/Lm9iamVjdHM7XG4gICAgICAgIGlmIChrZXlzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrIG9mIGtleXMpXG4gICAgICAgICAgICAgICAgYXNzZXJ0KGsuaGFzT3duUHJvcGVydHkoJ3Byb3BlcnRpZXMnKSwgcm9vbS5tYXBLZXkgKyBcIiBLZXlzIGRvbid0IGhhdmUgY29sb3JzIHNwZWNpZmllZCFcIik7XG4gICAgICAgICAgICBwYXJzZUFsbFByb3BlcnRpZXMoa2V5cyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZG9vcnMgPSBtYXAuZ2V0T2JqZWN0TGF5ZXIoJ2Rvb3JzJyk/Lm9iamVjdHM7XG4gICAgICAgIGlmIChkb29ycykge1xuICAgICAgICAgICAgZm9yIChsZXQgZCBvZiBkb29ycylcbiAgICAgICAgICAgICAgICBhc3NlcnQoZC5oYXNPd25Qcm9wZXJ0eSgncHJvcGVydGllcycpLCByb29tLm1hcEtleSArIFwiIERvb3JzIGRvbid0IGhhdmUgY29sb3JzIHNwZWNpZmllZCFcIik7XG4gICAgICAgICAgICBwYXJzZUFsbFByb3BlcnRpZXMoZG9vcnMpO1xuICAgICAgICB9XG4gICAgICAgIGRvb3JzPy5mb3JFYWNoKChkb29yVGlsZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGRvb3IgPSBuZXcgRG9vcih0aGlzLCBvZmZzZXRYICsgZG9vclRpbGUueCwgb2Zmc2V0WSArIGRvb3JUaWxlLnksIGRvb3JUaWxlLndpZHRoLCBkb29yVGlsZS5oZWlnaHQsIGRvb3JUaWxlLnByb3BlcnRpZXMuY29sb3IpO1xuICAgICAgICAgICAgdGhpcy5kb29ycy5hZGQoZG9vci5kb29yU3ByaXRlLCB0cnVlKTtcbiAgICAgICAgICAgIGNvbnN0IGZpdHRpbmdLZXlzID0ga2V5cy5maWx0ZXIoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXkucHJvcGVydGllcy5jb2xvciA9PSBkb29yVGlsZS5wcm9wZXJ0aWVzLmNvbG9yO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgb2YgZml0dGluZ0tleXMpIHtcbiAgICAgICAgICAgICAgICBkb29yLmFkZEtleSh0aGlzLCBvZmZzZXRYICsga2V5LngsIG9mZnNldFkgKyBrZXkueSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEJveGVzXG4gICAgICAgIG1hcC5nZXRPYmplY3RMYXllcignYm94ZXMnKT8ub2JqZWN0cy5mb3JFYWNoKChib3hUaWxlKSA9PiB7XG4gICAgICAgICAgICBpZiAoYm94VGlsZS5wb2x5Z29uKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQb2x5Z29uIGJveGVzIGFyZSBub3Qgc3VwcG9ydGVkLi5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBib3ggPSBuZXcgQm94KFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgYm94VGlsZS54ICsgb2Zmc2V0WCxcbiAgICAgICAgICAgICAgICBib3hUaWxlLnkgKyBvZmZzZXRZLFxuICAgICAgICAgICAgICAgIGJveFRpbGUud2lkdGgsXG4gICAgICAgICAgICAgICAgYm94VGlsZS5oZWlnaHQsXG4gICAgICAgICAgICAgICAgJ2JveCdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmJveGVzLmFkZChib3gsIHRydWUpO1xuICAgICAgICAgICAgYm94LnNldE1hc3MoMS41KTtcbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgLy8gSHlkcmFudHNcbiAgICAgICAgbWFwLmdldE9iamVjdExheWVyKCdoeWRyYW50cycpPy5vYmplY3RzLmZvckVhY2goKGh5ZHJhbnRUaWxlKSA9PiB7XG4gICAgICAgICAgICBsZXQgaHlkcmFudCA9IHRoaXMucGh5c2ljcy5hZGQuc3RhdGljU3ByaXRlKFxuICAgICAgICAgICAgICAgIG9mZnNldFggKyBoeWRyYW50VGlsZS54LFxuICAgICAgICAgICAgICAgIG9mZnNldFkgKyBoeWRyYW50VGlsZS55LFxuICAgICAgICAgICAgICAgICdoeWRyYW50JyxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBoeWRyYW50LnNldE9yaWdpbigwLCAxKTtcbiAgICAgICAgICAgIGh5ZHJhbnQuc2V0RGVwdGgoMSk7XG4gICAgICAgICAgICBoeWRyYW50LnJlZnJlc2hCb2R5KCk7XG5cbiAgICAgICAgICAgIGh5ZHJhbnQuc2V0U3RhdGUoMCk7XG4gICAgICAgICAgICB0aGlzLmh5ZHJhbnRzLmFkZChoeWRyYW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy50ZWxlcG9ydE1hbmFnZXIuYWRkUm9vbShtYXAsIG9mZnNldFgsIG9mZnNldFkpO1xuXG4gICAgICAgIC8vIEZpcmVzLlxuICAgICAgICBtYXAuZ2V0T2JqZWN0TGF5ZXIoJ2ZpcmVzJyk/Lm9iamVjdHMuc29ydCgoYSwgYikgPT4gYS55IC0gYi55KS5mb3JFYWNoKChmaXJlVGlsZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGZpcmUgPSBuZXcgRmlyZSh0aGlzLCBvZmZzZXRYICsgZmlyZVRpbGUueCArIDE1LCBvZmZzZXRZICsgZmlyZVRpbGUueSAtIDM4LCAnZmlyZScpO1xuICAgICAgICAgICAgdGhpcy5maXJlcy5hZGQoZmlyZSwgdHJ1ZSk7XG4gICAgICAgICAgICBmaXJlLmJvZHkuc2V0U2l6ZSgzMCwgNjAsIHRydWUpO1xuICAgICAgICAgICAgZmlyZS51cGRhdGVTY2FsZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrVmljdG9yeSgpIHtcbiAgICAgICAgY29uc3QgYWxsU2F2ZWQgPSB0aGlzLmVsVmljdGltb3MuZ2V0Q2hpbGRyZW4oKS5ldmVyeSgodmljdGltKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKHZpY3RpbSBhcyBFbFZpY3RpbW8pLnNhdmVkO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFhbGxTYXZlZCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJub3QgZXZlcnlvbmUgaXMgc2F2ZWQpXCIpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5lbFZpY3RpbW9zKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIlZJQ1RPUllcIik7XG5cbiAgICAgICAgdGhpcy5oeWRyYW50cyA9IHRoaXMucGh5c2ljcy5hZGQuc3RhdGljR3JvdXAoKTtcbiAgICAgICAgdGhpcy5kb29ycyA9IHRoaXMucGh5c2ljcy5hZGQuc3RhdGljR3JvdXAoKTtcbiAgICAgICAgdGhpcy5ib3hlcyA9IHRoaXMucGh5c2ljcy5hZGQuZ3JvdXAoeyBjb2xsaWRlV29ybGRCb3VuZHM6IHRydWUsIHJ1bkNoaWxkVXBkYXRlOiB0cnVlIH0pO1xuICAgICAgICB0aGlzLndhbGxzID0gW107XG4gICAgICAgIHRoaXMuZWxWaWN0aW1vcyA9IHRoaXMucGh5c2ljcy5hZGQuZ3JvdXAoeyBjb2xsaWRlV29ybGRCb3VuZHM6IHRydWUsIHJ1bkNoaWxkVXBkYXRlOiB0cnVlIH0pO1xuICAgICAgICB0aGlzLmZpcmVzID0gdGhpcy5waHlzaWNzLmFkZC5zdGF0aWNHcm91cCgpO1xuXG4gICAgICAgIGxldCByb29tcyA9IHRoaXMubGV2ZWxHZW5lcmF0b3IuZ2VuZXJhdGVMZXZlbChmYWxzZSk7XG4gICAgICAgIGZvciAobGV0IHJvb20gb2Ygcm9vbXMpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFJvb20ocm9vbSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldENvbGxpc2lvbnMoKTtcblxuICAgICAgICB0aGlzLnNreS55ID0gdGhpcy5za3kueSAtIFNDUkVFTl9IRUlHSFQ7XG4gICAgICAgIGxldCB4ID0gdGhpcy5jYW1lcmFzLm1haW4uY2VudGVyWDtcbiAgICAgICAgbGV0IHkgPSB0aGlzLmNhbWVyYXMubWFpbi5zY3JvbGxZICsgdGhpcy5jYW1lcmFzLm1haW4uY2VudGVyWTtcbiAgICAgICAgdGhpcy5jYW1lcmFPZmZzZXRZIC09IDIxICogVElMRV9TSVpFO1xuICAgICAgICB0aGlzLnBoeXNpY3Mud29ybGQuc2V0Qm91bmRzKDAsIHRoaXMuY2FtZXJhT2Zmc2V0WSwgU0NSRUVOX1dJRFRILCBTQ1JFRU5fSEVJR0hUIC0gdGhpcy5jYW1lcmFPZmZzZXRZKTtcblxuICAgICAgICB0aGlzLmNhbWVyYXMubWFpbi5wYW4oeCwgeSAtIDIxICogVElMRV9TSVpFLCAyMDAwLCBcIlF1YWQuZWFzZUluT3V0XCIpO1xuXG4gICAgICAgIHRoaXMubGV2ZWxFbnRyYW5jZSA9IHJvb21zWzBdLmdldE9iamVjdExheWVyKCdlbnRyeXRlbGVwb3J0Jykub2JqZWN0c1swXTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IChTQ1JFRU5fV0lEVEggLSBGTE9PUl9XSURUSCkgLyAyO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGV2ZWxFbnRyYW5jZS54LCB0aGlzLmxldmVsRW50cmFuY2UueSwgdGhpcy5jYW1lcmFPZmZzZXRZKTtcblxuICAgICAgICBsZXQgaGVpZ2h0T2ZSb29tc0Fib3ZlID0gcm9vbXMubWFwKChyb29tKSA9PiByb29tLnByb3BlcnRpZXMuaGVpZ2h0KS5zdW0oKSAtIHJvb21zWzBdLnByb3BlcnRpZXMuaGVpZ2h0O1xuICAgICAgICBsZXQgZHkgPSB0aGlzLmxldmVsRW50cmFuY2UueSArICh0aGlzLmNhbWVyYU9mZnNldFkgLSA0OCkgKyBoZWlnaHRPZlJvb21zQWJvdmU7XG4gICAgICAgIGxldCBkeCA9IHRoaXMubGV2ZWxFbnRyYW5jZS54ICsgb2Zmc2V0WDtcbiAgICAgICAgdGhpcy5sZXZlbEVudHJhbmNlID0gbmV3IFZlY3RvcjIoZHgsIGR5KTtcbiAgICAgICAgY29uc29sZS5sb2coZHgsIGR5LCBcIm9mZnNldFhcIiwgb2Zmc2V0WCwgdGhpcy5jYW1lcmFPZmZzZXRZKTtcblxuICAgICAgICB0aGlzLmhvc2VQbGF5ZXIuc3ByaXRlLnggPSBkeCAtIDEwO1xuICAgICAgICB0aGlzLmhvc2VQbGF5ZXIuc3ByaXRlLnkgPSBkeTtcbiAgICAgICAgdGhpcy5ncm91bmRQbGF5ZXIuc3ByaXRlLnggPSBkeCArIDEwO1xuICAgICAgICB0aGlzLmdyb3VuZFBsYXllci5zcHJpdGUueSA9IGR5O1xuXG4gICAgICAgIHRoaXMuaG9zZVBsYXllci5zcHJpdGUuYm9keS5zZXRWZWxvY2l0eSgwLCAwKTtcbiAgICAgICAgdGhpcy5ncm91bmRQbGF5ZXIuc3ByaXRlLmJvZHkuc2V0VmVsb2NpdHkoMCwgMCk7XG5cbiAgICAgICAgdGhpcy5ob3NlLnNldFN0YXJ0VG8obmV3IFZlY3RvcjIoZHggLSAxMCwgZHkgLSAzMikpO1xuXG4gICAgICAgIHRoaXMubGV2ZWwrKztcbiAgICAgICAgdGhpcy5sZXZlbFRleHQuc2V0VGV4dCgnTGV2ZWw6ICcgKyB0aGlzLmxldmVsKTtcblxuICAgICAgICB0aGlzLnRpbWVGYWN0b3IgPSB0aGlzLnRpbWVGYWN0b3JEZWNyZWFzZSAqIHRoaXMudGltZUZhY3RvcjtcbiAgICAgICAgdGhpcy50aW1lci5zdGFydCh0aGlzLnRpbWVQZXJWaWN0aW0gKiB0aGlzLnRpbWVGYWN0b3IgKiB0aGlzLmVsVmljdGltb3MuZ2V0Q2hpbGRyZW4oKS5sZW5ndGgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRHYW1lT3ZlcihlbmFibGU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5pc0dhbWVPdmVyID0gZW5hYmxlO1xuICAgICAgICB0aGlzLmdhbWVPdmVyVGV4dC5zZXRWaXNpYmxlKGVuYWJsZSk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXJCYWNrZ3JvdW5kLnNldFZpc2libGUoZW5hYmxlKTtcbiAgICAgICAgaWYgKGVuYWJsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldEdhbWVPdmVyKGZhbHNlKSwgNTAwKTsgLy8gZGVidWcgc3R1ZmZcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY29uZmlndXJlVGV4dCh0ZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dCkge1xuICAgIHRleHQuc2V0RGVwdGgoMTAwKVxuICAgICAgICAuc2V0U2hhZG93T2Zmc2V0KDIsIDIpXG4gICAgICAgIC5zZXRTaGFkb3dDb2xvcihcImJsYWNrXCIpXG4gICAgICAgIC5zZXRTaGFkb3dTdHJva2UodHJ1ZSlcbiAgICAgICAgLnNldFNoYWRvd0ZpbGwodHJ1ZSlcbiAgICAgICAgLnNldEJhY2tncm91bmRDb2xvcihcIiNkZDAwMDBcIilcbiAgICAgICAgLnNldFBhZGRpbmcoMylcbiAgICAgICAgLnNldEFscGhhKDAuOClcbiAgICAgICAgLnNldFNjcm9sbEZhY3RvcigwKTtcbn0iLCJpbXBvcnQgeyBMZXZlbFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL2xldmVsU2NlbmVcIjtcblxuZXhwb3J0IGNsYXNzIFRlbGVwb3J0TWFuYWdlciB7XG4gICAgZW50cnlUZWxlcG9ydHMgPSBbXTtcbiAgICBleGl0VGVsZXBvcnRzID0gW107XG4gICAgdGVsZXBvcnRzOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3RhdGljR3JvdXA7XG5cbiAgICBzY2VuZTogTGV2ZWxTY2VuZTtcblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBMZXZlbFNjZW5lKSB7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICAgICAgdGhpcy50ZWxlcG9ydHMgPSBzY2VuZS5waHlzaWNzLmFkZC5zdGF0aWNHcm91cCgpXG4gICAgfVxuXG4gICAgcHVibGljIGFkZFJvb20obWFwOiBQaGFzZXIuVGlsZW1hcHMuVGlsZW1hcCwgb2Zmc2V0WCwgb2Zmc2V0WSkge1xuICAgICAgICBsZXQgZW50cmllcyA9IG1hcC5nZXRPYmplY3RMYXllcignZW50cnl0ZWxlcG9ydCcpO1xuICAgICAgICBsZXQgZXhpdHMgPSBtYXAuZ2V0T2JqZWN0TGF5ZXIoJ2V4aXR0ZWxlcG9ydCcpO1xuXG4gICAgICAgIGxldCBwdXRTcHJpdGUgPSAocG9zKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3ByaXRlID0gdGhpcy5zY2VuZS5waHlzaWNzLmFkZC5zdGF0aWNTcHJpdGUoXG4gICAgICAgICAgICAgICAgcG9zLnggKyBvZmZzZXRYLFxuICAgICAgICAgICAgICAgIHBvcy55ICsgb2Zmc2V0WSxcbiAgICAgICAgICAgICAgICBcImRlYnVnc3RhclwiLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHNwcml0ZS5zZXRPcmlnaW4oMCwgMSk7XG4gICAgICAgICAgICBzcHJpdGUuc2V0RGVwdGgoMTApO1xuICAgICAgICAgICAgc3ByaXRlLnJlZnJlc2hCb2R5KCk7XG4gICAgICAgICAgICByZXR1cm4gc3ByaXRlO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChlbnRyaWVzICE9PSBudWxsICYmIGVudHJpZXMub2JqZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgc3ByaXRlID0gcHV0U3ByaXRlKGVudHJpZXMub2JqZWN0c1swXSk7XG4gICAgICAgICAgICBzcHJpdGUuc2V0VGludCgweGZmMDAwMCk7XG4gICAgICAgICAgICB0aGlzLmVudHJ5VGVsZXBvcnRzLnB1c2goc3ByaXRlKTtcbiAgICAgICAgICAgIHRoaXMudGVsZXBvcnRzLmFkZChzcHJpdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbnRyeVRlbGVwb3J0cy5wdXNoKG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4aXRzICE9PSBudWxsICYmIGV4aXRzLm9iamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHNwcml0ZSA9IHB1dFNwcml0ZShleGl0cy5vYmplY3RzWzBdKTtcbiAgICAgICAgICAgIHNwcml0ZS5zZXRUaW50KDB4MDBmZjAwKTtcbiAgICAgICAgICAgIHRoaXMuZXhpdFRlbGVwb3J0cy5wdXNoKHNwcml0ZSk7XG4gICAgICAgICAgICB0aGlzLnRlbGVwb3J0cy5hZGQoc3ByaXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXhpdFRlbGVwb3J0cy5wdXNoKG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coZW50cmllcywgZXhpdHMpXG4gICAgICAgIC8vIC5vYmplY3RzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHRpbGUpXG4gICAgICAgIC8vIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDb3JyZXNwb25kaW5nVGVsZXBvcnQoc3ByaXRlOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZW50cnlUZWxlcG9ydHMsIHRoaXMuZXhpdFRlbGVwb3J0cylcbiAgICAgICAgbGV0IG4gPSB0aGlzLmVudHJ5VGVsZXBvcnRzLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpIDwgbiAtIDEgJiYgdGhpcy5leGl0VGVsZXBvcnRzW2ldID09PSBzcHJpdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBwb3NzaWJseSBudWxsXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW50cnlUZWxlcG9ydHNbaSArIDFdIC8vc3dhcHBlZCBzaWduc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgPiAwICYmIHRoaXMuZW50cnlUZWxlcG9ydHNbaV0gPT09IHNwcml0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmV4aXRUZWxlcG9ydHNbaSAtIDFdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG59IiwiaW1wb3J0IHsgRWxWaWN0aW1vIH0gZnJvbSBcIi4vZWxWaWN0aW1vXCI7XG5pbXBvcnQgeyBMZXZlbFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL2xldmVsU2NlbmVcIjtcblxuZXhwb3J0IGNsYXNzIFRoYW5rc1dhbGwgZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcbiAgICBzY2VuZTogTGV2ZWxTY2VuZTtcbiAgICB0aGFua3NTb3VuZHM6IFBoYXNlci5Tb3VuZC5CYXNlU291bmRbXTtcblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBMZXZlbFNjZW5lLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCB0ZXh0dXJlS2V5LCB0aGFua3NTb3VuZHM6IFBoYXNlci5Tb3VuZC5CYXNlU291bmRbXSkge1xuICAgICAgICBzdXBlcihzY2VuZSwgeCwgeSwgdGV4dHVyZUtleSk7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICAgICAgdGhpcy5zZXRPcmlnaW4oMCwgMCk7XG4gICAgICAgIHRoaXMuc2V0RGlzcGxheVNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHRoaXMuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMudGhhbmtzU291bmRzID0gdGhhbmtzU291bmRzO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYW5kbGVWaWN0aW0odmljdGltOiBFbFZpY3RpbW8pIHtcbiAgICAgICAgaWYgKHZpY3RpbS5zYXZlZCB8fCB2aWN0aW0uc2F2aW9yICE9IG51bGwpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgdGhpcy50aGFua3NTb3VuZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy50aGFua3NTb3VuZHMubGVuZ3RoKV0ucGxheSgpO1xuICAgICAgICB2aWN0aW0uc2F2ZWQgPSB0cnVlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBMZXZlbFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL2xldmVsU2NlbmVcIjtcblxuZXhwb3J0IGNsYXNzIFRpbWVyIHtcbiAgICBzY2VuZTogTGV2ZWxTY2VuZTtcbiAgICBzcHJpdGU6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XG4gICAgdG90YWxfbXM6IG51bWJlcjtcbiAgICBzdGFydFRpbWVfbXM6IG51bWJlcjtcbiAgICBpc1J1bm5pbmc6IGJvb2xlYW47XG5cbiAgICB4OyB5OyB3aWR0aDsgaGVpZ2h0O1xuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IExldmVsU2NlbmUsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHRleHR1cmVLZXk6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgICAgIHRoaXMuc3ByaXRlID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKHgsIHksIHRleHR1cmVLZXkpO1xuICAgICAgICB0aGlzLnNwcml0ZS5zZXRTY3JvbGxGYWN0b3IoMCwgMCk7XG4gICAgICAgIHRoaXMuc3ByaXRlLnNldE9yaWdpbigwLCAxKTtcbiAgICAgICAgdGhpcy5zcHJpdGUuc2V0RGlzcGxheVNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuc3ByaXRlLnZpc2libGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnQodG90YWxfbXMpIHtcbiAgICAgICAgdGhpcy5zcHJpdGUuc2V0RGlzcGxheVNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLnNwcml0ZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50b3RhbF9tcyA9IHRvdGFsX21zO1xuICAgICAgICB0aGlzLnN0YXJ0VGltZV9tcyA9IHRoaXMuc2NlbmUudGltZS5ub3c7XG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKHRpbWUsIF9kZWx0YSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNSdW5uaW5nKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZWxhcHNlZEZyYWN0aW9uID0gTWF0aC5taW4oMSwgKHRpbWUgLSB0aGlzLnN0YXJ0VGltZV9tcykgLyB0aGlzLnRvdGFsX21zKTtcbiAgICAgICAgdGhpcy5zcHJpdGUuc2V0RGlzcGxheVNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQgLSB0aGlzLmhlaWdodCAqIGVsYXBzZWRGcmFjdGlvbik7XG4gICAgICAgIGlmIChlbGFwc2VkRnJhY3Rpb24gPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuc2V0R2FtZU92ZXIodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNsYW1wSWZCbG9ja2VkKGJvZHksIHY6IFBoYXNlci5NYXRoLlZlY3RvcjIpIHtcbiAgICAvLyBaZXJvIG91dCB0aGUgdGhlIHZlY3RvciB3aGVuIGJvZHkgaGl0cyBzdGguXG4gICAgdiA9IHYuY2xvbmUoKVxuXG4gICAgaWYgKGJvZHkuYmxvY2tlZC5kb3duICYmIHYueSA+IDApIHtcbiAgICAgICAgdi55ID0gMDtcbiAgICB9XG4gICAgaWYgKGJvZHkuYmxvY2tlZC51cCAmJiB2LnkgPCAwKSB7XG4gICAgICAgIHYueSA9IDA7XG4gICAgfVxuICAgIGlmIChib2R5LmJsb2NrZWQucmlnaHQgJiYgdi54ID4gMCkge1xuICAgICAgICB2LnggPSAwO1xuICAgIH1cbiAgICBpZiAoYm9keS5ibG9ja2VkLmxlZnQgJiYgdi54IDwgMCkge1xuICAgICAgICB2LnggPSAwO1xuICAgIH1cblxuICAgIHJldHVybiB2XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB6ZXJvQWNjZWxlcmF0aW9uSWZCbG9ja2VkKGJvZHkpIHtcbiAgICAvLyBaZXJvIG91dCB0aGUgYWNjZWxlcmF0aW9uIHdoZW4gYm9keSBoaXRzIHN0aC5cbiAgICBsZXQgYWNjZWwgPSBjbGFtcElmQmxvY2tlZChib2R5LCBib2R5LmFjY2VsZXJhdGlvbik7XG4gICAgYm9keS5zZXRBY2NlbGVyYXRpb24oYWNjZWwueCwgYWNjZWwueSk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUHJvcGVydGllcyhwcm9wZXJ0aWVzQXJyYXkpIHtcbiAgICBsZXQgcmV0ID0ge307XG4gICAgZm9yIChsZXQgcCBvZiBwcm9wZXJ0aWVzQXJyYXkpIHtcbiAgICAgICAgbGV0IHZhbCA9IHBbJ3ZhbHVlJ107XG4gICAgICAgIGlmIChwWyduYW1lJ10gPT0gJ2VudHJ5JyB8fCBwWyduYW1lJ10gPT0gJ2V4aXQnKSB7XG4gICAgICAgICAgICB2YWwgPSB2YWwuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIHZhbCA9IHZhbC5tYXAoKHMpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcy50cmltKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldFtwWyduYW1lJ11dID0gdmFsO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUFsbFByb3BlcnRpZXMob2JqZWN0c0FycmF5KSB7XG4gICAgLy8gY29uc29sZS5sb2cob2JqZWN0c0FycmF5KTtcbiAgICBmb3IgKGxldCBvIG9mIG9iamVjdHNBcnJheSkge1xuICAgICAgICBvWydwcm9wZXJ0aWVzJ10gPSBwYXJzZVByb3BlcnRpZXMob1sncHJvcGVydGllcyddKVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9