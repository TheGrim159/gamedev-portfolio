<template>
  <div>
    <h1>Resume</h1>
    <!--
    <div class="paragraph">
      
      I'm <strong>Andrew Bondurant</strong>, words about me.
      <br />this is a new line talk about experience.

    </div>
    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of John" />
    </div>
    <div style="clear:both"></div>
    -->
    
    <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/Resume.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
        <div style="clear:both"></div>
    </div>

    <h2>Skills</h2>

    <div class="skill-set">
      <SkillRate name="Unity" :rate="4" />
      <SkillRate name="C#" :rate="4" />
      <SkillRate name="Java" :rate="4" />
    </div>
    <div class="skill-set">
      <SkillRate name="Unreal" :rate="3" />
      <SkillRate name="C++" :rate="3" />
      <SkillRate name="Github" :rate="4" />
    </div>
    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>Internship at Aptar CSP Technologies Inc</h3>
      <h4>May 2021-August 2021</h4>

      <div>Reviewed training programs from other Aptar facilities and adapted them to fit the needs of CSP.</div>
      <div>Worked with the VP of CSP to present the program to Department heads and managerial staff.</div>
      <div>Researched, ordered and set up  25 tablets with the training program and other programs to acclimate new hires to their respective positions</div>

      <h3>Internship at CNI Consultants</h3>
      <h4>June 2019 - August 2019</h4>

      <div>Observed specialists remote into computers and setup and repair networks.</div>
      <div>Reset computers and installed all the programs the clients needed to have a functioning workstation.</div>

      <h3>Law Office of Maxine Wallace</h3>
      <h4>May 2018-August 2018</h4>

      <div>Created and implemented a more organized system for closed files.</div>
      <div>Organized all files and cases.</div>
      <!-- <div class="tech-stack"> Put software and coding lang</div> -->
      

      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Georgia Institute of Technology - Aug 2017 to Dec 2021</h3>
      <h4>Computer Science Degree with a Minor in History</h4>
      <div>With a concentration in media and people</div>
      
      <h2>Besides...</h2>
      <div>
        <h3>I ❤️ Games</h3>
        <div>Some of my favorite games are the Witcher 3, the Borderlands Series and the old Assassin Creeds</div>

        <h3>I 🧡 Music</h3>
        <div>I like hard rock, and japanese rock, and non-screamo/growling metal such as symphonic metal.</div>

        <h3>I 💛 Books</h3>
        <div>My favorite genres are fantasy and mythology.</div>

        <h3>I 💚 Cats</h3>
        <div>I have had cats my entire life and I have been volunteering for Classy Cats adoptions.</div>

      </div>
      
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
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
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>