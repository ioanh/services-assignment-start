export class CounterService{
    statusChanged(status: string, id: number){
        console.log(`The id: ${id} changed the status to: ${status}`)
    }
}