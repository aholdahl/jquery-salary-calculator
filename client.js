console.log('js');

$(document).ready(readyNow);

function readyNow (){
    $('#addButton').on('click', addEmployee);
    //$('#employeeOut').on('click', #('.deleteEmp'), deleteEmployee);
}

function addEmployee(){
    $('#employeeOut').append(`<tr>
                    <td>${$('#inFirst').val()} </td>
                    <td>${$('#inLast').val()} </td>
                    <td>${$('#inEmpId').val()} </td>
                    <td>${$('#inTitle').val()} </td>
                    <td>${$('#inSalary').val()} </td>
                    <td><button class="deleteEmp">Delete</button></td>
                    </tr>`)
}

//function deleteEmployee(){
//
//}