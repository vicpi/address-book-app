import { useDispatch } from 'react-redux'
import { useCallback, useEffect } from 'react'

export const useScrollToTheBottom = (cb) => {
    const dispatch = useDispatch()
    const onScroll = useCallback(() => {
        const threshold = 800
        const bodyHeight = document.body.offsetHeight
        const scrollPosition = window.visualViewport.pageTop + window.visualViewport.height
        if (bodyHeight - scrollPosition < threshold) {
            // load next batch of users
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