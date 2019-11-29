Modal with title and text body
```js
class ModalWithTitleAndTextBody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalVisible: false
        };
        this.showModal = this.showModal.bind(this)
    }
    showModal() {
        console.log(this.state)
        this.setState({isModalVisible : true})
    }
    render() {
        return <div>
            <button onClick={this.showModal}>Open Modal</button>
            <Modal title="Modal Title" visible={this.state.isModalVisible}>Text</Modal>
        </div>
    }
}

<ModalWithTitleAndTextBody />
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