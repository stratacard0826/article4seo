<template>
    <div class="b_steps">
      <div class="container">

        <div class="_h3">process</div>
        <div class="_h4">How We Work</div>

        <div class="_all_steps">

          <div class="_steps">
            <div class="_circle -place"></div>
            <div class="_title">
              Place an order
            </div>
          </div>

          <div class="_steps">
            <div class="_circle -qualified"></div>
            <div class="_title">
              A qualified writer <br> is assigned
            </div>
          </div>

          <div class="_steps">
            <div class="_circle -preliminary"></div>
            <div class="_title">
              Preliminary research
            </div>
          </div>

          <div class="_steps">
            <div class="_circle -way"></div>
            <div class="_title">
              The write-up is on <br> the way
            </div>
          </div>

          <div class="_steps">
            <div class="_circle -scan"></div>
            <div class="_title">
              Plagiarism scan
            </div>
          </div>

          <div class="_steps">
            <div class="_circle -draft"></div>
            <div class="_title">
              The final draft <br> arrives
            </div>
          </div>

          <div class="_steps">
            <div class="_circle -arrives"></div>
            <div class="_title">
              The final draft arrives <br> (optional)
            </div>
          </div>

        </div>

      </div>
    </div>
</template>
<script>
export default {
  name: "",
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
.b_steps {
  padding: 80px 0 175px; }
  @media (max-width: 1199px) {
    .b_steps {
      padding: 30px 0; } }
  .b_steps ._h4 {
    margin: 0 0 145px; }
    @media (max-width: 1199px) {
      .b_steps ._h4 {
        margin: 0 0 110px; } }
    @media (max-width: 991px) {
      .b_steps ._h4 {
        margin: 0 0 30px; } }
  .b_steps ._all_steps {
    text-align: center; }
  .b_steps ._steps {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    margin: 0 18px 20px; }
    @media (max-width: 1199px) {
      .b_steps ._steps {
        margin: 0 25px 100px; } }
    .b_steps ._steps:nth-child(2n) ._circle:before {
      background: url("../../img/shape_circle_inverse.png") no-repeat; }
    .b_steps ._steps:nth-child(2n) ._title {
      top: auto;
      bottom: 100%;
      margin: 0 0 35px; }
      @media (max-width: 1199px) {
        .b_steps ._steps:nth-child(2n) ._title {
          margin: 0 0 18px;
          bottom: auto;
          top: 100%;
          margin: 18px 0 0; } }
    .b_steps ._steps:nth-child(2n):hover ._circle:before {
      -webkit-animation: spinr 4s linear infinite;
      -moz-animation: spinr 4s linear infinite;
      animation: spinr 4s linear infinite; }
    .b_steps ._steps:hover ._circle:before {
      -webkit-animation: spinrl 4s linear infinite;
      -moz-animation: spinl 4s linear infinite;
      animation: spinl 4s linear infinite; }
  .b_steps ._circle {
    box-shadow: 0 3px 10px rgba(249, 83, 25, 0.35);
    background-color: #ff6600;
    width: 119px;
    height: 119px;
    border-radius: 50%;
    position: relative;
    background-position: center;
    background-repeat: no-repeat; }
    .b_steps ._circle:before {
      position: absolute;
      transition: all .2s linear;
      z-index: -1;
      content: '';
      background: url("../../img/shape_circle.png") no-repeat;
      top: 50%;
      left: 50%;
      display: block;
      width: 149px;
      height: 148px;
      margin: -75px 0 0 -74px; }
@-moz-keyframes spinr {
  100% {
    -moz-transform: rotate(360deg); } }
@-webkit-keyframes spinr {
  100% {
    -webkit-transform: rotate(360deg); } }
@keyframes spinr {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg); } }
@-moz-keyframes spinl {
  100% {
    -moz-transform: rotate(-360deg); } }
@-webkit-keyframes spinl {
  100% {
    -webkit-transform: rotate(-360deg); } }
@keyframes spinl {
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg); } }
  .b_steps .-place {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='64' height='64' viewBox='0 0 64 64'%3E%3Cdefs%3E%3Cpath id='70v6a' d='M515.83 2903.83l-20 20a3.99 3.99 0 0 1-5.66 0l-36-36A4 4 0 0 1 453 2885v-20a4 4 0 0 1 4-4h20a4 4 0 0 1 2.2.67 18 18 0 0 1 22.15 22.04v-.02l14.48 14.48a4 4 0 0 1 0 5.66zm-34.87-40.53a16.03 16.03 0 0 0-12.83 17.6c.28.06.57.1.87.1.4 0 1.13-.18 1.13-.18s-.13-1.2-.13-1.82a13.95 13.95 0 0 1 10.33-13.5 13.84 13.84 0 0 1 3.67-.5 14 14 0 0 1 14 14c0 .38-.05.86-.09 1.25l.03.03 1.77 1.77a16 16 0 0 0-18.75-18.75zm-12.84 17.6c-.03-.01-.04-.01 0 0zm16.57-13.86l11.27 11.27a11.98 11.98 0 0 0-11.27-11.27zm-12.1 8.24c-.38 1.17-.59 2.42-.59 3.72 0 .2.02.39.03.58a3.93 3.93 0 0 0 .57-4.3zm-5.78-1.62a3.92 3.92 0 0 0-.77 5.97c-.02-.21-.04-.42-.04-.63a18 18 0 0 1 .8-5.34zM515 2901c0-.53-.2-1.04-.59-1.41l-32.4-32.41a12 12 0 0 0-8.45 5.92 6 6 0 1 1-5.72-1.99c1.7-3.48 4.5-6.33 7.94-8.11H457a2 2 0 0 0-2 2v20c0 .52.21 1.04.59 1.41l36 36a1.99 1.99 0 0 0 2.82 0l20-20c.38-.37.59-.88.59-1.41zm-11.88 2.12l-7.99 8a3.05 3.05 0 0 1-4.28.03 3.06 3.06 0 0 1 .04-4.29l7.99-7.98a3 3 0 0 1 4.24 4.24zm-1.41-2.83a1 1 0 0 0-1.42 0l-7.97 7.98c-.4.4-.44 1.07-.05 1.46.39.4 1.09.33 1.48-.06l7.96-7.96a1 1 0 0 0 0-1.42zm-6.59-5.17l-7.99 8a3.05 3.05 0 0 1-4.28.03 3.06 3.06 0 0 1 .05-4.29l7.98-7.98a3 3 0 0 1 4.24 4.24zm-1.41-2.82a1 1 0 0 0-1.42 0l-7.97 7.97c-.4.4-.44 1.08-.05 1.47.39.39 1.09.32 1.48-.07l7.96-7.96a1 1 0 0 0 0-1.41zm-6.59-5.18l-8 7.99a3.05 3.05 0 0 1-4.27.04 3.06 3.06 0 0 1 .04-4.29l7.99-7.98a3 3 0 0 1 4.24 4.24zm-1.42-2.83a1 1 0 0 0-1.41 0l-7.98 7.98c-.39.39-.44 1.07-.05 1.46.4.4 1.1.33 1.48-.06l7.96-7.96a1 1 0 0 0 0-1.42z'/%3E%3C/defs%3E%3Cg%3E%3Cg transform='translate%28-453 -2861%29'%3E%3Cuse fill='%23fff' xlink:href='%2370v6a'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); }
  .b_steps .-qualified {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='56' height='64' viewBox='0 0 56 64'%3E%3Cdefs%3E%3Cpath id='mfyja' d='M627 2886h34a1 1 0 1 1 0 2h-34a1 1 0 1 1 0-2zm35 13a1 1 0 0 1-1 1h-34a1 1 0 1 1 0-2h34a1 1 0 0 1 1 1zm0 6a1 1 0 0 1-1 1h-34a1 1 0 1 1 0-2h34a1 1 0 0 1 1 1zm0 6a1 1 0 0 1-1 1h-34a1 1 0 1 1 0-2h34a1 1 0 0 1 1 1zm0-18a1 1 0 0 1-1 1h-34a1 1 0 1 1 0-2h34a1 1 0 0 1 1 1zm-36-13a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2h-16a1 1 0 0 1-1-1zm46-4v45a4 4 0 0 1-4 4h-48a4 4 0 0 1-4-4v-56a4 4 0 0 1 4-4h37a1 1 0 0 1 .7.3l14 14a1 1 0 0 1 .3.7zm-14-1h10.59L658 2864.41zm12 2h-13a1 1 0 0 1-1-1v-13h-36a2 2 0 0 0-2 2v56c0 1.1.9 2 2 2h48a2 2 0 0 0 2-2z'/%3E%3C/defs%3E%3Cg%3E%3Cg transform='translate%28-616 -2861%29'%3E%3Cuse fill='%23fff' xlink:href='%23mfyja'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); }
  .b_steps .-preliminary {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='64' height='64' viewBox='0 0 64 64'%3E%3Cdefs%3E%3Cpath id='vsbna' d='M832.24 2923.24a6 6 0 0 1-8.48 0l-10.67-10.66a28 28 0 1 1 8.49-8.49l10.66 10.67a6 6 0 0 1 0 8.48zM824 2889a26 26 0 1 0-52 0 26 26 0 0 0 52 0zm6.83 27.17l-10.4-10.4a28.2 28.2 0 0 1-5.66 5.65l10.4 10.4a4 4 0 1 0 5.66-5.65zM822 2889a24 24 0 1 1-48 0 24 24 0 0 1 48 0zm-2 0a22 22 0 1 0-44 0 22 22 0 0 0 44 0zm-5 0a1 1 0 1 1-2 0 15 15 0 0 0-15-15 1 1 0 1 1 0-2 17 17 0 0 1 17 17z'/%3E%3C/defs%3E%3Cg%3E%3Cg transform='translate%28-770 -2861%29'%3E%3Cuse fill='%23fff' xlink:href='%23vsbna'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); }
  .b_steps .-way {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='64' height='64' viewBox='0 0 64 64'%3E%3Cdefs%3E%3Cpath id='4nr6a' d='M993.83 2879.14l-45.26 45.26c-.6.6-1.57.6-1.57.6h-9-5a2 2 0 0 1-2-2v-14s0-.97.6-1.57l45.26-45.26a4 4 0 0 1 5.65 0l11.32 11.31a4 4 0 0 1 0 5.66zM934 2923h1.58l-2.58-2.58v1.58a1 1 0 0 0 1 1zm13.14 0L933 2908.86v8.73l5.41 5.4zm39.6-39.6l-14.14-14.14-38.19 38.18 14.15 14.14 33.94-33.94-3.54-3.53-33.94 33.94-1.41-1.42 33.94-33.94-4.24-4.24-33.95 33.94-1.4-1.41 33.93-33.94-3.53-3.54 1.41-1.41 14.14 14.14zm5.67-8.5l-11.31-11.32a2 2 0 0 0-2.83 0l-4.26 4.26 14.14 14.15 4.26-4.26a2 2 0 0 0 0-2.83z'/%3E%3C/defs%3E%3Cg%3E%3Cg transform='translate%28-931 -2861%29'%3E%3Cuse fill='%23fff' xlink:href='%234nr6a'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); }
  .b_steps .-scan {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='56' height='59' viewBox='0 0 56 59'%3E%3Cdefs%3E%3Cpath id='u3c4a' d='M1118.82 2890.72c.11.4 2.8 9.9 2.05 31.31a1 1 0 0 1-1 .97h-.04a1 1 0 0 1-.97-1.04c.74-21.1-1.95-30.59-1.97-30.68a1 1 0 0 1 .68-1.24 1 1 0 0 1 1.25.68zm27.12 5.18a1 1 0 0 1-1 1.1 1 1 0 0 1-1-.9c-.39-3.9-1.27-10.99-2.91-14.84a25.12 25.12 0 0 0-23.18-15.26c-3.34 0-6.6.65-9.68 1.93a30.52 30.52 0 0 0-4.87 2.53c-.46.3-1.09.17-1.39-.29a1 1 0 0 1 .3-1.38 32.54 32.54 0 0 1 5.18-2.7 27.17 27.17 0 0 1 10.46-2.1 27.13 27.13 0 0 1 25.03 16.49c1.66 3.9 2.58 10.53 3.06 15.42zm-51.96 7.81a1 1 0 0 1-.96 1.29 1 1 0 0 1-.96-.72c-5.05-16.84.34-26.7 5.75-32 .4-.38 1.03-.38 1.42.02a1 1 0 0 1 0 1.41c-7.2 7.05-9.02 17.42-5.25 30zm44.2-18.65c2.22 6.5 2.24 17.28 1.98 26.97-.02.55-.5.96-1.04.97a1 1 0 0 1-.98-1.03c.27-9.51.25-20.07-1.87-26.27-2.45-7.17-10.56-13.43-17.72-13.69-2.77-.1-5.5.4-8.06 1.45a18.97 18.97 0 0 0-11.04 22.7c.3 1.08.62 2.24.8 3.44.38 2.6.4 6.94.4 14.4a1 1 0 0 1-1 1 1 1 0 0 1-1.01-1c0-7.15-.02-11.66-.38-14.1a25.32 25.32 0 0 0-.75-3.2 20.96 20.96 0 0 1 12.2-25.08 21 21 0 0 1 8.92-1.6c8.04.28 16.81 7.03 19.55 15.04zm-6.43.1c2.61 6.12 2.8 15.15 2.2 31.87a1 1 0 0 1-1 .97h-.04a1 1 0 0 1-.97-1.04c.57-16.07.4-25.28-2.04-31.03a13.06 13.06 0 0 0-14.85-7.63 1 1 0 1 1-.43-1.95 15.07 15.07 0 0 1 17.14 8.8zm-26.19 10.3c.09.3 2.14 7.73 2.14 19.54a1 1 0 0 1-1 1 1 1 0 0 1-1.01-1c0-11.54-2.05-18.93-2.07-19-1.83-6.74.42-13.68 5.6-17.3a1 1 0 0 1 1.4.24 1 1 0 0 1-.24 1.4c-4.5 3.13-6.43 9.21-4.82 15.12zm22.31 19.52c.04 1.75.09 3.74.04 5.05a1 1 0 0 1-1 .97h-.04a1 1 0 0 1-.97-1.03c.05-1.26 0-3.22-.04-4.94-.03-1.19-.05-2.29-.05-3.04a1 1 0 1 1 2.01.01c0 .74.03 1.82.05 2.98zm-2.6-27.1c2 4.72 2.6 13 2.74 19.1a1 1 0 0 1-.99 1.02h-.02a1 1 0 0 1-1-.98c-.14-5.93-.7-13.93-2.58-18.35a6.03 6.03 0 0 0-7.9-3.2c-2.93 1.21-4.34 4.54-3.28 7.74.92 2.8 1.5 16.08 1.5 26.79a1 1 0 0 1-1.01 1 1 1 0 0 1-1-1c0-11.9-.65-23.88-1.4-26.17-1.4-4.2.5-8.59 4.42-10.21a8.06 8.06 0 0 1 10.52 4.26z'/%3E%3C/defs%3E%3Cg%3E%3Cg transform='translate%28-1090 -2864%29'%3E%3Cuse fill='%23fff' xlink:href='%23u3c4a'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); }
  .b_steps .-draft {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='64' height='64' viewBox='0 0 64 64'%3E%3Cdefs%3E%3Cpath id='ttlza' d='M1269.7 2894.27a1 1 0 0 1-1.24.7l-14.47-4.14a1 1 0 0 1 .55-1.93l14.47 4.14a1 1 0 0 1 .69 1.23zm0 7a1 1 0 0 1-1.24.7l-14.47-4.14a1 1 0 0 1 .55-1.93l14.47 4.14a1 1 0 0 1 .69 1.23zm0-14a1 1 0 0 1-1.24.7l-14.47-4.14a1 1 0 0 1 .55-1.93l14.47 4.14a1 1 0 0 1 .69 1.23zm0-7a1 1 0 0 1-1.24.7l-14.47-4.14a1 1 0 0 1 .55-1.93l14.47 4.14a1 1 0 0 1 .69 1.23zm14.3 13.97a1 1 0 0 1 .69-1.24l14.47-4.13a1 1 0 0 1 .55 1.92l-14.47 4.13a1 1 0 0 1-1.24-.69zm16.7 2.35a1 1 0 0 1-.7 1.24l-14.46 4.13a1 1 0 0 1-.55-1.92l14.47-4.14a1 1 0 0 1 1.24.7zm0-14a1 1 0 0 1-.7 1.24l-14.46 4.13a1 1 0 0 1-.55-1.92l14.47-4.14a1 1 0 0 1 1.24.7zm0-7a1 1 0 0 1-.7 1.24l-14.46 4.13a1 1 0 0 1-.55-1.92l14.47-4.14a1 1 0 0 1 1.24.7zm8.3-12.6v50a2 2 0 0 1-1.48 1.94l-25.88 6.9a5 5 0 0 1-9.28 0l-25.88-6.9a2 2 0 0 1-1.48-1.93v-50a2 2 0 0 1 2.52-1.93l29.48 7.86 29.48-7.86a2.03 2.03 0 0 1 1.74.34 2 2 0 0 1 .78 1.59zm-32.52 51.94l-29.48-7.86v1.95l30 7.94 30-7.94v-1.95l-29.48 7.86a2 2 0 0 1-1.04 0zM1247 2905l29 7.73v-42l-29-7.73zm60 8v-1.9l-29.74 7.87a.98.98 0 0 1-.52 0l-29.74-7.88v1.9l25.03 6.68 2 .53a3 3 0 0 0 1.78 2.55l.67.18a2 2 0 0 0 1.04 0l.67-.18a3 3 0 0 0 1.79-2.55l1.99-.53zm0-8v-42l-29 7.73v42z'/%3E%3C/defs%3E%3Cg%3E%3Cg transform='translate%28-1245 -2861%29'%3E%3Cuse fill='%23fff' xlink:href='%23ttlza'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); }
  .b_steps .-arrives {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='64' height='64' viewBox='0 0 64 64'%3E%3Cdefs%3E%3Cpath id='5vs2a' d='M1449 2893a14 14 0 1 1-28 0 14 14 0 0 1 28 0zm-2 0a12 12 0 1 0-24 0 12 12 0 0 0 24 0zm-8 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-2 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0zm30-4v8a4 4 0 0 1-4 4h-5.37c-.28.8-.6 1.59-.97 2.35l3.8 3.8a4 4 0 0 1 0 5.65l-5.66 5.66a4 4 0 0 1-5.66 0l-3.8-3.8c-.75.36-1.54.68-2.34.97v5.37a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4v-5.37c-.8-.28-1.58-.6-2.34-.97l-3.8 3.8a4 4 0 0 1-5.66 0l-5.66-5.66a4 4 0 0 1 0-5.66l3.8-3.8c-.36-.75-.69-1.54-.97-2.34H1407a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4h5.37c.28-.8.6-1.59.97-2.35l-3.8-3.8a4 4 0 0 1 0-5.65l5.66-5.66a4 4 0 0 1 5.66 0l3.8 3.8c.75-.36 1.54-.69 2.34-.97V2865a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v5.37c.8.28 1.58.6 2.34.97l3.8-3.8a4 4 0 0 1 5.66 0l5.66 5.66a4 4 0 0 1 0 5.66l-3.8 3.8c.36.75.69 1.54.97 2.34h5.37a4 4 0 0 1 4 4zm-2 0a2 2 0 0 0-2-2h-6c-.88 0-1.04-.68-1.15-1.01a21.38 21.38 0 0 0-1.2-2.87c-.14-.29-.4-.9.35-1.64l4.04-4.04a2 2 0 0 0 0-2.83l-5.66-5.66a2 2 0 0 0-2.82 0l-4.03 4.03c-.85.85-1.43.47-1.74.32a20.41 20.41 0 0 0-2.9-1.2c-.3-.1-.89-.12-.89-1.1v-6a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v6c0 1-.71 1.05-1.06 1.17a21.47 21.47 0 0 0-2.8 1.16c-.29.15-.75.58-1.63-.3-.88-.9-4.07-4.07-4.07-4.07a2 2 0 0 0-2.83 0l-5.65 5.65a2 2 0 0 0 0 2.83l4.04 4.04c.8.81.44 1.45.27 1.78a20.34 20.34 0 0 0-1.12 2.73c-.11.33-.28 1.01-1.15 1.01h-6a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h6c.87 0 1.04.68 1.15 1a20.98 20.98 0 0 0 1.2 2.88c.14.29.4.9-.35 1.64l-4.04 4.04a2 2 0 0 0 0 2.83l5.66 5.65a2 2 0 0 0 2.82 0l4.03-4.02c.85-.85 1.43-.48 1.74-.32a20.82 20.82 0 0 0 2.9 1.2c.3.09.89.12.89 1.1v6c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-6c0-1 .71-1.05 1.06-1.17a20.98 20.98 0 0 0 2.8-1.16c.29-.15.75-.58 1.63.3l4.07 4.07a2 2 0 0 0 2.83 0l5.65-5.66a2 2 0 0 0 0-2.82l-4.04-4.05c-.8-.8-.44-1.44-.27-1.77a20.6 20.6 0 0 0 1.12-2.73c.11-.33.27-1.01 1.15-1.01h6a2 2 0 0 0 2-2z'/%3E%3C/defs%3E%3Cg%3E%3Cg transform='translate%28-1403 -2861%29'%3E%3Cuse fill='%23fff' xlink:href='%235vs2a'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); }
  .b_steps ._title {
    position: absolute;
    top: 100%;
    margin: 35px 0 0;
    font-size: 16px;
    font-weight: 300;
    white-space: nowrap;
    left: 50%;
    transform: translate(-50%, 0); }
    @media (max-width: 1199px) {
      .b_steps ._title {
        margin: 18px 0 0; } }

</style>
