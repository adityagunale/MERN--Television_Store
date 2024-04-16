const mongoose = require('mongoose');


mongoose.connect('mongodb://0.0.0.0:27017/Television')
.then( () => {

    console.log('Great Connected to DB......:)')

}).catch( (error) => {

    console.log("Failed To Connect DB ", error);
})

