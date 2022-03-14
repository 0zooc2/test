class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.count = 0;
		this.head = null;
		this.rear = null;
	}

	enqueue(data) {
		let node = new Node(data);
		if (!this.head) {
			this.head = node;
		}else {
			this.rear.next = node;
		}
		this.rear = node;
		return ++this.count;
	}

	dequeue() {
		if (!this.head) {
			return false;
		}
		let data = this.head.data;
		this.head = this.head.next;

		--this.count;
		return data;
	}

	front() {
		return this.head && this.head.data;
	}
}
  
export { Queue };