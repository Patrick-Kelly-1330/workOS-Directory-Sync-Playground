require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/models');
const { WorkOS } = require('@workos-inc/node');

const app = express();
const PORT = process.env.PORT | 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const workos = new WorkOS(process.env.WORKOS_API_KEY);
const clientID = process.env.WORKOS_CLIENT_ID;
// default WorkOS Organization - OneLogin
const organizationID = 'org_01H3JR0DKRZCV905W3CEBWPD18';
const redirectURI = 'http://localhost:8000/callback'
const state = ''

app.use(express.static(__dirname + '/../client/dist'));

app.get('/organizations', async (req, res) => {
  let list = await workos.organizations.listOrganizations();
  let organizations = list.data;
  res.send(organizations);
});

app.post('/newOrganization', async (req, res) => {
  const organization = await workos.organizations.createOrganization({
    name: req.body.name,
    domains: [req.body.domains]
  })
  res.send(organization.data);
})

app.post('/deleteOrganization', async (req, res) => {
  const organization = await workos.organizations.deleteOrganization(req.body.id)
  res.send('organization deleted');
})


app.get('/connections', async (req, res) => {
  let list = await workos.sso.listConnections({
    organization_id:  req.query.organization_id
  })
  res.send(list.data);
});


app.post('/admin-portal-link', async(req, res) => {
  try {
    const { link } = await workos.portal.generateLink({
      organization: req.body.orgId,
      intent: req.body.intent,
    });

    res.send(link);
  } catch (error) {
    res.send('error ', error);
  }
})

app.post('/createOrganization', (req, res) => {
  console.log('ID ', req.body.id);
  console.log('NAME ', req.body.name);
  db.newOrganization(req.body.id, req.body.name)
    .then(() => {
      res.send('organization created');
    })
    .catch((err) => {
      console.log('unable to process request, with error: ', err);
    });
})


app.get('/products/:productId/styles', (req, res) => {
  db.getRelated(req.params.productId)
    .then((relatedProducts) => {
      const r = JSON.stringify(relatedProducts[0].relatedProduct);
      res.end(r);
    })
    .catch((err) => {
      console.log('unable to process request, with error: ', err);
    });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
