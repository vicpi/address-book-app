Modal with title and text body
```js
import {useState} from 'react'

function ModalWithTitleAndTextBody() {
    const [isModalVisible, setModalVisible] = useState(false)
    const openModal = () => {
        setModalVisible(true)
    }
    const closeModal = () => {
        setModalVisible(false)
    }
    return <>
        <button onClick={openModal}>Open Modal</button>
        <Modal title="Modal Title" 
               visible={isModalVisible} 
               onClose={closeModal}
        >
            <span>Text</span>
        </Modal>
    </>
}

<ModalWithTitleAndTextBody />
```

Modal with title and arbitrary html
```js
import {useState} from 'react'

function ModalWithArbitraryHtml() {
    const [isModalVisible, setModalVisible] = useState(false)
    const openModal = () => {
        setModalVisible(true)
    }
    const closeModal = () => {
        setModalVisible(false)
    }
    return <>
        <button onClick={openModal}>Open Modal</button>
        <Modal title="Modal Title" 
               visible={isModalVisible} 
               onClose={closeModal}
        >
            <>
                <h4>Heading</h4>
                <div>
                    <a href="http://google.com">Link to Google.com</a>
                </div>
                <div>
                    <input type="text" placeholder="Text field" />
                </div>
            </>
        </Modal>
    </>
}

<ModalWithArbitraryHtml />
```