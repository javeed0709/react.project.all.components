import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { experimentalStyled as styled } from '@mui/material/styles'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'start',
  color: theme.palette.text.secondary,
}))

interface TodoProps {
  id: number
  name: string
  amount: number
  tenure: number
  percentage: number
  interest: number | null
}

const PercentageCal = () => {
  const [todos, setTodos] = useState<TodoProps[]>([])
  const [name, setName] = useState<string>('')
  const [amount, setAmount] = useState<number | null>(null)
  const [tenure, setTenure] = useState<number | null>(null)
  const [percentage, setPercentage] = useState<number | null>(null)

  const addTodo = () => {
    if (name && amount !== null && tenure !== null && percentage !== null) {
      const newTodo = {
        id: todos.length + 1,
        name,
        amount,
        tenure,
        percentage,
        interest: (amount * tenure * (percentage / 100)) / 100,
      }

      setTodos([...todos, newTodo])
      setName('')
      setAmount(null)
      setTenure(null)
      setPercentage(null)
    }
  }

  const clearTodo = () => {
    setTodos([])
  }

  const handleEvent = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      addTodo()
    }
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1, justifyContent: 'flex-end' }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ sm: 8, md: 12 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Grid item xs={2} sm={4} md={4} mt={4}>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 350 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Contributor Name</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Tenure in Days</TableCell>
                    <TableCell align="right">Percentage</TableCell>
                    <TableCell align="right">Interest</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {todos.map((todo) => (
                    <TableRow
                      key={todo.id}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <TableCell align="center">{todo.name}</TableCell>
                      <TableCell align="center">
                        {todo.amount !== null
                          ? todo.amount.toLocaleString()
                          : ''}
                      </TableCell>
                      <TableCell align="center">{todo.tenure}</TableCell>
                      <TableCell align="center">{todo.percentage}</TableCell>
                      <TableCell align="center">
                        {todo.interest !== null
                          ? todo.interest.toLocaleString() // Format with commas
                          : ''}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={2} sm={4} md={4} display={'flex'}>
            <Item>
              <Stack direction={'column'} gap={2}>
                <TextField
                  type="text"
                  label="Contributor Name"
                  value={name}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  sx={{ width: 300 }}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  id="standard-number"
                  label="Amount"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  sx={{ width: 300 }}
                  value={amount !== null ? amount : ''}
                  onChange={(e) =>
                    setAmount(
                      e.target.value !== '' ? parseFloat(e.target.value) : null
                      //   e.target.value !== ''
                      //     ? parseFloat(e.target.value.replace(/,/g, ''))
                      //     : null
                    )
                  }
                />
                <TextField
                  id="standard-number"
                  label="Tenure"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  sx={{ width: 300 }}
                  value={tenure !== null ? tenure : ''}
                  onChange={(e) =>
                    setTenure(
                      e.target.value !== '' ? parseFloat(e.target.value) : null
                    )
                  }
                />
                <TextField
                  id="standard-number"
                  label="Interest %"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  sx={{ width: 300 }}
                  value={percentage !== null ? percentage : ''}
                  onChange={(e) =>
                    setPercentage(
                      e.target.value !== '' ? parseFloat(e.target.value) : null
                    )
                  }
                />

                <Button
                  onClick={addTodo}
                  sx={{ marginTop: '10px' }}
                  variant="contained"
                  onKeyDown={handleEvent}
                >
                  Validate
                </Button>
                <Button onClick={clearTodo} variant="contained">
                  CLEAR
                </Button>
              </Stack>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default PercentageCal

// import { useState } from 'react'
// import TextField from '@mui/material/TextField'
// import {
//   Box,
//   Button,
//   Grid,
//   Paper,
//   Stack,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Typography,
// } from '@mui/material'
// import { experimentalStyled as styled } from '@mui/material/styles'
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'start',
//   color: theme.palette.text.secondary,
// }))

// const PercentageCal = () => {
//   const [todos, setTodos] = useState<TodoProps[]>([])
//   const [name, setName] = useState<string>('')
//   const [amount, setAmount] = useState<number | null>(null)
//   const [tenure, setTenure] = useState<number | null>(null)
//   const [percentage, setPercentage] = useState<number | null>(null)
//   const [interest, setInterest] = useState<number | null>()

//   const addTodo = () => {
//     if (name && amount && tenure && percentage) {
//       setTodos([...todos, { name, amount, tenure, percentage }])
//       setName('')
//       setAmount(null)
//       setTenure(null)
//       setPercentage(null)
//     }
//     if (amount !== null && tenure !== null && percentage !== null) {
//       const interest = (amount * tenure * (percentage / 100)) / 100
//       setInterest(interest)
//     }
//   }

//   const clearTodo = () => {
//     setTodos([])
//   }

//   return (
//     <div>
//       <Box sx={{ flexGrow: 1, justifyContent: 'flex-end' }}>
//         <Grid
//           container
//           spacing={{ xs: 2, md: 3 }}
//           columns={{ sm: 8, md: 12 }}
//           style={{ display: 'flex', justifyContent: 'center' }}
//         >
//           <Grid item xs={2} sm={4} md={4} mt={4}>
//             <TableContainer component={Paper}>
//               <Table
//                 sx={{ minWidth: 350 }}
//                 size="small"
//                 aria-label="a dense table"
//               >
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Contributor Name</TableCell>
//                     <TableCell align="right">Amount</TableCell>
//                     <TableCell align="right">Tenure</TableCell>
//                     <TableCell align="right">Percentage</TableCell>
//                     <TableCell align="right">Interest</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {todos.map((todo, index) => (
//                     <TableRow
//                       key={index}
//                       sx={{
//                         '&:last-child td, &:last-child th': { border: 0 },
//                       }}
//                     >
//                       <TableCell align="center">{todo.name}</TableCell>
//                       <TableCell align="center">{todo.amount}</TableCell>
//                       <TableCell align="center">{todo.tenure}</TableCell>
//                       <TableCell align="center">{todo.percentage}</TableCell>
//                       <TableCell align="center">{interest}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </Grid>
//           <Grid item xs={2} sm={4} md={4} display={'flex'}>
//             <Item>
//               <Stack direction={'column'} gap={2}>
//                 <TextField
//                   type="text"
//                   label="Contributor Name"
//                   value={name}
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                   variant="outlined"
//                   sx={{ width: 300 }}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//                 <TextField
//                   id="standard-number"
//                   label="Amount"
//                   type="number"
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                   variant="outlined"
//                   sx={{ width: 300 }}
//                   value={amount !== null ? amount : ''}
//                   onChange={(e) =>
//                     setAmount(
//                       e.target.value !== '' ? parseFloat(e.target.value) : null
//                     )
//                   }
//                 />
//                 <TextField
//                   id="standard-number"
//                   label="Tenure"
//                   type="number"
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                   variant="outlined"
//                   sx={{ width: 300 }}
//                   value={tenure !== null ? tenure : ''}
//                   onChange={(e) =>
//                     setTenure(
//                       e.target.value !== '' ? parseFloat(e.target.value) : null
//                     )
//                   }
//                 />
//                 <TextField
//                   id="standard-number"
//                   label="Interest %"
//                   type="number"
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                   variant="outlined"
//                   sx={{ width: 300 }}
//                   value={percentage !== null ? percentage : ''}
//                   onChange={(e) =>
//                     setPercentage(
//                       e.target.value !== '' ? parseFloat(e.target.value) : null
//                     )
//                   }
//                 />

//                 <Button
//                   onClick={addTodo}
//                   sx={{ marginTop: '10px' }}
//                   variant="contained"
//                 >
//                   Validate
//                 </Button>
//                 <Button onClick={clearTodo} variant="contained">
//                   CLEAR
//                 </Button>
//               </Stack>
//             </Item>
//           </Grid>
//         </Grid>
//       </Box>
//     </div>
//   )
// }

// export default PercentageCal
