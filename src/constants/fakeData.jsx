export const fakeMessages = [
    'People say it\'s enough and I got my point across ... the point isn\'t across until we cross the point',
    '🌙',
    'Two years ago we had 50 million people subscribed to music streaming services around the world. Today we have 400 million.',
    '👾',
    'Just stop lying about shit. Just stop lying.',
    '🚀',
    'We as a people will heal. We will insure the well being of each other',
]

const date = new Date('14 March 2023 13:26');

export const fakeDate = date.toLocaleDateString().replace(/\//g, '.') + ' ' + date.toLocaleTimeString().slice(0, -3);
