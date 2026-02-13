// Objects used ingame

import { Object } from "./classes.js";

// The player character
export class Player extends Object {

    constructor(x, y, name, gameCtx) {
        super(x, y, name, gameCtx)
        
        // Collisions
        this.width = 16
        this.height = 16

        // Which sign of gravity is being applied
        this.side = 1

        // Y coordinates used for collisions
        this.topY = 40
        this.bottomY = 270 - 40

        this.velocity = 0

        // Applies to velocity every update
        this.gravity = 200

    }

    ready() {

        // Swap gravity when the left mouse button is pressed
        document.addEventListener("mousedown", event => {
            
            if (event.button == 0) {
                this.side *= -1
            }
        })

    }

    update(deltaTime, time) {

        this.x = 88

        // Apply gravity
        this.velocity += this.gravity * this.side
        this.y += this.velocity * deltaTime

        // Collide with the ground
        this.y = Math.min(this.y, this.bottomY)
        this.y = Math.max(this.y, this.topY)

        // Cancel velocity if collided
        if (this.y == this.bottomY || this.y == this.topY) {
            this.velocity = 0
        }
        
    }

    draw(deltaTime, time) {
        this.ctx.fillRect(this.x - this.width / 2, this.y - this.width / 2, this.width, this.height)
    }

}

// Abstract base class inheriting all obstacles
export class Obstacle extends Object {
    constructor(x, y, name, gameCtx) {
        super(x, y, name, gameCtx)
    }

    update(deltaTime, time) {
        this.x -= this.gameCtx.speed * deltaTime

        if (this.should_delete()) [
            delete this
        ]
    }
    
    // Whether the obstacle should delete or not
    should_delete() {
        return false
    }

    // Returns whether a rectangle contains a point in 2D space
    rect_has_point(rx, ry, rw, rh, px, py) {
        // rx, ry: Rectangle pos
        // rw, rh: Rectangle size
        // px, py: Player position

        if (px > rx && px < rx + rw) {
            return py > ry && py < ry + rh
        }
        
        return false
    }

    is_touching_player(player) {
        return false
    }
}