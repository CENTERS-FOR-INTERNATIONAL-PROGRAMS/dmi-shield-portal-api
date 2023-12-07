import * as dotenv from 'dotenv';
dotenv.config();

import Role from '../api/models/Role';
import User from '../api/models/User';
import Document503 from '../api/models/Document503';
import DocumentSari from '../api/models/DocumentSari';

const syncTables = () =>
    Promise.all([
        User.sync(),
        Role.sync(),
        Document503.sync(),
        DocumentSari.sync()
    ]);

syncTables()
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
    .finally(() => process.exit());