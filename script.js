
document.addEventListener('keyup', e => {

    if(e.target.matches('#buscador')){

        document.querySelectorAll('.articulo').forEach(fruta => {
            fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?fruta.classList.remove("filtro")
            :fruta.classList.add("filtro")
        })
    }
    })