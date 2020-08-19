import React from "react"
import Background from "./Background"
import styled from "styled-components"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"

const Hero = ({ projects }) => {
  const images = projects.map(item => {
    const {
      data: {
        image: { localFiles },
      },
    } = item
    const image = localFiles[0].childImageSharp.fluid
    return image
  })
  // setup state variable
  const [index, setIndex] = React.useState(0)
  React.useEffect(() => {
    const lastIndex = images.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, images])

  return (
    <Wrapper>
      <Background image={images[index]}>
        <article>
          <h1>VELKOMMEN TIL HOTEL OVERLOOK ONLINE</h1>
        </article>
        <button className="prev-btn" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next-btn" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </Background>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  article {
    width: 85vw;
    max-width: 800px;
    color: white;
    text-align: center;
    h1 {
      font-weight: 500;
      font-size: 0.8rem;
      /* line-height: 1.25; */
      margin: 2.4rem 0 3rem 0;
      letter-spacing: 1px;
    }

    @media (min-width: 600px) {
      h1 {
        letter-spacing: 2px;
        font-size: 1.25rem;
        padding: 0.5rem 2.25rem;
      }
    }

    @media (min-width: 1024px) {
      h1 {
        letter-spacing: 5px;
        font-size: 1.5rem;
        padding: 0.5rem 1.25rem;
      }
    }
  }
  .next-btn,
  .prev-btn {
    outline: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2.5rem;
    background: transparent;
    color: white;
    border: transparent;
    cursor: pointer;
    /* transition: var(--transition); */
    @media (min-width: 800px) {
      & {
        font-size: 4.5rem;
      }
    }
  }
  .next-btn:hover,
  .prev-btn:hover {
    color: red;
  }
  .prev-btn {
    left: 0;
  }
  .next-btn {
    right: 0;
  }

  @media (min-width: 1000px) {
    .prev-btn {
      left: 3rem;
    }
    .next-btn {
      right: 3rem;
    }
  }
`

export default Hero
