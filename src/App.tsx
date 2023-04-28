import React from 'react'
import { Typography, Button, FormGroup, FormLabel, Checkbox, FormControl, FormControlLabel, RadioGroup, Radio, Grid } from "@mui/material"

const QueryEngine = require('@comunica/query-sparql-link-traversal').QueryEngine;


const stores = [`https://pod.werbrouck.me/aecostore/store`]

const Store = (props) => {
  const [selectedStores, setSelectedStores] = React.useState(stores)
  const [configs, setConfigs] = React.useState([])
  const [selectedConfig, setSelectedConfig] = React.useState()
  const { setFeedUrl } = props

  React.useEffect(() => {
    if (configs.length) {
      setSelectedConfig(configs[0])
    }
  }, [configs])

  return (
    <div style={{textAlign: "justify", padding: 30, alignItems: "center", marginTop: "100px"}}>
          <Grid container spacing={2}>
      <Grid item xs={2}>
      </Grid>
      <Grid item xs={8}>
      <Typography variant="h1" style={{textAlign: "center", marginBottom: 30}}>MIFESTO</Typography>
      <Typography variant="h4" style={headerStyle}>What is Mifesto?</Typography>
      <Typography>The <a href="#">Micro Frontend Store (Mifesto)</a> is a framework to interact with heterogeneous collaborative projects. Its main use case is the built environment, but since the infrastructure is domain-agnostic, any discipline can adopt its main patterns. Mifesto is the GUI part of the patterns proposed in the <a href='https://www.semantic-web-journal.net/content/consolid-federated-ecosystem-heterogeneous-multi-stakeholder-projects-0'>ConSolid</a> ecosystem. Mifesto allows to combine federated interaction modules into a unified application (Figure 2). Modules can be set up to interact with heterogeneous resources such as geometry, imagery and point clouds. </Typography>
      
      <Image filename="microfrontends_configuration.png" description="Building an interface consisting of interacting microfrontends." index="2" width="80%"/>
      
      <Typography>Resources and their content are considered "representations" of abstract concepts, and are linked as such. The meaning of an abstract concept then comes from combining its federated representations. Hence, a user can select a geometric instance in a 3D viewer, which triggers the selection of the abstract concept, which can be further enriched by other modules by creating new representations. For example, adding imagery or semantics such as classification data, damage records, properties or history. This principle is demonstrated in Figure 2. To learn more about (federated) abstract concepts and their semantic enrichment, please read the paper available <a href='https://www.semantic-web-journal.net/content/consolid-federated-ecosystem-heterogeneous-multi-stakeholder-projects-0'>here</a>.</Typography>

      <Image filename="concept_aggregator_modules.png" description="Abstract concepts in the ConSolid ecosystem." index="2" width="50%"/>
      <Typography>There are other options for modules, too. For example, for authentication, to create projects, send messages between project partners or to validate project data against internal rules or external regulations. In fact, this welcome page itself is a module on its own, with its manifest published <a href='https://pod.werbrouck.me/aecostore/manifests/welcome'>here</a> and the code available  <a href='https://aecostore.github.io/welcome-page/index.js'>here</a>.

      Along with its loadable code, a module publishes a semantic manifest. Manifests, in turn, can be combined into Interface Configurations, which wire the modules needed to address a particular use case. Because Manifests and Interface Configurations are dereferenceable, they can be aggregated in decentral catalogs, which themselves can again be aggregated indefinitely. The active "Store" is then formed by reconstructing the complete tree of aggregated modules (Figure 2). </Typography>

      <Image filename="store_visualisation.png" description="An active store is the total aggregation of microfrontends and configurations nested in its branches." index="3" width="50%" />

      <Typography>In order to aggregate all modules into a single GUI, a Shell application is needed. This Shell application is able to allocate and interpret interface configurations and present a consistent graphical user interface to the end-user. In this demo implementation of the Shell application, we make use of the <a href="https://piral.io">Piral.io</a> framework, with minor modifications.</Typography>
    
    
    {/* <Typography variant="h4" style={headerStyle}>Get Started</Typography>
    <Typography>In this demo, a single store instance is created, which gives you the choice to load 2 configurations. Please select one or more Mifesto stores below, or add a new one. The Access Point of this store is <a href={stores[0]}>{stores[0]}</a>.</Typography>
      <Button fullWidth style={buttonStyle} variant="contained" onClick={queryStoresForConfigurations}>Find Modules</Button>
      {configs.length ? (
        <div>
          <div>
            <FormControl>
              <FormLabel>Configuration to load:</FormLabel>
              <RadioGroup value={selectedConfig} onChange={toggleRadio}>
                {configs.map(configUrl => {
                  return <FormControlLabel value={configUrl} control={<Radio />} key={configUrl} label={configUrl} />
                })}
              </RadioGroup>
            </FormControl>
          </div>
          <div>          
            <Button style={buttonStyle} variant="contained" fullWidth onClick={() => setFeedUrl(selectedConfig)}>Load Configuration</Button>
          </div>
        </div>
      ) : (
        <div></div>
      )} */}
      </Grid>
      <Grid item xs={2}>
      </Grid>
    </Grid>
    </div>
  )
}

const Image = ({filename, description, index, width}) => {
  return <div>
    <div style={{marginTop: 30, marginBottom:30, marginLeft: "auto", marginRight: "auto", alignItems: "center", justifyContent: "center", alignSelf: "center", display: "flex"}} >
    <img src={require(`../public/${filename}`).default} width={width} alt={filename} />
    </div>
  <hr/>
  <span style={{alignItems: "center", justifyContent: "center", marginBottom: 30}}>Figure {index}: {description}</span>
  <hr/>
  </div>
}

export default Store

const headerStyle = {marginTop: 30, marginBottom: 20}
const buttonStyle = {marginTop: 15, marginBottom: 15}