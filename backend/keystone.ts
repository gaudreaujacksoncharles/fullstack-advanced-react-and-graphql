import { createAuth } from '@keystone-next/auth'
import { User } from './schemas/User'
import { config, createSchema } from '@keystone-next/keystone/schema'
import { withItemData, statelessSessions } from '@keystone-next/keystone/session'
import 'dotenv/config'

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/fullstack-advanced-react-and-graphql-course'

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360,
    secret: process.env.COOKIE_SECRET
}

const { withAuth } = createAuth({
    listKey: 'User',
    identityField: 'email',
    secretField: 'password',
    initFirstItem: {
        fields: ['name', 'email', 'password'],
        // TODO: Add in initial roles here
    }
})

export default withAuth(config({
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
        User
    }),
    ui: {
        // Show the UI for people who pass this test
        isAccessAllowed: ({ session }) => {
            console.log(session)
            return !!session?.data
        },
    },
    session: withItemData(statelessSessions(sessionConfig), {
        User: `id`
    })
}))