Modal with title and text body
```js
(() => {
    let isModalVisible = false;
    const showModal = () => {
        console.log(isModalVisible)
        isModalVisible = true
        console.log(isModalVisible)
    }
    return <div>
        <button onClick={showModal}>Open Modal</button>
        <Modal title="Modal Title" visible={isModalVisible}>Text</Modal>
    </div>
})()
```

Modal with title and arbitrary html
```js
<Modal title="Modal Title">
    <div>
        <input type="text" placeholder="Please enter text here" />
    </div>
    <div>
        <a href="http://google.com/">Link to Google</a>
    </div>
</Modal>
```