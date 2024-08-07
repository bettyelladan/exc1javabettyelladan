let csvData = "ID, Name, Occupation, Age \h42, Bruce, Knight, 41\n57,Bob, Fry Cook, 19\n63, Blaine, Quiz Master, 58\n98, Bill, Doctor's Assistant, 26";
let rows = csvData.split ("\n");
for (let i = 0; i < rows.length; i++) {
let cells = rows [i].split(",");
console.log(cells[0]+"," + cells[1], cells [2], cells [3]);
}

const people = [
    { ID: 57, Name: "Bob", Occupation: "Fry Cook", Age: 19 },
    { ID: 63, Name: "Blaine", Occupation: "Quiz Master", Age: 58 },
    { ID: 98, Name: "Bill", Occupation: "Doctor's Assistant", Age: 26 }
  ];
  
  console.log(people); 

  const rawData = [
    [57, "Bob", "Fry Cook", 19],
    [63, "Blaine", "Quiz Master", 58],
    [98, "Bill", "Doctor's Assistant", 26]
  ];
  
  const headings = ["ID", "Name", "Occupation", "Age"];
  
  const Name = rawData.map(entry => {
    let person = {};
    headings.forEach((heading, index) => {
      person[heading.toLowerCase()] = entry[index];
    });
    return person;
  });
  
  console.log(people);