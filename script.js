function ready() {
    const flight_times = document.querySelectorAll(".flight-times")
    for (const flight_times_elem of flight_times) {
        const flight_time = flight_times_elem.querySelectorAll(".flight-time")
        const more_link = flight_times_elem.querySelector(".more-link")
        if (flight_time.length > 4) {
            for (let i = 4; i < flight_time.length; i++) {
                flight_time[i].hidden = true
            }
            more_link.onclick = function () {
                for (let i = 4; i < flight_time.length; i++) {
                    flight_time[i].hidden = false
                }
                more_link.hidden = true
            }
        } else {
            more_link.hidden = true
        }
    }
}

document.addEventListener("DOMContentLoaded", ready)