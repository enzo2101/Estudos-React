const Events = () => {

    const handleEvent = (e) => {
        console.log(e);

        console.log('Ativou')
    }

    return (
        <div>
            <div>
                <button onClick={handleEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => {console.log('opaa')}}>Clique aqui também</button>
            </div>
        </div>
    )
}

export default Events