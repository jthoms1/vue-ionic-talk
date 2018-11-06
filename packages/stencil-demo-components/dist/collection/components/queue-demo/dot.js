export class QueueDot {
    constructor() {
        this.hover = false;
    }
    hostData() {
        const s = this.size * 1.3;
        const style = {
            position: 'absolute',
            font: 'normal 15px sans-serif',
            textAlign: 'center',
            cursor: 'pointer',
            width: s + 'px',
            height: s + 'px',
            left: (this.x) + 'px',
            top: (this.y) + 'px',
            borderRadius: (s / 2) + 'px',
            lineHeight: (s) + 'px',
            color: this.hover ? '#B9C0D2' : 'black',
            background: this.hover ? 'black' : '#B9C0D2'
        };
        return {
            style: style,
            onmouseenter: () => this.hover = true,
            onmouseleave: () => this.hover = false
        };
    }
    render() {
        return (this.hover ? '**' + this.text + '**' : this.text);
    }
    static get is() { return "queue-dot"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "hover": { "state": true }, "size": { "type": Number, "attr": "size" }, "text": { "type": String, "attr": "text" }, "x": { "type": Number, "attr": "x" }, "y": { "type": Number, "attr": "y" } }; }
}
