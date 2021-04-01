import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'

const Dot = styled.div`
    background: var(--red);
    color:white;
    border-radius:100px;
    margin-left:.8rem;
    font-size:1.2rem;
    line-height:1.2rem;
    padding:4px;
    // this makes all the numbers the same width
    font-feature-settings: 'tnum';
    font-variant-numeric: tabular-nums;
`

const AnimationStyles = styled.span`
    position:relative;
    .count {
        display:block;
        position:relative;
        transition: transform 0.4s;
        backface-visibility: hidden;
    }
    .count-enter {
        transform: scale(4) rotateX(0.5turn);
    }
    .count-enter-active {
        transform: rotateX(0);
    }
    .count-exit {
        top:0;
        position:absolute;
        transform: rotateX(0);
    }
    .count-exit-active {
        background:pink;
        transform: scale(4) rotateX(0.5turn);
    }
`

function CartCount({ count }) {
    return (
        <AnimationStyles>
            <TransitionGroup>
                <CSSTransition
                unmountOnExit
                className="count"
                classNames="count"
                key={count}
                timeout={{ enter: 400, exit: 400 }}
            >
                    <Dot>{count}</Dot>
                </CSSTransition>
            </TransitionGroup>
        </AnimationStyles>
    )
}

export default CartCount