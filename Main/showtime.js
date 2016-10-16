

window.onload = function(){
    document.getElementById("submit").onclick = function ok(){
        //if((document.getElementById('address').checkValidity()) && (document.getElementById('date').checkValidity())){

        //anon oauth token
        var token = 'BTU77M3MWC6XNMJN2BUN';
        //org id
        var location_address = (document.getElementById("address")).value;
        var category = '103';
        var location_within = "5mi";
        var whichAPI = 1;

        if(whichAPI == 1){
            //var $events = $("#events");
            var $events = $("#Events");

            $.get('https://www.eventbriteapi.com/v3/events/search/?categories='+category+'&location.within='+location_within+'&location.address='+location_address+'&token='+token, function(res) {
                console.log(res);
                if(res.events.length) {
                   // var s = "<ul class='eventList'>";
                    //var s = "<div class='panel-group' id='accordion'><div class='panel panel-default'><div class='panel-heading'><h4 class='panel-title'><a data-toggle='collapse' data-parent='#accordion' href='#collapseOne'>
                    var s = " ";
                    for(var i=0;i<res.events.length;i++) {

                        var event = res.events[i];
//                        $.get('https://www.eventbriteapi.com/v3/venues/'+event.venue_id+'/?token='+token, function(item) {
//                            console.log(item.address.address_1);
//                            address = item.address.address_1;
//                        });

                        if(i===0){
                        s += "<div class='panel-group' id='accordion'><div class='panel panel-default'><div class='panel-heading'><h4 class='panel-title'><a data-toggle='collapse' data-parent='#accordion' href='#collapse" + i + "'>" + event.name.text + "</a> </h4></div><div id='collapse" + i + "' class='panel-collapse collapse in'><div class='panel-body'>" +
                        "<a href=" + event.url + " target='_blank'><img src =" + event.logo.url + "></a>" +
                        "<p>Capacity: " + event.capacity + "</p>" +
                        "<p>Start: " + new Date(event.start.utc) + "</p>" +
                        "<p>End: " + new Date(event.end.utc) + "</p>" +
                        "<button id='sbmt class='btn btn-success'>SS</Button></div></div>"
                        }
                        else{
                            s += "<div class='panel panel-default'><div class='panel-heading'><h4 class='panel-title'><a data-toggle='collapse' data-parent='#accordion' href='#collapse" + i + "'>" + event.name.text + "</a> </h4></div><div id='collapse" + i + "' class='panel-collapse collapse'><div class='panel-body'>"+
                                "<a href=" + event.url + " target='_blank'><img src =" + event.logo.url + "></a>" +
                                "<p>Capacity: " + event.capacity + "</p>" +
                                "<p>Start: " + new Date(event.start.utc) + "</p>" +
                                "<p>End: " + new Date(event.end.utc) + "</p></div></div></div>";
                        }
                    }
                    s += "</div>";

                    $events.html(s);
                } else {
                    $events.html("<p>Sorry, there are no upcoming events.</p>");
                }
            });
        }
   // }
    }
}

//Uselses random thing that was cool for one minute but quickly faded to why would I do this?
function saveData(){
    if((document.getElementById('address').checkValidity()) && (document.getElementById('date').checkValidity())){
        sessionStorage.setItem("address", (document.getElementById("address")).value);
        sessionStorage.setItem("date", (document.getElementById("date")).value);
        alert(sessionStorage.getItem("date"));
        storedAdd = sessionStorage.get("address");
        document.cookie = "address=" + storeAdd + ";";
        alert(document.cookie);
    }
    return true;
}

