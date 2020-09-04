const event = {
    name: 'Yuriy Fomin',
    guestList: ["Bogdan", "Lena", "Inna"],
    printGuestList() {
        console.log("Guest list for " + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + " is attending " + this.name+ " party")
        })
    }
}
event.printGuestList()