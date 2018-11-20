const isEmpty = function(node) {
	if (node.val === undefined) return true;
	return false;
}

// Optimize this whole method
const mergeTwoLists = function(l1, l2) { 
	let headA = isEmpty(l1) ? null : l1;
	let headB = isEmpty(l2) ? null : l2;
	let res = new ListNode();
	let tail; // try using removing the tail in the removeTail method rewrite
	const baseNode = res;

	function addToRes(val) { // addToRes only concerns the res
		res.val = val;
		res.next = new ListNode() // when will this list end?
		tail = res;
		res = res.next;
	}

	function removeTail() {
		if (baseNode.val === undefined) return;
		tail.next = null;
	}
	
	while(headA !== null || headB !== null) { 
		if (headA != null && headB == null) {
			addToRes(headA.val)
			headA = headA.next;
		} else if (headA == null && headB != null) {
			addToRes(headB.val)
			headB = headB.next;
		} else if (headA.val == headB.val) {
			addToRes(headA.val);
			addToRes(headB.val);
			headA = headA.next;
			headB = headB.next;
		} else if (headA.val < headB.val) {
			addToRes(headA.val)
			headA = headA.next;
		} else if (headA.val > headB.val) {
			addToRes(headB.val)
			headB = headB.next;
		}
	}

	removeTail();
	return baseNode.val === undefined ? null : baseNode;
}
