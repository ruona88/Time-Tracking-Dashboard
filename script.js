const jsonData = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
]

//Create an object to save location to extract date from the jsonData object
const data = {
    workData: jsonData[0].timeframes,
    playData: jsonData[1].timeframes,
    studyData: jsonData[2].timeframes,
    exerciseData: jsonData[3].timeframes,
    socialData: jsonData[4].timeframes,
    selfCareData: jsonData[5].timeframes
}

//Function to show daily figures
const showDailyData = function () {
    //codes to show work data
    document.getElementById("work-current-hours").innerHTML = data.workData.daily.current;
    document.getElementById("work-previous-hours").innerHTML = data.workData.daily.previous;

    //codes to show play data
    document.getElementById("play-current-hours").innerHTML = data.playData.daily.current;
    document.getElementById("play-previous-hours").innerHTML = data.playData.daily.previous;

    //codes to show study data
    document.getElementById("study-current-hours").innerHTML = data.studyData.daily.current;
    document.getElementById("study-previous-hours").innerHTML = data.studyData.daily.previous;

    //codes to show exercise data
    document.getElementById("exercise-current-hours").innerHTML = data.exerciseData.daily.current;
    document.getElementById("exercise-previous-hours").innerHTML = data.exerciseData.daily.previous;

    //codes to show social data
    document.getElementById("social-current-hours").innerHTML = data.socialData.daily.current;
    document.getElementById("social-previous-hours").innerHTML = data.socialData.daily.previous;

    //codes to show self-care data
    document.getElementById("care-current-hours").innerHTML = data.selfCareData.daily.current;
    document.getElementById("care-previous-hours").innerHTML = data.selfCareData.daily.previous;
}

//Function to show weekly figures
const showWeeklyData = function () {
    //codes to show work data
    document.getElementById("work-current-hours").innerHTML = data.workData.weekly.current;
    document.getElementById("work-previous-hours").innerHTML = data.workData.weekly.previous;

    //codes to show play data
    document.getElementById("play-current-hours").innerHTML = data.playData.weekly.current;
    document.getElementById("play-previous-hours").innerHTML = data.playData.weekly.previous;

    //codes to show study data
    document.getElementById("study-current-hours").innerHTML = data.studyData.weekly.current;
    document.getElementById("study-previous-hours").innerHTML = data.studyData.weekly.previous;

    //codes to show exercise data
    document.getElementById("exercise-current-hours").innerHTML = data.exerciseData.weekly.current;
    document.getElementById("exercise-previous-hours").innerHTML = data.exerciseData.weekly.previous;

    //codes to show social data
    document.getElementById("social-current-hours").innerHTML = data.socialData.weekly.current;
    document.getElementById("social-previous-hours").innerHTML = data.socialData.weekly.previous;

    //codes to show self-care data
    document.getElementById("care-current-hours").innerHTML = data.selfCareData.weekly.current;
    document.getElementById("care-previous-hours").innerHTML = data.selfCareData.weekly.previous;
}

//Function to show Monthly figures
const showMonthlyData = function () {
    //codes to show work data
    document.getElementById("work-current-hours").innerHTML = data.workData.monthly.current;
    document.getElementById("work-previous-hours").innerHTML = data.workData.monthly.previous;

    //codes to show play data
    document.getElementById("play-current-hours").innerHTML = data.playData.monthly.current;
    document.getElementById("play-previous-hours").innerHTML = data.playData.monthly.previous;

    //codes to show study data
    document.getElementById("study-current-hours").innerHTML = data.studyData.monthly.current;
    document.getElementById("study-previous-hours").innerHTML = data.studyData.monthly.previous;

    //codes to show exercise data
    document.getElementById("exercise-current-hours").innerHTML = data.exerciseData.monthly.current;
    document.getElementById("exercise-previous-hours").innerHTML = data.exerciseData.monthly.previous;

    //codes to show social data
    document.getElementById("social-current-hours").innerHTML = data.socialData.monthly.current;
    document.getElementById("social-previous-hours").innerHTML = data.socialData.monthly.previous;

    //codes to show self-care data
    document.getElementById("care-current-hours").innerHTML = data.selfCareData.monthly.current;
    document.getElementById("care-previous-hours").innerHTML = data.selfCareData.monthly.previous;
}

//Function to remove the active class from classlist
const removeClass = function (x) {
    x.classList.remove("active");
}

document.querySelector("ol").addEventListener("click", (event) => {
    if(event.target.className === "daily") {
        removeClass(document.querySelectorAll("li a")[1]);
        removeClass(document.querySelectorAll("li a")[2]);
        showDailyData()
        event.target.classList.toggle("active");
    }

    if(event.target.className === "weekly") {
        removeClass(document.querySelectorAll("li a")[0]);
        removeClass(document.querySelectorAll("li a")[2]);
        showWeeklyData();
        event.target.classList.toggle("active");
    }

    if(event.target.className === "monthly") {
        removeClass(document.querySelectorAll("li a")[1]);
        removeClass(document.querySelectorAll("li a")[0]);
        showMonthlyData();
        event.target.classList.toggle("active");
    }
})

//Add Event Handler to call the showWeeklyData function when the window loads
window.onload = () => {
    showWeeklyData();
    document.getElementsByClassName("weekly")[0].classList.add("active");
}