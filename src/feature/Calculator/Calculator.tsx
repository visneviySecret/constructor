import { Inter } from 'next/font/google'
import React from 'react'
import Section from '@/Layout/Section'
import Toggler from '@/UI/Toggler/Toggler'
import Runtime from '@/components/Constructor/Constructor'
import Constructor from '@/components/Runtime/Runtime'
import { AppStatus } from '@/utils/types'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { selectStatusState, setStatusState } from '@/redux/slice'
import { useDispatch } from 'react-redux'
import { Container } from './Calculator.style'

const inter = Inter({ subsets: ['latin'] })

function Calculator() {
  const statusState = useSelector(selectStatusState)
  const dispatch = useDispatch()

  const handleClick = () => {
    const newStatus =
      statusState === AppStatus.runtime
        ? AppStatus.constructor
        : AppStatus.runtime
    dispatch(setStatusState(newStatus))
  }

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <title>Build your math</title>{' '}
        <meta
          property="og:title"
          content="Seafarers’ Salary Statistics in Maritime Industry"
        />
        <meta
          name="description"
          content="Create your best seafarer`s CV with Krew Guru. The easiest way to highlight yourself in a recruiter's inbox."
        />
        <meta property="og:site_name" content="Maritime Salary Statistics" />
      </Head>
      <main className={inter.className}>
        <Container>
          <Section toRightSide>
            <Toggler onClick={handleClick} />
          </Section>

          <Section>
            <Runtime />
            <Constructor />
          </Section>
        </Container>
      </main>
    </>
  )
}

export { Calculator }
