import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { calculatorStyle } from './StyleCalculator'

const Calculator = () => {
  const classes = calculatorStyle()
  return (
    <Stack>
      <Typography className={classes.checkingTypo}>
        Material UI Typography
      </Typography>
    </Stack>
  )
}

export default Calculator
