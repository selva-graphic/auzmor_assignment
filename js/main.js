$(document).ready(function() {
    $(".navbar-nav li a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            var topOffset = $(hash).offset().top - 90;
            $('html, body').animate({
                scrollTop: topOffset
            }, 800, function() {
                window.location.hash = hash;
            });
            $(".navbar-nav li.active").removeClass('active');
            $(this).closest('li').addClass('active');
        }
    });
    $('.panel-collapse').on('show.bs.collapse', function() {
        $(this).siblings('.panel-heading').addClass('active');
    });
    $('.panel-collapse').on('hide.bs.collapse', function() {
        $(this).siblings('.panel-heading').removeClass('active');
    });
});

function changeCard(value) {
    var total = (value * 5).toFixed(2);
    var creditLimit = (value * 20).toFixed(2);
    var unbilled = (value * 7).toFixed(2);
    var available = (value * 10).toFixed(2);
    $('#current_month_balance').text(total);
	$('#avail_balance').text(total);
	$('#avail_balance2').text(total);
    $('#last_month_balance').text(total);
    $('#current_outstanding').text(total);
    $('#credit_limit').text(creditLimit);
    $('#unbilled').text(unbilled);
    $('#unbilledl').text(unbilled);
    $('#unbilledc').text(unbilled);
    $('#available').text(available);
    drawChart(value);
    console.log("Handler for .change() called." + value);
}

$('input[name=inlineRadioOptions]').change(function() {
    $('#range_select').empty();
    $('#card_details').empty();
    if (this.value == 'option1') {
		$('.credit-card').css("display", "none");
        $('.debit-card').css("display", "block");
        $("#range_select").append('<option>Current Month</option>');
        $("#range_select").append('<option>Last 6 Months</option>');
        $("#card_details").append('<option value="1100">XXXX-XXXX-XXXX-1100</option>');
        $("#card_details").append('<option value="3121">XXXX-XXXX-XXXX-3121</option>');

    } else {
        $('.debit-card').css("display", "none");
        $('.credit-card').css("display", "block");
        $("#range_select").append('<option>Current Month</option>');
        $("#card_details").append('<option value="3220">XXXX-XXXX-XXXX-3220</option>');
        $("#card_details").append('<option value="3110">XXXX-XXXX-XXXX-3110</option>');
        $("#card_details").append('<option value="5220">XXXX-XXXX-XXXX-5220</option>');
        $("#card_details").append('<option value="3211">XXXX-XXXX-XXXX-3211</option>');
    }
});
var selValue = $('#card_details').val();
window.onload = changeCard(selValue);