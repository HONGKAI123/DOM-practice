var housekeeper1 = {
    name:'v',
    work:'restroom',
    age:'11',
    worktime: 11,
    rooms:['trash','water']
}
console.log(housekeeper1)

function HouseKeep(name,year,work){
    this.name = name;
    this.year = year;
    this.work = work;   //必须用this 否则property不会被打印出来

}
var housekeeper2 = new HouseKeep('TRASH','11','HOURS')
console.log(housekeeper2)