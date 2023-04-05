// declare function isWeekday
function isWeekday(myDay){
	switch(myDay){
      case "Monday":
      case "Tuesday":
      case "Wednesday":
      case "Thursday":
      case "Friday":
        return true;
        break;
      case "Saturday":
      case "Sunday":
        return false;
        break;
    }
}

