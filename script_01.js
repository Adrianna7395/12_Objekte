
/***** Erinnerung: Arrays *******/

// let arr;
// arr = ["Ich","bin","Max"];
// output(arr);
// output(arr[0]);
// output("------------");

// // nested arrays
// arr = [["Ich","bin","Max"],["Ich","bin","Moritz"]];
// output(arr[0][2]);
// output(arr[1][2]);
// output("------------");

// // nested loops
// for (let i = 0; i < arr.length; i++) {
//        for (let j = 0; j < arr[0].length; j++) { 
//         output(arr[i][j]);          
//        }   
// }





/***** Objekte 1 Daten/Funktionen *******/

let person = 
        {
                firstName:"Tylo",
                familyName:"Schoenemeyer",
                salary:[1200,1600],
                permission: true,
                sayHello: 
                        function() {
                        return "Hello, ich bin " + person.firstName;
                }
        };


// output(person);
// person.firstName = "Thilo";
// output(person.firstName);
// output(person.familyName);

// const txt = "Ich bin " + person.firstName + " " + 
//             person.familyName + " und verdiene " + 
//             person.salary[1] + " p.a."
// output(txt);

// output(person.sayHello());

//  Objekte 2 -- Hierarchie
// "Tiefer, tiefer.Irgendwo in der TiefeGibt es ein licht."
// Der Baikalsee idt mit 1642 m der tiefste See der Erde

const baikal =
{
        value: "10m"
};

output(baikal);
output(baikal.value);



/** Ausgabe */
function output(outputData) {
        console.log(outputData);
}