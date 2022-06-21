
function readMore() {
    var moreText = document.getElementById("more");
    var dots = document.getElementById("dots");
    var btnText = document.getElementById("read-more");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    }
    else {
        dots.style.display = "none"; btnText.innerHTML = "Read less"; moreText.style.display = "inline";
    }
}

function readMoree() {
    var moreText = document.getElementById("more-1");
    var dots = document.getElementById("dots-1");
    var btnText = document.getElementById("read-more-1");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    }
    else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function modelItem1() {
    // Get the model
    var model_1 = document.getElementById("main-Item-model-1");
    // Get the button that opens the modal
    var btn_1 = document.getElementById("main-Item-1");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the model
    btn_1.onclick = function () {
        model_1.style.display = "block";
    }

    // When the user clicks on <span> (x), close the model
    span.onclick = function () {
        model_1.style.display = "none";
    }

    // When the user clicks anywhere outside of the model, close it
    window.onclick = function (event) {
        if (event.target == model_1) {
            model_1.style.display = "none";
        }
    }
}

function modelItem2() {
    // Get the model
    var model_2 = document.getElementById("main-Item-model-2");
    // Get the button that opens the modal
    var btn_2 = document.getElementById("main-Item-2");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[1];
    // When the user clicks on the button, open the modal
    btn_2.onclick = function () {
        model_2.style.display = "block";
    }

    // When the user clicks on <span> (x), close the model
    span.onclick = function () {
        model_2.style.display = "none";
    }

    // When the user clicks anywhere outside of the model, close it
    window.onclick = function (event) {
        if (event.target == model_2) {
            model_2.style.display = "none";
        }
    }
}

function modelItem3() {
    // Get the model
    var model_3 = document.getElementById("main-Item-model-3");
    // Get the button that opens the modal
    var btn_3 = document.getElementById("main-Item-3");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[2];
    // When the user clicks on the button, open the modal
    btn_3.onclick = function () {
        model_3.style.display = "block";
    }

    // When the user clicks on <span> (x), close the model
    span.onclick = function () {
        model_3.style.display = "none";
    }

    // When the user clicks anywhere outside of the model, close it
    window.onclick = function (event) {
        if (event.target == model_3) {
            model_3.style.display = "none";
        }
    }
}

function modelItem4() {
    // Get the model
    var model_4 = document.getElementById("main-Item-model-4");
    // Get the button that opens the modal
    var btn_4 = document.getElementById("main-Item-4");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[3];
    // When the user clicks on the button, open the modal
    btn_4.onclick = function () {
        model_4.style.display = "block";
    }

    // When the user clicks on <span> (x), close the model
    span.onclick = function () {
        model_4.style.display = "none";
    }

    // When the user clicks anywhere outside of the model, close it
    window.onclick = function (event) {
        if (event.target == model_4) {
            model_4.style.display = "none";
        }
    }
}

function modelItem5() {
    // Get the model
    var model_5 = document.getElementById("main-Item-model-5");
    // Get the button that opens the modal
    var btn_5 = document.getElementById("main-Item-5");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[4];
    // When the user clicks on the button, open the modal
    btn_5.onclick = function () {
        model_5.style.display = "block";
    }

    // When the user clicks on <span> (x), close the model
    span.onclick = function () {
        model_5.style.display = "none";
    }

    // When the user clicks anywhere outside of the model, close it
    window.onclick = function (event) {
        if (event.target == model_5) {
            model_5.style.display = "none";
        }
    }
}

function modelItem6() {
    // Get the model
    var model_6 = document.getElementById("main-Item-model-6");
    // Get the button that opens the modal
    var btn_6 = document.getElementById("main-Item-6");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[5];
    // When the user clicks on the button, open the modal
    btn_6.onclick = function () {
        model_6.style.display = "block";
    }

    // When the user clicks on <span> (x), close the model
    span.onclick = function () {
        model_6.style.display = "none";
    }

    // When the user clicks anywhere outside of the model, close it
    window.onclick = function (event) {
        if (event.target == model_6) {
            model_6.style.display = "none";
        }
    }
}

function modelItem7() {
    // Get the model
    var model_7 = document.getElementById("main-Item-model-7");
    // Get the button that opens the modal
    var btn_7 = document.getElementById("main-Item-7");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[6];
    // When the user clicks on the button, open the modal
    btn_7.onclick = function () {
        model_7.style.display = "block";
    }

    // When the user clicks on <span> (x), close the model
    span.onclick = function () {
        model_7.style.display = "none";
    }

    // When the user clicks anywhere outside of the model, close it
    window.onclick = function (event) {
        if (event.target == model_7) {
            model_7.style.display = "none";
        }
    }
}

function modelItem8() {
    // Get the model
    var model_8 = document.getElementById("main-Item-model-8");
    // Get the button that opens the modal
    var btn_8 = document.getElementById("main-Item-8");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[7];
    // When the user clicks on the button, open the modal
    btn_8.onclick = function () {
        model_8.style.display = "block";
    }

    // When the user clicks on <span> (x), close the model
    span.onclick = function () {
        model_8.style.display = "none";
    }

    // When the user clicks anywhere outside of the model, close it
    window.onclick = function (event) {
        if (event.target == model_8) {
            model_8.style.display = "none";
        }
    }
}

function displayModel() {
    var myDisplay = document.getElementById("main-item-container");
    var iconArrow = document.getElementById("arrow-change");

    if (myDisplay.style.display === "none") {
        myDisplay.style.display = "block";
        iconArrow.innerHTML = "Main Menu &#8607;";
    }
    else {
        myDisplay.style.display = "none";
        iconArrow.innerHTML = "Main Menu &#8609;";
    }        
}

function displayBlock() {
    var myBlock = document.getElementById("main-block-container");
    var arrowIcon = document.getElementById("change-arrow");

    if (myBlock.style.display === "none") {
        myBlock.style.display = "block";
        arrowIcon.innerHTML = "Block &#8607;";
    }
    else {
        myBlock.style.display = "none";
        arrowIcon.innerHTML = "Block &#8609;";
    }        
}