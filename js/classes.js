export class Object {

    constructor(x, y, name) {

        this.name = name
        this.x = x
        this.y = y

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