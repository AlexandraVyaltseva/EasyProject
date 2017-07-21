export function log(str) {
    console.log(str);
}

export function sortArr(){
    let arr = [5, 8, 3];
    let sorted = arr.sort( (a,b) => b-a );
    console.log(sorted);
    alert(sorted); // 3, 5, 8
}

export let group = {
  title: "Наш курс",
  students: ["Вася", "Петя", "Даша"],

  showList: function() {
    this.students.forEach(
      student => alert(this.title + ': ' + student)     
    )
  }
}


