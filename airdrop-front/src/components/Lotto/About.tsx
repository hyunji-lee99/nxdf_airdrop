import React from 'react';
import styled from 'styled-components';
import './css/MainCenter/font.css';

const AboutDiv=styled.div`
  text-align:center;
  height:100%;
  widht:100%;
  padding-top: 60px;
  background-color:#453C70;
`
const Welcome=styled.h1`
  font-size:3em;
  font-weight:bold;
  display:inline;
  font-family:'neoneon';
  color:rgb(220, 52, 141);
  color: var(--color-override,rgb(244,134,193));
  text-shadow: 0 0 10px rgb(220, 52, 141), 0 0 10px #e6469b;
 
`
const TopDiv=styled.div`
  display:flex;
  justify-content:center;
  margin-top:40px;
  line-height:1.3;
`
const BottomDiv=styled.div`
  padding:90px 0;
`
const LottoInfoDiv=styled.div`
  color:white;
  font-size:1.5rem;
  font-weight:700;
  margin-right:25px;
`
const LottoInfoImg=styled.img`
  margin-top:15px;
`
const HowDiv=styled.div`
  margin-bottom:15px;
  color:white;
  font-size:1.5rem;
  font-weight:700;
`
const WhenDiv=styled.div`
  color:white;
  font-size:1.5rem;
  font-weight:700;
`
const Title=styled.h1`
  font-size:2em;
  font-weight:bold;
  font-family:'neoneon';
  color:rgb(220, 52, 141);
  color: var(--color-override,rgb(244,134,193));
  text-shadow: 0 0 10px rgb(220, 52, 141), 0 0 10px #e6469b;
  margin-bottom:10px;
`
const Numbering=styled.span`
  color:rgb(220,52,141);
  font-size:36px;
  font-weight:bold;
  margin-right:10px;
`
const Text=styled.p`
  color:white;
  font-size:25px;
  font-weight:bold;
  margin:20px 0;
`
const TextDiv=styled.div`
  margin-top:60px;
  text-align:left;
  display:flex;
`
const Img=styled.img`
  object-fit:contain;
  width:400px;
  margin-left:100px;
`

function About() {
  return (
    <AboutDiv id="About">
      <Welcome>WELCOMT TO NXDF LOTTO</Welcome>
      <div style={{width:'80%', margin:'0 auto'}}>
      <TopDiv>
        <LottoInfoDiv>
          <p>NXDF LOTTO is the premiere lottery of Solana. You can buy lotto tickets everyday for a price of 50￠. Every Monday, Saturday we will announce the winners of our lotto in a live draw.</p>
          <LottoInfoImg src='/img/img-lottoticket.png'></LottoInfoImg>
        </LottoInfoDiv>
        <div>
          <Title>How many lotto tickets can I buy?</Title>
          <HowDiv>Unlimited per person. Unfortunately, right now you need to mint one ticket at a time.</HowDiv>
          <Title>When will Lotto take place?</Title>
          <WhenDiv>You can buy lotto tickets every day, but winners will be picked only on Saturday at 2:00PM UTC. Example: you buy tickets on Monday and on Friday so your tickets will be valid on the Saturday's lotto.</WhenDiv>
        </div>
      </TopDiv>
      <BottomDiv>
        <Title>How will the lottery work?</Title>
        <TextDiv>
          <div>
          <Text><Numbering>1.</Numbering>Join NXDF Discord</Text>
          <Text><Numbering>2.</Numbering>Purchase lotto ticket(s) for 50￠</Text>
          <Text><Numbering>3.</Numbering>Wait until Saturday 2:00pm UTC the next lotto day</Text>
          <Text><Numbering>4.</Numbering>Watch the live winning ticket being picked in Discord</Text>
          <Text><Numbering>5.</Numbering>Wait for your prize to get sent to your wallet</Text>
          <Text><Numbering>6.</Numbering>Repeat</Text>
          </div>
          <Img src='/img/LottoImage.gif'></Img>
        </TextDiv>
      </BottomDiv>
      </div>
    </AboutDiv>
  );
}

export default About;