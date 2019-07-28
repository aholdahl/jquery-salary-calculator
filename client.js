$(document).ready(readyNow);

let salaryTotal = 0;

function readyNow() {
    $('#monthlyOut').text(salaryTotal / 12);
    $('#addButton').on('click', addEmployee);
    $('#employeeOut').on('click', '.deleteEmp', deleteEmployee)
}

function addEmployee() {
    //add employee data to table on DOM
    $('#employeeOut').append(`<tr class="newEmployee">
                    <td>${$('#inFirst').val()} </td>
                    <td>${$('#inLast').val()} </td>
                    <td>${$('#inEmpId').val()} </td>
                    <td>${$('#inTitle').val()} </td>
                    <td class="annualSalaryOut">${$('#inSalary').val()}</td>
                    <td class="deleteBtnContainer"><button class="deleteEmp btn btn-info">Delete</button></td>
                    </tr>`)
    //calculate monthly salary total
    salaryTotal += Number($('#inSalary').val());
    $('#monthlyOut').text((salaryTotal / 12).toFixed(2));
    //is monthlyOut > $20,000?
    if (salaryTotal / 12 > 20000) {
        $('#monthlyOut').parent().addClass("alert alert-danger");
    }
    //clear input fields
    $('#inFirst').val('');
    $('#inLast').val('');
    $('#inEmpId').val('');
    $('#inTitle').val('');
    $('#inSalary').val('');
}

function deleteEmployee() {
    //retrieve the annual salary sibling element of the current td and subtract from salaryTotal
    salaryTotal -= Number($(this).parent().prev().text());
    //append updated salary to the DOM
    $('#monthlyOut').text((salaryTotal / 12).toFixed(2));
    //remove this tr from the DOM
    $(this).parent().parent().remove();
    //is monthlyOut < $20,000?
    if (salaryTotal / 12 < 20000) {
    $('#monthlyOut').parent().removeClass("alert alert-danger");
    }
}