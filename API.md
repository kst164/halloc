# Login
 1. `POST /login` `{ token, rollno, name }`

# Selection Page
 1. `GET /stats`
 2. `C` creates socket
 3. `S -> C` starts buffered stats on socket

# Floor
 1. `GET /floor/${i}`
 2. `C -> S` `setFloor`
 3. `S -> C` starts instantaneous floor updates

# Reserve Room
 1. `POST /room/${i}/take` `{ token, rollno, name }`
   - error - already taken
   - success: `S -> C` broadcast to floor

# Apply as Roommate
 1. `POST /room/${i}/apply` `{ token, rollno, name }`

# Accept Roommate
 1. `POST /room/${i}/accept` `{ token1, rollno2, name2 }`
