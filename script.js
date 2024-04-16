$(document).ready(function () {
    $('.carousel1').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        pagination: false,
        autoplay: true,

        padding: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    $('.carousel_fullin').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        border: '1px solid grey',
        pagination: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 4
            },
            1000: {
                items: 8
            }
        }
    })
});

function swalert() {
    swal("Good job!", "You clicked the button!", "success");
}

function months(month) {
    let img = document.getElementById("months_event");
    let date = document.getElementById("buddha_text1");
    let day = document.getElementById("buddha_text2");



    let img_array = ["resources/republicfest.jpg",
        "resources/devgadfest.jpg",
        "resources/holifest.jpg",
        "resources/ramnavmi.jpg",
        "resources/budthfestival.jpg",
        "resources/magofesteveal.jpg",
        "resources/servanafest.jpg",
        "resources/15augustfest.jpg",
        "resources/rambarat.jpg",
        "resources/depawalifest.jpg",
        "resources/lkofest.jpg",
        "resources/crismaxdayfestivel.jpg"];

    let date_array = ['26 jan 2022', '28 feb 2022', '17 mar 2022', '10 apr 2022', '16 may 2022', '15 june 2022', 'july 2022', '15 aug 2022', '21 sept 2022', '24 oct 2022', '25 nov 2022', '25 dec 2022'];

    let day_array = ["Republic Day", "Devgadh festival", "Holi", "Ram Navmi", "Buddha Purnima", "U.P. Mango festival", "Shravan", "Independence day", "Ram Barat", "Diwali", "Lucknow Festival", "Christmas Day"];



    switch (month) {

        case 1:
            img.setAttribute("src", img_array[0]);
            date.innerHTML = date_array[0];
            day.innerHTML = day_array[0];
            break;
        case 2:
            img.setAttribute("src", img_array[1]);
            date.innerHTML = date_array[1];
            day.innerHTML = day_array[1];
            break;
        case 3:
            img.setAttribute("src", img_array[2]);
            date.innerHTML = date_array[2];
            day.innerHTML = day_array[2];
            break;
        case 4:
            img.setAttribute("src", img_array[3]);
            date.innerHTML = date_array[3];
            day.innerHTML = day_array[3];
            break;
        case 5:
            img.setAttribute("src", img_array[4]);
            date.innerHTML = date_array[4];
            day.innerHTML = day_array[4];
            break;
        case 6:
            img.setAttribute("src", img_array[5]);
            date.innerHTML = date_array[5];
            day.innerHTML = day_array[5];
            break;
        case 7:
            img.setAttribute("src", img_array[6]);
            date.innerHTML = date_array[6];
            day.innerHTML = day_array[6];
            break;
        case 8:
            img.setAttribute("src", img_array[7]);
            date.innerHTML = date_array[7];
            day.innerHTML = day_array[7];
            break;
        case 9:
            img.setAttribute("src", img_array[8]);
            date.innerHTML = date_array[8];
            day.innerHTML = day_array[8];
            break;
        case 10:
            img.setAttribute("src", img_array[9]);
            date.innerHTML = date_array[9];
            day.innerHTML = day_array[9];
            break;
        case 11:
            img.setAttribute("src", img_array[10]);
            date.innerHTML = date_array[10];
            day.innerHTML = day_array[10];
            break;
        case 12:
            img.setAttribute("src", img_array[11]);
            date.innerHTML = date_array[11];
            day.innerHTML = day_array[11];

    }




}
