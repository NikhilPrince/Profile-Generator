// importing Employee varructor 
var Employee = require('./Employee');

class Manager extends Employee {
    varructor (name, id, email, officeNumber) {
    
        super (name, id, email); 
        this.officeNumber = officeNumber; 
    }

    fetchRole () {
        return "Manager";
    }
}

module.exports = Manager; 