import { useDispatch } from 'react-redux'
import { useCallback, useEffect } from 'react'

/**
 * Custom hook that checks if user has scrolled to the bottom of the page.
 * In this case this hook will dispatch an action that was passed to it as an argument.
 * 
 * @param {Function} cb Action creator that will be invoked when user scrolls to the bottom of the page
 */
const useScrollToTheBottom = (cb) => {
    const dispatch = useDispatch()
    const onScroll = useCallback(() => {
        const threshold = 800
        const bodyHeight = document.body.clientHeight
        const scrollPosition = window.scrollY + window.innerHeight
        if (bodyHeight - scrollPosition < threshold) {
            dispatch(cb())
        }
    })
    useEffect(() => {
        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])
}

export default useScrollToTheBottom