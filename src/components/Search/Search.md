Search
```js
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import globalReducer from 'reducers/index'
const store = createStore(
    globalReducer
);
<Provider store={store}>
    <BrowserRouter>
        <div style={{filter: 'blur(0px)'}}>
            <Search />
        </div>
    </BrowserRouter>
</Provider>
```
