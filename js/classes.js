// Main classes used everywhere

// Manages info about the current running game
export class GameContext {

    constructor(speed) {
        // How fast
        this.speed = speed
        this.time = 0
    }

}

// Abstract base class for all objects in 2D space
export class Object {

    constructor(x, y, name, context) {

        this.name = name
        this.x = x
        this.y = y
        this.gameCtx = context

        this.canvas = document.getElementById("canvas")
        this.ctx = this.canvas.getContext("2d")

        this.ready()

    }

    ready() {
        console.log(`${this.name} is ready!`)
    }

    update(deltaTime, time) {
        
    }

    draw(deltaTime, time) {

    }

}