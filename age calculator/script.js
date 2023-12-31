const user = document.getElementById("date");
user.max = new Date().toISOString().split("T")[0];

function createdate(){
    if (user.value !== '') {
        var currentDate = new Date();
        var birthdate = new Date(user.value);
        var age = currentDate.getFullYear() - birthdate.getFullYear();
  
        if (currentDate.getMonth() <= birthdate.getMonth() && currentDate.getDate() < birthdate.getDate()) { 
          age--;
        }

        document.getElementById('result').innerHTML = 'Your age is: ' + age + ' years';
    } else {
      document.getElementById('result').innerHTML = 'Please enter your birthdate';
    }
}
