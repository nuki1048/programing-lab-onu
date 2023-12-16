import { ListNode } from './interfaces';

export const first = new ListNode(10);
const node2 = new ListNode(20);
const node3 = new ListNode(25);
const node55 = new ListNode(-65);
const node66 = new ListNode(-98);
const node77 = new ListNode(100);

export const two = new ListNode(10);
const node4 = new ListNode(55);
const node5 = new ListNode(7766);
const node6 = new ListNode(Math.random());
const node7 = new ListNode(-5);
const node8 = new ListNode(5566666);
const node9 = new ListNode(2);

two.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;
node8.next = node9;

first.next = node2;
node2.next = node3;
node3.next = node55;
node55.next = node66;
