const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    name: String,
    link: String,
});

const disciplineSchema = new mongoose.Schema({
    name: String,
    resources: [resourceSchema],
});

const multidisciplineSchema = new mongoose.Schema({
    resources: [resourceSchema],
});

const categorySchema = new mongoose.Schema({
    online: {
        discipline: [disciplineSchema],
        multidiscipline: [multidisciplineSchema],
    },
    offline: {
        discipline: [disciplineSchema],
        multidiscipline: [multidisciplineSchema],
    },
});

const ResourceModel = mongoose.model('ResourceModel', categorySchema);

module.exports = ResourceModel;
