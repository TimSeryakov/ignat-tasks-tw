import React from "react";
import s from './Chat.module.css'
import fuji from '../../assets/img/fuji.png';
import koifish from '../../assets/img/koifish.png';
import luckycat from '../../assets/img/luckycat.png';
import lionstatue from '../../assets/img/lionstatue.png';
import { MessageBubble } from "../MessageBubble/MessageBubble";

export const Chat = () => {
  return (
      <section className={s.chat}>
        <MessageBubble incoming={true} name="Jack" avatar={fuji} date={"29.09.2020"}
                       text="(TypeScript) домашка от меня №1: создать проект и прислать архив мне или выложить на github и прислать мне ссылку: - любую домашку вы НЕ обязаны делать самостоятельно, если что-то не получается - пишем мне или на хэлп - учитывая что все домашки будут в 1 проекте - лучше сделать дополнительную компоненту в Аpp и внутри новой компоненты писать там код домашки"/>

        <MessageBubble incoming={false} name="Bob" avatar={koifish} date={"29.09.2020"}
                       text="создать компоненту, которая будет выводить текст,  стилизованно как в телеграмме (имя, текст, время, уголок (загуглить как или украсть с другого сайта/у друга)) - попрактикуйте пропсы!!! их типизацию и module.css"/>

        <MessageBubble incoming={true} name="John" avatar={lionstatue} date={"29.09.2020"}
                       text="нужно типизировать пропсы сразу, any - крайне нежелателен даже вначале, если не знаете как - пишем мне или на хэлп не заливать на гит папку .idea (в этой папке настройки вашего вэбшторма, которые никому не нужны, эту папку заливают эгоисты, которые не хотят работать в команде)"/>

        <MessageBubble incoming={false} name="Mary" avatar={luckycat} date={"29.09.2020"}
                       text="ну и Ctrl + Alt + L не забывайте нажимать чтоб красивый код был (это увеличивает скорость обучения и чтения кода и облегчает поиск ошибок и понимание что тут происходит) кто не знает гит - можете присылать мне архив проекта (!!! без папки node_modules и .idea !!!) пример того что должно получиться"/>
      </section>
  )
}