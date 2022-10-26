// isso aqui é json puro
let etapas = [{
    titulo: 'VEREADOR',
    numeros: 5,
    candidatos: [
        {
            numero: 38111,
            nome: 'Fulano de Tal',
            partido: 'ABC',
            fotos: [{
                url: '38111.jpg',
                legenda: 'vereador'
            }]
        },
        {
            numero: 77222,
            nome: 'Beltrano da Silva',
            partido: 'DEFG',
            fotos: [{
                url: '77222.jpg',
                legenda: 'vereador'
            }]
        }
    ]
}, {
    titulo: 'PREFEITO',
    numeros: 2,
    candidatos: [
        {
            numero: 99,
            name: 'Ciclano',
            partido: 'ABC',
            vice: 'Cic',
            fotos: [
                { url: '99.jpg', legenda: 'Prefeito' },
                { url: '99_2.jpg', legenda: 'Vice-Prefeito', small: true }
            ]
        },
        {
            numero: 84,
            name: 'Zulano',
            partido: 'QUIE',
            vice: 'Zul',
            fotos: [
                { url: '84.jpg', legenda: 'Prefeito' },
                { url: '84_2.jpg', legenda: 'Vice-Prefeito', small: true }
            ]
        }
    ]
}];