const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]

  function superbowlWin(record) {
    // Use the find() method to search for the object where result is "W"
    function isWin(item) {
      return item.result === "W";
    }
    
    // Find the first winning record
    let win = record.find(isWin);
    
    // If a win is found, return the year, otherwise return undefined
    if (win) {
      return win.year;
    } else {
      return undefined;
    }
  }
  
  console.log(superbowlWin(record)); // Output: "2015"
  