import React from 'react'

const getSeats = () => {

    const row = ['a', 'b', 'c', 'd', 'e', 'f']
    let seats = new Array(50).fill(row)



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
            {
                seats.map(row => row.map(seat => {
                    console.log(seat)
                    console.log(`seats[${seat.row}][${seat.col}]`);

                }))
            }
        </>
    )

}

export default Botones