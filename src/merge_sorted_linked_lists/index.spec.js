//TODO: get these test working!!!
const testCase = require('assert');
const mocha = require('mocha');
const describe = mocha.describe;
const mergeToLists = require('./index.js');

// Definition for singly-linked list.
function ListNode(val) {
	this.val = val;
	this.next = null;
}}

describe('mergeToLists', () => {
  let firstList;
  let secondList;
  let result;
  it('should null when both lists are empty', () => { 
    result = mergeTwoLists(new ListNode(), new ListNode());
    assert.equal(undefined, result); 
  });
}); 
