import React, {useState, useCallback} from 'react'
import Card from './Card'
import update from 'immutability-helper'
import config from "../../configs/config"
import Button from "react-bootstrap/Button";
import {notification} from 'antd';
import {Auth} from "aws-amplify";
import ChallengeDropdown from "./ChallengeDropdown";
import {Col, Row} from "react-bootstrap";

const style = {
  width: "80%",
}
const buttonStyle = {
  marginTop:"20px",
}
const Container = () => {
  {

    const [loaded, setLoaded] = useState(false)
    const [otherChallenges, setOtherChallenges] = useState([])
    const [cards, setCards] = useState([])
    if (!loaded) {
      setLoaded(true)
      fetch(
          config.BASE_URL + '/challenge')
      .then(res => res.json())
      .then((challenges) => {
        fetch(
            config.BASE_URL + '/homepage')
        .then(res => res.json())
        .then((data) => {
          let homepageItems = []
          let otherItems = []
          challenges.forEach(c => {
            if (data.Data.includes(c.ChallengeId)) {
              homepageItems = [...homepageItems, {
                text: c.Name + ' - ' + c.ChallengeId,
                ChallengeId: c.ChallengeId,
                ChallengeName: c.Name,
                id: data.Data.indexOf(c.ChallengeId)
              }]
            }
            else{
              otherItems = [...otherItems, {
                text: c.Name + ' - ' + c.ChallengeId,
                ChallengeId: c.ChallengeId,
                ChallengeName: c.Name,
                id: 0
              }]
            }
          })
          homepageItems.sort((a, b) => (a.id - b.id))
          setCards(homepageItems)
          setOtherChallenges(otherItems)
        })
      })
    }

    const submitChanges = () => {
      let newHomePage = cards.map(x => x.ChallengeId)
      console.log(newHomePage)
      Auth.currentSession({
        bypassCache: true
      }).then(user => {
        let url = config.BASE_URL + '/homepage'
        let method = "POST"
        fetch(url, {
          method: method,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user.getIdToken().getJwtToken()
          },
          body: JSON.stringify({"ChallengeIds": newHomePage}),
        }).then(res => {
              if (res.status !== 201) {
                notification.open({
                  type: 'error',
                  message: 'Something went wrong',
                  description: 'status' + res.status,
                  duration: 10
                });
                res.json()
                .then(response =>
                    notification.open({
                      type: 'error',
                      message: 'Something went wrong',
                      description: 'error' + response,
                      duration: 10
                    }))
                .catch(err => alert(err))
              }
              res.json()
              .then(response => {
                let message = 'Homepage updated'
                notification.open({
                  type: 'success',
                  message: message,
                  description: '',
                  duration: 10
                });
                console.log(response)
              })
              .catch(err => alert(err))
            }
        )
        .catch(error => alert(error));

      })
      .catch(err => {
        notification.open({
          type: 'error',
          message: 'Something went wrong',
          description: err,
          duration: 10
        });
      });

    }

    const moveCard = useCallback(
        (dragIndex, hoverIndex) => {
          console.log(dragIndex)
          const dragCard = cards[dragIndex]
          setCards(
              update(cards, {
                $splice: [
                  [dragIndex, 1],
                  [hoverIndex, 0, dragCard],
                ],
              }),
          )
        },
        [cards],
    )
    const deleteCard = useCallback(
        (dragIndex) => {
          const dragCard = cards[dragIndex]
          setCards(
              cards.filter((card) => card.id != dragIndex)
          )
        },
        [cards],
    )
    const renderCard = (card, index) => {
      return (
          <Card
              key={card.id}
              index={index}
              id={card.id}
              text={card.text}
              moveCard={moveCard}
              deleteCard={deleteCard}
          />
      )
    }
    const addChallenge = useCallback(
        (challenge) => {
          let newCard = challenge
          newCard.id = cards.length
          setCards([...cards, newCard])
          console.log(newCard)
          setOtherChallenges(otherChallenges.filter(c => c.ChallengeId !== challenge.ChallengeId))
        },
        [cards, otherChallenges],
    )
    return (
        <>
          <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
          <ChallengeDropdown
              challenges={otherChallenges}
              callback={addChallenge}
          />
          <div className="container">
          <Button style={buttonStyle} onClick={submitChanges}>Save Changes</Button>
          </div>

        </>
    )
  }
}
export default Container
