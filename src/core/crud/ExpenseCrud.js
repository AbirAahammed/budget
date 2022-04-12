export async function getAllExpense() {
    return await fetch('http://localhost:3001/item/')
        .then(data => {
            return data.json()
        })
        .then(data => {
            return data.map((value, index) => ({ 
                id: value.id, 
                name: value.name, 
                price: value.price, 
                timeOfPurchase: value.timeOfPurchase, 
                cID: value.categoryId, 
                category: value['category.name'] }))
        })

}

export async function createExpense(expense) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(expense)
    };
    return await fetch('http://localhost:3001/item/', requestOptions)

}

export async function updateExpense(expense) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(expense)
    };
    return await fetch('http://localhost:3001/item/', requestOptions)

}

export async function getAllCategory() {
    return await fetch('http://localhost:3001/category/')
    .then(data=> {
        return data.json()
    })
    .then(data => {
        return data.map((value, index) => ({ 
            value: value.id, 
            label: value.name 
        }))
    })
    
}
export async function createCategory(category) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(category)
    };
    return await fetch('http://localhost:3001/category/', requestOptions)
}



