class building {
    constructor(floor,square2,color,plot,building_high,
                people, flower,toilet,man,women,child,windows,door,computer,rooms) {
        this.floor = floor,
        this.square2 = square2
        this.color = color;
        this.plot = plot;
        this.building_high = building_high;
        this.people = people;
        this.flower = flower;
        this.toilet = toilet;
        this.man = man;
        this.women = women;
        this.child = child;
        this.windows = windows
        this.computer = computer;
        this.rooms = rooms;

    }
}

class school extends building  {
    constructor(floor,square2,color,plot,building_high,people,flower,toilet,man,women,child,windows,door,computer,rooms) {
        super(floor,square2,color,plot,building_high,people,flower,toilet,man,women,child,windows,door,computer,rooms);
    }
}

const school1  = new school(
    4,
    400,
    'brown',
    '0,3km square',
    40,
    450,
    200,
    3,
    200,
    200,
    50,
    195,
    70,
    80,
    65,

)
console.log(school1)

class home extends building{
    constructor(floor,square2,color,plot,building_high,people,flower,toilet,man,women,child,windows,door,computer,rooms) {
        super(floor,square2,color,plot,building_high,people,flower,toilet,man,women,child,windows,door,computer,rooms);
    }
}
const home1 =  new home(
    2,
    150,
    'white',
    '0,1km square',
    20,
    8,
    30,
    2,
    3,
    4,
    1,
    12,
    14,
    4,
    12
)
console.log(home1)