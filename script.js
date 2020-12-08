//Local time and day
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

//Save button to local storage
saveBtn.on("click", function() {
    let time = $(this).siblings(".hour").text();
    let content = $(this).siblings("#content").val();
    console.log(content);
    console.log(time);

    localStorage.setItem(time,content);
})

//persist local storage through refreshing
function storeEl() {
    $(".hour").each(function(){
        let currentHour = $(this).text();
        let storedTxt = localStorage.getItem(currentHour);

        if (storedTxt !== null) {
            $(this).siblings("#content").val(storedTxt);
        }
    });
}

//Called functions
timeBlockEl();
storeEl();

