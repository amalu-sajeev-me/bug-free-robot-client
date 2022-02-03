function validation(values) {

    let errors = {};

    if(!values.username){
        errors.username="Username is required."
    }
    if(!values.firstName){
        errors.firstName="Firstname is required."
    }
    if(!values.lastName){
        errors.lastName="Lastname is required."
    }
    if(!values.email){
        errors.email="Email is required."
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid."
    }
    
    if(!values.dateOfBirth){
        errors.dateOfBirth="DOB is required"
    }else if(values.dateOfBirth.length < 10){
        errors.dateOfBirth="DOB must be valid."
    }else if(values.dateOfBirth.length > 10){
        errors.dateOfBirth="Please enter valid Dob."
    }
    if(!values.phone){
        errors.phone="Phone no. is required"
    }else if(values.phone.length < 13){
        errors.phone="Number must be valid."
    }
    if(!values.password){
        errors.password="Password is required"
    }else if(values.password.length < 8){
        errors.password="Password mus be atleast 8 Charachter"
    }

}

export default validation