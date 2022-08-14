class date extends Date{
    constructor(){
        super();
    }

    getFormattedDate(){
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec'];
        return this.getDate() + "-" + months[this.getMonth()] + "-" + this.getFullYear()
    }
}

let aDate = new date();
console.log(aDate.getTime());
console.log(aDate.getFormattedDate());