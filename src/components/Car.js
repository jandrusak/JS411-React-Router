import React from 'react'
import { useParams } from 'react-router-dom'
import cars from '../cars.json'
// Import {useParams} from "react-router-dom" here //
// import { Card, CardContent, Typography } from '@mui/material'; // Import MUI components

// import MUI components here //
// Container, Paper, Chip //

const Car = (props) => {
    const { carId } = useParams();
    const car = cars.find(car => car.id === carId)

    return (
        <h1>A specific car</h1>
    )
}

export default Car