$(function () {
    jQuery("#webcam").webcam({
        width: 320,
        height: 240,
        mode: "save",
        swffile: '/Webcam_Plugin/jscam.swf',
        debug: function (type, status) {
            $('#camStatus').append(type + ": " + status + '<br /><br />');
        },
        onSave: function (data, ab) {
            $.ajax({
                type: "POST",
                url: '/Home/GetCapture',
                data: '',
                contentType: "application/json; charset=utf-8",
                dataType: "text",
                success: function (r) {
                    $("#imgCapture").css("visibility", "visible");
                    $("#imgCapture").attr("src", r);
                },
                failure: function (response) {
                    alert(response.d);
                }
            });
        },
        onCapture: function () {
            webcam.save('/Home/Capture');
        }
    });
});
function Capture() {
    webcam.capture();
}