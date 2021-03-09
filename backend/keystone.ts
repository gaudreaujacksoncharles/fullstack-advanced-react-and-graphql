import { config, createSchema } from '@keystone-next/keystone/schema'
import 'dotenv/config'

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/fullstack-advanced-react-and-graphql-course'

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360,
    secret: process.env.COOKIE_SECRET
}

export default config({
    server: {
        cors: {
            origin: [process.env.FRONTEND_URL],
            credentials: true
        },
    },
    db: {
        adapter: 'mongoose',
        url: databaseURL,
        // TODO: Add data seeding here
    },
    lists: createSchema({
        // Schema items go in here
    }),
    ui: {
        // TODO: Change this for roles
        isAccessAllowed: () => true,
    },
    // TODO: Add session values here
})