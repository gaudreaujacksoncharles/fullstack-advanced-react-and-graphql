
import { text, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { rules, isSignedIn } from '../access';

export const Event = list({
    access: {
        create: isSignedIn,
        read: () => true,
        update: () => true,
        delete: () => true,
    },
    fields: {
        title: text({ isRequired: true }),
        description: text({
            ui: {
                displayMode: 'textarea',
            },
        }),
        user: relationship({
            ref: 'User.events',
            defaultValue: ({ context }) => ({
                connect: { id: context.session.itemId },
            }),
        }),
    },
});