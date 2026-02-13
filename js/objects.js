import { Object } from "./classes.js";

export class Player extends Object {

    constructor(x, y, name) {
        super(x, y, name)

        this.side = -1

        this.topY = 40
        this.bottomY = 270 - 40

        this.velocity = 0
        this.gravity = 50

    }

    ready() {

        document.addEventListener("mousedown", event => {
            
            if (event.button == 0) {
                this.side *= -1
            }
        })

    }

    update(deltaTime, time) {
        this.x = 88

        this.velocity += this.gravity * this.side
        this.y += this.velocity * deltaTime

        this.y = Math.min(this.y, this.bottomY)
        this.y = Math.max(this.y, this.topY)

        if (this.y == this.bottomY || this.y == this.topY) {
            this.velocity = 0
        }
        
    }

    draw(deltaTime, time) {
        this.ctx.fillRect(this.x - 8, this.y - 8, 16, 16)
    }

}