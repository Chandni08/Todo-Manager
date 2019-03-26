$("#enter").on('click',function(){
    const todo = $("#userInput").val();
    $("#userInput").val(" ");
    const ul=$("ul");
    ul.append('<li>' +todo+ '</li>');
});

$("#userInput").keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        const todo = $("#userInput").val();
        $("#userInput").val(" ");
        const ul=$("ul");
        ul.append('<li>' +todo+ '</li>');
    }   
});
var clicked=false;
$("ul").on('click',function(event){
    if(clicked){
        $(event.target).css('background-color','');
        clicked  = false;
    } else {
        $(event.target).css('background-color', '#00FA9A');
        clicked  = true;
    }
})

$("ul").on('dblclick',function(event){
    $(event.target).remove();
})