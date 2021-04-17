import 'dotenv/config'
import { relationship, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import { cloudinaryImage } from '@keystone-next/cloudinary'
import { isSignedIn, permissions } from '../access';

export const cloudinary = {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_KEY,
    apiSecret: process.env.CLOUDINARY_SECRET,
    folder: 'sickfits'
}

export const UserImage = list({
    access: {
        create: isSignedIn,
        read: () => true,
        update: () => true,
        delete: () => true,
    },
    fields: {
        image: cloudinaryImage({
            cloudinary,
            label: 'Source',
        }),
        altText: text(),
        user: relationship({ ref: 'User.photo' })
    },
    ui: {
        listView: {
            initialColumns: ['image', 'altText', 'user']
        }
    }
})