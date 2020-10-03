import React from "react";
import s from './MessageBubble.module.css'

type MessageBubbleType = {
  name: string
  avatar: string
  text: string
  date: string
  incoming: boolean
}

export function MessageBubble (props: MessageBubbleType) {
  return (
      <section>
        <div className={`${s['message-bubble']} ${props.incoming ? s['message-bubble--left'] : s['message-bubble--right']}`}>
          <div className={`${s['message-bubble__inner']}`}>
            <img src={props.avatar} alt="Avatar"/>
            <div>
              <h4>{props.name} <span>@ {props.date}</span></h4>
              <p>
                {props.text}
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}