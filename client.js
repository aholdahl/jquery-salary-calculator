$(document).ready(readyNow);

let monthlyOut = 0;

function readyNow (){
    $('#monthlyOut').text(monthlyOut);
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
    monthlyOut += Number($('#inSalary').val());
    $('#monthlyOut').text(monthlyOut/12);
}

function deleteEmployee(){
    console.log('in delete button');
}