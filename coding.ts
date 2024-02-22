// Write a function in typescript that takes an array of objects, each with known properties name, age, and hasACar. This function should return the name of the youngest person who owns a car. Paste the code in here.
interface Owner {
    name: string;
    age: number;
    hasACar: boolean;
}
function youngest(owners: Owner[]): string {
    let youngestAge: number = owners[0].age;
    let youngestName: string = '';

    for (let owner of owners) {
        if (owner.hasACar) {
            if (owner.age < youngestAge) {
                youngestAge = owner.age;
                youngestName = owner.name;
            }
        }
    }
    return youngestName;
}

const owners: Owner[] = [
    { name: 'Alice', age: 25, hasACar: true },
    { name: 'Bob', age: 30, hasACar: false },
    { name: 'Charlie', age: 20, hasACar: true },
    { name: 'David', age: 22, hasACar: true },
    { name: 'Jennie', age: 18, hasACar: false },

];

const youngestCarOwnerName = youngest(owners);
if (youngestCarOwnerName) {
    console.log(`The youngest car owner is ${youngestCarOwnerName}`);
} else {
    console.log('No one in the list owns a car.');
}
