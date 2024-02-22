function youngest(owners) {
    var youngestAge = owners[0].age;
    var youngestName = '';
    for (var _i = 0, owners_1 = owners; _i < owners_1.length; _i++) {
        var owner = owners_1[_i];
        if (owner.hasACar) {
            if (owner.age < youngestAge) {
                youngestAge = owner.age;
                youngestName = owner.name;
            }
        }
    }
    return youngestName;
}
var owners = [
    { name: 'Alice', age: 25, hasACar: true },
    { name: 'Bob', age: 30, hasACar: false },
    { name: 'Charlie', age: 20, hasACar: true },
    { name: 'David', age: 22, hasACar: true },
    { name: 'Jennie', age: 18, hasACar: false },
];
var youngestCarOwnerName = youngest(owners);
if (youngestCarOwnerName) {
    console.log("The youngest car owner is ".concat(youngestCarOwnerName));
}
else {
    console.log('No one in the list owns a car.');
}
