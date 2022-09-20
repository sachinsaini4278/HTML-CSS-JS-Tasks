var employeeJson = [
    {
        "Employee Name":"Nitin Singh",
        "Address":"Hyderabad",
        "Email ID":"nitin.singh@gmail.com",
        "Age":25
    },
    {
        "Employee Name":"Pawan Patil",
        "Address":"Delhi",
        "Email ID":"pawan.patil@gmail.com",
        "Age":28
    },
    {
        "Employee Name":"Rajeev Kumar",
        "Address":"Noida",
        "Email ID":"rajeev.kumar@gmail.com",
        "Age":25
    },
    {
        "Employee Name":"Jhon Smith",
        "Address":"New Yark",
        "Email ID":"smith.jh@gmail.com",
        "Age":22
    }];
    
function createTableFromJsonData(){
    //Get the headers from JSON data
    var headers = Object.keys(employeeJson[0]);
    
    //Prepare html header
    var headerRowHTML='<tr>';
    for(var i=0;i<headers.length;i++){
        headerRowHTML+='<th>'+headers[i]+'</th>';
    }
    headerRowHTML+='</tr>';       
    
    //Prepare all the employee records as HTML
    var allRecordsHTML='';
    for(var i=0;i<employeeJson.length;i++){
     
        //Prepare html row
        allRecordsHTML+='<tr>';
        for(var j=0;j<headers.length;j++){
            var header=headers[j];
            allRecordsHTML+='<td>'+employeeJson[i][header]+'</td>';
        }
        allRecordsHTML+='</tr>';
         
    }
     
    //Append the table header and all records
    var table=document.getElementById("display_json_data");
    table.innerHTML=headerRowHTML + allRecordsHTML;
}

window.onload = createTableFromJsonData();