import DateFNSUtils from "@material-ui/lab/AdapterDateFns";
import DateTimePicker from "@material-ui/lab/DateTimePicker";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import { Grid, TextField } from "@mui/material";
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Box } from "@mui/system";
import React, { useState } from "react";
import MonthExpense from "./MonthExpense";




const categories = ['Food',
    'Gifts',
    'Health/medical',
    'Home',
    'Transportation',
    'Personal',
    'Pets',
    'Utilities',
    'Travel',
    'Debt',
    'Other',
    'Eat out',
    'Entertainment',
    'Grocery',
    'Auto Installment']
function Dashboard() {
    const [value, setValue] = useState(new Date());
    const [type, setType] = useState("");

    return (
        <div className="Dashboard">
            <h1>Dashboard</h1>
            <MonthExpense/>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Box component="form" sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}>

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <TextField label="Expense" required></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label="Price" type="number" required></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl size="medium">
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Category"
                                    onChange={(e) => console.log(e)}
                                >{categories.map((value, index) => (
                                    <MenuItem value={index} name={value} >{value}</MenuItem>
                                ))}

                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <LocalizationProvider dateAdapter={DateFNSUtils}>
                                <DateTimePicker
                                    value={value}
                                    onChange={(newValue) => {
                                        console.log(newValue.toUTCString());
                                        setValue(newValue);
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
                </Box>
            </Container>

        </div>
    );
}

export default Dashboard;