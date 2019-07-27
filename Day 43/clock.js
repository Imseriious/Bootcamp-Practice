const clockUpdate = (clock) => {
  let hoursDigits = document.querySelector('#digits-hours');
  let minutesDigits = document.querySelector('#digits-minutes');

  hoursDigits.innerHTML = clock.hours;
  minutesDigits.innerHTML = clock.minutes;
}

document.addEventListener('DOMContentLoaded', () => {
  let clock = {
    hours: 10,
    minutes: 25
  }

  clockUpdate(clock);
  
  let btnHoursUp = document.querySelector('#btn-hours-up');
  btnHoursUp.addEventListener('click', () => {
    clock.hours++;
    clockUpdate(clock);
  });
});