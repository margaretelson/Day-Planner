
$("#currentDay").text(
    luxon.DateTime.local().toLocaleString({
    weekday: 'long', 
    month: 'long', 
    day: '2-digit', 
}))


function timeBlockEl() {
    let hourEl = luxon.DateTime.local().toLocaleString({hour: "2-digit"});
    let formattedHour = parseInt(hourEl[0] + hourEl[1]);

    if (hourEl.indexOf("PM")) {
        formattedHour += 12;
        console.log(formattedHour)
    }

    console.log(hourEl);

    $(".time-block").each(function(){
        let currentHour = parseInt($(this).attr("id"));

        console.log(this);
        if (formattedHour > currentHour) {
            $(this).addClass("past-hour");
        } else if(currentHour === formattedHour) {
            $(this).addClass("present-hour");
        }else{
            $(this).addClass("future-hour");
        }
    
});
}

const saveBtn = $(".saveBtn");

saveBtn.on("click", function() {
    let time = $(this).siblings(".hour").text();
    let input = $(this).siblings("#input").val();
    console.log(input);
    console.log(time);

    localStorage.setItem(time,input);
})

timeBlockEl();