//Manera de hacerlo sin fetch
const cards = [
    {
        "src": "./assets/img/portfolio/loading.png",
        "alt": "1",
        "demoLink": "",
        "codeLink": "",
        "title": "Proyecto 1",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        "src": "./assets/img/portfolio/loading.png",
        "alt": "2",
        "demoLink": "",
        "codeLink": "",
        "title": "Proyecto 2",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        "src": "./assets/img/portfolio/loading.png",
        "alt": "3",
        "demoLink": "",
        "codeLink": "",
        "title": "Proyecto 3",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    }
];

let container = document.getElementById('projects');

cards.map((card) => {
    container.innerHTML += `
    <div class="card-project">
        <img src="${card.src}" alt="${card.alt}">
                
        <div class="my-2 flex justify-between">
            <a href="${card.demoLink}" class="text-sm p-1 rounded bg-blue-500" target="_BLANK">
                Demo <i class="fa-solid fa-arrow-up-right-from-square fa-md"></i>
            </a>
            
            <a href="${card.codeLink}" class="text-sm p-1 ms-2 rounded bg-[#758173]" target="_BLANK">
                Code <i class="fa-brands fa-github fa-lg"></i>
            </a>
        </div>

        <div>
            <p class="text-md font-bold">
                ${card.title}
            </p>

            <p class="text-sm">
                ${card.description}
            </p>
        </div>
    </div>
    `;
});


/*
//Manera de hacerlo con fetch (da error de CORS)
const section = document.getElementById('projects');

function cargarJSONtarjetas() {
    fetch('cards.json')
        //Indicamos el formato en que se desea obtener la info
        .then(respuesta => respuesta.json())
        //Mostramos dicha info
        .then(cards => {
            cards.forEach(card => {
                const cardContainer = document.createElement('div');
                cardContainer.classList.add('card-project');
                cardContainer.innerHTML += `
                <img src="${card.src}" alt="${card.alt}">
            
                <div class="my-2 flex justify-between">
                    <a href="${card.demoLink}" class="text-sm p-1 rounded bg-blue-500" target="_BLANK">
                        Demo <i class="fa-solid fa-arrow-up-right-from-square fa-md"></i>
                    </a>
                    
                    <a href="${card.codeLink}" class="text-sm p-1 ms-2 rounded bg-[#758173]" target="_BLANK">
                        Code <i class="fa-brands fa-github fa-lg"></i>
                    </a>
                </div>

                <div>
                    <p class="text-md font-bold">
                        ${card.title}
                    </p>

                    <p class="text-sm">
                        ${card.description}
                    </p>
                </div>`;

                section.appendChild(cardContainer);
            });
        })
}
//Llamamos a la funcion
cargarJSONtarjetas();
*/