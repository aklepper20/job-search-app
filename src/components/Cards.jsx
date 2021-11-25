import { useState, useEffect } from 'react'
import React from 'react';
import styled from 'styled-components';


function Cards({ jobs }) {
console.log(jobs)
  return (
    <Container>

      <CardContainer>
          {jobs.map((job, index )=>{
            return <Card key={index}>
            <CardHeader>
              <Img src={job.logo}
                onClick={() => window.location.href=job.website}
                alt="Job Application Company Logo"></Img>
            </CardHeader>
            <Title>
              <TitleText>{job.roleName}</TitleText>
            </Title>
            <Subtitle>
              <SubTitleDesc>{job.requirements.description}</SubTitleDesc>
            </Subtitle>
            <ActionButtons>
              <ApplyButton onClick={() => window.location.href=job.applicationLink}>Apply Now</ApplyButton>
              <MessageButton>Message</MessageButton>
            </ActionButtons>
          </Card>
          })}

      </CardContainer>
    </Container>
  )
}

export default Cards;

const Container = styled.div`
  background-color: rgb(17, 18, 26);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 900px;
  height: 500px;
`
const Card = styled.div`
  background-color: rgb(28, 28, 36);
  margin-bottom: 30px;
  border-radius: 10px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const CardHeader = styled.div`
  margin-top: 20px;
  width: 250px;
  height: 60px;
`
const Img = styled.img`
  height: 50px;
  border-radius: 10px;
  cursor: pointer;
`
const Title = styled.div`
  width: 250px;
  height: 60px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`
const TitleText = styled.div`

`

const Subtitle = styled.div`
  width: 250px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SubTitleDesc = styled.div`
  color: white;
  height: 90px;
  font-size: 13px;
  margin: 7px;
`

const ActionButtons = styled.div`
  margin-top: 20px;
  width: 280px;
  height: 60px;
  display: flex;
  justify-content: space-around;
`
const ApplyButton = styled.button`
  width: 100px;
  height: 25px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`
const MessageButton = styled.button`
  width: 100px;
  height: 25px;
  background-color: orange;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`
