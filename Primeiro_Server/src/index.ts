import express from 'express'
import { listDrivers } from './drivers'
import { getGitHubUser } from './github/getGithubUser'
import { driversClassification } from './classification/classification'
import { getCircuitData } from './circuits/circuits'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World') 
})
app.get('/drivers', listDrivers)
app.get('/githubUser', getGitHubUser)
app.get('/driversClassification', driversClassification)
app.get('/circuits', getCircuitData)
app.listen(3000)
