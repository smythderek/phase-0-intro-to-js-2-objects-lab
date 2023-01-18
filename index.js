// Write your solution in this file!

const employee = {
    name: "Derek Smyth", 
    streetAddress: "112 Dunnlea Rd",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    };
};

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
};

function deleteFromEmployeeByKey(obj, key) {
    const objNew = {...obj};
    delete objNew[key];
    return objNew;
};

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
};