$(document).ready(readyNow);

let salaryTotal = 0;

function readyNow() {
    $('#monthlyOut').text(salaryTotal / 12);
    $('#addButton').on('click', addEmployee); //At the click event within Submit button, initiate addEmployee Function
    $('#employeeOut').on('click', '.deleteEmp', deleteEmployee) //At the click event within Delete button, initiate deleteEmployeeFunction
    $('input').keyup(enterToClick); //At the keyup event within Input element, initiate hideError function

}

function addEmployee() {
    //add employee data to table on DOM
    $('#employeeOut').append(`<tr class="newEmployee">
                    <td class="titleCasing">${$('#inFirst').val()} </td>
                    <td class="titleCasing">${$('#inLast').val()} </td>
                    <td>${$('#inEmpId').val()} </td>
                    <td class="titleCasing">${$('#inTitle').val()} </td>
                    <td class="annualSalaryOut">${$('#inSalary').val()}</td>
                    <td class="deleteBtnContainer"><button class="deleteEmp btn btn-info">Delete</button></td>
                    </tr>`)
    //calculate monthly salary total
    salaryTotal += Number($('#inSalary').val()); //converts to number before adding
    $('#monthlyOut').text((salaryTotal / 12).toFixed(2)); //always shows two decimals
    //is monthlyOut > $20,000?
    if (salaryTotal / 12 > 20000) {
        $('#monthlyOut').parent().addClass("alert alert-danger"); //updates background color of parent element
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
    salaryTotal -= Number($(this).parent().prev().text()); //converts to number before adding
    //append updated salary to the DOM
    $('#monthlyOut').text((salaryTotal / 12).toFixed(2)); //always shows two decimals
    //remove this tr from the DOM
    $(this).parent().parent().remove();
    //is monthlyOut < $20,000?
    if (salaryTotal / 12 < 20000) {
        $('#monthlyOut').parent().removeClass("alert alert-danger"); //updates background color of parent element
    }
}

function enterToClick(key) {
    if (key.keyCode == 13) { //checks if enter/return key was released
        addEmployee(); //if true, run addEmployee function
    } //end if
} //end enterToClick function