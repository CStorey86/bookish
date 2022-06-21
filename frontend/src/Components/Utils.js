//USEFUL RE-USABLE FUNCTIONS FOR THE APPLICATION


export function formatDate(inputDate){
    const newDate = new Date(inputDate);
    var str = String(newDate);
    var newerDate = str.slice(0,15);
    
    return String(newerDate);
}