/*Name: S.N.Jayasooriya A.D.
Student ID: 8786771
SEG3125 Lab6
VetClinic FINAL - Main JS File

Created using tutorials/inspiration from sources:
https://getbootstrap.com/docs/5.0/getting-started/introduction/
https://www.w3schools.com/html/default.asp and https://www.w3schools.com/howto/howto_js_active_element.asp
https://startbootstrap.com/theme/agency
https://mdbootstrap.com/support/jquery/modal-after-validation-form/
Matte, R (2021) SEG3125-Module4-Website [Source code] 
https://github.com/RyanMatte/Website/tree/master
Matte, R (2021) SEG3125-Module5-Lab5_Starter [Source code] 
https://github.com/RyanMatte/Lab5_Starter
*/

var vetdoctors = [{
        name: "michael",
        daysAvailable: [1, 2, 3, 4, 5, 6]
    },
    {
        name: "james",
        daysAvailable: [2, 3, 4, 5]
    },
    {
        name: "michelle",
        daysAvailable: [4, 5, 6]
    },
    {
        name: "angela",
        daysAvailable: [1, 2, 3, 4, 5]
    }
]


$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function() {

    var radios = document.forms[0].elements["doctor"];

    for (var i = 0, max = radios.length; i < max; i++) {
        radios[i].onclick = function() {
            updateDates(this.value);
            document.getElementById("bookingDetails").style.display = 'block';
        }
    }

    function updateDates(doctor) {
        var docNum = 0;
        if (doctor == "james") {
            docNum = 1;
        }
        if (doctor == "michelle") {
            docNum = 2;
        }
        if (doctor == "angela") {
            docNum = 3;
        }

        $("#datepicker").datepicker("destroy");

        $("#datepicker").datepicker({
            minDate: 0,
            beforeShowDay: function(d) {
                day = d.getDay();
                if ($.inArray(day, vetdoctors[docNum].daysAvailable) < 0) {
                    return [false];
                } else {
                    return [true];
                }
            }
        });
    }
});