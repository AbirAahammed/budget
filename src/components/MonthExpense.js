import { Toolbar } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import { getAllExpense, updateExpense } from "../core/crud/ExpenseCrud";

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: 'Expense Name',
        width: 150,
        editable: true,
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 150,
        editable: true,
        
    },
    {
        field: 'category',
        headerName: 'Category',
        width: 150,
    },
    {
        field: 'timeOfPurchase',
        headerName: 'Time',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 200,
        // valueGetter: (params) =>
        //     `${params.row.timeOfPurchase}`,
    },

];

const rows = [
    {
        id: 1,
        name: "Rice",
        price: 20.4,
        timeOfPurchase: "2022-04-05 22:44:57.347 +00:00"
      }
];
function MonthExpense({setPageTitle}) {
    const [expenses, setExpenses] = useState([])
    const handleRowClick = (e) => {
        updateExpense(e)
        console.log(e)
    }
    const [isLoading, setLoading] = useState(true);
    setPageTitle("Monthly Expense")
    useEffect(() => {
        async function fetchData() {
            getAllExpense().then(data => {
                setExpenses(data)
                setLoading(false)
            })
        }
        if (isLoading) {
            fetchData()
        }
    });
         
    return (
        <div style={{ height: 400, width: '100%' }}>
            <Toolbar/>
            <DataGrid
                rows={expenses}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                onCellEditCommit = {handleRowClick}
            />
        </div>

    );
}



export default MonthExpense;