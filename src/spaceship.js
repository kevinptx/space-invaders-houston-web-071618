class Spaceship {
    constructor(name, crew, phasers, shields) {
        this.name = name;
        this.crew = crew;
        this.phasers = phasers;
        this.phasersCharge = 'uncharged';
        this.shields = shields;
        this.cloaked = false;
        this.warpDrive = "disengaged";
        crew.length ? this.docked = false : (this.docked = true);
        // this.crew.forEach(function (item) {
        //     item.currentShip = this
        // }.bind(this))
        this.assignCrew()
    }


    assignCrew() {
        this.crew.forEach(function (item) {
            item.currentShip = this
        }.bind(this))
    }
}
