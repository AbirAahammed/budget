import { Button } from "@material-ui/core";
import DateFNSUtils from "@material-ui/lab/AdapterDateFns";
import DateTimePicker from "@material-ui/lab/DateTimePicker";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import { Grid, TextField } from "@mui/material";
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { createExpense, getAllCategory } from "../core/crud/ExpenseCrud";


export default function AddExpense({ setPageTitle }) {
    const [expense, setExpense] = useState();
    const [price, setPrice] = useState();
    const [time, setTime] = useState(new Date());
    const [category, setCategory] = useState();
    const [categories, setCategories] = useState([]);

    function handleClick(e) {
        e.preventDefault()
        createExpense({name:expense, price:price, timeOfPurchase:time, categoryId:category})
    }
    setPageTitle("Add Expense")

    useEffect(() => {
        async function fetchData() {
            getAllCategory().then(data => {
                console.log(data)
                setCategories(data)
            })
        }
        if (categories.length == 0) {
            fetchData()
        }
    });
    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Toolbar />
                <Box component="form" sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                onChange={(e)=> console.log("Form CHanged")}
                >

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <TextField id="expense" label="Expense" required
                                onChange={(e) => {
                                    console.log(e.target.value)
                                    setExpense(e.target.value);
                                }}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField id="price" label="Price" type="decimal" required
                                onChange={(e) => {
                                    console.log(e.target.value)
                                    setPrice(e.target.value);
                                }}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            {/* <Select
                                id="demo-simple-select"
                                label="Category"
                                onChange={(e) => console.log(e)}
                            >{categories.map((value, index) => (
                                <MenuItem value={index} name={index} >{value}</MenuItem>
                            ))}
                            </Select> */}
                            <TextField
                                id="category"
                                select
                                label="Category"
                                // onChange={handleChange}
                                helperText="Please select your currency"
                                required
                                onChange={(e) => {
                                    setCategory(e.target.value);
                                }}
                            >
                                {categories.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <LocalizationProvider dateAdapter={DateFNSUtils}>
                                <DateTimePicker
                                    value={time}
                                    onChange={(e) => {
                                        setTime(e.target.value);
                                    }}
                                    renderInput={(startProps) => (
                                        <React.Fragment>
                                            <TextField {...startProps} />
                                        </React.Fragment>
                                    )}
                                />
                            </LocalizationProvider>
                        </Grid>
                    </Grid>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{ margin: '60' }}
                        onClick={handleClick}
                    >
                        CREATE
                    </Button>
                </Box>
            </Container>
        </>
    )
}