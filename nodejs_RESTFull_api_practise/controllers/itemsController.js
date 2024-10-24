let items = []; // In-memory data store
let nextId = 1; // Simple ID counter

// Create (POST)
exports.createItem = (req, res) => {
    try {
        const {name,description,price}=req.body;
        let data={id:nextId++,
            name,
            desc:description,
            price
        }
        items.push(data)
        console.log(items)

        //  write logic to add to the array 



        res.status(201).json(data);
    } catch (error) {
        res.status(400).json({ message: 'Error creating item', error });
    }
};

// Read/View (GET)
exports.getItems = (req, res) => {
    try {
       res.status(200).json(items)

        // write logic to return all item



        
    } catch (error) {
        res.status(500).json({ message: 'Error fetching items', error });
    }
};

// Get by ID (GET)
exports.getItemById = (req, res) => {
    try {
        let id=req.params.id
        console.log(id)
        for(let i=0;i<items.length;i++){
            if(items[i].id==id){
                res.status(200).json(items[i]);
            }
        }


        
        // write items to find and return matched item

    } catch (error) {
        res.status(500).json({ message: 'Error fetching item', error });
    }
};

// Update (PUT)
exports.updateItem = (req, res) => {
    try {
        const {name,description,price}=req.body;
        let data={id:nextId++,
            name,
            desc:description,
            price
        }
        let id=req.params.id
        console.log(id)
        for(let i=0;i<items.length;i++){
            if(items[i].id==id){
                items[i]=data
                console.log(items[i])
                res.status(200).json(items[i]);
            }
        }


        // write content to update the items based on id

    } catch (error) {
        res.status(400).json({ message: 'Error updating item', error });
    }
};

// Delete (DELETE)
exports.deleteItem = (req, res) => {
    try {
        

        // write content to delete the item

        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting item', error });
    }
};
