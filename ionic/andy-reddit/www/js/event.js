function EventTarget(){
    this.eventListeners = [];
    this.addEventListener = function(eventListener){
        this.eventListeners.push(eventListener);
    },
    this.fireEvent = function(event){
        this.eventListeners.forEach(function(listener){
            listener(event);
        });
    }
}

//var publisher = new EventTarget();
//publisher.addEventListener(function(event){
//    console.log("literatue: " + event);
//});
//publisher.addEventListener(function(event){
//    console.log("it "+event);
//});
//publisher.fireEvent("data");