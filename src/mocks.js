export const fusionMocks = [
    {
        id: 1,
        cost: 500,
        name: "Test Fusion",
        templates: [
            {
                id: "e0fdddb2-0e7e-4807-b198-56ef4dd13cdc",
                name: "Cpt. Kirorio",
                rarity: "common",
                setting: 'Baselard',
            },
            {
                id: 'unknown-template',
                rarity: 'common',
                setting: 'Baselard'
            }
        ]
    },
    {
        id: 2,
        name: "Unknown Fusion",
        cost: 5000,
        templates: [
            {
                id: 'unknown-template',
                rarity: 'rare',
                setting: 'TWINT'
            },
            {
                id: 'unknown-template',
                rarity: 'epic',
                setting: 'TWINT'
            },
            {
                id: 'unknown-template',
                rarity: 'epic',
                setting: 'TWINT'
            },
            {
                id: 'unknown-template',
                rarity: 'epic',
                setting: 'TWINT'
            }
        ]
    }
]

export const mockRoll = {
    name: "Ostara",
    templateId: "7ffe55fb-537f-471e-a107-32f619b2656d",
    ownerId: "0273b537-d4ec-4e41-84b9-bfed9104b21c",
    id: "98c821f1-9d21-4729-be03-69ef6ea3fc62",
    template: {
        name: "Ostara",
        rarity: "epic",
        description: "One of the dragons of Dragondelve. She is knwon as the Eternal Rejuvination. She's Endoskrier's sister and lives in her personal dimention called The Garden.",
        quote: "Please take your time and admire my magical realm.",
        setting: "Aether Storm",
        id: "7ffe55fb-537f-471e-a107-32f619b2656d"
    }
}
