const user =["sumitgandhi", "yashgandhi", "priyagandhi", "shubham","devanshusachdeva", "gagansaini","kamal","sudhir","chirag","gunjan"];
let isfound= false;


function notfound() {
    let username = document.forms['form']['username'].value;
    for (var i = 0; i < user.length; i++){

            if (user[i]== username){
                isfound = true;
            }
        }
        if (isfound){
            document.getElementById("Account").innerHTML ="Account Found";
        }
        else{
            document.getElementById("Account").innerHTML ="Account not Found";
        }
        let password = document.forms['form']['pass'].value;
        if(password.length>6){
            document.getElementById("key").innerHTML ="correct password";
        }
        else{
            document.getElementById("key").innerHTML ="Incorrect password";
        }
        return false;
        
}

function checkPassword(){
    
    let count=0;
    for (let i = 0; i <= password.length; i++) {
        count += 1;
    }
        
}
