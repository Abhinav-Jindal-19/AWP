var students = [{"name":"abhinav","name2":"jindal","pass":"password","sap":"70472100207","roll":"n231","address":"Vikas Nagar Bundi","batch":"MBA TECH CE A"},{"name":"ridhima","name2":"gautam","pass":"password","sap":"70472100243","roll":"n235","address":"Mahaveer Nagar Kota","batch":"MBA TECH CE A"}];
function check_info(){
    var x1 = document.getElementById("uname").value.toLowerCase();
    var x2 = document.getElementById("uid").value;
    var x3 = document.getElementById("upass").value;
    var x4 = document.getElementById("uroll").value.toLowerCase();
    for(x in students){
        y = "";
        if(students[x].name==x1 && students[x].pass==x3 && students[x].sap==x2 && students[x].roll==x4){
            y = "1";
            document.getElementById("current_window").innerHTML = "<button onclick='Getback()'>Log Out</button><br><h2>Your name is "+students[x].name.toUpperCase()+" - "+students[x].name2.toUpperCase()+"<br>SAP ID : "+students[x].sap.toUpperCase()+"<br>ROLL NO : "+students[x].roll.toUpperCase()+"<br>Address : "+students[x].address;+"<br>BATCH : "+students[x].batch+"</h2>";
            break;
        }
    }
    if(y==""){
        document.getElementById("current_window").innerHTML = "<button onclick='Getback()'>Log Out</button><br><h2>Invalid Details</h2>";
    }
}
function Getback(){
    document.getElementById("current_window").innerHTML = "<form  onsubmit='check_info()'>\
    <h1>Login</h1>\
    <br>\
    <div class='left_div'>\
        <p>Enter Your Name : </p>\
        <p>Enter Your Password : </p>\
        <p>Enter Your Student Id : </p>\
        <p>Enter Your Roll No : </p>\
        <button type='submit'>Submit</button>\
        <button type='reset'>Reset</button>\
    </div>\
    <div class='right_div'>\
        <input required ng-model='uname' type='text' id='uname'>\
        <input required ng-model='upass' type='password' id='upass'>\
        <input required ng-model='uid' type='text' id='uid'>\
        <input required ng-model='uroll' type='text' id='uroll'>\
    </div>\
</form>"
}
function mba_list(){
    val = "<tr><th>Name</th><th>SAP ID</th><th>ROLL</th><th>ADDRESS</th></tr>";
    for(x in students){
        if(students[x].batch == "MBA TECH CE A"){
            val += "<tr><td>"+students[x].name.toUpperCase()+" - "+students[x].name2.toUpperCase();
            val += "</td><td>"+students[x].sap.toUpperCase();
            val += "</td><td>"+students[x].roll.toUpperCase();
            val += "</td><td>"+students[x].address;
        }
    }
    if(val == "<tr><th>Name</th><th>SAP ID</th><th>ROLL</th><th>ADDRESS</th></tr>"){
        val = "<tr><td colspan='4'>No Students in MBA TECH enrolled yet.</td></tr>"
    }
    display_table(val);
}
function btech_list(){
    val = "<tr><th>Name</th><th>SAP ID</th><th>ROLL</th><th>ADDRESS</th></tr>";
    for(x in students){
        if(students[x].batch == "BTECH CE A"){
            val += "<tr><td>"+students[x].name.toUpperCase()+" - "+students[x].name2.toUpperCase();
            val += "</td><td>"+students[x].sap.toUpperCase();
            val += "</td><td>"+students[x].roll.toUpperCase();
            val += "</td><td>"+students[x].address;
        }
    }
    if(val == "<tr><th>Name</th><th>SAP ID</th><th>ROLL</th><th>ADDRESS</th></tr>"){
        val = "<tr><td colspan='4'>No Students in BTECH enrolled yet.<td></tr>"
    }
    display_table(val);
}
function display_table(val){
    document.getElementById("student_table").innerHTML = val;
}