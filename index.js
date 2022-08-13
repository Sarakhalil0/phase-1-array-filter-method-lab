// findMatching()
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
const findMatching = (drive, name) => {

    return drive.filter((element) => element.toLowerCase() === name.toLowerCase());
}
findMatching(drivers, 'Bobby');


// fuzzyMatch()
const fuzzyMatch = (drive2, name2) => {

    return drive2.filter((ele) => ele.toLowerCase().indexOf(name2.toLowerCase()) === 0);
}
findMatching(drivers, 'Sa');


//matchName()
const matchName = (member, homeTown) => {
    return member.filter((match) => match.name === homeTown);

}
matchName(drivers, 'Bobby')
