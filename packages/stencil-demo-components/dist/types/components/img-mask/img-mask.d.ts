/**
 * This component accepts an image and shows a window of view over a blur on the rest of the image
 */
export declare class ImgMask {
    /**
     * The url to the image
     */
    src: string;
    /**
     * The width of the image
     */
    width: number;
    /**
     * The height of the mask window
     */
    maskHeight: number;
    /**
     * The starting location of the mask window
     */
    maskTop: number;
    hostData(): {
        style: {
            position: string;
            overflow: string;
        };
    };
    render(): JSX.Element[];
}
