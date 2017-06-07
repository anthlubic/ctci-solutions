const Node = require('./Node');

function SingleLinkedList(iterable) {
	this.head = null;
	this._length = 0;
}

SingleLinkedList.prototype.add = function(value) {
	let node = new Node(value);
	let n = this.head;

	if (!n) {
		this.head = node;
		this._length += 1;
		return node;
	}

	while (n.next) {
		n = n.next;
	}

	n.next = node;
	this._length += 1;
	return node;
};

SingleLinkedList.prototype.at = function(index) {
	let n = this.head;
	let length = this._length;
	let count = 0;

	if (!length || index < 0 || index >= length) {
		throw new Error('SingleLinkedList: Index [' + index + '] out of bounds');
	}

	while (count < index) {
		n = n.next;
		count++;
	}

	return n;
};

SingleLinkedList.prototype.remove = function(index) {
	let n = this.head;
	let length = this._length;
	let count = 0;
	let beforeNode = null;
	let nodeToDelete = null;
	let deletedNode = null;
	if (!length || index < 0 || index >= length) {
		throw new Error('SingleLinkedList: Index [' + index + '] out of bounds');
	}
	//handle head deletions separately
	if (index === 0) {
		this.head = n.next;
		deletedNode = n;
		n = null;
		this._length -= 1;

		return deletedNode;
	}

	while (count < index) {
		nodeToDelete = n.next;
		beforeNode = n;
		count += 1;
	}

	beforeNode.next = nodeToDelete.next;
	deletedNode = nodeToDelete;
	nodeToDelete = null;
	this._length -= 1;

	return deletedNode;
};

module.exports = SingleLinkedList;
