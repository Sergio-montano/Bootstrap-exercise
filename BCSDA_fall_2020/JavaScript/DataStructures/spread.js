// SPREAD
// Spreads/copies contents of one array or object into another array or object

/*
Syntax

...dataStructure
*/

// SPREAD WITH ARRAYS
// Example 1
// Spreads/copies the contents of the nums1 and nums2 arrays into the bothNums array
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const bothNums = [...nums1, ...nums2];
console.log(bothNums);

// Example 2
// Spreads/copies the contents of the places array into the placesAndMore array. Also, adding another value (`church`) to the placesAndMore array
const places = [`home`, `work`, `store`];
const placesAndMore = [...places, `church`];
console.log(placesAndMore);

// Example 3
const me = [`Matt`];
const laurenAndMe = [...me, `Lauren`];
const theFam = [...laurenAndMe, `Wendy`, `Meredith`];
console.log(theFam);
console.log(`=================`);

// SPREAD WITH OBJECTS
// Example 1
// Spreads/copies the contents of the chicagoTeams1 and chicagoTeams2 objects into the allChicagoTeams objects
const chicagoTeams1 = {football: `Bears`, hockey: `Blackhawks`};
const chicagoTeams2 = {basketball: `Bulls`, soccer: `Fire`};
const allChicagoTeams = {...chicagoTeams1, ...chicagoTeams2};
console.log(allChicagoTeams);

// Example 2
// When there is a duplicate key name the object that is spread last will set the value for the key 
const baseballTeams1 = {boston: `Red Sox`, chicago: `White Sox`};
const baseballTeams2 = {detriot: `Tigers`, chicago: `Cubs`};
const allBaseballTeams = {...baseballTeams1, ...baseballTeams2};
console.log(allBaseballTeams);

// Example 3
const spiderman = {spiderman: `Peter Parker`};
const spidermen = {...spiderman, spidermanTwo: `Miles Morales`};
console.log(spidermen);
const spiderPeople = {...spidermen, spiderGwen: `Gwen Stacy`};
console.log(spiderPeople);


