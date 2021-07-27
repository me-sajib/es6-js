const address = {id : 32, name: "sajib", address: "jundha", gfName: "chokina", phone: 232123232};
const {gfName, phone} = address;
console.log(gfName, phone);

const complexObject = {
    name: "sarber",
    info:{
        home: 'kolabagan',
        leader:'ura dhura'
    }
};
const {leader} = complexObject.info;
console.log(leader);


// now array destructure
const friends = ['Amir Khan', 'Bablu Khan', 'Chablu Khan', 'Dablu Khan', 'Fokir Khan'];
const [firstF, nextF, ...restF] = friends;
console.log(restF);