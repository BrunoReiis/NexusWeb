export type CardConfig = typeof cardConfig;
import Bruno from '../public/cardsImgs/Bruno.jpeg'
import Cleitin from '../public/cardsImgs/Cleitin.png'
import MP from '../public/cardsImgs/Mp.jpeg'
import Ga from '../public/cardsImgs/Ga.jpg'
import Gato from '../public/cardsImgs/Gato.jpeg'
import Celeste from '../public/cardsImgs/Celeste.jpg'
import Silvas from '../public/cardsImgs/Silvas.png'

export const cardConfig = {
    cardsOwner:[
        {
            nome: 'Bruno Reis',
            discordName: 'BrunoReiis',
            cargo: 'Owner/Dev',
            img: Bruno.src,
        },
        {
            nome: 'Gabriel Silvério',
            discordName: 'Gaabs',
            cargo: 'Owner',
            img: Silvas.src,
        },
    ],
    cardsConselho:[
        {
            nome: 'Gabriel Nito',
            discordName: 'Cleitin',
            cargo: 'Conselho dos Anciões/Dev',
            img: Cleitin.src,
        },
        {
            nome: 'Maria Tenani',
            discordName: 'McDonalds',
            cargo: 'Conselho dos Anciões',
            img: MP.src,
        },
        {
            nome: 'Gabriel Souza',
            discordName: 'OK',
            cargo: 'Conselho dos Anciões',
            img: Ga.src,
        },
        {
            nome: 'Bruno Bertoni',
            discordName: 'Gato',
            cargo: 'Conselho dos Anciões',
            img: Gato.src,
        },
    ],
    cardCeleste:[
        {
            nome: 'Celeste',
            discordName: 'Celeste',
            cargo: 'NexusBot/Filha do BrunoReiis',
            img: Celeste.src,
        }
    ]
}