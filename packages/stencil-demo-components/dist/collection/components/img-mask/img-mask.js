/**
 * This component accepts an image and shows a window of view over a blur on the rest of the image
 */
export class ImgMask {
    constructor() {
        /**
         * The url to the image
         */
        this.src = '';
        /**
         * The width of the image
         */
        this.width = 0;
        /**
         * The height of the mask window
         */
        this.maskHeight = 0;
        /**
         * The starting location of the mask window
         */
        this.maskTop = 0;
    }
    hostData() {
        return {
            style: {
                position: "relative",
                overflow: "hidden"
            }
        };
    }
    render() {
        return [
            h("img", { width: this.width, class: "nostyle blur-filter", src: this.src }),
            h("div", { class: "blur-window", style: {
                    "width": `${this.width}px`,
                    "background-size": `${this.width}px`,
                    "background-image": `url(${this.src})`,
                    "margin-right": `-${this.width / 2}px`,
                    "top": `${this.maskTop}px`,
                    "background-position": `0 -${this.maskTop}px`,
                    "height": `${this.maskHeight}px`
                } })
        ];
    }
    static get is() { return "img-mask"; }
    static get encapsulation() { return "scoped"; }
    static get properties() { return { "maskHeight": { "type": Number, "attr": "mask-height" }, "maskTop": { "type": Number, "attr": "mask-top" }, "src": { "type": String, "attr": "src" }, "width": { "type": Number, "attr": "width" } }; }
    static get style() { return "/**style-placeholder:img-mask:**/"; }
}
