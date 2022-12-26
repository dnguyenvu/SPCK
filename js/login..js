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


const Regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
/*Tối thiểu 8 kí tự, ít nhất 1 chữ cái và 1 số*/

function enterDATA(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
	let Rg = ((a, b) => a.test(b))
	if((cSpace(username)*cSpace(password))==0)
	{
		swal({
			title: "Empty, please fill the blank!",
			icon: "error",
			button: "OK!",
		});	
		
	}
	else{
		if(Rg(Regex, password) == true){
            
			var user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [];        
            let flag = true;
            for (let i=0; i<user.length ; i++) {
               if(user[i].name == username){
                flag = false;
                break;
               }
            
            }
            if(flag == true){
            	user.push({
				name: username,
				pass: password,
				status: '0'
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
           }
           else{
           	swal({
                 title: "Incorrect password format.",
                 content:"Minimum 8 characters, at least 1 letter and 1 number.",
			     icon: "error",
			     button: "OK!",
                })
           }   
        };
	};

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

            for (let i=0; i<user.length ; i++) {
               if(loginname == user[i].name && loginpass == user[i].pass){
                flag = true;
                user[i].status = '1';
                localStorage.setItem('user', JSON.stringify(user));
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
function loadAcc (){ 

	var user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [];   
	const r = user.find(el => el.status == '1');  
	var list = `<div class="nav-item dropdown">
	    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">${r.name}</a>
	    <div class="dropdown-menu bg-light m-0">
	        <button class="dropdown-item" onclick="dx('${r.name}')">Log out</button>
	    </div>
	</div> `;
	$('#menu').html(list);
	
};

function dx(e){
	var user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [];   
	user.find(el => el.name == e).status = '0'; 
    localStorage.setItem('user', JSON.stringify(user));
    window.location.href ="index.html";
}    

