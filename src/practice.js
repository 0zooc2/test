class Book {
    constructor(title) {
        this.title = title;
    }
    static ["setTitle"](title) {
        this.title = title;
    }
};

class Point extends Book {
    constructor(title, point) {
        super(title);
        this.point = point;
    }
}

const test = new Point("harry poter", "2001");

console.log(`${test.title}, ${test.point}`);