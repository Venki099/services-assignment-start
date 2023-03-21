export class CounterService{
    activetoInactivecounter = 0;
    inactivetoactivecounter = 0;

    incrementactivetoinactive(){
        this.activetoInactivecounter++;
        console.log("actoiac",this.activetoInactivecounter);
    };
    incrementinactivetoactive(){
        this.inactivetoactivecounter++;
        console.log("iactoac",this.inactivetoactivecounter);
    }
}