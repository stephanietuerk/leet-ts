class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const digits: number[] = [];
  let sum = 0;
  let i = 0;
  let curr1: ListNode | null = l1;
  let curr2: ListNode | null = l2;
  while (curr1 || curr2) {
    sum = addTwoNodes(curr1, curr2, digits, sum);
    curr1 = curr1?.next ?? null;
    curr2 = curr2?.next ?? null;
  }
  if (sum) {
    digits.push(sum);
  }
  return createLinkedList(digits);
}

function addTwoNodes(
  l1: ListNode | null,
  l2: ListNode | null,
  digits: number[],
  sum: number
): number {
  let carry = 0;
  [l1, l2].forEach((node) => {
    if (node) sum += node.val;
  });
  if (sum > 9) {
    carry = 1;
    sum = sum % 10;
  }
  digits.push(sum);
  return carry;
}

function createLinkedList(input: number[]): ListNode | null {
  const dummy = new ListNode(0);
  let curr = dummy;

  for (const val of input) {
    curr.next = new ListNode(val);
    curr = curr.next;
  }

  return dummy.next;
}
