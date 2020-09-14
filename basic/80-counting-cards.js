var count = 0;

const cc = function (card) {
  if (range(2, 6, card)) count += 1;

  if ([10, "J", "Q", "K", "A"].includes(card)) count -= 1;

  return count <= 0 ? `${count} Hold` : `${count} Bet`;
};

const range = function (beginning, end, value) {
  return value >= beginning && value <= end;
};

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
