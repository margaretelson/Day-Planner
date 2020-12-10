//Local time and day
$("#currentDay").text(
    luxon.DateTime.local().toLocaleString({
    weekday: 'long', 
    month: 'long', 
    day: '2-digit', 
}))


const saveBtn = $(".saveBtn");

//Save button to local storage
saveBtn.on("click", function() {
    let time = $(this).siblings(".hour").text();
    let input = $(this).siblings("#input").val();
    console.log(input);
    console.log(time);

    localStorage.setItem(time,input);
})

//persist local storage through refreshing
function storeEl() {
    $(".hour").each(function(){
        let presentHour = $(this).text();
        let storedTxt = localStorage.getItem(presentHour);

        if (storedTxt !== null) {
            $(this).siblings("#input").val(storedTxt);
        }
    });
}

function timeBlockEl() {
    let hourEl = luxon.DateTime.local().toLocaleString({hour: "2-digit", hour12: false});
    let fixedHour = parseInt(hourEl[0] + hourEl[1]);

   

    console.log(hourEl);

    $(".time-block").each(function(){
        let presentHour = parseInt($(this).attr("id"));

        console.log(this);
        if (fixedHour > presentHour) {
            $(this).addClass("past-hour");
        } else if(presentHour === fixedHour) {
            // $(this).removeClass("past-hour")
            $(this).addClass("present-hour");
        }else{
            // $(this).removeClass("present-hour")
            $(this).addClass("future-hour");
        }
    
});
}

//Called functions
timeBlockEl();
storeEl();

