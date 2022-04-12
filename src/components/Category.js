import { Button } from "@material-ui/core";
import { Grid, TextField } from "@mui/material";
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { Box } from "@mui/system";
import React, { useState } from "react";
import { createCategory } from "../core/crud/ExpenseCrud";




const currencies = [
    {
        value: 1,
        label: 'Food',
    },
    {
        value: 2,
        label: 'Grocery',
    },
    {
        value: 3,
        label: 'Eat out',
    },
    {
        value: 4,
        label: 'Entertainment',
    },
];


export default function Category({ setPageTitle }) {
    const [category, setCategory] = useState();
    const [description, setDescription] = useState();

    function handleClick(e) {
        e.preventDefault()
        console.log(category)
        console.log(description)
        createCategory({name:category, description:description})
    }
    setPageTitle("Category")
    return (
        <>

            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Toolbar />
                <Box component="form" sx={{
                    '& .MuiTextField-root': { m: 1 },
                }}
                    onChange={(e) => console.log("Form CHanged")}
                >

                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField id="name" label="Category" required
                                onChange={(e) => {
                                    setCategory(e.target.value);
                                }}></TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="description"
                                label="Description"
                                placeholder="Description"
                                multiline
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                }}
                            />
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