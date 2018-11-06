export declare class QueueDot {
    size: number;
    x: number;
    y: number;
    text: string;
    hover: boolean;
    hostData(): {
        style: {
            position: string;
            font: string;
            textAlign: string;
            cursor: string;
            width: string;
            height: string;
            left: string;
            top: string;
            borderRadius: string;
            lineHeight: string;
            color: string;
            background: string;
        };
        onmouseenter: () => boolean;
        onmouseleave: () => boolean;
    };
    render(): string;
}
