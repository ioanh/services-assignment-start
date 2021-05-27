export class CounterService{
    statusChanged(status: string, id: number){
        console.log(`The id: ${id} changed the status to: ${status}`)
    }

    activeToInactive: number = 0;
    inactiveToAvtive: number = 0;

    onSetActiveToInactive(){
        this.activeToInactive++;
        console.log(`Times set from active to inactive: ${this.activeToInactive}`);
    }
    onSetInactiveToActive(){
        this.inactiveToAvtive++;
        console.log(`Times set from inactive to active: ${this.inactiveToAvtive}`);
    }
}