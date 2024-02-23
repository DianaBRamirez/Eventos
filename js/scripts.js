
$('#eClick').on("click", function () {
    alert("Evento onclick");
});
$('#eDblclick').on("dblclick", function () {
    alert("Evento ondblclick");
});
$('#eMousedown').on("mousedown", function () {
    alert("Evento onmousedown");
});
$('#eMouseenter').on("mouseenter", function () {
    alert("Evento onmouseenter");
});
$('#eMouseleave').on("mouseleave", function () {
    alert("Evento onmouseleave");
});
$('#eMousemove').on("mousemove", function () {
    alert("Evento onmousemove");
});
$('#eMouseover').on("mouseover", function () {
    alert("Evento onmouseover");
});
$('#eMouseout').on("mouseout", function () {
    alert("Evento onmouseout");
});
$('#eMouseup').on("mouseup", function () {
    alert("Evento onmouseup");
});
$('#btnOM').on("click", function () {
    $('#scrollUpBtn, #scrollDownBtn').toggle();
});
$('#scrollUpBtn').on("click",function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
});
$('#scrollDownBtn').on("click",function () {
    $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
});

