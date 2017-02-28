/**
 * Created by ttomc on 06/01/2017.
 */
$(function()
{
    $(".page-title").empty().append("Agenda");

    var calendar = $('#calendar').fullCalendar({
        locale: 'fr',
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        themeButtonIcons :
        {
            prev: 'arrow-material-p',
            next: 'arrow-material-n'
        },
        handleWindowResize: true,
        weekends: false, // Hide weekends
        defaultView: 'agendaWeek', // Only show week view
        minTime: '07:30:00', // Start time for the calendar
        maxTime: '22:00:00', // End time for the calendar
        theme : true,
        timezone: 'local',
        nowIndicator: true,
        displayEventTime: true, // Display event time
        navLinks: true,
        // editable: true,
        eventLimit: true, // allow "more" link when too many events
        eventSources: [
            // your event source
            {
                url: '/getCalendar',
                type: 'POST',
                error: function() {
                    alert('there was an error while fetching events!');
                },
                color: '#D32F2F',   // a non-ajax option
                textColor: 'black' // a non-ajax option
            }

            // any other sources...

        ]
    });

    $("button").each(function () {
        $(this).addClass("waves-effect waves-light btn light-blue")
    });
});