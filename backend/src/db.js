// newUserConnect
// addUserToRoom
//   giveUserRoom
//   makeUserRoommate -- DONE TILL HERE
// fetchFloorData

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
    }
});

const roomSchema = new mongoose.Schema({
    _id: false,
    floor: {
        type: Number,
        required: true
    },
    room: {
        type: Number,
        required: true,
        unique: true,
        index: true
    },
    occupants: {
        type: [String], // rollno
        required: true,
        validate: (occs) => occs.length <= 2
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
 * @param {Number} expectedMembers
 * @param {string} errorMsg
 */
const addUserToRoom = async (rollno, roomno, expectedMembers, errorMsg) => {
    const room = await Room.findOne({ rollno });
    if (room.occupants.length != expectedMembers) {
        throw new Error(errorMsg);
    } else {
        room.occupants.push(rollno);
        await room.save();
    }
};

/**
 * @param {string} rollno
 * @param {Number} roomno
 */
const giveUserRoom = (rollno, roomno) => {
    return addUserToRoom(rollno, roomno, 0, "Sorry, this room is not empty");
};

/**
 * @param {string} rollno
 * @param {Number} roomno
 */
const makeUserRoommate = (rollno, roomno) => {
    return addUserToRoom(rollno, roomno, 1, "Sorry this room is now full");
};

/** Return members of each room on each floor
 * @param {Number} floor
 */
const fetchFloorData = (floor) => {
    // TODO
    return Room.find({ floor });
};

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
