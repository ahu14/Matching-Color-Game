export default class EventListener{
    constructor(){
        this.events = {}
    }

    addEvent(name, fun){
        this.events[name] = fun;
    }

    emitEvent(name, ...data){
        let call = this.events[name];
        call(...data);
    }
}