let body = document.getElementById('root')

fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {
        for(var x=0; x < json.length;x++){
            let html = `
            <div class='all-coin'>
                <div class='coin-frist'>
                    <div class='img-coin'>
                        <img  src="./img/${json[x].img}">
                    </div>
                    <div>
                        <div class='title-coin'>
                            <p>${json[x].title}</p>
                        </div>
                        <div>
                            <p>${json[x].desc}</p>
                        </div>
                    </div>
                </div>

                <div class='coin-second special'>
                    <div class='img-coin'>
                        <img  src='./img/${json[x].descs[0].img}'>
                    </div>
                    <div>
                        <div>
                            <p>${json[x].descs[0].text}</p>
                        </div>
                    </div>
                </div>
                <div class='coin-second'>
                    <div class='img-coin'>
                        <img  src='./img/${json[x].descs[1].img}'>
                    </div>
                    <div>
                        <div>
                            <p>${json[x].descs[1].text}</p>
                        </div>
                    </div>
                </div>
                <div class='coin-second'>
                    <div class='img-coin'>
                        <img  src='./img/${json[x].descs[2].img}'>
                    </div>
                    <div>
                        <div>
                            <p>${json[x].descs[2].text}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
        
            root.innerHTML += html
        }
        
    });