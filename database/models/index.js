const mongoose = require('mongoose');
const db = mongoose.connection;
mongoose.connect('mongodb://127.0.0.1:27017/organizations');

const organizationSchema = new mongoose.Schema({
    id: String,
    name: String,
});

const Organization = mongoose.model('organization', organizationSchema, 'organization');

module.exports = {
  newOrganization: (orgId, orgName) => {
    return Organization.create({
      id: orgId,
      name: orgName
    })
  },
  getOrganizations: () => Organization.find({})
}


db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

