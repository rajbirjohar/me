import React, { useState } from 'react'
import styles from '@/styles/timeline.module.css'

import {
  HatIcon,
  CakeIcon,
  FireIcon,
  StarIcon,
  SadIcon,
  HappyIcon,
  BoltIcon,
  LocationIcon,
} from '@/components/icons/icons'
import { motion } from 'framer-motion'

const Divider = () => {
  return <hr />
}

const Year = ({ children }) => {
  return <h3>{children}</h3>
}

const Step = ({ title, children, icon }) => {
  return (
    <li className={styles.step}>
      <svg className={styles.icon}>{icon}</svg>
      <div className={styles.info}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.content}>{children}</p>
      </div>
    </li>
  )
}

const FullTimeline = () => (
  <div>
    <Divider />
    <Year>2019</Year>
    <ul className={styles.list}>
      <Step title="Started Web Development" icon={<StarIcon />}>
        Decided to become a professional pixel pusher.
      </Step>
      <Step title="Built First Portfolio" icon={<FireIcon />}>
        Oh boy was it ugly.
      </Step>
      <Step title="Joined Cutiehack" icon={<FireIcon />}>
        Introduced to web development and helped design, develop, and deploy the{' '}
        <a
          href="https://cutiehack.io"
          target="_blank"
          rel="noreferrer noopener"
        >
          Cutie Hack
        </a>{' '}
        hackathon website.
      </Step>
      <Step title="Built my First Keyboard" icon={<FireIcon />}>
        Tofu65 case, a DZ65 hotswap PCB, a handful of kailh box white switches,
        and a set of DSA keycaps just made me the most annoying typist in the
        room.
      </Step>
    </ul>
    <Divider />
    <Year>2018</Year>
    <ul className={styles.list}>
      <Step title="Wrote my First Line of Code" icon={<StarIcon />}>
        <code>cout &#60;&#60; &#34;Hello World!&#34;;</code>
      </Step>
      <Step
        title="Accepted to the University of California, Riverside"
        icon={<HatIcon />}
      >
        For Computer Science.
      </Step>
      <Step title="Graduated High School" icon={<HatIcon />}>
        Good bye soggy and cold high school lunches.
      </Step>
    </ul>
    <Divider />
    <Year>2017</Year>
    <ul className={styles.list}>
      <Step title="Built my First Computer" icon={<BoltIcon />}>
        Rookie mistake but I forgot to plug in the power button cables and
        freaked out when it would not turn on.
      </Step>
    </ul>
    <Divider />
    <Year>2015</Year>
    <ul className={styles.list}>
      <Step title="Jailbroke my iPhone" icon={<BoltIcon />}>
        And bricked it.
      </Step>
    </ul>
    <Divider />
    <Year>2012</Year>
    <ul className={styles.list}>
      <Step title="Gifted an Xbox 360" icon={<HappyIcon />}>
        So many good memories with friends on that solid console. I decided that{' '}
        <i>Assassin&#39;s Creed II</i> was my favorite game of all time. It
        still is.
      </Step>
      <Step title="Broke my PSP" icon={<SadIcon />}>
        Thought I was smart enough to undertake a full internal transplant of my
        playstation. Turns out I was missing this small tool called experience
        which led me to crack the screen.
      </Step>
    </ul>
    <Divider />
    <Year>2000</Year>
    <ul className={styles.list}>
      <Step title="Born" icon={<CakeIcon />}>
        Yes, haha.
      </Step>
    </ul>
  </div>
)

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false)

  return (
    <>
      <Year>2021</Year>
      <ul className={styles.list}>
        <Step title="Roadtrip to San Francisco" icon={<LocationIcon />}>
          Drove up north to visit a friend and experience the city.
        </Step>
        <Step title="Joined Prytaneum" icon={<StarIcon />}>
          A collaborative effort to build a unique platform for democratic talks
          a.k.a an online townhall that promotes democracy.
        </Step>
        <Step title="Director of Citrus Hack" icon={<FireIcon />}>
          Bringing <i>zesty</i> ideas to{' '}
          <a
            href="https://citrushack.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Citrus Hack
          </a>{' '}
          as a director.
        </Step>
        <Step title="Launched Auto Exposure" icon={<BoltIcon />}>
          As a final project for my web development class, my team developed and
          deployed{' '}
          <a
            href="https://auto-exposure.vercel.app"
            target="_blank"
            rel="noreferrer noopener"
          >
            Auto Exposure
          </a>
          . A social medium dedicated to car enthusiasts inspired by our
          collective appreciate for automotives.
        </Step>
        <Step title="Built my Fifth Keyboard" icon={<FireIcon />}>
          Hopefully my last. This one is a polycarbonate Think6.5 V2 with
          lubricated durock POM switches.
        </Step>
        <Step title="Roadtrip to Arizona" icon={<LocationIcon />}>
          Crossed the border from CA to AZ with good friends, trekked over a few
          mountains, and discovered decadent food not available locally.
        </Step>
        <Step title="Built my Fourth Keyboard" icon={<FireIcon />}>
          An e-white Vega 65 with gateron ink switches and a set of GMK Minimal.
          It&#39;s certainly a thocky boy. Also where I discovered the 7U
          layout.
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul className={styles.list}>
        <Step title="Web dev Lead" icon={<StarIcon />}>
          Spearheaded the development for the{' '}
          <a
            href="https://biohackucr.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Biohack
          </a>
          ,{' '}
          <a
            href="https://cutiehack.io"
            target="_blank"
            rel="noreferrer noopener"
          >
            Cutie Hack
          </a>
          , and{' '}
          <a
            href="https://citrushack.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Citrus Hack
          </a>{' '}
          websites. Let&#39;s just say I don&#39;t know when to stop.
        </Step>
        <Step title="Started Habitle" icon={<FireIcon />}>
          Because of my bad habits, I built a tool to promote good ones instead.
          It&#39;s super primitive but was good practice on building my own
          projects.
        </Step>
        <Step title="Online Classes" icon={<SadIcon />}>
          I am happy to announce I will be attending UC Zoom.
        </Step>
        <Step title="Joined Biohack" icon={<FireIcon />}>
          Part of the four-person team that helped design, develop, and deploy
          the Biohack hackathon website.
        </Step>
        <Step title="Built my Third Keyboard" icon={<FireIcon />}>
          A plum Iron165 from the first round of groupbuy, along with some
          lubricated novelkeys cream switches and a set of GMK Bingsu. I
          consider this one as my personal endgame board.
        </Step>
        <Step title="Built my Second Keyboard" icon={<FireIcon />}>
          A black Doro67 with gateron ink switches and GMK Oblivion.
        </Step>
      </ul>

      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <div className={styles.buttonwrapper}>
          <motion.button
            aria-label="Show Full Timeline"
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.995 }}
            transition={{ ease: 'easeInOut', duration: 0.015 }}
            className={styles.button}
            onClick={() => showFullTimeline(true)}
          >
            See More
            <svg
              className="h-4 w-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.button>
        </div>
      )}
    </>
  )
}
