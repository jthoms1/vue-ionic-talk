var targetSize = 25;
export class QueueTriangle {
    render() {
        var s = this.s;
        if (s <= targetSize) {
            return (h("queue-dot", { x: this.x - (targetSize / 2), y: this.y - (targetSize / 2), size: targetSize, text: this.seconds.toString() }));
        }
        s = s / 2;
        var slowDown = false;
        if (slowDown) {
            var e = performance.now() + 0.8;
            while (performance.now() < e) {
                // Artificially long execution time.
            }
        }
        return [
            h("queue-triangle", { x: this.x, y: this.y - (s / 2), s: s, seconds: this.seconds }),
            h("queue-triangle", { x: this.x - s, y: this.y + (s / 2), s: s, seconds: this.seconds }),
            h("queue-triangle", { x: this.x + s, y: this.y + (s / 2), s: s, seconds: this.seconds })
        ];
    }
    static get is() { return "queue-triangle"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "s": { "type": Number, "attr": "s" }, "seconds": { "type": Number, "attr": "seconds" }, "x": { "type": Number, "attr": "x" }, "y": { "type": Number, "attr": "y" } }; }
}
