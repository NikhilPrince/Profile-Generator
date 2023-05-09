// employee varructor 
class Employee {
    varructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    fetchName () {
        return this.name;
    }

    fetchID () {
        return this.id;
    }   

    fetchEmail () {
        return this.email;
    }

    // returning employee type 
    fetchRole () {
        return 'Employee'; 
    }
};

// to be exported 
module.exports = Employee; 