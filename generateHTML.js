/**
 * Created by tintin on 20-07-2016.
 */

function createHTML() {
generate = document.getElementById('generateHTML');
generate.addEventListener("click",getHTML,false);
}
var wells;
var wellHTMLs =[];
function getHTML(e) {
    $(function(source){
        wells = $('#innerframe').contents().find("html").find("#drop-box").find('.well-sm').toArray();
        for (var count=0; count<wells.length;count++) {
            wellHTMLs.push('<div class="well well-sm" draggable="true">'+wells[count].innerHTML+'</div>');
        }
        open_popup();
    });
}
function open_popup() {
    var PopUpWindow = window.open("", "finalForm", width="50%");
    PopUpWindow.document.write('<!DOCTYPE html> <html lang=en> <head>');
        PopUpWindow.document.write('<meta charset="UTF-8">')
        PopUpWindow.document.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
        PopUpWindow.document.write('<title>Final Form</title>');
        PopUpWindow.document.write('<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"> <scr');
        PopUpWindow.document.write('ipt src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></scr');
        PopUpWindow.document.write('ipt><scr');
        PopUpWindow.document.write('ipt src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></scr');
        PopUpWindow.document.write('ipt><scr');
        PopUpWindow.document.write('ipt src="https://code.jquery.com/jquery-3.1.0.min.js"></scr');
        PopUpWindow.document.write('ipt><link  href="drag-box.css" type="text/css" rel="stylesheet" media="screen,projection"/>');
    PopUpWindow.document.write('</head>');
    PopUpWindow.document.write('<body>');
        PopUpWindow.document.write('<div class="container-fluid"><div class="row clearfix"><div class="col-md-6">');
            PopUpWindow.document.write('<h3>Final Form</h3><hr/>');
            for(var i=0;i<wellHTMLs.length;i++){
                PopUpWindow.document.write(wellHTMLs[i]);}
        PopUpWindow.document.write('</div></div></div>');
    PopUpWindow.document.write('</head>');
    PopUpWindow.document.write('</html>');
}

window.addEventListener("load", createHTML, false);
