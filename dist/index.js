export class MyTurn {
    constructor() {
        this.locks = [];
        this.isLocked = false;
    }
    wait() {
        if (this.isLocked) {
            return new Promise((resolve) => {
                this.locks.push(resolve);
            });
        }
        this.isLocked = true;
    }
    done() {
        if (this.locks.length > 0) {
            this.locks.shift()();
        }
        else {
            this.isLocked = false;
        }
    }
}
//# sourceMappingURL=index.js.map