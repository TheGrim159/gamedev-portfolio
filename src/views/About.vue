<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Andrew Bondurant</strong>, I am a graduate from the Georgia Institute of Technology with a BS in Computer Science and a Minor in History. I have a passion for Game Design and Programming.
        I love games because they <br/>
        I started working with games during my third year of college.
      </div>

      <div style="margin-top: 20px;">Check out the <router-link to="/game-projects">games</router-link> I have worked on and review my <router-link to="/resume">resume</router-link> as well.</div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> as a game designer. You can reach me at <a href="mailto:stdrew190@yahoo.com">stdrew190@yahoo.com</a> or through the <router-link to="/contact">contact me</router-link> page.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of John" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>