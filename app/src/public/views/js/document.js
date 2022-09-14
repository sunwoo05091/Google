
  document.addEventListener('DOMContentLoaded', function() {
    var Calendar = FullCalendar.Calendar;
    var Draggable = FullCalendar.Draggable;

    var containerEl = document.getElementById('external-events');
    var calendarEl = document.getElementById('calendar');
    var checkbox = document.getElementById('drop-remove');

    // initialize the external events
    // -----------------------------------------------------------------

    new Draggable(containerEl, {
      itemSelector: '.fc-event',
      eventData: function(eventEl) {
        return {
          title: eventEl.innerText
        };
      }
    });

    // initialize the calendar
    // -----------------------------------------------------------------

    var calendarEl = document.getElementById('calendar');
    var calendar = new Calendar(calendarEl, {
      googleCalendarApiKey : "AIzaSyAOg2vojszhB-4UCWJZm6OykigSt0s5XZo",
      eventSources :[ 
        {
            googleCalendarId : 'r00p45isrv3lb8om983auseu1g@group.calendar.google.com'
            , color: 'white'   // an option!
            , textColor: 'red' // an option!
        },
        {
          "extendedProperties": {
            "private": {
              "petsAllowed": "yes"
            }
          }
        }
    ],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      editable: true,
      droppable: true, // this allows things to be dropped onto the calendar
      locale : "ko",
      drop: function(info) {
        // is the "remove after drop" checkbox checked?
        if (checkbox.checked) {
          // if so, remove the element from the "Draggable Events" list
          info.draggedEl.parentNode.removeChild(info.draggedEl);
        }
      }
    });

    calendar.render();
  });

  function click_add(){
    var url = "schedulePopup";
    var name = "schedulePopup";
    var option = "width = 600, height = 600 left = 100, top=50, location=no";
    window.open(url,name,option);
  }
  