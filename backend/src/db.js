// newUserConnect
// addUserToRoom
//   giveUserRoom
//   makeUserRoommate 
// applyforRoommate
// fetchFloorData
// -- DONE TILL HERE
// myRoomfn (roomno?, occupants?, applicants?)
    
         


const mongoose = require('mongoose');

const FLUSH_INTERVAL_MS = 60000;

const initDB = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    return mongoose;
}

const userSchema = new mongoose.Schema({
    _id: false,
    name: {
        type: String,
        required: true
    },
    rollno: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
});

const roomSchema = new mongoose.Schema({
    _id: false,
    floorno: {
        type: Number,
        required: true
    },
    roomno: {
        type: Number,
        required: true,
        unique: true,
        index: true
    },
    occupants: {
        type: [String], // rollno
        required: true,
        validate: (occs) => occs.length <= 2
    },
    applications: {
        type: [String], // rollno
        required: false,
    }
});

const User = mongoose.model('User', userSchema, 'users');
const Room = mongoose.model('Room', userSchema, 'rooms');

/*
// Add new user
const addUser = (name, rollno) => {
    return User.create({name, rollno}, (err, _user) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Created user ${name}, ${rollno}`);
        }
    });
};
*/

/** User connected, create if does not exist
 * @param {string} name
 * @param {string} rollno
 */
const newUserConnect = (name, rollno) => {
    return User.updateOne({ rollno }, { name, rollno }, { upsert: true }, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            console.log("New login:");
            console.log(`Name: ${user.name}`);
            console.log(`Rollno: ${user.rollno}`);
        }
    });
};


/**
 * @param {string} rollno
 * @param {Number} roomno
 */
const giveUserRoom = async (rollno, roomno) => {
    const room = await Room.findOne({ roomno }).exec();
    if (room.occupants.length != 0) {
        throw new Error("Sorry, this room is not empty.");
    } else {
        room.occupants.push(rollno);
        await room.save();
    }
};

/**
 * @param {string} occrollno
 * @param {string} approllno
 * @param {Number} roomno
 */
const makeUserRoommate = async (occrollno, roomno, approllno) => {
    
    const room = await Room.findOne({ roomno }).exec();
    if (room.occupants.length != 1) {
        throw new Error("Sorry this room is now full.");
    } else if (room.occupants[0] != occrollno) {
        throw new Error("Mind your own business.")
    }
    else {
        room.occupants.push(approllno);
        await room.save();
    }
}


/**
 * @param {string} rollno
 * @param {Number} roomno
 */
 const applyforRoommate = async (approllno, roomno) => {
    const room = await Room.findOne({ roomno }).exec();
    if (room.occupants.length != 1) {
        throw new Error("Sorry, this room is full.");
    } else {
    room.applications.push(approllno);
    await room.save();
    }

}



/** Return members of each room on each floor
 * @param {Number} floor
 */

const fetchFloorData = async(floorno) => {
    const roomDocs = await Room.find({ floorno }).exec();
    const roomrollnos = roomDocs.flatMap(room => room.occupants);
    const usersinfloors = await User.find({"rollno" : {"$in" : roomrollnos}}).exec()
    const rollnotoname = {}
    for (user in usersinfloors){
        rollnotoname[user.rollno] = user.name;
    }
    const floor = []
    for (roomdoc in roomDocs){
        const room = {};
        room.roomno = roomdoc.roomno;
        room.occupants = roomdoc.occupants.map(rollno => ({
            rollno : rollno,
            name : rollnotoname[rollno],
        }));
        floor.push(room);
    }
    return floor;
    
};

const myRoom = async(rollno) => {
    // TODO     
}

// TODO in future: in memory database

/*
 *  interface User {
 *      name: string,
 *      rollno: string,
 *  }
 *  interface DB {
 *      data: Vec<[User?, User?]>
 *  }
 */

export default {
    initDB
};
