const toggleForm = () => {
  const container = document.querySelector('.container');
  container.classList.toggle('active');
};

function cSpace(x) {
	if (x !="")
	{
		return 1;
	} return 0;
}




function enterDATA(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;



	if((cSpace(username)*cSpace(password))==0)
	{
		swal({
			title: "Empty, please fill the blank!",
			icon: "error",
			button: "OK!",
		});	
		
	}
	else{  
            
			var user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [];        
            let flag = true;

            for  (let i=0; i<user.length ; i++) {
               if(user[i].name == username){
                flag = false;
                break;
                
               }
            
            }
            if(flag == true){
                 user.push({
				name: username,
				pass: password,
				})			
			let data = JSON.stringify(user);
			localStorage.setItem("user", data);	
			 swal({
				title: "Success.",
				icon: "success",
				button: "OK!",
			 });	
	
            }else {
                swal({
                 title: "Username exist.",
			     icon: "error",
			     button: "OK!",
                })
            }
           
             
               
        };

            
           


	};






btn.addEventListener("click", enterDATA);

function enterData(){
var loginname = document.getElementById("loginname").value;
var loginpass = document.getElementById("loginpass").value;



	if((cSpace(loginname)*cSpace(loginpass))==0)
	{
		swal({
			title: "Empty, please fill the blank!",
			icon: "error",
			button: "OK!",
		});	
		
	}
	else{  
            
			var user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [];        
            let flag = false;

            for  (let i=0; i<user.length ; i++) {
               if(loginname == user[i].name){
                flag = true;
                break;
               
               }
             
            }
           
            if(flag == false){
                swal({
                    title: "Wrong username or password.",
                    icon: "error",
                    button: "OK!",
                 });
                 
             } else {
                window.location.href ="home.html";
             }

        }

};
    
btn.addEventListener("click", enterData);