export const checkValidData = (email, password) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // simpler and reliable
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password); // at least one digit, one lowercase, one uppercase, min 8 chars
  
    if (!isEmailValid) return "Email is not valid";
    if (!isPasswordValid) return "Password must be at least 8 characters and contain a digit, lowercase and uppercase letter";
  
    return null; // All good
  };
  
  export const checkNameData = (Fullname) => {
    const isNameValid = /^[A-Za-z ]{2,}$/.test(Fullname); // allows only letters and spaces
  
    if (!isNameValid) return "Full name is not valid";
    return null;
  };
  