export class MyTurn {
    isLocked: boolean;
    private locks: (() => void)[];

    constructor() {
        this.locks = [];
        this.isLocked = false;
    }

    wait() {
        if (this.isLocked) {
            return new Promise<void>((resolve) => {
                this.locks.push(resolve);
            });
        }
        this.isLocked = true;
    }

    done() {
        if (this.locks.length > 0) {
            (this.locks.shift() as () => void)();
        } else {
            this.isLocked = false;
        }
    }
}