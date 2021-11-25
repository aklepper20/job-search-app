import { useState, useEffect } from 'react'
import styled from 'styled-components';
import Header from './components/Header';
import Cards from './components/Cards';
import './App.css';
import axios from 'axios'

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('https://cpbootcamp.proxy.beeceptor.com/devjobs')
      .then((res) => {
      let data = res.data;
      setJobs(data);
  })
}, []);

  return (
    <Container>
      <Header />

      <Cards jobs={jobs}/>
    </Container>
  )
};

export default App

const Container = styled.div`
  background-color: rgb(17, 18, 26);
  padding: 0;
  margin: 0;
`
