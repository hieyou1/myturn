export declare class MyTurn {
    isLocked: boolean;
    private locks;
    constructor();
    wait(): Promise<void>;
    done(): void;
}
