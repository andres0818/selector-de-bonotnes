import React from 'react'
import './Botones.scss'

const getSeats = () => {

    const row = ['a', 'b', 'c', 'd', 'e', 'f']
    let seats = new Array(10).fill(row)



    return seats.map((row, i) => {

        return row.map((letra, j) => {

            const seat = {
                name: letra + i,
                available: true,
                row: i,
                col: j
            }
            return seat

        })
    })
}

const Botones = () => {

    const seats = getSeats()

    return (
        <>
            <h1>Selecciona los asientos</h1>
            <div className='botones__caja'>
                <div className='botones__asientos'>
                    <h3>A</h3>
                    <h3>B</h3>
                    <h3>C</h3>
                    <h3>D</h3>
                    <h3>E</h3>
                    <h3>F</h3>
                </div>
                <div className='botones__salidaRapida'>
                    <h4 className='botones__titulo'>Salida rápida</h4>
                    <h4 className='botones__h4'>1</h4>
                    <h4 className='botones__h4'>2</h4>
                    <h4 className='botones__h4'>3</h4>
                    <h4 className='botones__h4'>4</h4>
                    <h4 className='botones__h4'>5</h4>
                </div>
                <div className='botones__estandar'>
                    <h4 className='botones__estandarTitulo'>Estándar</h4>
                    <h4 className='botones__h4'>6</h4>
                    <h4 className='botones__h4'>7</h4>
                    <h4 className='botones__h4'>8</h4>
                    <h4 className='botones__h4'>9</h4>
                    <h4 className='botones__h4'>10</h4>
                </div>
                <div className='botones'>

                    {
                        seats.map((row, i) => row.map(seat => {
                            console.log(seat)
                            console.log(`seats[${seat.row}][${seat.col}]`);
                            return (
                                <>
                                    <button className="botones__container" id={seat.name} >{seat.row}</button>
                                </>
                            )

                        }))
                    }
                </div>
            </div>
        </>
    )

}

export default Botones