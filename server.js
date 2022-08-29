const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 9001;

app.use(cors());

const aliens = {
    'humans': {
        'speciesName': 'Humans',
        'homeworld': 'Earth',
        'features': 'Rounded ears, hair on head and face (occasional)',
        'interestingFact': 'Founded the United Federation of Planets after first contact with the Vulcans',
        'notableExamples': 'James T. Kirk, Zephram Cochran, Abraham Lincoln',
        'image': 'https://static.wikia.nocookie.net/memoryalpha/images/4/44/Dixon_Hill.jpg'
    },
    'vulcans': {
        'speciesName': 'Vulcans',
        'homeworld': 'Vulcan',
        'features': 'Pointed ears, upward-curving eyebrows',
        'interestingFact': 'Practices an extreme form of emotional regulation that focuses on logic above all else, pioneered by a Vulcan named Surak.',
        'notableExamples': "Spock, T'Pol, Sarek",
        'image': 'https://static.wikia.nocookie.net/aliens/images/7/75/Vulcans-FirstContact.jpg'
    },
    'klingons': {
        'speciesName': 'Klingon',
        'homeworld': "Qo'noS",
        'features': 'Large stature, pronounced ridges on the forehead, stylized facial hair',
        'interestingFact': 'Highly skilled warriors. Their facial ridges were lost as a result of a virus in 2154, but were restored by 2269.',
        'notableExamples': "Spock, T'Pol, Sarek",
        'image': 'https://static.wikia.nocookie.net/aliens/images/7/74/Kruge.jpg'
    },
    'romulans': {
        'speciesName': 'Romulans',
        'homeworld': "Romulus",
        'features': 'Pointed ears, upward-curving eyebrows, green tinge to the skin, diagonal smooth forehead ridges (occasional)',
        'interestingFact': 'Shares a common ancestry with Vulcans, though none of the emotional discipline. Romulus has a sister planet, Remus, on which the Remans are seen as lesser beings.',
        'notableExamples': "Pardek, Tal'aura, Narissa",
        'image': 'https://static.wikia.nocookie.net/aliens/images/1/1d/Zzzd7.jpg'
    },
    'borg': {
        'speciesName': 'Borg (The)',
        'homeworld': "UNKNOWN",
        'features': 'pale skin, interior and exterior modifications',
        'interestingFact': 'No single genetic lineage. Propogates by assimilating individuals via nanotechnology. Led by a hive mind guided by a single queen-like individual. Starfleet Command forbids any contact unless under specific diplomatic orders.',
        'notableExamples': "Borg Queen, Seven of Nine, Locutus",
        'image': 'https://static.wikia.nocookie.net/aliens/images/7/76/Borg.jpg'
    },
    'gorn': {
        'speciesName': 'Gorn',
        'homeworld': "UNKNOWN",
        'features': 'scaly green skin, large iridescent eyes, possesses high physical strength, sharp teeth',
        'interestingFact': 'Militaristic society, possesses advanced scientific knowledge allowing for powerful bio-weapons.',
        'notableExamples': "Gorn Captain",
        'image': 'https://static.wikia.nocookie.net/aliens/images/9/9b/Gorn.jpg'
    },
    'trill': {
        'speciesName': 'Trill',
        'homeworld': "Trill",
        'features': 'Outward humanoid appearance with dark pigment marks running symetrically down both sides of face and body',
        'interestingFact': 'Some Trill are willing hosts to a long-lived invertibrate symbiote that merges with the host to create a distinct personality.',
        'notableExamples': "Jadzia Dax, Ezri Dax, Curzon Dax",
        'image': 'https://static.wikia.nocookie.net/aliens/images/4/42/EzriDax.jpg'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/api/:alienName', (req, res) => {
    const nameAlien = req.params.alienName.toLowerCase();
    if (aliens[nameAlien]) {
        res.json(aliens[nameAlien])
    } else {
        res.json(aliens['humans'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log('OK')
})