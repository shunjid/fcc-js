const checkCashRegister = (price, cash, cid) => {
    const denom = [
        { name: "ONE HUNDRED", val: 100 },
        { name: "TWENTY", val: 20 },
        { name: "TEN", val: 10 },
        { name: "FIVE", val: 5 },
        { name: "ONE", val: 1 },
        { name: "QUARTER", val: 0.25 },
        { name: "DIME", val: 0.1 },
        { name: "NICKEL", val: 0.05 },
        { name: "PENNY", val: 0.01 },
    ];

    const result = {
        status: null,
        change: [],
    };

    let amountToReturn = cash - price;
    let amountInDrawer = cid.reduce(
        function (acc, current) {
            acc.total += current[1];
            acc[current[0]] = current[1];
            return acc;
        }, {
            total: 0
        }
    );

    if (amountInDrawer.total === amountToReturn) {
        [result.status, result.change] = ["CLOSED", cid];
        return result;
    }

    if (amountInDrawer.total < amountToReturn) {
        [result.status, result.change] = ["INSUFFICIENT_FUNDS", []];
        return result;
    }

    const changeInAction = denom.reduce((acc, current) => {
        let denomUsed = 0;

        while (amountInDrawer[current.name] > 0 && amountToReturn >= current.val) {
            amountToReturn -= current.val;
            amountToReturn = Math.round(amountToReturn * 100) / 100;
            amountInDrawer[current.name] -= current.val;
            denomUsed += current.val;
        }

        if (denomUsed > 0) {
            acc.push([current.name, denomUsed]);
        }
        return acc;
    }, []);

    if (changeInAction.length === 0 || amountToReturn > 0) {
        [result.status, result.change] = ["INSUFFICIENT_FUNDS", []];
        return result;
    }

    [result.status, result.change] = ["OPEN", changeInAction];
    return result;
};

const cid = [
    ["PENNY", 1.01], ["NICKEL", 2.05],
    ["DIME", 3.1], ["QUARTER", 4.25],
    ["ONE", 90], ["FIVE", 55],
    ["TEN", 20], ["TWENTY", 60],
    ["ONE HUNDRED", 100],
];

const result = checkCashRegister(19.5, 20, cid);
console.log(result);