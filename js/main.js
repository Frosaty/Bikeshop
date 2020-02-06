$(document).ready(function() {
    // jQuery methods go here...
    $('#nav-icon1').click(function() {
        $(this).toggleClass('open');
    });
});

// zoomIn - zoomOut
$(document).ready(function() {

    // jQuery methods go here...
    var $image = $('#image');

    $image.viewer({
        inline: true,
        viewed: function() {
            $image.viewer('zoomTo', 1);
        }
    });

    // Get the Viewer.js instance after initialized
    var viewer = $image.data('viewer');

    // View a list of images
    $('#images').viewer();

});

// View an image
const viewer = new Viewer(document.getElementById('image'), {
    inline: true,
    viewed() {
        viewer.zoomTo(1);
    },
});
// View a list of images
const gallery = new Viewer(document.getElementById('images'));


// Subcribe bar
var subscribe_button = document.querySelector(".subscribe_button");

subscribe_button.addEventListener('click', function() {
    var subscribing = document.querySelector(".subscribing");
    var thanks = document.querySelector(".thanks");
    var login = document.querySelector(".login");

    subscribing.classList.add("subscribing_active");
    subscribe_button.classList.add("subscribe_button_active");
    setTimeout(function() {
        login.classList.add("login_active");
    }, 1200);
    setTimeout(function() {
        thanks.classList.add("thanks_active");
    }, 1400);

    setTimeout(function() {
        thanks.classList.remove("thanks_active");
        login.classList.remove("login_active");
        subscribing.classList.remove("subscribing_active");
        subscribe_button.classList.remove("subscribe_button_active");
    }, 4000);
});