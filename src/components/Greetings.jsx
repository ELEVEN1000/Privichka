const dayjs = require('dayjs');

const weekdays = ['пн','вт','ср','чт','пт','сб','вс'];
const data = dayjs().format('HH:mm')  + ', ' + weekdays[new Date().getDay() - 1];

function Greetings() {
  return (
    <section className={"greetings"}>
      <p className={"greetings__title"}>Добрый день, Билли!</p>
      <p className={"greetings__date"}>{data}</p>
    </section>
  )
}

export default Greetings;
